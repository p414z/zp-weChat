import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import React from "react";
import "../css/message.css";
const Message = ({ msg, time }) => {

  return (
    <> 
      <div className='timeLay'>{time}</div>
      <div className='eventlay'>
        <div className='msgLay msgLay-right'>{msg}</div>
        <div className='spaceAvatar'>
                <Avatar
                style={{
                    backgroundColor: "#87d068",
                    marginLeft: '5px',
                }}
                className='personPicture'
                icon={<UserOutlined />}
                />
        </div>
    </div>
    </>
  );
};
export default Message;
