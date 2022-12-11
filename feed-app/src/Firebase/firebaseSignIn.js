import React, { useState } from "react";
import { Form, Input, Button, Row, Col } from "antd";

import {
  getAuth,
  // GoogleAuthProvider,
  // signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
// import { getDatabase, ref, set } from "firebase/database";
import App from "../Firebase/firebase";

import { signUpApi } from "../util/ApiUtil";

const FormItem = Form.Item;

// firebase signin
const SignUpFB = () => {
  const auth = getAuth(App);
  const [emails, setEmails] = useState("");
  const [passwords, setPasswords] = useState("");
  const [names, setNames] = useState("");
  const [userNames, setUserNames] = useState("");
  const [phoneNumbers, setPhoneNumbers] = useState("");

  const signUpEmailPassword = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emails,
        passwords,
        names,
        userNames,
        phoneNumbers
      );
      console.log(userCredential.user.email);
      setEmails(userCredential.user.email);
      console.log("User successfully created account");
    } catch (err) {
      console.log("ERROR! Account cant be created" + err);
    }

    signUpApi(emails, passwords, names, userNames, phoneNumbers);
  };
  return (
    <Form
    // onFinish={SignUpFB}
    // className="signup-form"
    >
      <FormItem>
        <Input
          className="inputEmail"
          size="large"
          // name="email"
          placeholder="Email"
          // value={email.value}
          onChange={e => setEmails(e.target.value)}
        />
      </FormItem>

      <FormItem>
        <Input
          className="inputPassword"
          size="large"
          // name="password"
          type="password"
          placeholder="Password"
          // value={password.value}
          onChange={e => setPasswords(e.target.value)}
        />
      </FormItem>
      <FormItem>
        <Input
          size="large"
          // name="password"

          placeholder="names"
          // value={password.value}
          onChange={e => setNames(e.target.value)}
        />
      </FormItem>
      <FormItem>
        <Input
          size="large"
          // name="password"

          placeholder="username"
          // value={password.value}
          onChange={e => setUserNames(e.target.value)}
        />
      </FormItem>

      <FormItem>
        <Input
          size="large"
          // name="password"

          placeholder="Phone Number"
          // value={password.value}
          onChange={e => setPhoneNumbers(e.target.value)}
        />
      </FormItem>

      <FormItem>
        <Button
          type="primary"
          // htmlType="submit"
          size="large"
          className="signup-form-button  bg-slate-900"
          onClick={signUpEmailPassword}
        >
          Sign Up With Firebase
        </Button>
      </FormItem>
    </Form>
  );
};

export default SignUpFB;
