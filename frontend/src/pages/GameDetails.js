import React, { useEffect, useState } from "react";
import { withRouter, useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";
import API from "utils/API";
import {
  Row,
  Col,
  Typography,
  Divider,
  Tag,
  Carousel,
  Button,
  message,
  Spin
} from "antd";
import UpdateGame from "components/UpdateGame";
import { KEY } from "constants/messages";

const result = {
  id: 429892,
  slug: "grand",
  name: "GRAND.",
  name_original: "GRAND.",
  description:
    "\"It's with bad sentiments that one makes good novels.\"\r\n \r\nEnclosed is the Executable, written in the C programming language, for an interactive novel, written within the last two weeks of NaNoRenoMMXX.\r\n \r\nIf this garners any praise, then it may be developed further.\r\n \r\nThis work is Mature, owing to the following factors:\r\n \r\n-       Drug references.\r\n-       Profanity.\r\n-       Sexual themes.\r\n-       Mental Health Issues.\r\n-       Long monologues.\r\n-       Intersexual Communication. (the scariest of them all.)\r\n \r\nH!GHL!GHTS:\r\n \r\nMULTIPLE ENDINGS; DECISIONS MATTER.\r\n \r\nTWO LEVELS of DIFFICULTY, offering DIFFERENT PR!ZES.\r\n \r\nTEXT is DRAMATIC and abounds in CONTEXT.\r\n \r\n15 CHARACTERS, E!GHT of whom are PLAYABLE.\r\n \r\nREWARD for unlocking all ACHIEVEMENTS.\r\n \r\nCRYPTIC SYSTEM.\r\n \r\nCAPTIVATING, THOUGHT-PROVOKING STORY.\r\n \r\nCOMPLEX PLOT, warranting multiple play-throughs.\r\n \r\nOVER 9000 lines of SOURCE CODE.\r\n \r\nIf you get a Pop-Up Window barring access at the end of any scene, simply select “Ignore”.\r\nAll you need is Love and a Keyboard. \r\nDON't BE AFRA!D to download the Game!! If your Malware Finder gets weird about it, it's only because the program is written in a very classic code, as happens unfortunately to be a fair deal of known Malware. While such archaic code may still be used by hackers since it's closer to the heart of a machine, (less abstract than most,) my own code is harmless, and I will stake my whole career upon this Promise.\r\n \r\nEnjoy.\r\n \r\n[({L.J.)}]",
  metacritic: null,
  metacritic_platforms: [],
  released: "2020-04-14",
  tba: false,
  updated: "2020-04-17T11:25:10",
  background_image:
    "https://media.rawg.io/media/screenshots/3a2/3a2011f1ff3c3d578ba0f5b2eb3e0d82.jpg",
  background_image_additional:
    "https://media.rawg.io/media/screenshots/8b2/8b2033c46c5d345c5fbcf5ba280c7acd.jpg",
  website: "",
  rating: 0.0,
  rating_top: 0,
  ratings: [],
  reactions: null,
  added: 0,
  added_by_status: null,
  playtime: 0,
  screenshots_count: 3,
  movies_count: 0,
  creators_count: 0,
  achievements_count: 0,
  parent_achievements_count: 0,
  reddit_url: "",
  reddit_name: "",
  reddit_description: "",
  reddit_logo: "",
  reddit_count: 0,
  twitch_count: 0,
  youtube_count: 0,
  reviews_text_count: 0,
  ratings_count: 0,
  suggestions_count: 74,
  alternative_names: [],
  metacritic_url: "",
  parents_count: 0,
  additions_count: 0,
  game_series_count: 0,
  user_game: null,
  reviews_count: 0,
  community_rating: 0,
  saturated_color: "0f0f0f",
  dominant_color: "0f0f0f",
  parent_platforms: [
    {
      platform: {
        id: 1,
        name: "PC",
        slug: "pc"
      }
    },
    {
      platform: {
        id: 8,
        name: "Android",
        slug: "android"
      }
    },
    {
      platform: {
        id: 5,
        name: "Apple Macintosh",
        slug: "mac"
      }
    },
    {
      platform: {
        id: 6,
        name: "Linux",
        slug: "linux"
      }
    }
  ],
  platforms: [
    {
      platform: {
        id: 21,
        name: "Android",
        slug: "android",
        image: null,
        year_end: null,
        year_start: null,
        games_count: 31210,
        image_background:
          "https://media.rawg.io/media/games/c7a/c7a71a0531a9518236d99d0d60abe447.jpg"
      },
      released_at: "2020-04-14",
      requirements: null
    },
    {
      platform: {
        id: 6,
        name: "Linux",
        slug: "linux",
        image: null,
        year_end: null,
        year_start: null,
        games_count: 38972,
        image_background:
          "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg"
      },
      released_at: "2020-04-14",
      requirements: null
    },
    {
      platform: {
        id: 5,
        name: "macOS",
        slug: "macos",
        image: null,
        year_end: null,
        year_start: null,
        games_count: 56732,
        image_background:
          "https://media.rawg.io/media/games/ed5/ed5b7d01dd68fd8d598c91ad61f153af.jpg"
      },
      released_at: "2020-04-14",
      requirements: null
    },
    {
      platform: {
        id: 4,
        name: "PC",
        slug: "pc",
        image: null,
        year_end: null,
        year_start: null,
        games_count: 249311,
        image_background:
          "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
      },
      released_at: "2020-04-14",
      requirements: null
    }
  ],
  stores: [
    {
      id: 421017,
      url: "https://lin-ji.itch.io/grand",
      store: {
        id: 9,
        name: "itch.io",
        slug: "itch",
        domain: "itch.io",
        games_count: 282081,
        image_background:
          "https://media.rawg.io/media/screenshots/2a0/2a06e20ebd555f843fe8669a2d4fd11a.jpg"
      }
    }
  ],
  developers: [
    {
      id: 173109,
      name: "Lin Ji",
      slug: "lin-ji",
      games_count: 6,
      image_background:
        "https://media.rawg.io/media/screenshots/294/294349ac8f8cb02c1c9d38c1877d6261.jpg"
    }
  ],
  genres: [],
  tags: [
    {
      id: 84,
      name: "Abstract",
      slug: "abstract",
      language: "eng",
      games_count: 3944,
      image_background:
        "https://media.rawg.io/media/screenshots/bf1/bf17f3355be57f92313ec8ce3fc56f11.jpeg"
    },
    {
      id: 192,
      name: "Mature",
      slug: "mature",
      language: "eng",
      games_count: 603,
      image_background:
        "https://media.rawg.io/media/games/f52/f52cf6ba08089cd5f1a9c8f7fcc93d1f.jpg"
    },
    {
      id: 334,
      name: "achievements",
      slug: "achievements",
      language: "eng",
      games_count: 4577,
      image_background:
        "https://media.rawg.io/media/games/c81/c812e158129e00c9b0f096ae8a0bb7d6.jpg"
    },
    {
      id: 406,
      name: "Story",
      slug: "story",
      language: "eng",
      games_count: 7174,
      image_background:
        "https://media.rawg.io/media/games/289/289951d92239d05f2a663d632aa3888a.jpg"
    },
    {
      id: 617,
      name: "weird",
      slug: "weird",
      language: "eng",
      games_count: 3058,
      image_background:
        "https://media.rawg.io/media/screenshots/c5b/c5b42de9948060d3318a2ea9805bed2d.jpg"
    },
    {
      id: 1127,
      name: "keyboard",
      slug: "keyboard",
      language: "eng",
      games_count: 1501,
      image_background:
        "https://media.rawg.io/media/screenshots/33b/33b45e1be19f46c58da0add40a0c702c.jpg"
    },
    {
      id: 1709,
      name: "work",
      slug: "work",
      language: "eng",
      games_count: 5332,
      image_background:
        "https://media.rawg.io/media/screenshots/90b/90b54298e3285fd474bf27877e0c8a89.jpg"
    },
    {
      id: 7337,
      name: "c",
      slug: "c",
      language: "eng",
      games_count: 1502,
      image_background:
        "https://media.rawg.io/media/screenshots/e98/e98d47d0ed31b92058dc2c643369f551.jpg"
    }
  ],
  publishers: [],
  esrb_rating: null,
  clip: null,
  description_raw:
    "\"It's with bad sentiments that one makes good novels.\"\n\nEnclosed is the Executable, written in the C programming language, for an interactive novel, written within the last two weeks of NaNoRenoMMXX.\n\nIf this garners any praise, then it may be developed further.\n\nThis work is Mature, owing to the following factors:\n\n-       Drug references.\n-       Profanity.\n-       Sexual themes.\n-       Mental Health Issues.\n-       Long monologues.\n-       Intersexual Communication. (the scariest of them all.)\n\nH!GHL!GHTS:\n\nMULTIPLE ENDINGS; DECISIONS MATTER.\n\nTWO LEVELS of DIFFICULTY, offering DIFFERENT PR!ZES.\n\nTEXT is DRAMATIC and abounds in CONTEXT.\n\n15 CHARACTERS, E!GHT of whom are PLAYABLE.\n\nREWARD for unlocking all ACHIEVEMENTS.\n\nCRYPTIC SYSTEM.\n\nCAPTIVATING, THOUGHT-PROVOKING STORY.\n\nCOMPLEX PLOT, warranting multiple play-throughs.\n\nOVER 9000 lines of SOURCE CODE.\n\nIf you get a Pop-Up Window barring access at the end of any scene, simply select “Ignore”.\nAll you need is Love and a Keyboard.\nDON't BE AFRA!D to download the Game!! If your Malware Finder gets weird about it, it's only because the program is written in a very classic code, as happens unfortunately to be a fair deal of known Malware. While such archaic code may still be used by hackers since it's closer to the heart of a machine, (less abstract than most,) my own code is harmless, and I will stake my whole career upon this Promise.\n\nEnjoy.\n\n[({L.J.)}]"
};

const GameDetails = () => {
  const { Title } = Typography;
  const { rawgid } = useParams();
  const [detail, setDetail] = useState(null);
  const [userGame, setUserGame] = useState(null);
  const [statusTag, setStatusTag] = useState(null);
  const [statusCol, setStatusCol] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const username = jwt_decode(localStorage.getItem("session")).username;

  useEffect(() => {
    fetchGameDetails();
    //fetchUserGame();
  }, [rawgid]);

  const fetchGameDetails = () => {
    const axios = require("axios");
    axios({
      method: "GET",
      url: "https://rawg-video-games-database.p.rapidapi.com/games/" + rawgid,
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": KEY,
        useQueryString: true
      }
    })
      .then(response => {
        setDetail(response.data);
        fetchUserGame();
      })
      .catch(error => {
        console.log(error);
      });
  };

  async function fetchUserGame() {
    await API.post("/games/getByUserRawg", { username, rawgid }).then(
      response => {
        const data = response.data;
        if (data !== null) {
          updateTags(data.status_id);
        } else {
          setStatusTag("Not in Library");
          setStatusCol("default");
        }

        setUserGame(data);
      }
    );
  }

  function updateTags(statusId) {
    if (statusId === "I") {
      setStatusTag("In-Progress");
      setStatusCol("processing");
    } else if (statusId === "B") {
      setStatusTag("Backlog");
      setStatusCol("warning");
    } else if (statusId === "C") {
      setStatusTag("Complete");
      setStatusCol("success");
    } else if (statusId === "N") {
      setStatusTag("Never Finished");
      setStatusCol("error");
    } else {
      setStatusTag("Not in Library");
      setStatusCol("default");
    }
  }

  const updateClicked = () => {
    setIsUpdating(!isUpdating);
    updateTags(userGame.status_id);
  };

  const removeClicked = () => {
    const gameid = userGame.game_id;
    API.post("/games/deleteGame", { gameid }).then(response => {
      message.success("Removed game from library");
      fetchUserGame();
    });
  };

  const addClicked = () => {
    const name = detail.name;
    const imgsrc = detail.background_image;
    API.post("/games/newGame", { rawgid, username, name, imgsrc }).then(
      response => {
        message.success("Added game to backlog");
        fetchUserGame();
      }
    );
  };

  return (
    <Row style={{ height: "100%" }}>
      <Col span={22} offset={1} style={{ marginTop: "40px" }}>
        {detail ? (
          <Row>
            <Col span={8}>
              <Carousel autoplay>
                <div>
                  <img
                    src={detail.background_image}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div>
                  <img
                    src={detail.background_image_additional}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </Carousel>
              <Divider />
              {userGame ? (
                <div>
                  <Button
                    type={"primary"}
                    block
                    onClick={updateClicked}
                    disabled={isUpdating}
                  >
                    Update Library/Progress
                  </Button>
                  <Button
                    type={"primary"}
                    danger
                    block
                    onClick={removeClicked}
                    disabled={isUpdating}
                    style={{ marginTop: "10px" }}
                  >
                    Remove from Library
                  </Button>
                </div>
              ) : (
                <Button type={"primary"} block onClick={addClicked}>
                  Add to Backlog
                </Button>
              )}
            </Col>
            <Col span={14} offset={2}>
              {isUpdating && userGame ? (
                <UpdateGame
                  updateClicked={updateClicked}
                  userGame={userGame}
                  fetchUserGame={fetchUserGame}
                />
              ) : (
                <div>
                  <Title level={3}>{detail.name}</Title>
                  Progress: <Tag color={statusCol}>{statusTag}</Tag>
                  <Divider />
                  <div
                    dangerouslySetInnerHTML={{ __html: detail.description }}
                  />
                </div>
              )}
            </Col>
          </Row>
        ) : (
          <div style={{ textAlign: "center" }}>
            <Spin />
          </div>
        )}
      </Col>
    </Row>
  );
};

export default withRouter(GameDetails);
