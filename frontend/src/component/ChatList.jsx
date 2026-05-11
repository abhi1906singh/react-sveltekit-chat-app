function ChatList({ users }) {
  return (
    <div style={{height: "100%", padding: "10px" }}>
      <h3>Users</h3>

      {users && users.length > 0 ? (
        users.map((user) => (
          <div
            key={user.id}
            style={{
              background: "white",
              marginBottom: "8px",
              padding: "8px",
              borderRadius: "5px",
              cursor: "pointer"
            }}
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