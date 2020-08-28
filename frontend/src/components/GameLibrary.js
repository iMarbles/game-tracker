import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Row, Col, Typography, Empty, Card } from "antd";
import API from "utils/API";
import { GAME_DETAILS } from "constants/routes";

const GameLibrary = ({ status }) => {
  const { Title } = Typography;
  const { Meta } = Card;

  const [statusTag, setStatusTag] = useState(null);
  const [gamesArr, setGamesArr] = useState([]);
  const username = jwt_decode(localStorage.getItem("session")).username;

  useEffect(() => {
    if (status === "I") {
      setStatusTag("In-Progress");
    } else if (status === "B") {
      setStatusTag("Backlog");
    } else if (status === "C") {
      setStatusTag("Complete");
    } else {
      setStatusTag("Never Finished");
    }

    fetchGames();
  }, [statusTag]);

  async function fetchGames() {
    await API.post("/games/getByStatus", { username, status }).then(
      response => {
        setGamesArr(response.data);
      }
    );
  }

  return (
    <Row>
      <Col span={24}>
        <Title level={3}>{statusTag}</Title>
      </Col>
      {gamesArr.length > 0 ? (
        <Row gutter={8}>
          {gamesArr.map(game => (
            <Col xs={24} sm={20} md={12} lg={8} xl={4}>
              <Link to={GAME_DETAILS + "/" + game.rawg_id}>
                <Card
                  hoverable
                  style={{ width: "100%", height: "auto"}}
                  cover={<img src={game.img_src} />}
                >
                  <Meta title={game.name}/>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      ) : (
        <Col span={24}>
          <Empty />
        </Col>
      )}
    </Row>
  );
};

export default withRouter(GameLibrary);
