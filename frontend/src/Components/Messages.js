import React, { useEffect, useState } from "react";
import axios from "axios";
import Profile from "../assets/profile.png";
// import data from "../data/messages.json";

const Messages = (props) => {
  // const messages_data = data.messages.data;
  const [messages, setMesseges] = useState(null);
  const [usermessage, setUsermessage] = useState(null);
  const [lastmid, setLastmid] = useState(null);
  console.log(props.conversation);
  function formatDate(inputDate) {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };

    const date = new Date(inputDate);

    return date.toLocaleDateString("en-US", options);
  }

  useEffect(() => {
    //get The data from the server and store it in the messages state
    // setMesseges(messages);
    const getConversations = async () => {
      await axios
        .get(`https://rpassignment.onrender.com/api/messagesList`, {
          params: {
            userAccessToken: props.userAccessToken,
            conversationId: props.conversationId,
            // email: sessionStorage.getItem("email"),
          },
          withCredentials: true,
        })
        .then((response) => {
          console.log(response);
          console.log(response.data.data.messages.data);
          setMesseges(response.data.data.messages.data.reverse());
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getConversations();
  }, [props.conversationId]);

  if (messages) {
    const reloadIntervalId = setInterval(async () => {
      await axios
        .get(`https://rpassignment.onrender.com/updatedMSG`, {
          withCredentials: true,
        })
        .then((response) => {
          console.log(response);
          // console.log(response.data.data.messages.data);
          // setMesseges(response.data.data.messages.data.reverse());

          let oldformat = messages[0];
          let newformat;
          
          if ( lastmid!==response.data.message.mid ) {
            console.log(lastmid, response.data.message.mid)
            //append the latest message to the messages in the same formal by using the spread operator
            // setMesseges([...messages,response.data.data.messages.data[0]]);
            //function to get the current time in yyyy-mm-dd hh:mm:ss format
            //
            function getCurrentDateTime() {
              const now = new Date();
              const year = now.getFullYear();
              const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-based
              const day = String(now.getDate()).padStart(2, "0");
              const hours = String(now.getHours()).padStart(2, "0");
              const minutes = String(now.getMinutes()).padStart(2, "0");
              const seconds = String(now.getSeconds()).padStart(2, "0");

              const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
              return formattedDateTime;
            }

            // Usage:
            const currentDateTime = getCurrentDateTime();
            // console.log(currentDateTime);

            console.log("new message");
            newformat = {
              ...oldformat,
              from: {
                id: response.data.sender.id,
              },
              to: {
                id: response.data.recipient.id,
              },
              message: response.data.message.text,
              created_time: currentDateTime,
              id: response.data.message.mid,
            };
            setMesseges(messages.concat(newformat));
            setLastmid(response.data.message.mid);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }, 10000);
  }

  async function handleEnterKeyPress() {
    console.log("enter key pressed");
    await axios
      .get(`https://rpassignment.onrender.com/api/sendmessage`, {
        params: {
          userAccessToken: props.userAccessToken,
          userID: props.conversation.participants.data[0].id,
          message: usermessage,
          // email: sessionStorage.getItem("email"),
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        setUsermessage("");
        // console.log(response.data);
        // setConversationList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });

      await axios
        .get(`https://rpassignment.onrender.com/api/messagesList`, {
          params: {
            userAccessToken: props.userAccessToken,
            conversationId: props.conversationId,
            // email: sessionStorage.getItem("email"),
          },
          withCredentials: true,
        })
        .then((response) => {
          console.log(response);
          console.log(response.data.data.messages.data);
          setMesseges(response.data.data.messages.data.reverse());
        })
        .catch((error) => {
          console.log(error);
        });
  }

  if (!messages) return <div>Loading...</div>;

  return (
    <div className="flex flex-col h-screen">
      <div className="overflow-y-auto h-5/6">
        {messages.map((chat, i) => {
          return chat.from.id !== "132758756577463" ? (
            <div className="flex flex-col">
              <div className="flex">
                <img className="w-10 my-2" src={Profile} alt="" />
                <div className="bg-white my-2 mr-2 px-2 py-1 rounded-md ">
                  {chat.message}
                </div>
              </div>
              <p className="text-[12px] font-semibold ml-12">
                {formatDate(chat.created_time)}
              </p>
            </div>
          ) : (
            <div className="flex flex-row-reverse">
              <div className="flex flex-col">
                <div className="flex">
                  <div className="bg-white my-2 mr-2 px-2 py-1 rounded-md ">
                    {chat.message}
                  </div>
                  <img className="w-10 my-2" src={Profile} alt="" />
                </div>
                <span className="text-[12px] font-semibold ">
                  {formatDate(chat.created_time)}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center ">
        {/* useState for the chat exchange */}
        <input
          type="text"
          className=" p-2 mx-2 bg-white rounded-md outline outline-blue-600"
          placeholder="Message Hilten Saxena"
          value={usermessage}
          onChange={(e) => setUsermessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              // Call your function here
              handleEnterKeyPress();
            }
          }}
        />
      </div>
    </div>
  );
};

export default Messages;
