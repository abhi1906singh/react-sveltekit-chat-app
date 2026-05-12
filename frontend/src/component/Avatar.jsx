import { useState, useRef, useEffect } from "react";
import logout from "../utils/logout";
import { useNavigate } from "react-router-dom";


function Avatar({ size = 40 }) {
    const [open, setOpen] = useState(false);

const navigate = useNavigate();
  const ref = useRef(null);

  // close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // stable random image (won’t change on every render)
  const [imgId] = useState(() => Math.floor(Math.random() * 70));

  return (
    <div ref={ref} className="relative">
      {/* Avatar */}
      <img
        src={`https://i.pravatar.cc/${size}?img=${imgId}`}
        alt="avatar"
        className="rounded-full cursor-pointer"
        style={{ width: size, height: size }}
        onClick={() => setOpen((prev) => !prev)}
      />

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-36 bg-white border rounded shadow z-10">
          <button
            onClick={() => {
              logout?.();
                          setOpen(false);
                          navigate("/login")
            }}
            className="w-full text-left px-3 py-2 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Avatar;