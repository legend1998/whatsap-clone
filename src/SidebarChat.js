import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import db from "./firebase";
import { Link } from "react-router-dom";

export default function SidebarChat({ addNewChat, id, name }) {
  const [seed, setseed] = useState(123);

  useEffect(() => {
    setseed(Math.random() * 100 + 12);
  }, []);

  const createChat = () => {
    const roomName = prompt("add name to create new chat");
    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
      alert(`rooom created ${roomName}`);
      // some database operation
    }
  };

  return !addNewChat ? (
    <Link to={`/room/${id}`}>
      <div className="sidebarchat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebar__chat__info">
          <h2>{name} </h2>
          <p>last message...</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className="sidebarchat" onClick={createChat}>
      <h2>add new chat</h2>
    </div>
  );
}
