import { Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";
import {
  HiArrowSmRight,
  HiDocumentText,
  HiUser,
  HiOutlineUserGroup,
  HiAnnotation,
  HiChartPie,
} from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import { signoutSuccess } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

export default function DashSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [tab, setTab] = useState("");
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFormUrl = urlParams.get("tab");

    if (tabFormUrl) {
      setTab(() => tabFormUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });

      const data = await res.json();

      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup className="flex flex-col gap-1">
          {currentUser.isAdmin && (
            <Sidebar.Item
              active={tab === "dash" || !tab}
              icon={HiChartPie}
              onClick={() => navigate("/dashboard?tab=dash")}
              className="cursor-pointer"
            >
              Dashboard
            </Sidebar.Item>
          )}
          <Sidebar.Item
            active={tab === "profile"}
            icon={HiUser}
            label={currentUser.isAdmin ? "Admin" : "User"}
            labelColor="dark"
            onClick={() => navigate("/dashboard?tab=profile")}
            className="cursor-pointer"
          >
            Profile
          </Sidebar.Item>
          {currentUser.isAdmin && (
            <>
              <Sidebar.Item
                onClick={() => navigate("/dashboard?tab=posts")}
                className="cursor-pointer"
                active={tab === "posts"}
                icon={HiDocumentText}
              >
                Posts
              </Sidebar.Item>
              <Sidebar.Item
                onClick={() => navigate("/dashboard?tab=users")}
                className="cursor-pointer"
                active={tab === "users"}
                icon={HiOutlineUserGroup}
              >
                Users
              </Sidebar.Item>
              <Sidebar.Item
                onClick={() => navigate("/dashboard?tab=comments")}
                className="cursor-pointer"
                active={tab === "comments"}
                icon={HiAnnotation}
              >
                Comments
              </Sidebar.Item>
            </>
          )}
          <Sidebar.Item
            onClick={handleSignout}
            icon={HiArrowSmRight}
            className="cursor-pointer"
          >
            Sign Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
