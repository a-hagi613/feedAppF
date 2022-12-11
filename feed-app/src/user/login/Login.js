import React, { useEffect } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Row, Col } from "antd";
import { Link } from "react-router-dom";
import LoginForm from "../../components/loginForm/LoginForm";

import { Breadcrumb, Layout, Menu, theme } from "antd";

const { Header, Content, Footer } = Layout;
const Login = ({ currentUser, isAuthenticated }) => {
  let navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, []);

  return (
    <Layout className="layout">
      {/* <React.Fragment> */}
      <Header>
        <img
          alt="logo"
          className="logo"
          src={require("../../images/feedAppLogo.jpg")}
          width="30p"
          height="15"
        />
        <Menu theme="dark" mode="horizontal" />
      </Header>
      <Content>
        <div className="main-container">
          <img
            alt="main landing page img"
            src={require("../../images/8271062_5551.jpg")}
            width="750p"
            height="75"
          />

          <div className="login-container">
            <Row type="flex" justify="center">
              <Col pan={24}>
                <div className="logo-container">
                  <span>Feed App - Login</span>
                </div>
              </Col>
            </Row>
            <Row type="flex" justify="center">
              <Col pan={24}>
                <LoginForm />
              </Col>
            </Row>
            <div className="signup-link-container">
              {" "}
              <p>
                Don't have an account?
                <br />  <Link to="/signup">Signup!</Link>
              </p>
            </div>
            <br />  <br />
          </div>
          
        </div>
       
      </Content>
      <div className="br-div">  <br /> <br /></div>
      <Footer className="ant-footer" style={{ textAlign: "center" }}>
        ©FeedApp Team 2
      </Footer>

      {/* </React.Fragment> */}
    </Layout>
  );
};

export default Login;
