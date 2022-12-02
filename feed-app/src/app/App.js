import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";

import Home from "../user/home/Home";
// import Pic from "../util/img/8271062_5551.jpg";
import Headers from "../components/header/Header.js";
import Login from "../user/login/Login";
import Signup from "../user/Signup/Signup";
import Profile from "../user/profile/Profile";
import MyFeeds from "../user/myFeeds/MyFeeds";

// import Home from "../components/homePage/Home";

const { Header, Content, Footer } = Layout;
const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Layout className="layout" style={{ background: "white" }}>
      {/* <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={new Array(7).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `nav ${key}`,
            };
          })}
        />
      </Header> */}
      <Content className="app-content">
        <div className="container">
          <Routes>
            {/* <Route exact path="/" element={<Home />} /> */}

            <Route
              exact
              path="/"
              element={
                <Headers>
                  <Home currentUser={currentUser} />
                </Headers>
              }
            />
            <Route
              exact
              path="/login"
              element={
                <Login
                  currentUser={currentUser}
                  isAuthenticated={isAuthenticated}
                />
              }
            />
            <Route
              exact
              path="/signup"
              element={
                <Signup
                  currentUser={currentUser}
                  isAuthenticated={isAuthenticated}
                />
              }
            />
            <Route
              exact
              path="/profile"
              element={
                <Headers>
                  <Profile currentUser={currentUser} />
                </Headers>
              }
            />

            <Route
              exact
              path="/myFeeds"
              element={
                <Headers>
                  <MyFeeds currentUser={currentUser} />
                </Headers>
              }
            />
          </Routes>
        </div>
      </Content>
      {/* <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <Footer style={{ textAlign: "center", background: "white" }}>
        FeedApp ©2022 Created by Team 2
      </Footer> */}
    </Layout>
  );
};

export default App;
