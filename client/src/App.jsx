import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Message from "./components/message/Message";
import { useContext, useEffect } from "react";
import { ContextSource } from "./contexts/AuthContext";

function App() {
  const { message, setMessage } = useContext(ContextSource);

  // after couple of seconds message will be hide
  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 2000);
  }, [message]);

  return (
    <>
      {message && <Message text={message} />}
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
