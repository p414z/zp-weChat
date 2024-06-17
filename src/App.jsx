import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "../page/Chat/index";
import List from "../page/List/index";
import './App.css';
function App() {
  const [msgData, setMsgData] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List msgData ={msgData}/>}/>
          <Route path="/chat" element={<Chat msgData ={msgData} setMsgData={setMsgData}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
