"use client";
import React, { useState } from "react";
import { Menu } from "antd";
import {
  UserAddOutlined,
  LoginOutlined,
  HomeOutlined,
} from "@ant-design/icons";

import Link from "next/link";

const items = [
  {
    label: <Link href="/">Home</Link>,
    key: "Home",
    icon: <HomeOutlined />,
  },
  {
    label: <Link href="/login">Login</Link>,
    key: "login",
    icon: <LoginOutlined />,
  },
  {
    label: <Link href="/register">Register</Link>,
    key: "register",
    icon: <UserAddOutlined />,
  },
];

const TopNav = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </>
  );
};

export default TopNav;
