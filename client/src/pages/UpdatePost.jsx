import { Alert, Button, FileInput, Select, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// import {
//   getDownloadURL,
//   getStorage,
//   ref,
//   uploadBytesResumable,
// } from 'firebase/storage';
// import { app } from "../firebase";

export default function UpdatePost() {
  const [file, setFile] = useState(null);
  // const [imageUploadProgress, setImageUploadProgress] = useState(null);
  // const [imageUploadError, setImageUploadError] = useState(null);
  const [formData, setFormData] = useState({});
  const [inputData, setInputData] = useState({
    _id: "",
    title: "",
    category: "",
  }); // this is crutch for ReactQuill comp triggers rerender and data the inputs is lost
  const [publishError, setPublishError] = useState(null);
  const navigate = useNavigate();
  const { postId } = useParams();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/post/getposts?postId=${postId}`);
        const data = await res.json();

        if (!res.ok) {
          setPublishError(data.message);
          return;
        }

        setPublishError(null);
        setFormData(data.posts[0]);
        const { _id, title, category } = data.posts[0];
        setInputData({ _id, title, category });
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchPost();
  }, [postId]);

  const handleUploadImage = async () => {
    console.log(
      `Uploading functionality is testing now...${file.name} not uploaded`,
      file
    );
    setFile(null);
    setFormData({ ...formData, image: "./src/assets/image.jpg" });
    //   try {
    //     if (!file) {
    //       setImageUploadError("Please select an image");
    //       return;
    //     }

    //     setImageUploadError(null);

    //     const storage = getStorage(app);
    //     const fileName = new Date().getTime() + "-" + file.name;
    //     const storageRef = ref(storage, fileName);
    //     const uploadTask = uploadBytesResumable(storageRef, file);

    //     uploadTask.on(
    //       "state_changed",
    //       (snapshot) => {
    //         const progress =
    //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //         setImageUploadProgress(progress.toFixed(0));
    //       },
    //       (error) => {
    //         setImageUploadError("Image upload failed");
    //         setImageUploadProgress(null);
    //       },
    //       () => {
    //         getDownloadURL(uploadTask.shapshot.ref).then((downloadURL) => {
    //           setImageUploadProgress(null);
    //           setImageUploadError(null);
    //           setFormData({ ...formData, image: downloadURL });
    //         });
    //       }
    //     );
    //   } catch (error) {
    //     setImageUploadError("Image upload failed");
    //     setImageUploadProgress(null);
    //     console.log(error);
    //   }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `/api/post/updatepost/${inputData._id}/${currentUser._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, ...inputData }),
        }
      );
      const data = await res.json();

      if (!res.ok) {
        setPublishError(data.message);
        return;
      }
      if (res.ok) {
        setPublishError(null);
        navigate(`/post/${data.slug}`);
      }
    } catch (error) {
      setPublishError(`Something went wrong, ${error}`);
    }
  };

  return (
    <div className="p-3 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-7 font-semibold">Update a post</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <TextInput
            className="flex-1"
            type="text"
            placeholder="Title"
            required
            id="title"
            value={inputData.title}
            onChange={(e) =>
              setInputData({ ...inputData, title: e.target.value })
            }
          />
          <Select
            onChange={(e) =>
              setFormData({ ...inputData, category: e.target.value })
            }
            value={inputData.category}
          >
            <option value="uncategorized">Select a category</option>
            <option value="javascript">JavaScript</option>
            <option value="reactjs">React.js</option>
            <option value="nodejs">NodeJs</option>
          </Select>
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <FileInput
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button
            type="button"
            gradientDuoTone="purpleToBlue"
            size="sm"
            outline
            onClick={handleUploadImage}
          >
            Upload image
          </Button>
        </div>
        {formData.image && (
          <img
            src={formData.image}
            alt="upload"
            className="w-full h-72 object-cover"
          />
        )}
        <ReactQuill
          theme="snow"
          value={formData.content}
          placeholder="Text something..."
          className="h-72 mb-12"
          required
          onChange={(value) => {
            setFormData({ ...formData, content: value });
          }}
        />
        <Button type="submit" gradientDuoTone="purpleToPink">
          Update post
        </Button>
        {publishError && (
          <Alert className="mt-5" color="failure">
            {publishError}
          </Alert>
        )}
      </form>
    </div>
  );
}
