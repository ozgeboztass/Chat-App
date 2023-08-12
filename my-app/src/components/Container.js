import React from "react";
import ChatForm from "./ChatForm";
import ChatList from "./ChatList";
import App from "../App.css";

function Container() {
  return (
    <div className="App">
      <ChatList></ChatList>
      <ChatForm></ChatForm>
    </div>
  );
}

export default Container;
