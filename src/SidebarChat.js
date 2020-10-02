import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
import db from "./firebase";
import { Link } from "react-router-dom";

export default function SidebarChat({ addNewChat, id, name }) {
  const [message, setmessage] = useState([]);

  useEffect(() => {
    console.log(id);
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setmessage(snapshot.docs.map((doc) => doc.data()))
        );
    }
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
        <Avatar
          src={`https://avatars.dicebear.com/api/human/${
            Math.random() * 100 + 12
          }.svg`}
        />
        <div className="sidebar__chat__info">
          <h2>{name} </h2>
          <p>{message[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className="sidebarchat" onClick={createChat}>
      <h2>add new chat</h2>
    </div>
  );
}
