import {
  EllipsisOutlined,
  LeftOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Col, Dropdown, Row } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./component/Header";
import Message from "./component/Message";
import Receiver from "./component/Receiver";
import "./index.css";
import emojijiList from "./JS/emojiList.js";

function Chat({msgData, setMsgData}) {
  const [inputValue, setInputValue] = useState("");
  const [lastMsg, setLastMsg] = useState(""); // 用于保存最新的消息
  const [lastTime, setLastTime] = useState(""); // 用于保存最新的时间
  const [idName, setIdName] = useState(""); //用来识别接收和发送
  const [isModelVisible, setIsModelVisble] = useState(false) //控制表情包面板
  const msgContainerRef = useRef(null); // 创建一个引用
 
  //获取此时时间
  function getCurrentTime() {
    const currentTime = new Date();
    const currentDay = currentTime.getDay();
    const currentDayOfWeek = currentTime.toLocaleDateString('zh-CN', { weekday: 'long' });
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes().toString().padStart(2, "0");
    const timeString = `${currentDayOfWeek} ${currentHour}:${currentMinute}`;
    return timeString;
  }
  //发送信息
  function handleSendMsg() {
    setLastMsg(inputValue);
    setLastTime(getCurrentTime());
    setIdName(1);
    console.log("发", msgData);
    setInputValue("");
  }
  //接受消息
  function handleReceiveMsg() {
    setLastMsg(inputValue);
    setLastTime(getCurrentTime());
    setIdName(2);
    setInputValue("");
  }
  //解决state异步
  useEffect(() => {
    if (idName !== "" && lastMsg !== "" && lastTime !== "") {
      setMsgData([...msgData, { id: idName, data: lastMsg, time: lastTime }]);
    }
  }, [idName, lastMsg, lastTime]);
  // 滚动到底部
  useEffect(() => {
    if (msgContainerRef.current) {
      msgContainerRef.current.scrollTop = msgContainerRef.current.scrollHeight;
    }
  }, [msgData]);

   // 表情包列表
   const items = [
    {
      label: (
        <Row gutter={0} className="rowMoal" >
        {
            emojijiList.map( item =>{
            return(
                <Col span={3} onClick={ () =>{handleOK(item.emoji)}} key={item.id}>
                    <a style={{fontSize:20}}>{item.emoji}</a>
                </Col>
            )
            }
            )
        }
        </Row> 
      ),
    },
  ]
  const showModel = () =>{
    setIsModelVisble(true)
  }
  const handleOK = (item)=>{
    setInputValue(inputValue + item)
    setIsModelVisble(false)
  }
  const handleCancel = () =>{
    setIsModelVisble(false)
  }

  return (
    <div className="chat-contain">
        <div className="chat-header">
          <Header />
        </div>
        <div className="chat-content">
          <div className="chat-content-header">
            <span className="chat-content-header-backicon">
              <Link to="/">
                <LeftOutlined style={{ fontSize: 20, color: "black" }} />
              </Link>
            </span>
            <span className="chat-content-header-chatName">小美</span>
            <span className="chat-content-header-moreMsg">
              <Link>
                <EllipsisOutlined style={{ fontSize: 20, color: "black" }} />
              </Link>
            </span>
          </div>
          <div className="chat-content-msg" id="chatContainer" ref={msgContainerRef}>
            <div className="chat-msgLayout">
              {msgData.map((msg, index) =>
                msg.id === 1 ? (
                  <Message key={index} msg={msg.data} time={msg.time} />
                ) : (
                  <Receiver key={index} msg={msg.data} time={msg.time} />
                )
              )}
            </div>
          </div>
        </div>
        <div className="chat-footer">
        <div className="chat-footerLayout">
            <span className="chat-footer-faceEffect" onClick={showModel}>
                <Dropdown menu={{ items }} className="chat-footer-emojiDropdown" placement="topLeft" >
                    <SmileOutlined style={{ fontSize: 25, color: "black" }} />
                </Dropdown>
            </span>
            <input
            type="text"
            className="chat-footer-inputMsg"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            />
            <button
            className="chat-footer-buttonSend"
            onClick={handleReceiveMsg}
            disabled={inputValue.length > 0 ? false : true}
            style={
                inputValue.length > 0
                ? { backgroundColor: "rgb(255, 192, 192)" }
                : { backgroundColor: "rgba(128, 128, 128, 0.228)" }
            }
            >
            receive
            </button>
            <button
                className="chat-footer-buttonSend"
                onClick={handleSendMsg}
                disabled={inputValue.length > 0 ? false : true}
                style={
                inputValue.length > 0
                ? { backgroundColor: "rgba(0, 119, 255, 0.998)" }
                : { backgroundColor: "rgba(128, 128, 128, 0.228)" }
            }
            >
            send
            </button>
        </div>
        </div>

    </div>
  );
}

export default Chat;
