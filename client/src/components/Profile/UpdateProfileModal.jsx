import React, { useContext, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { ContextSource } from "../../contexts/AuthContext";
import axiosSource from "../Axios/axios";

const UpdateProfileModal = ({ setShowModal }) => {
  const { user, setMessage } = useContext(ContextSource);
  const [fullName, setFullName] = useState(user?.fullName);
  const [username, setUsername] = useState(user?.username);
  const [email, setEmail] = useState(user?.email);
  const [number, setNumber] = useState(user?.mobile);
  const [gender, setGender] = useState("");

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosSource
      .patch("/user/update", {
        fullName,
        username,
        email,
        mobile: number,
        gender,
      })
      .then((res) => {
        if (res.data.data) {
          setShowModal(false);
          setMessage(res.data.message);
        }
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };

  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-screen bg-[#0f0f0fa6] opacity-85" />
      <div className="absolute top-28 left-[23%] text-gray-800">
        <div className="flex justify-end mb-2">
          <IoCloseSharp
            className="text-white text-3xl cursor-pointer"
            onClick={() => setShowModal(false)}
          />
        </div>

        <div className="w-[600px] bg-white rounded-lg py-4 px-8">
          <h2 className="text-center text-2xl font-semibold mb-8">
            Update your profile Information
          </h2>

          <form onSubmit={handleSubmit} name="demo">
            <input
              className="w-full p-2 my-2 border border-gray-400 rounded-md placeholder:text-gray-700"
              type="text"
              placeholder="Enter your FullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              className="w-full p-2 my-2 border border-gray-400 rounded-md placeholder:text-gray-700"
              type="text"
              placeholder="Enter your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="w-full p-2 my-2 border border-gray-400 rounded-md placeholder:text-gray-700"
              type="text"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full p-2 my-2 border border-gray-400 rounded-md placeholder:text-gray-700"
              type="text"
              placeholder="Enter your Phone Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />

            <div>
              <label htmlFor="gender-select">Gender:</label>
              <div className="flex gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={handleGenderChange}
                />
                Male
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={handleGenderChange}
                />
                Female
                <input
                  type="radio"
                  name="gender"
                  value="Other"
                  checked={gender === "Other"}
                  onChange={handleGenderChange}
                />
                Other
              </div>
            </div>
            <div className="flex justify-end">
              <button className="w-24 text-white bg-secondary-color rounded-md p-2 text-[14px] font-semibold mt-6">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfileModal;
