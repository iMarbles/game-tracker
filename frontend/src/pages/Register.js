import React from "react";
import { withRouter, Link } from "react-router-dom";
import { LOGIN } from "constants/routes";

import { Form, Input, Button, Card, Row, Col, Divider, Typography, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { FAIL } from "constants/messages";
import API from "utils/API";

const { Title } = Typography;

const style = {
  content: {
    marginTop: "20%",
    minHeight: "280px"
  }
};

const RegisterForm = ({ register }) => {
  const onFinish = values => {
    register(values.username, values.password);
  };

  return (
    <Form name="normal_register" onFinish={onFinish} style={{ minWidth: "60%" }}>
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        name="confirmPassword"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!"
          },
          ({ getFieldValue }) => ({
              validator(rule, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                "The two passwords that you entered do not match!"
              );
            }
          })
        ]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Confirm Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Register
        </Button>
        <Link to={LOGIN}>
          <Button type="link" htmlType="button" block>
            Go back to login
          </Button>
        </Link>
      </Form.Item>
    </Form>
  );
};

const Register = ({history}) => {
  const register = async (username, password) => {

    await API.post("/auth/register", {
      username,
      password
    })
      .then(response => {
        if (response.data.status === FAIL) {
          message.warning(response.data.message);
        } else {
          history.push(LOGIN);
          message.success(username + " successfully registered.");
        }
      })
      .catch(error => {
        message.error(error);
      });
  };
  return (
    <Row style={{ height: "100vh" }}>
      <Col span={12} offset={6}>
        <Card style={style.content}>
          <Row type="flex" justify="center">
            <Title level={3}>Sign up with GameTracker</Title>
            <Divider />
            <RegisterForm register={register} />
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default withRouter(Register);
