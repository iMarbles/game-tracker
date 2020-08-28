import React from "react";
import { withRouter } from "react-router-dom";
import { Row, Col, Typography, Divider } from "antd";
import GameLibrary from "components/GameLibrary";

const { Title } = Typography;

const Home = () => {
  return (
    <Row style={{ height: "100%" }}>
      <Col span={22} offset={1} style={{ marginTop: "20px" }}>
        <GameLibrary status={'I'} />
        <Divider/>
        <GameLibrary status={'B'} />
        <Divider/>
        <GameLibrary status={'C'} />
        <Divider/>
        <GameLibrary status={'N'} />
      </Col>
    </Row>
  );
};

export default withRouter(Home);
