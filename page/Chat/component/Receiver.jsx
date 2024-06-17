import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import React from "react";
import "../css/Receiver.css";
const Receiver = ({ msg, time }) => {

  return (
    <> 
      <div className='timeLayleft'>{time}</div>
      <div className='eventlayleft'>
        
        <div className='spaceAvatarleft'>
                <Avatar
                style={{
                    backgroundColor: "rgb(255, 192, 192)",
                    marginLeft: '5px',
                }}
                className='personPictureleft'
                icon={<UserOutlined />}
                />
        </div>
        <div className='msgLayleft msgLay-left'>{msg}</div>
    </div>
    </>
  );
};
export default Receiver;