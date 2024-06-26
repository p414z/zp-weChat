import { BellOutlined, WifiOutlined } from "@ant-design/icons";
import "../index.css";
function Header() {
  const nowTime = new Date();
  const hours = nowTime.getHours();
  const minutes = nowTime.getMinutes().toString().padStart(2, "0");

  return (
    <div className="headerTime">
      <span className="header-righticon">
        <span className="header-isTime">{hours}:{minutes}</span>
        <span className="header-isSound"><BellOutlined style={{fontSize: 20,color:'black'}} /></span>
      </span>
      <span className="header-left-icon">
        <WifiOutlined className="header-wifi-icon" />
        <svg t="1718457857173" className="header-battery-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3242" ><path d="M984.2 434.8c-5-2.9-8.2-8.2-8.2-13.9v-99.3c0-53.6-43.9-97.5-97.5-97.5h-781C43.9 224 0 267.9 0 321.5v380.9C0 756.1 43.9 800 97.5 800h780.9c53.6 0 97.5-43.9 97.5-97.5v-99.3c0-5.8 3.2-11 8.2-13.9 23.8-13.9 39.8-39.7 39.8-69.2v-16c0.1-29.6-15.9-55.5-39.7-69.3zM912 702.5c0 12-6.2 19.9-9.9 23.6-3.7 3.7-11.7 9.9-23.6 9.9h-781c-11.9 0-19.9-6.2-23.6-9.9-3.7-3.7-9.9-11.7-9.9-23.6v-381c0-11.9 6.2-19.9 9.9-23.6 3.7-3.7 11.7-9.9 23.6-9.9h780.9c11.9 0 19.9 6.2 23.6 9.9 3.7 3.7 9.9 11.7 9.9 23.6v381z" p-id="3243"></path><path d="M736 344v336c0 8.8-7.2 16-16 16H112c-8.8 0-16-7.2-16-16V344c0-8.8 7.2-16 16-16h608c8.8 0 16 7.2 16 16z" p-id="3244"></path></svg>
      </span>
    </div>
  );
}

export default Header;
