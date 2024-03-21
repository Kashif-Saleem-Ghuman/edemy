"use client";
import React, { useState } from "react";
import { Menu } from "antd";
import { AppstoreOutlined, MailOutlined } from "@ant-design/icons";

import Link from "next/link";

const items = [
  {
    label: <Link href="/login">Login</Link>,
    key: "login",
    icon: <MailOutlined />,
  },
  {
    label: <Link href="/register">Register</Link>,
    key: "register",
    icon: <AppstoreOutlined />,
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
