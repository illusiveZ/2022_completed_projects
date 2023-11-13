import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
// import "./SidebarChat.css";
import db from "../firebase";
import { Link } from "react-router-dom";
import styled from "styled-components";

function SidebarChat({ id, name, addNewChat }) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState("");

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [id]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please Enter Name for Chat");

    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`} key={id}>
      <Container>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <Header>
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </Header>
      </Container>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h3 className="add-new-chat-title">Add New Chat</h3>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  padding: 20px;
  cursor: pointer;
  border-bottom: 1px solid #f6f6f6;
  &:hover {
    background-color: #ebebeb;
  }
  h3 {
    margin: 0 0 0 10px;
  }
`;

const Header = styled.div`
  margin-left: 15px;
  h2 {
    font-size: 16px;
    margin: 0;
  }

  p {
    margin: 0;
  }
`;

export default SidebarChat;
