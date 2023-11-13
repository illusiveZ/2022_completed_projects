import React, { useState, useEffect } from "react";
// import "./Sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
import db from "../firebase";
import { useStateValue } from "./StateProvider";
import styled from "styled-components";

function Sidebar(props) {
  const [rooms, setRooms] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Container>
      <SidebarHeader>
        <Avatar src={user?.photoURL} />
        <HeaderRHS>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </HeaderRHS>
      </SidebarHeader>
      <SidebarSearch>
        <SidebarSearched>
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </SidebarSearched>
      </SidebarSearch>
      <CurrentChats>
        <SidebarChat addNewChat />
        {rooms.map((room) => (
          <SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </CurrentChats>
    </Container>
  );
}

const Container = styled.div`
  flex: 0.35;
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-right: 1px solid lightgray;
`;

const HeaderRHS = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 10vw;
`;

const SidebarSearch = styled.div`
  display: flex;
  align-items: center;
  background-color: #f6f6f6;
  height: 39px;
  padding: 10px;
`;

const SidebarSearched = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: 35px;
  border-radius: 20px;
  input {
    border: none;
    margin-left: 10px;
  }
`;

const CurrentChats = styled.div``;

export default Sidebar;
