function ChatList({ users }) {
  return (
    <div className="h-screen p-2 bg-blue-300 text-[#565757] ">
      <h3>Users</h3>

      {users && users.length > 0 ? (
        users.map((user) => (
          <div
            key={user.id}
            className=" p-2 cursor-pointer hover:bg-blue-500"
          >
            {user.name}
          </div>
        ))
      ) : (
        <div>No users found</div>
      )}
    </div>
  );
}

export default ChatList;