import React, { useContext } from "react";
import { withRouter, Link } from "react-router-dom";

import AuthUserContext from "contexts/AuthUserContext";
import { REGISTER } from "constants/routes";

import { Form, Input, Button, Card, Row, Col, Divider, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const { Title } = Typography;

const style = {
  content: {
    marginTop: "20%",
    minHeight: "280px"
  }
};

const LoginForm = ({ login }) => {
  const onFinish = values => {
    login(values.username, values.password);
  };

  return (
    <Form name="normal_login" onFinish={onFinish} style={{ minWidth: "60%" }}>
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

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Log in
        </Button>
        <Link to={REGISTER}>
          <Button type="link" htmlType="button" block>
            Sign up
          </Button>
        </Link>
      </Form.Item>
    </Form>
  );
};

const Login = () => {
  const { login } = useContext(AuthUserContext);

  return (
    <Row style={{ height: "100vh" }}>
      <Col span={12} offset={6}>
        <Card style={style.content}>
          <Row type="flex" justify="center">
            <Title level={3}>Log in to GameTracker</Title>
            <Divider />
            <LoginForm login={login} />
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default withRouter(Login);
