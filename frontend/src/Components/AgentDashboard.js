import "./AgentDashboard.css";
import Logo from "../assets/logo.png";
import User from "../assets/user.png";
import Conv from "../assets/conversation.png";
import Analytics from "../assets/graph.png";
import Menu from "../assets/menu.png";
import Reload from "../assets/reload.png";
import Profile from "../assets/profile.png";
import Call from "../assets/call.png";
import Profile1 from "../assets/profile1.png";
import Messages from "./Messages";

const AgentDashboard = () => {
 
  return (
    <div
      className="grid-container w-[100%] h-screen">
      <div className="item1 ">
        <div className="flex flex-col space-y-[380px] items-center">
          {/* section 1 sidebar */}
          <div className="">
            <img className=" rounded-md w-10 m-3" src={Logo} alt="1" />
            <img className="w-16" src={Conv} alt="" />
            <img className="w-16" src={User} alt="" />
            <img className="w-16" src={Analytics} alt="" />
          </div>
          <img className="w-16" src={Profile} alt="" />
        </div>
      </div>
      <div className="item2 bg-white">
        <div className="flex justify-between">
          <div className="flex">
            <img className="w-8 m-2" src={Menu} alt="" />
            <h2 className="mr-4 my-2 text-lg font-bold">Conversations</h2>
          </div>
          <img className="w-8 m-2" src={Reload} alt="R" />
        </div>
        {/* conversation sidebar */}
        <div>
          <div className="p-2 hover:bg-[#edeef0]">
            <div className="flex justify-between">
              <div className="flex">
                <input className="mx-2" type="checkbox" />
                <div className="flex flex-col">
                  <h1 className="font-bold">Amit RJ</h1>
                  <p className="text-sm text-gray-500/50">Facebook DM</p>
                </div>
              </div>
              <span className="mx-2">10m</span>
            </div>

            <p className="text-md mx-2">Awesome product</p>
            <p className="text-gray-500/50 text-sm mx-2">
              Lorem ipsum dolor sit,{" "}
            </p>
          </div>
        </div>
        <div>
          <div className="p-2 hover:bg-[#edeef0] border-2 border-x-[#ededed]">
            <div className="flex justify-between">
              <div className="flex">
                <input className="mx-2" type="checkbox" />
                <div className="flex flex-col">
                  <h1 className="font-bold">Hiten Saxena</h1>
                  <p className="text-sm text-gray-500/50">Facebook Post</p>
                </div>
              </div>
              <span className="mx-2">10m</span>
            </div>

            <p className="text-md mx-2">Available in store?</p>
            <p className="text-gray-500/50 text-sm mx-2">
              Lorem ipsum dolor sit,{" "}
            </p>
          </div>
        </div>
      </div>

      {/* chat section */}
      <div className="item3 bg-[#f6f6f6]">
        {/* heading */}
        <h1 className="text-xl font-bold bg-white px-4 py-2">Amit RG</h1>
        {/* chat feature */}
        <Messages/>
        <div className="flex justify-center items-center">
          {/* useState for the chat exchange */}
          <input
            type="text"
            className="absolute bottom-4 left-[30.5%] right-[23%] p-2 mx-2 bg-white rounded-md outline outline-blue-600"
            placeholder="Message Hilten Saxena"
          />
        </div>
      </div>
      {/* profile section */}
      <div className="item4 bg-[#eff2f7]">
        <div className="h-1/3 bg-white">
          <div className="flex flex-col justify-center items-center">
            <img className="w-[124px]" src={Profile} alt="profile" />
            <span className="font-bold">Amit RG</span>
            <p className="text-sm mb-2 text-gray-500/50">• Offline</p>
          </div>
          <div className="flex justify-center">
            <div className=" flex justify-center items-center rounded-md px-2 mr-2 bg-[#fefefe] border-2 border-gray-400">
              <img className="w-8 h-8" src={Call} alt="" />
              <p className="">Call</p>
            </div>
            <div className="flex justify-center items-center rounded-md px-2 ml-2 bg-[#fefefe] border-2 border-gray-400">
              <img className="w-8" src={Profile1} alt="" />
              <p>Profile</p>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white rounded-md m-3 p-3">
            <h1 className="font-bold">Customer Details</h1>
            <div className="flex justify-between">
              <p className="text-gray-500/50">Email</p>
              <p className="font-semibold">amit@richpanel.com</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-500/50">First Name</p>
              <p className="font-semibold">Amit</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-500/50">Last Name</p>
              <p className="font-semibold">RG</p>
            </div>
            <a href="#" className="font-semibold text-blue-500">
              View more details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentDashboard;
