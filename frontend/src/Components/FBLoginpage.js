import React, { useEffect, useState } from "react";
import axios from "axios";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import {useNavigate} from "react-router-dom";


function FBLoginpage() {

  const navigate=useNavigate();

  const [conversationList, setConversationList] = useState([]);

  // conversationList[0]={
  //   name:goghog,
  //   email:jhohg,
  //   converstaion:ghohgohg,
  // }

  const responseFacebook = async (response) => {
    console.log(response);
    let pageID;
    let pageAccessToken;
    navigate("/agentdashboard", { state: response.data.accessToken });
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
