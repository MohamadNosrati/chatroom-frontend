"use client";
import { useEffect } from "react";
import socket from "../../../socket.config";
const Dashboard = () => {
  useEffect(() => {
    socket.emit("join", "this is test payload!");
  }, []);
  return <h1>this is dashboard</h1>;
};

export default Dashboard;
