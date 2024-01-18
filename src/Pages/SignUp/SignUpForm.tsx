import React, { useState } from "react";
import axios from "axios";
import { Form, Input, Button, Checkbox } from "antd";

import { NavbarSignUp } from "./NavbarSignUp";
interface SignUpFormProps {
  onSignUpSuccess: (token: string) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSignUpSuccess }) => {
  const handleSignUp = async () => {
    try {
      const response = await axios.post(
        "https://icare-api-3zia.onrender.com/api/auth/sign-up",
        formData
      );
      const token = response.data.token;
      console.log(token);

      onSignUpSuccess(token);
    } catch (error) {
      console.error("Sign-up failed:", "Unknown error");
    }
  };

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <NavbarSignUp />
      <hr />
      <div className="main" style={{ marginTop: "80px" }}>
        <h3
          style={{
            maxWidth: "500px",
            margin: "auto",
            fontFamily: "semibold",
            fontSize: "23px",
            marginBottom: "30px",
          }}
        >
          Start with your free account today.
        </h3>
        <Form
          name="signup-form"
          initialValues={{ remember: true }}
          style={{ maxWidth: "500px", margin: "auto" }}
          layout="vertical"
        >
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[
              { required: true, message: "Please enter your full name!" },
            ]}
          >
            <Input style={{ height: "45px" }} />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email!" },
              { type: "email", message: "Please enter a valid email address!" },
            ]}
          >
            <Input style={{ height: "45px" }} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password style={{ height: "45px" }} />
          </Form.Item>

          <Form.Item>
            <p style={{ fontFamily: "sans-serif" }}>
              Your data will be stored in the US data center.
            </p>
            <Checkbox style={{ margin: "10px 10px 10px 0" }}>
              I agree to the Terms of Service and Privacy Policy.
            </Checkbox>
            <Button
              style={{
                height: "45px",
                width: "100%",
                backgroundColor: "#F0483E",
                fontSize: "15px",
                fontFamily: "semiBold",
              }}
              type="primary"
              htmlType="submit"
            >
              SIGN UP FREE
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default SignUpForm;
