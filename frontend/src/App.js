import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SignUPpage from "./Components/SignUPpage";
import LogINpage from "./Components/LogINpage";
import FBLoginpage from "./Components/FBLoginpage";
import AgentDashboard from "./Components/AgentDashboard";
import SignUp from "./Components/signUp";
import Login from "./Components/Login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/fblogin" element={<FBLoginpage />} />
        <Route path="/agentdashboard" element={<AgentDashboard />} />
        <Route path="*" element={<Login />} />
        {/* the below route is dynamic routing */}
        {/* <Route path="/problems/:problemID" render={(props) => <ProblemDetails {...props} onLogout={handleLogout}/>} /> */}
        {/* followed this blog https://blog.webdevsimplified.com/2022-07/react-router/ to solve the issue with the above dynamic route */}


        {/* <Route
          path="/problems/:problemID"
          element={<ProblemDetails onLogout={handleLogout} />}
        />
        <Route path="/colab" element={<Colab onLogout={handleLogout} />} /> */}


      </Routes>
    </BrowserRouter>
  );
}

export default App;
