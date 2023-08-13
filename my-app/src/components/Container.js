import { useEffect } from "react";
import ChatForm from "./ChatForm";
import ChatList from "./ChatList";
import App from "../App.css";

import { init } from "../socketApi";

function Container() {
  useEffect(() => {
    init();
  }, []);
  return (
    <div className="App">
      <ChatList></ChatList>
      <ChatForm></ChatForm>
    </div>
  );
}

export default Container;
