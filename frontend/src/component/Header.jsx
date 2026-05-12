import Avatar from "./Avatar";

function Header() {
  return (
    <div className="flex items-center justify-between p-3 bg-[#7f8f8c]">
      <h2 className="font-semibold">Header</h2>
      <Avatar />
    </div>
  );
}

export default Header;