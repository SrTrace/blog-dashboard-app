import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl roudnded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">What to learn more about React JS?</h2>
        <p className="text-gray-500 my-2">
          Check out some usefull resources with React projects
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://www.freecodecamp.org/news/master-react-by-building-25-projects/"
            target="_blank"
            rel="noopener noreferrer"
          >
            25 React projects
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1 flex justify-center">
        <img
          className="object-contain"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmpT6rscUaqC6IK1x48k9GU-Av3fgKo0lPgg&s"
        />
      </div>
    </div>
  );
}
