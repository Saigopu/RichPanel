import React, { useEffect,useState } from "react";
import axios from "axios";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";

function FBLoginpage() {
  const [conversationList,setConversationList]=useState([]);

  // conversationList[0]={
  //   name:goghog,
  //   email:jhohg,
  //   converstaion:ghohgohg,
  // }

  


  const responseFacebook = async (response) => {
    console.log(response);
    let pageID;
    let pageAccessToken;
    const meaccounts = await axios
      .get(
        "https://graph.facebook.com/v11.0/me/accounts?access_token=" +
          response.data.accessToken
      )
      .then((res) => {
        console.log(res);
        console.log(res.data.data[0].id);
        console.log(res.data.data[0].access_token);
        pageID = res.data.data[0].id;
        pageAccessToken = res.data.data[0].access_token;
      })
      .catch((err) => {
        console.log(err);
      });
    //me/accounts we get the list of details regarding all the pages. which will be having the page id which should be given to the me/conversations.
    let conversationid;
    const conversations = await axios
      .get(
        "https://graph.facebook.com/v11.0/me/conversations?access_token=" +
          pageAccessToken
      )
      .then((res) => {
        console.log(res);
        console.log(res.data.data[0].id);
        conversationid = res.data.data[0].id;
      })
      .catch((err) => {
        console.log(err);
      });
    //me/conversations we get the list of conversations which will be having the list of msgids which should be given to the me/messages.
      let msgidarray=[];
    const listofmsgids = await axios
      .get(
        "https://graph.facebook.com/v11.0/" +
          conversationid +
          "?fields=messages&access_token=" +
          pageAccessToken
      )
      .then((res) => {
        console.log(res);
        console.log(res.data.messages.data[0].id);
        console.log(res.data.messages.data);
        msgidarray=res.data.messages.data;
      })
      .catch((err) => {
        console.log(err);
      });

      const msgdetails=await axios
      .get(
        "https://graph.facebook.com/v11.0/" +
          msgidarray[0].id +
          "?fields=id,to,from,message&access_token=" +
          pageAccessToken
      )
      .then((res) => {
        console.log(res);
        console.log(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });

    // const listofmsgids=axios.get("https://graph.facebook.com/v11.0/me?fields=conversations&access_token="+response.data.accessToken)
  };

  return (
    <LoginSocialFacebook
      appId="1100452304254051"
      onResolve={(response) => {
        console.log(response);
        responseFacebook(response);
      }}
      onReject={(error) => {
        console.log(error);
      }}
    >
      <FacebookLoginButton />
    </LoginSocialFacebook>
  );
}

export default FBLoginpage;
