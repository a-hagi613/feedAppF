import React, { useState } from "react";
import "./signup.css";
import toast from "react-hot-toast";
import { Form, Input, Button, Row, Col } from "antd";

import { Link, useNavigate } from "react-router-dom";
import {
  NAME_MIN_LENGTH,
  NAME_MAX_LENGTH,
  EMAIL_MAX_LENGTH,
  USERNAME_MIN_LENGTH,
  USERNAME_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  PASSWORD_MAX_LENGTH,
} from "../../common/constants";

import { signUpApi } from "../../util/ApiUtil";

import SignUpFB from "../../Firebase/firebaseSignIn";

import { Breadcrumb, Layout, Menu, theme } from "antd";

const { Header, Content, Footer } = Layout;

const FormItem = Form.Item;

const validateName = name => {
  if (!name) {
    return {
      validateStatus: "warning",
      errorMsg: `Please input your name`,
    };
  }
  if (name.length < NAME_MIN_LENGTH) {
    return {
      validateStatus: "error",
      errorMsg: `Name is too short (Minimum ${NAME_MIN_LENGTH} characters)`,
    };
  }

  if (name.length > NAME_MAX_LENGTH) {
    return {
      validationStatus: "error",
      errorMsg: `Name is too long (Maximum ${NAME_MAX_LENGTH} characters)`,
    };
  }

  return {
    validateStatus: "success",
    errorMsg: null,
  };
};

const validateEmail = email => {
  if (!email) {
    return {
      validationStatus: "warning",
      errorMsg: "Please input your email",
    };
  }
  if (email.length > EMAIL_MAX_LENGTH) {
    return {
      validationStatus: "error",
      errorMsg: `Email is too long (Maximum ${EMAIL_MAX_LENGTH} characters)`,
    };
  }

  const EMAIL_REGEX = RegExp("[^@ ]+@[^@ ]+\\.[^@ ]+");
  if (!EMAIL_REGEX.test(email)) {
    return {
      validateStatus: "error",
      errorMsg: "Email not valid",
    };
  }

  return {
    validateStatus: "success",
    errorMsg: null,
  };
};

const validateUsername = username => {
  if (!username) {
    return {
      validateStatus: "warning",
      errorMsg: "Please input a username",
    };
  }
  if (username.length < USERNAME_MIN_LENGTH) {
    return {
      validateStatus: "error",
      errorMsg: `Username is too short (Minimum ${USERNAME_MIN_LENGTH} characters)`,
    };
  }

  if (username.length > USERNAME_MAX_LENGTH) {
    return {
      validationStatus: "error",
      errorMsg: `Username is too long (Maximum ${USERNAME_MAX_LENGTH} characters)`,
    };
  }
  return {
    validateStatus: "success",
    errorMsg: null,
  };
};

const validatePassword = password => {
  if (!password) {
    return {
      validateStatus: "warning",
      errorMsg: `Please input a password`,
    };
  }
  if (password.length < PASSWORD_MIN_LENGTH) {
    return {
      validateStatus: "error",
      errorMsg: `Password is too short (Minimum ${PASSWORD_MIN_LENGTH} characters needed.)`,
    };
  } else if (password.length > PASSWORD_MAX_LENGTH) {
    return {
      validationStatus: "error",
      errorMsg: `Password is too long (Maximum ${PASSWORD_MAX_LENGTH} characters allowed.)`,
    };
  } else {
    return {
      validateStatus: "success",
      errorMsg: null,
    };
  }
};

const Signup = () => {
  let navigate = useNavigate();

  const [name, setName] = useState({ value: "" });
  const [username, setUsername] = useState({ value: "" });
  const [email, setEmail] = useState({ value: "" });
  const [password, setPassword] = useState({ value: "" });

  const onFinish = async () => {
    const apiResponse = await signUpApi(
      username.value,
      name.value,
      email.value,
      "1",
      password.value
    );

    if (apiResponse) {
      navigate("/login");
      toast("Signup successful. Please login to continue.");
    } else {
      toast("Invalid sign up request. Username or email already exists.");
    }
  };

  const handleInputChange = (event, validationFun) => {
    const target = event.target;
    const inputName = target.name;
    const inputValue = target.value;

    if (inputName === "name") {
      setName({
        value: inputValue,
        ...validationFun(inputValue),
      });
    } else if (inputName === "username") {
      setUsername({
        value: inputValue,
        ...validationFun(inputValue),
      });
    } else if (inputName === "email") {
      setEmail({
        value: inputValue,
        ...validationFun(inputValue),
      });
    } else if (inputName === "password") {
      setPassword({
        value: inputValue,
        ...validationFun(inputValue),
      });
    }
  };

  const isFormInvalid = () => {
    return !(
      name.validateStatus === "success" &&
      username.validateStatus === "success" &&
      email.validateStatus === "success" &&
      password.validateStatus === "success"
    );
  };

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

        <div className="signup-container">
          <Row type="flex" justify="center">
            <Col pan={24}>
              <div className="logo-container">
                <span>Feed App - Signup</span>
              </div>
            </Col>
          </Row>
          <Row type="flex" justify="center">
            <Col pan={24}>
              <Form onFinish={onFinish} className="signup-form">
                <FormItem
                  validateStatus={name.validateStatus}
                  help={name.errorMsg}
                  hasFeedback
                  name="name"
                >
                  <Input
                    size="large"
                    name="name"
                    placeholder="Name"
                    value={name.value}
                    onChange={event => handleInputChange(event, validateName)}
                  />
                </FormItem>
                <FormItem
                  validateStatus={email.validateStatus}
                  help={email.errorMsg}
                  hasFeedback
                  name="email"
                >
                  <Input
                    className="inputEmail"
                    size="large"
                    name="email"
                    placeholder="Email"
                    value={email.value}
                    onChange={event => handleInputChange(event, validateEmail)}
                  />
                </FormItem>
                <FormItem
                  validateStatus={username.validateStatus}
                  help={username.errorMsg}
                  hasFeedback
                  name="username"
                >
                  <Input
                    size="large"
                    name="username"
                    placeholder="Username"
                    value={username.value}
                    onChange={event =>
                      handleInputChange(event, validateUsername)
                    }
                  />
                </FormItem>
                <FormItem
                  validateStatus={password.validateStatus}
                  help={password.errorMsg}
                  hasFeedback
                  name="password"
                >
                  <Input
                    className="inputPassword"
                    size="large"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password.value}
                    onChange={event =>
                      handleInputChange(event, validatePassword)
                    }
                  />
                </FormItem>
                <FormItem>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    className="signup-form-button bg-indigo-600"
                    disabled={isFormInvalid()}
                  >
                    Signup
                  </Button>
                </FormItem>
              </Form>
              {/* <SignUpFB /> */}
            </Col>
          </Row>
          {/* </div> */}
          {/* <br /> */}
          <div className="login-link-container">
            <hr className="login-hr" />
            <center>
              <p>
                Have an account?
                <Link to="/login" className="login-link-route">
                  Login!
                </Link>
              </p>
            </center>
            <br/><br/> 
          </div>
        </div>
      </div>
      </Content>

      <Footer className="ant-footer" style={{ textAlign: "center" }}>
        ©FeedApp Team 2
      </Footer>

      {/* </React.Fragment> */}
    </Layout>
  );
};

export default Signup;
