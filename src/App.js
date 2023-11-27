import React from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001")



function App() {

  const sendMessage = ()=>{
    socket.emit("send_message",{
      message:"Hello"
    })
    
  }
  return (<div>App
  <input type="text" placeholder="Send a Message"/>
  <button onClick={sendMessage}>Send a message</button>
  </div>
  );
}

export default App;
