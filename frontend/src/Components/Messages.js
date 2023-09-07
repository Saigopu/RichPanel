import React from "react";
import Profile from "../assets/profile.png";

const Messages = () => {
  const userChats = [
    {
      profilePicture: { Profile },
      userMessage: ["is it in stock right now?"],
      timeStamp: "Amit RG- Mar 05,2:22 AM",
    },
    {
      profilePicture: { Profile },
      userMessage: [
        "We've 3 left in stock!",
        "If you order before 8PM we can ship it today.",
      ],
      timeStamp: "Amit RG- Mar 05,2:22 AM",
    },
  ];
  return userChats.map((chat, i) => {
    return i % 2 === 0 ? (
      <div className="flex flex-col">
        <div className="flex">
          <img className="w-10 my-2" src={Profile} alt="" />
          <div className="bg-white my-2 mr-2 px-2 py-1 rounded-md ">
            {chat.userMessage[0]}
          </div>
        </div>
        <p className="text-[12px] font-semibold ml-12">{chat.timeStamp}</p>
      </div>
    ) : (
        <div className="flex flex-row-reverse">
        <div className="">
          <div className="bg-white my-2 mr-2 px-2 py-1 rounded-md ">
            {chat.userMessage[0]}
          </div>
          <div className="flex">
            <div className="bg-white my-2 mr-2 px-2 py-1 rounded-md ">
              {chat.userMessage[1]}
            </div>
            <img className="w-10 my-2" src={Profile} alt="" />
          </div>
            <p className="text-[12px] font-semibold ml-[50%]">{chat.timeStamp}</p>
        </div>
      </div>
    );
  });
};

export default Messages;
