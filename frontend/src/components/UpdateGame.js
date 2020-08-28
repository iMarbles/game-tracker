import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import {
  Form,
  Button,
  Input,
  InputNumber,
  Select,
  message,
  Typography
} from "antd";
import API from "utils/API";

const { Option } = Select;
const {Title} = Typography;

const UpdateGame = ({ updateClicked, userGame, fetchUserGame }) => {
  const [status] = useState(userGame.status_id);
  const [numOfHours] = useState(userGame.num_of_hours);
  const [rating] = useState(userGame.rating);
  const [comments] = useState(userGame.comments);

  const onFinish = values => {
    const gameid = userGame.game_id;
    const numOfHours = values.numOfHours;
    const rating = values.rating;
    const comments = values.comments;
    const status = values.status;
    API.post("/games/updateGame", { gameid, numOfHours, rating, comments, status }).then(
      () => {
        message.success("Game details updated");
        fetchUserGame();
      })
  };

  return (
    <div>
      <Title level={3}>{userGame.name}</Title>
      <Form
        name="update_game"
        initialValues={{status, numOfHours, rating, comments}}
        onFinish={onFinish}
        style={{ minWidth: "60%" }}
        layout={"vertical"}
      >
        <Form.Item label="Status" name="status">
          <Select>
            <Option value="I">In-Progress</Option>
            <Option value="B">Backlog</Option>
            <Option value="C">Complete</Option>
            <Option value="N">Never Finished</Option>
          </Select>
        </Form.Item>

        <Form.Item label="No. of Hours" name="numOfHours">
          <InputNumber placeholder="60" min={0} defaultValue={userGame.num_of_hours}/>
        </Form.Item>

        <Form.Item label="Rating" name="rating">
          <InputNumber placeholder="5" min={1} max={5} defaultValue={userGame.rating}/>
        </Form.Item>

        <Form.Item label="Comments" name="comments">
          <Input.TextArea placeholder="Stopped at water temple" defaultValue={userGame.comments}/>
        </Form.Item>

        <Form.Item>
          <Button onClick={updateClicked}>Cancel</Button>
          <Button type="primary" htmlType="submit" style={{ margin: '0 8px' }}>
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default withRouter(UpdateGame);
