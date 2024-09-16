import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useAuth } from "../../contexts/AuthContext";
import UpdateProfileModal from "./UpdateProfileModal";
import axios from "axios";
import { baseURL } from "../Axios/axios";

const Profile = () => {
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState(null);

  // upload image axios post method and using the multer in the backend
  // const handleFileUpload = async () => {
  //   const formData = new FormData();
  //   formData.append("image", file);

  //   await axios
  //     .patch(`${baseURL}/user/file-upload`, formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     })
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };

  // upload image axios patch method and using the multer in the backend
  const handleFileUpload = () => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("userId", user?.id);

    axios
      .patch(`${baseURL}/user/file-upload`, formData)
      .then((res) => console.log(res.data.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-section-color h-screen pt-20">
      <div className="flex gap-5 p-3 w-[750px] m-auto">
        <div className="w-[35%] flex items-center p-4 flex-col justify-between bg-white shadow-lg rounded-lg">
          <div className="w-32 p-1 h-32 border border-secondary-color rounded-full">
            <img
              className="w-full h-full object-cover rounded-full"
              src={user?.avatar}
              alt="user_avatar"
            />
          </div>

          <div className="flex items-center flex-col py-5 gap-3">
            <input
              type="file"
              name="avatar"
              onChange={(e) => setFile(e.target.files[0])}
              className="text-sm"
            />
            <button
              onClick={handleFileUpload}
              className="flex border border-gray-400 items-center gap-3 text-sm rounded-md p-2"
            >
              <span>Upload Photo</span>
              <IoCloudUploadOutline />
            </button>
          </div>

          <div>
            <button className="w-24 text-white bg-red-500 rounded-md p-2 text-[14px] font-semibold mr-3">
              Delete
            </button>
            <button
              className="w-24 text-white bg-secondary-color rounded-md p-2 text-[14px] font-semibold"
              onClick={() => setShowModal(true)}
            >
              Edit
            </button>
          </div>
        </div>

        <div className="w-[65%] bg-white rounded-lg shadow-lg p-4">
          <div className="flex items-center py-1">
            <div className="font-semibold text-[17px] w-36">Full Name</div>:
            <h3 className="pl-2 font-semibold">{user?.fullName}</h3>
          </div>
          <div className="flex items-center py-1">
            <div className="font-semibold text-[17px] w-36">Username</div>:
            <h3 className="pl-2 font-semibold">{user?.username}</h3>
          </div>
          <div className="flex items-center py-1">
            <div className="font-semibold text-[17px] w-36">Email</div>:
            <h3 className="pl-2 font-semibold">{user?.email}</h3>
          </div>
          <div className="flex items-center py-1">
            <div className="font-semibold text-[17px] w-36">Phone Number</div>:
            <h3 className="pl-2 font-semibold">{user?.mobile}</h3>
          </div>
          <div className="flex items-center py-1">
            <div className="font-semibold text-[17px] w-36">User Role</div>:
            <h3 className="pl-2 font-semibold">{user?.role}</h3>
          </div>
          <div className="flex items-center py-1">
            <div className="font-semibold text-[17px] w-36">Gender</div>:
            <h3 className="pl-2 font-semibold">Male</h3>
          </div>
        </div>
      </div>

      {showModal && <UpdateProfileModal setShowModal={setShowModal} />}
    </div>
  );
};

export default Profile;

/** image preview function **/
// const handler = (e) => {
//   const file = e.target.files;
//   console.log(file);

//   if (file) {
//     const url = Array.from(file).map((item) => URL.createObjectURL(item));
//     setShowImagePreview(url);
//   }
// };

// <div className="flex gap-5 mx-40 mt-5">
//         {showImagePreview?.map((data, i) => (
//           <img key={i} className="w-40" src={data} alt="showimagepreview" />
//         ))}
//       </div>
