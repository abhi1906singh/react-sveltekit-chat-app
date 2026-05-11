import ChatList from "../component/ChatList"
import TopBar from "../component/TopBar"

function Home() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "15%",height:"100vh"}}>
        <ChatList />
        </div>
      <div style={{width:"85%"}}>
        <TopBar/>
      </div>
    </div>
  )
}

export default Home