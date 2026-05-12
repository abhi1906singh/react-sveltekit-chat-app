import { useEffect, useState } from "react";
import ChatList from "../component/ChatList"
import TopBar from "../component/TopBar"

function Home() {
    const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/users") // adjust URL if needed
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "15%",height:"100vh"}}>
        <ChatList users={users} />
        </div>
      <div style={{width:"85%"}}>
        <TopBar/>
      </div>
    </div>
  )
}

export default Home