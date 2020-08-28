import React, { useState } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import { Button, AutoComplete, Input, Row, Col, Typography } from "antd";
import { HOME, LOGIN } from "constants/routes";
import debounce from "lodash/debounce";

import { GAME_DETAILS } from "constants/routes";
import { KEY } from "constants/messages";

const results = [
  {
    slug: "grand",
    name: "GRAND.",
    playtime: 0,
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc"
        }
      },
      {
        platform: {
          id: 21,
          name: "Android",
          slug: "android"
        }
      },
      {
        platform: {
          id: 5,
          name: "macOS",
          slug: "macos"
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
    stores: [
      {
        store: {
          id: 9,
          name: "itch.io",
          slug: "itch"
        }
      }
    ],
    released: "2020-04-14",
    tba: false,
    background_image:
      "https://media.rawg.io/media/screenshots/3a2/3a2011f1ff3c3d578ba0f5b2eb3e0d82.jpg",
    rating: 0.0,
    rating_top: 0,
    ratings: [],
    ratings_count: 0,
    reviews_text_count: 0,
    added: 0,
    added_by_status: null,
    metacritic: null,
    suggestions_count: 0,
    id: 429892,
    score: "54.407516",
    clip: null,
    tags: [
      {
        id: 84,
        name: "Abstract",
        slug: "abstract",
        language: "eng",
        games_count: 3717,
        image_background:
          "https://media.rawg.io/media/screenshots/b27/b2768108376b0a59422c9bafc95a00ad.jpg"
      },
      {
        id: 192,
        name: "Mature",
        slug: "mature",
        language: "eng",
        games_count: 585,
        image_background:
          "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
      },
      {
        id: 334,
        name: "achievements",
        slug: "achievements",
        language: "eng",
        games_count: 4519,
        image_background:
          "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
      },
      {
        id: 406,
        name: "Story",
        slug: "story",
        language: "eng",
        games_count: 6640,
        image_background:
          "https://media.rawg.io/media/games/596/596215939911a0d97facfc224b1bca30.jpg"
      },
      {
        id: 617,
        name: "weird",
        slug: "weird",
        language: "eng",
        games_count: 2648,
        image_background:
          "https://media.rawg.io/media/screenshots/9ec/9ec8f7c447877a823750bfe38380b1b8.jpg"
      },
      {
        id: 1127,
        name: "keyboard",
        slug: "keyboard",
        language: "eng",
        games_count: 1257,
        image_background:
          "https://media.rawg.io/media/screenshots/f7f/f7fbb7547900fb61a12a0a649dc18216.jpg"
      },
      {
        id: 1709,
        name: "work",
        slug: "work",
        language: "eng",
        games_count: 4838,
        image_background:
          "https://media.rawg.io/media/games/11a/11a4b86d38c877c6ffbf915547388d01.jpg"
      },
      {
        id: 7337,
        name: "c",
        slug: "c",
        language: "eng",
        games_count: 1303,
        image_background:
          "https://media.rawg.io/media/screenshots/88b/88bd7e5cc220ec719704cff6608927ff.jpg"
      }
    ],
    user_game: null,
    reviews_count: 0,
    community_rating: 0,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/screenshots/3a2/3a2011f1ff3c3d578ba0f5b2eb3e0d82.jpg"
      },
      {
        id: 2347758,
        image:
          "https://media.rawg.io/media/screenshots/b02/b022ea2b192203d401ec6bdcae6633a9.jpg"
      },
      {
        id: 2347759,
        image:
          "https://media.rawg.io/media/screenshots/8b2/8b2033c46c5d345c5fbcf5ba280c7acd.jpg"
      },
      {
        id: 2347760,
        image:
          "https://media.rawg.io/media/screenshots/3a2/3a2011f1ff3c3d578ba0f5b2eb3e0d82.jpg"
      }
    ],
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
    genres: []
  },
  {
    slug: "grand-pigeons-duty",
    name: "Grand Pigeon's Duty",
    playtime: 5,
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc"
        }
      }
    ],
    stores: [
      {
        store: {
          id: 1,
          name: "Steam",
          slug: "steam"
        }
      }
    ],
    released: "2016-08-05",
    tba: false,
    background_image:
      "https://media.rawg.io/media/screenshots/da4/da461b85c69f535f2241f48e426e127c.jpg",
    rating: 3.25,
    rating_top: 4,
    ratings: [
      {
        id: 4,
        title: "recommended",
        count: 4,
        percent: 50.0
      },
      {
        id: 3,
        title: "meh",
        count: 3,
        percent: 37.5
      },
      {
        id: 1,
        title: "skip",
        count: 1,
        percent: 12.5
      }
    ],
    ratings_count: 8,
    reviews_text_count: 0,
    added: 194,
    added_by_status: {
      yet: 8,
      owned: 181,
      beaten: 1,
      dropped: 4
    },
    metacritic: null,
    suggestions_count: 129,
    id: 11575,
    score: "29.624912",
    clip: null,
    tags: [
      {
        id: 45,
        name: "2D",
        slug: "2d",
        language: "eng",
        games_count: 73411,
        image_background:
          "https://media.rawg.io/media/games/5f4/5f4780690dbf04900cbac5f05b9305f3.jpg"
      },
      {
        id: 40847,
        name: "Steam Achievements",
        slug: "steam-achievements",
        language: "eng",
        games_count: 18293,
        image_background:
          "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
      },
      {
        id: 123,
        name: "Comedy",
        slug: "comedy",
        language: "eng",
        games_count: 4582,
        image_background:
          "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
      },
      {
        id: 160,
        name: "Dating Sim",
        slug: "dating-sim",
        language: "eng",
        games_count: 1715,
        image_background:
          "https://media.rawg.io/media/games/880/880f6aa65fe9d786f1a455963df76180.jpg"
      },
      {
        id: 42,
        name: "Great Soundtrack",
        slug: "great-soundtrack",
        language: "eng",
        games_count: 2954,
        image_background:
          "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
      },
      {
        id: 120,
        name: "Memes",
        slug: "memes",
        language: "eng",
        games_count: 821,
        image_background:
          "https://media.rawg.io/media/games/2eb/2eb8f1b4787c3beaa568bc52c0580cba.jpg"
      },
      {
        id: 122,
        name: "Pixel Graphics",
        slug: "pixel-graphics",
        language: "eng",
        games_count: 34478,
        image_background:
          "https://media.rawg.io/media/games/3be/3be0e624424d3453005019799a760af2.jpg"
      },
      {
        id: 24,
        name: "RPG",
        slug: "rpg",
        language: "eng",
        games_count: 9630,
        image_background:
          "https://media.rawg.io/media/games/91c/91c4f377c1e09755b60a0102c5252843.jpg"
      },
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 81631,
        image_background:
          "https://media.rawg.io/media/games/91c/91c4f377c1e09755b60a0102c5252843.jpg"
      },
      {
        id: 118,
        name: "Story Rich",
        slug: "story-rich",
        language: "eng",
        games_count: 6834,
        image_background:
          "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
      },
      {
        id: 7808,
        name: "steam-trading-cards",
        slug: "steam-trading-cards",
        language: "eng",
        games_count: 7608,
        image_background:
          "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
      },
      {
        id: 42392,
        name: "Приключение",
        slug: "prikliuchenie",
        language: "rus",
        games_count: 16394,
        image_background:
          "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
      },
      {
        id: 42394,
        name: "Глубокий сюжет",
        slug: "glubokii-siuzhet",
        language: "rus",
        games_count: 3061,
        image_background:
          "https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg"
      },
      {
        id: 42398,
        name: "Инди",
        slug: "indi-2",
        language: "rus",
        games_count: 29447,
        image_background:
          "https://media.rawg.io/media/games/7f0/7f021d4a3577ac9d591a628a431fc2e5.jpg"
      },
      {
        id: 42399,
        name: "Казуальная игра",
        slug: "kazualnaia-igra",
        language: "rus",
        games_count: 15715,
        image_background:
          "https://media.rawg.io/media/games/93e/93ee6101e1c943732f06080dddb0fe4c.jpg"
      },
      {
        id: 42401,
        name: "Отличный саундтрек",
        slug: "otlichnyi-saundtrek",
        language: "rus",
        games_count: 4184,
        image_background:
          "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
      },
      {
        id: 42408,
        name: "Симулятор свиданий",
        slug: "simuliator-svidanii",
        language: "rus",
        games_count: 403,
        image_background:
          "https://media.rawg.io/media/screenshots/5d9/5d9d6da555c357edde9cfa2db622083f.jpg"
      },
      {
        id: 42412,
        name: "Ролевая игра",
        slug: "rolevaia-igra",
        language: "rus",
        games_count: 7250,
        image_background:
          "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
      },
      {
        id: 42413,
        name: "Симулятор",
        slug: "simuliator",
        language: "rus",
        games_count: 8256,
        image_background:
          "https://media.rawg.io/media/games/fd6/fd6a1eecd3ec0f875f1924f3656b7dd9.jpg"
      },
      {
        id: 42415,
        name: "Пиксельная графика",
        slug: "pikselnaia-grafika",
        language: "rus",
        games_count: 2702,
        image_background:
          "https://media.rawg.io/media/games/e40/e40cc9d1957b0a0ed7e389834457b524.jpg"
      },
      {
        id: 42417,
        name: "Экшен",
        slug: "ekshen",
        language: "rus",
        games_count: 18256,
        image_background:
          "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
      },
      {
        id: 42421,
        name: "Стратегия",
        slug: "strategiia",
        language: "rus",
        games_count: 8387,
        image_background:
          "https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg"
      },
      {
        id: 42481,
        name: "Юмор",
        slug: "iumor",
        language: "rus",
        games_count: 1506,
        image_background:
          "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
      },
      {
        id: 42561,
        name: "Мемы",
        slug: "memy",
        language: "rus",
        games_count: 779,
        image_background:
          "https://media.rawg.io/media/games/63c/63cb04333dea1726e90b38dc3d10258f.jpg"
      },
      {
        id: 42587,
        name: "Аркада",
        slug: "arkada",
        language: "rus",
        games_count: 2038,
        image_background:
          "https://media.rawg.io/media/games/7cf/7cf38d2d80267c121c6d0d361e9429ce.jpg"
      }
    ],
    user_game: null,
    reviews_count: 8,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/screenshots/da4/da461b85c69f535f2241f48e426e127c.jpg"
      },
      {
        id: 94584,
        image:
          "https://media.rawg.io/media/screenshots/fb0/fb04055cbc06bccce29b1596c49a8f34.jpg"
      },
      {
        id: 94585,
        image:
          "https://media.rawg.io/media/screenshots/1aa/1aab81f5076fb76fe255b10797ac77f4.jpg"
      },
      {
        id: 94586,
        image:
          "https://media.rawg.io/media/screenshots/910/91023d5d76234221ee4e889a0296abd6.jpg"
      },
      {
        id: 94587,
        image:
          "https://media.rawg.io/media/screenshots/973/973c5f0aa8c6115f5bc624d00be3b6c4.jpg"
      },
      {
        id: 94588,
        image:
          "https://media.rawg.io/media/screenshots/da4/da461b85c69f535f2241f48e426e127c.jpg"
      }
    ],
    parent_platforms: [
      {
        platform: {
          id: 1,
          name: "PC",
          slug: "pc"
        }
      }
    ],
    genres: [
      {
        id: 3,
        name: "Adventure",
        slug: "adventure"
      },
      {
        id: 4,
        name: "Action",
        slug: "action"
      },
      {
        id: 5,
        name: "RPG",
        slug: "role-playing-games-rpg"
      },
      {
        id: 40,
        name: "Casual",
        slug: "casual"
      },
      {
        id: 14,
        name: "Simulation",
        slug: "simulation"
      },
      {
        id: 51,
        name: "Indie",
        slug: "indie"
      }
    ]
  },
  {
    slug: "grand-ages-medieval",
    name: "Grand Ages: Medieval",
    playtime: 4,
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc"
        }
      },
      {
        platform: {
          id: 18,
          name: "PlayStation 4",
          slug: "playstation4"
        }
      },
      {
        platform: {
          id: 3,
          name: "iOS",
          slug: "ios"
        }
      },
      {
        platform: {
          id: 5,
          name: "macOS",
          slug: "macos"
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
    stores: [
      {
        store: {
          id: 1,
          name: "Steam",
          slug: "steam"
        }
      },
      {
        store: {
          id: 3,
          name: "PlayStation Store",
          slug: "playstation-store"
        }
      },
      {
        store: {
          id: 4,
          name: "App Store",
          slug: "apple-appstore"
        }
      },
      {
        store: {
          id: 5,
          name: "GOG",
          slug: "gog"
        }
      }
    ],
    released: "2015-09-24",
    tba: false,
    background_image:
      "https://media.rawg.io/media/screenshots/936/936fb3bc45c61b713dd5b646ddb91aa5.jpg",
    rating: 3.2,
    rating_top: 3,
    ratings: [
      {
        id: 3,
        title: "meh",
        count: 5,
        percent: 50.0
      },
      {
        id: 4,
        title: "recommended",
        count: 4,
        percent: 40.0
      },
      {
        id: 1,
        title: "skip",
        count: 1,
        percent: 10.0
      }
    ],
    ratings_count: 10,
    reviews_text_count: 0,
    added: 106,
    added_by_status: {
      yet: 5,
      owned: 92,
      beaten: 1,
      toplay: 2,
      dropped: 6
    },
    metacritic: 63,
    suggestions_count: 562,
    id: 3129,
    score: "29.624912",
    clip: null,
    tags: [
      {
        id: 40836,
        name: "Full controller support",
        slug: "full-controller-support",
        language: "eng",
        games_count: 8590,
        image_background:
          "https://media.rawg.io/media/games/91c/91c4f377c1e09755b60a0102c5252843.jpg"
      },
      {
        id: 40847,
        name: "Steam Achievements",
        slug: "steam-achievements",
        language: "eng",
        games_count: 18293,
        image_background:
          "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg"
      },
      {
        id: 40849,
        name: "Steam Cloud",
        slug: "steam-cloud",
        language: "eng",
        games_count: 8602,
        image_background:
          "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg"
      },
      {
        id: 213,
        name: "City Builder",
        slug: "city-builder",
        language: "eng",
        games_count: 833,
        image_background:
          "https://media.rawg.io/media/games/3c9/3c994986d767f56e7b72a124a35d4c3c.jpg"
      },
      {
        id: 195,
        name: "Economy",
        slug: "economy",
        language: "eng",
        games_count: 860,
        image_background:
          "https://media.rawg.io/media/games/a88/a886c37bf112d009e318b106db9d420a.jpg"
      },
      {
        id: 100,
        name: "Grand Strategy",
        slug: "grand-strategy",
        language: "eng",
        games_count: 160,
        image_background:
          "https://media.rawg.io/media/games/3d2/3d260e4aaeb88b7ac53c81040ac4b80c.jpg"
      },
      {
        id: 42,
        name: "Great Soundtrack",
        slug: "great-soundtrack",
        language: "eng",
        games_count: 2954,
        image_background:
          "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
      },
      {
        id: 89,
        name: "Historical",
        slug: "historical",
        language: "eng",
        games_count: 664,
        image_background:
          "https://media.rawg.io/media/games/59f/59fc1c5de1d29cb9234741c97d250150.jpg"
      },
      {
        id: 67,
        name: "Management",
        slug: "management",
        language: "eng",
        games_count: 3135,
        image_background:
          "https://media.rawg.io/media/games/ce6/ce6c9b58be2ca76688a768cffcb043d1.jpg"
      },
      {
        id: 66,
        name: "Medieval",
        slug: "medieval",
        language: "eng",
        games_count: 1930,
        image_background:
          "https://media.rawg.io/media/games/116/116b93c6876a361a96b2eee3ee58ab13.jpg"
      },
      {
        id: 7,
        name: "Multiplayer",
        slug: "multiplayer",
        language: "eng",
        games_count: 20855,
        image_background:
          "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
      },
      {
        id: 36,
        name: "Open World",
        slug: "open-world",
        language: "eng",
        games_count: 2724,
        image_background:
          "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
      },
      {
        id: 287,
        name: "Political",
        slug: "political",
        language: "eng",
        games_count: 232,
        image_background:
          "https://media.rawg.io/media/games/3e5/3e5b137b31a674513af88ce6f24994e6.jpg"
      },
      {
        id: 219,
        name: "Politics",
        slug: "politics",
        language: "eng",
        games_count: 318,
        image_background:
          "https://media.rawg.io/media/screenshots/cea/cea57dce0127ef9238b08d5946cb9210.jpg"
      },
      {
        id: 147,
        name: "Resource Management",
        slug: "resource-management",
        language: "eng",
        games_count: 258,
        image_background:
          "https://media.rawg.io/media/screenshots/acb/acb4f324aeb126cf5816ea0f4a9d8325.jpg"
      },
      {
        id: 168,
        name: "RTS",
        slug: "rts",
        language: "eng",
        games_count: 897,
        image_background:
          "https://media.rawg.io/media/screenshots/8b6/8b649c615aa00df9b0487c7a5c94507d.jpg"
      },
      {
        id: 37,
        name: "Sandbox",
        slug: "sandbox",
        language: "eng",
        games_count: 2655,
        image_background:
          "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
      },
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 81631,
        image_background:
          "https://media.rawg.io/media/games/91c/91c4f377c1e09755b60a0102c5252843.jpg"
      },
      {
        id: 245,
        name: "Trading",
        slug: "trading",
        language: "eng",
        games_count: 517,
        image_background:
          "https://media.rawg.io/media/screenshots/d04/d04e0108f3d0ece8eebd40da4674784e.jpg"
      },
      {
        id: 70,
        name: "War",
        slug: "war",
        language: "eng",
        games_count: 5645,
        image_background:
          "https://media.rawg.io/media/games/e9c/e9c042d14515eb3ff7cb4db9fe78e435.jpg"
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
        id: 7808,
        name: "steam-trading-cards",
        slug: "steam-trading-cards",
        language: "eng",
        games_count: 7608,
        image_background:
          "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
      },
      {
        id: 11669,
        name: "stats",
        slug: "stats",
        language: "eng",
        games_count: 3257,
        image_background:
          "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
      },
      {
        id: 42391,
        name: "Средневековье",
        slug: "srednevekove",
        language: "rus",
        games_count: 409,
        image_background:
          "https://media.rawg.io/media/screenshots/c97/c97b943741f5fbc936fe054d9d58851d.jpg"
      },
      {
        id: 42396,
        name: "Для одного игрока",
        slug: "dlia-odnogo-igroka",
        language: "rus",
        games_count: 9384,
        image_background:
          "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
      },
      {
        id: 42401,
        name: "Отличный саундтрек",
        slug: "otlichnyi-saundtrek",
        language: "rus",
        games_count: 4184,
        image_background:
          "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
      },
      {
        id: 42403,
        name: "История",
        slug: "istoriia",
        language: "rus",
        games_count: 598,
        image_background:
          "https://media.rawg.io/media/games/fcf/fcf81e19683092d40d519a6d6a9bcf6e.jpg"
      },
      {
        id: 42407,
        name: "Аниме",
        slug: "anime-2",
        language: "rus",
        games_count: 2542,
        image_background:
          "https://media.rawg.io/media/games/054/054ab7dd5e83f84f1ec8bedf849b627f.jpg"
      },
      {
        id: 42413,
        name: "Симулятор",
        slug: "simuliator",
        language: "rus",
        games_count: 8256,
        image_background:
          "https://media.rawg.io/media/games/fd6/fd6a1eecd3ec0f875f1924f3656b7dd9.jpg"
      },
      {
        id: 42414,
        name: "Сельское хозяйство",
        slug: "selskoe-khoziaistvo",
        language: "rus",
        games_count: 115,
        image_background:
          "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg"
      },
      {
        id: 42421,
        name: "Стратегия",
        slug: "strategiia",
        language: "rus",
        games_count: 8387,
        image_background:
          "https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg"
      },
      {
        id: 42425,
        name: "Для нескольких игроков",
        slug: "dlia-neskolkikh-igrokov",
        language: "rus",
        games_count: 3838,
        image_background:
          "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
      },
      {
        id: 42430,
        name: "Война",
        slug: "voina",
        language: "rus",
        games_count: 590,
        image_background:
          "https://media.rawg.io/media/games/f14/f1422eacab98c5f85a5123da4e9d9e89.jpg"
      },
      {
        id: 42444,
        name: "Песочница",
        slug: "pesochnitsa",
        language: "rus",
        games_count: 1417,
        image_background:
          "https://media.rawg.io/media/games/b5a/b5a1ee231afc407b49cc5f9716980b2d.jpg"
      },
      {
        id: 42498,
        name: "Обмен",
        slug: "obmen",
        language: "rus",
        games_count: 81,
        image_background:
          "https://media.rawg.io/media/screenshots/fa4/fa48cb5604f319e7ca2c8fe00ed92a1d_eYGbcOJ.jpg"
      },
      {
        id: 42503,
        name: "Стратегия в реальном времени",
        slug: "strategiia-v-realnom-vremeni",
        language: "rus",
        games_count: 634,
        image_background:
          "https://media.rawg.io/media/screenshots/8c4/8c414d6590b8c70b1cd374ce1a447f52.jpg"
      },
      {
        id: 42504,
        name: "Градостроительный симулятор",
        slug: "gradostroitelnyi-simuliator",
        language: "rus",
        games_count: 308,
        image_background:
          "https://media.rawg.io/media/games/08b/08b2eee52a9876a48b955e5149affe5b.jpg"
      },
      {
        id: 42519,
        name: "Глобальная стратегия",
        slug: "globalnaia-strategiia",
        language: "rus",
        games_count: 199,
        image_background:
          "https://media.rawg.io/media/screenshots/b80/b80d19ccb50b0fa6a043ac9b6ccb07dd.jpg"
      },
      {
        id: 42521,
        name: "Экономика",
        slug: "ekonomika",
        language: "rus",
        games_count: 390,
        image_background:
          "https://media.rawg.io/media/games/3c9/3c994986d767f56e7b72a124a35d4c3c.jpg"
      },
      {
        id: 42551,
        name: "Менеджмент",
        slug: "menedzhment",
        language: "rus",
        games_count: 911,
        image_background:
          "https://media.rawg.io/media/games/d49/d4974f5eb9e6c47794f681f149280d9d.jpg"
      },
      {
        id: 42558,
        name: "Политика",
        slug: "politika",
        language: "rus",
        games_count: 122,
        image_background:
          "https://media.rawg.io/media/screenshots/aae/aaecb1200151adb83f13b0abfb4fae5e.jpg"
      },
      {
        id: 42559,
        name: "Политическая",
        slug: "politicheskaia",
        language: "rus",
        games_count: 136,
        image_background:
          "https://media.rawg.io/media/screenshots/8dd/8dd91aec091db2afcf23774d4d6baefe.jpg"
      },
      {
        id: 42631,
        name: "Управление ресурсами",
        slug: "upravlenie-resursami",
        language: "rus",
        games_count: 416,
        image_background:
          "https://media.rawg.io/media/games/a88/a886c37bf112d009e318b106db9d420a.jpg"
      }
    ],
    user_game: null,
    reviews_count: 10,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/screenshots/936/936fb3bc45c61b713dd5b646ddb91aa5.jpg"
      },
      {
        id: 28459,
        image:
          "https://media.rawg.io/media/screenshots/cee/cee9adc2ea909910350e4db3315d88fd.jpg"
      },
      {
        id: 28460,
        image:
          "https://media.rawg.io/media/screenshots/0f2/0f272ee5cfc654d769f538ff06ffab11.jpg"
      },
      {
        id: 28461,
        image:
          "https://media.rawg.io/media/screenshots/cf8/cf81fed6d59b04b2126d186f03d8ade1.jpg"
      },
      {
        id: 28463,
        image:
          "https://media.rawg.io/media/screenshots/208/208f6b9f483ac1f3a2dd50be7f04b39a.jpg"
      },
      {
        id: 28464,
        image:
          "https://media.rawg.io/media/screenshots/8d0/8d0e1c88850b735bbf75226158e2b1e8.jpg"
      },
      {
        id: 28465,
        image:
          "https://media.rawg.io/media/screenshots/b4d/b4d8151143c8a3a18de09f3dc41afd07.jpg"
      }
    ],
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
          id: 2,
          name: "PlayStation",
          slug: "playstation"
        }
      },
      {
        platform: {
          id: 4,
          name: "iOS",
          slug: "ios"
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
    genres: [
      {
        id: 10,
        name: "Strategy",
        slug: "strategy"
      },
      {
        id: 5,
        name: "RPG",
        slug: "role-playing-games-rpg"
      },
      {
        id: 14,
        name: "Simulation",
        slug: "simulation"
      }
    ]
  },
  {
    slug: "grand-ages-rome",
    name: "Grand Ages: Rome",
    playtime: 1,
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc"
        }
      }
    ],
    stores: [
      {
        store: {
          id: 1,
          name: "Steam",
          slug: "steam"
        }
      }
    ],
    released: "2009-02-26",
    tba: false,
    background_image:
      "https://media.rawg.io/media/screenshots/c11/c115321fd1b4d55f67897bae90699d9e.jpg",
    rating: 2.6,
    rating_top: 3,
    ratings: [
      {
        id: 3,
        title: "meh",
        count: 5,
        percent: 50.0
      },
      {
        id: 1,
        title: "skip",
        count: 3,
        percent: 30.0
      },
      {
        id: 4,
        title: "recommended",
        count: 2,
        percent: 20.0
      }
    ],
    ratings_count: 10,
    reviews_text_count: 0,
    added: 327,
    added_by_status: {
      yet: 9,
      owned: 313,
      dropped: 4,
      playing: 1
    },
    metacritic: 72,
    suggestions_count: 542,
    id: 14010,
    score: "28.86784",
    clip: null,
    tags: [
      {
        id: 213,
        name: "City Builder",
        slug: "city-builder",
        language: "eng",
        games_count: 833,
        image_background:
          "https://media.rawg.io/media/games/3c9/3c994986d767f56e7b72a124a35d4c3c.jpg"
      },
      {
        id: 89,
        name: "Historical",
        slug: "historical",
        language: "eng",
        games_count: 664,
        image_background:
          "https://media.rawg.io/media/games/59f/59fc1c5de1d29cb9234741c97d250150.jpg"
      },
      {
        id: 7,
        name: "Multiplayer",
        slug: "multiplayer",
        language: "eng",
        games_count: 20855,
        image_background:
          "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
      },
      {
        id: 292,
        name: "Rome",
        slug: "rome",
        language: "eng",
        games_count: 52,
        image_background:
          "https://media.rawg.io/media/screenshots/73d/73d413a69e675e4e1593ce15fe9953db.jpg"
      },
      {
        id: 168,
        name: "RTS",
        slug: "rts",
        language: "eng",
        games_count: 897,
        image_background:
          "https://media.rawg.io/media/screenshots/8b6/8b649c615aa00df9b0487c7a5c94507d.jpg"
      },
      {
        id: 42396,
        name: "Для одного игрока",
        slug: "dlia-odnogo-igroka",
        language: "rus",
        games_count: 9384,
        image_background:
          "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
      },
      {
        id: 42403,
        name: "История",
        slug: "istoriia",
        language: "rus",
        games_count: 598,
        image_background:
          "https://media.rawg.io/media/games/fcf/fcf81e19683092d40d519a6d6a9bcf6e.jpg"
      },
      {
        id: 42413,
        name: "Симулятор",
        slug: "simuliator",
        language: "rus",
        games_count: 8256,
        image_background:
          "https://media.rawg.io/media/games/fd6/fd6a1eecd3ec0f875f1924f3656b7dd9.jpg"
      },
      {
        id: 42421,
        name: "Стратегия",
        slug: "strategiia",
        language: "rus",
        games_count: 8387,
        image_background:
          "https://media.rawg.io/media/games/dd5/dd50d4266915d56dd5b63ae1bf72606a.jpg"
      },
      {
        id: 42425,
        name: "Для нескольких игроков",
        slug: "dlia-neskolkikh-igrokov",
        language: "rus",
        games_count: 3838,
        image_background:
          "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
      },
      {
        id: 42503,
        name: "Стратегия в реальном времени",
        slug: "strategiia-v-realnom-vremeni",
        language: "rus",
        games_count: 634,
        image_background:
          "https://media.rawg.io/media/screenshots/8c4/8c414d6590b8c70b1cd374ce1a447f52.jpg"
      },
      {
        id: 42504,
        name: "Градостроительный симулятор",
        slug: "gradostroitelnyi-simuliator",
        language: "rus",
        games_count: 308,
        image_background:
          "https://media.rawg.io/media/games/08b/08b2eee52a9876a48b955e5149affe5b.jpg"
      },
      {
        id: 42553,
        name: "Строительство",
        slug: "stroitelstvo",
        language: "rus",
        games_count: 840,
        image_background:
          "https://media.rawg.io/media/screenshots/95a/95a557d6dfa6430dd662a136d71e5915.jpg"
      },
      {
        id: 42689,
        name: "Рим",
        slug: "rim",
        language: "rus",
        games_count: 38,
        image_background:
          "https://media.rawg.io/media/screenshots/1a2/1a24cab65563b4803d38fdba0c2ff862.jpg"
      }
    ],
    user_game: null,
    reviews_count: 10,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/screenshots/c11/c115321fd1b4d55f67897bae90699d9e.jpg"
      },
      {
        id: 121182,
        image:
          "https://media.rawg.io/media/screenshots/1a8/1a8891f460325e95a729285ec07178f7.jpg"
      },
      {
        id: 121183,
        image:
          "https://media.rawg.io/media/screenshots/356/356ca0ae6b0604f958dafe12edc190bd.jpg"
      },
      {
        id: 121184,
        image:
          "https://media.rawg.io/media/screenshots/146/14608042244dd961c27dfe26335e5699.jpg"
      },
      {
        id: 121185,
        image:
          "https://media.rawg.io/media/screenshots/520/520fd41968f33134b3d5b0b3e53fbe71.jpg"
      },
      {
        id: 121186,
        image:
          "https://media.rawg.io/media/screenshots/81f/81f7ace4fbc05e01166986619f48a3af.jpg"
      },
      {
        id: 121187,
        image:
          "https://media.rawg.io/media/screenshots/7a5/7a5df5afc460cb01d9029a588bbae980.jpg"
      }
    ],
    parent_platforms: [
      {
        platform: {
          id: 1,
          name: "PC",
          slug: "pc"
        }
      }
    ],
    genres: [
      {
        id: 10,
        name: "Strategy",
        slug: "strategy"
      },
      {
        id: 14,
        name: "Simulation",
        slug: "simulation"
      }
    ]
  },
  {
    slug: "grand-theft-auto-iv",
    name: "Grand Theft Auto IV",
    playtime: 9,
    platforms: [
      {
        platform: {
          id: 4,
          name: "PC",
          slug: "pc"
        }
      },
      {
        platform: {
          id: 1,
          name: "Xbox One",
          slug: "xbox-one"
        }
      },
      {
        platform: {
          id: 14,
          name: "Xbox 360",
          slug: "xbox360"
        }
      },
      {
        platform: {
          id: 16,
          name: "PlayStation 3",
          slug: "playstation3"
        }
      }
    ],
    stores: [
      {
        store: {
          id: 1,
          name: "Steam",
          slug: "steam"
        }
      },
      {
        store: {
          id: 3,
          name: "PlayStation Store",
          slug: "playstation-store"
        }
      },
      {
        store: {
          id: 2,
          name: "Xbox Store",
          slug: "xbox-store"
        }
      },
      {
        store: {
          id: 7,
          name: "Xbox 360 Store",
          slug: "xbox360"
        }
      }
    ],
    released: "2008-04-29",
    tba: false,
    background_image:
      "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg",
    rating: 4.23,
    rating_top: 4,
    ratings: [
      {
        id: 4,
        title: "recommended",
        count: 782,
        percent: 45.41
      },
      {
        id: 5,
        title: "exceptional",
        count: 714,
        percent: 41.46
      },
      {
        id: 3,
        title: "meh",
        count: 182,
        percent: 10.57
      },
      {
        id: 1,
        title: "skip",
        count: 44,
        percent: 2.56
      }
    ],
    ratings_count: 1710,
    reviews_text_count: 8,
    added: 7650,
    added_by_status: {
      yet: 187,
      owned: 5215,
      beaten: 1505,
      toplay: 114,
      dropped: 572,
      playing: 57
    },
    metacritic: 95,
    suggestions_count: 514,
    id: 4459,
    score: "25.997969",
    clip: {
      clip:
        "https://media.rawg.io/media/stories-640/be3/be37d466f17e6f07137a7abccb1db0b2.mp4",
      clips: {
        "320":
          "https://media.rawg.io/media/stories-320/d4b/d4bdda80a368a827ccddcf1c7176bac6.mp4",
        "640":
          "https://media.rawg.io/media/stories-640/be3/be37d466f17e6f07137a7abccb1db0b2.mp4",
        full:
          "https://media.rawg.io/media/stories/d6e/d6e9068e5fb35421f00728309550df0a.mp4"
      },
      video: "C1SSQtsIutg",
      preview:
        "https://media.rawg.io/media/stories-previews/760/7603c0db02b132a6e90276f86360984b.jpg"
    },
    tags: [
      {
        id: 40845,
        name: "Partial Controller Support",
        slug: "partial-controller-support",
        language: "eng",
        games_count: 6220,
        image_background:
          "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg"
      },
      {
        id: 13,
        name: "Atmospheric",
        slug: "atmospheric",
        language: "eng",
        games_count: 8814,
        image_background:
          "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
      },
      {
        id: 321,
        name: "Bowling",
        slug: "bowling",
        language: "eng",
        games_count: 73,
        image_background:
          "https://media.rawg.io/media/screenshots/bfe/bfe56a096a0c0d85b2b8850101b27b2a.jpg"
      },
      {
        id: 193,
        name: "Classic",
        slug: "classic",
        language: "eng",
        games_count: 1447,
        image_background:
          "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
      },
      {
        id: 18,
        name: "Co-op",
        slug: "co-op",
        language: "eng",
        games_count: 5314,
        image_background:
          "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg"
      },
      {
        id: 144,
        name: "Crime",
        slug: "crime",
        language: "eng",
        games_count: 1498,
        image_background:
          "https://media.rawg.io/media/games/6cc/6cc68fa183b905ac9d85efb9797776f6.jpg"
      },
      {
        id: 148,
        name: "Dark Humor",
        slug: "dark-humor",
        language: "eng",
        games_count: 1131,
        image_background:
          "https://media.rawg.io/media/games/c6b/c6bfece1daf8d06bc0a60632ac78e5bf.jpg"
      },
      {
        id: 4,
        name: "Funny",
        slug: "funny",
        language: "eng",
        games_count: 9470,
        image_background:
          "https://media.rawg.io/media/games/ec3/ec3a7db7b8ab5a71aad622fe7c62632f.jpg"
      },
      {
        id: 26,
        name: "Gore",
        slug: "gore",
        language: "eng",
        games_count: 3157,
        image_background:
          "https://media.rawg.io/media/games/410/41033a495ce8f7fd4b0934bdb975f12a.jpg"
      },
      {
        id: 62,
        name: "Moddable",
        slug: "moddable",
        language: "eng",
        games_count: 433,
        image_background:
          "https://media.rawg.io/media/games/10d/10d19e52e5e8415d16a4d344fe711874.jpg"
      },
      {
        id: 7,
        name: "Multiplayer",
        slug: "multiplayer",
        language: "eng",
        games_count: 20855,
        image_background:
          "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
      },
      {
        id: 36,
        name: "Open World",
        slug: "open-world",
        language: "eng",
        games_count: 2724,
        image_background:
          "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
      },
      {
        id: 37,
        name: "Sandbox",
        slug: "sandbox",
        language: "eng",
        games_count: 2655,
        image_background:
          "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
      },
      {
        id: 153,
        name: "Satire",
        slug: "satire",
        language: "eng",
        games_count: 517,
        image_background:
          "https://media.rawg.io/media/screenshots/f4a/f4a74abbf7f25f4d4db0983b77e98bf0.jpg"
      },
      {
        id: 31,
        name: "Singleplayer",
        slug: "singleplayer",
        language: "eng",
        games_count: 81631,
        image_background:
          "https://media.rawg.io/media/games/91c/91c4f377c1e09755b60a0102c5252843.jpg"
      },
      {
        id: 149,
        name: "Third Person",
        slug: "third-person",
        language: "eng",
        games_count: 2507,
        image_background:
          "https://media.rawg.io/media/games/d1a/d1a2e99ade53494c6330a0ed945fe823.jpg"
      },
      {
        id: 150,
        name: "Third-Person Shooter",
        slug: "third-person-shooter",
        language: "eng",
        games_count: 980,
        image_background:
          "https://media.rawg.io/media/games/7ac/7aca7ccf0e70cd0974cb899ab9e5158e.jpg"
      },
      {
        id: 411,
        name: "cooperative",
        slug: "cooperative",
        language: "eng",
        games_count: 2227,
        image_background:
          "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
      },
      {
        id: 42392,
        name: "Приключение",
        slug: "prikliuchenie",
        language: "rus",
        games_count: 16394,
        image_background:
          "https://media.rawg.io/media/games/b7b/b7b8381707152afc7d91f5d95de70e39.jpg"
      },
      {
        id: 42396,
        name: "Для одного игрока",
        slug: "dlia-odnogo-igroka",
        language: "rus",
        games_count: 9384,
        image_background:
          "https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg"
      },
      {
        id: 42400,
        name: "Атмосфера",
        slug: "atmosfera",
        language: "rus",
        games_count: 4147,
        image_background:
          "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
      },
      {
        id: 42417,
        name: "Экшен",
        slug: "ekshen",
        language: "rus",
        games_count: 18256,
        image_background:
          "https://media.rawg.io/media/games/6cd/6cd653e0aaef5ff8bbd295bf4bcb12eb.jpg"
      },
      {
        id: 42425,
        name: "Для нескольких игроков",
        slug: "dlia-neskolkikh-igrokov",
        language: "rus",
        games_count: 3838,
        image_background:
          "https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg"
      },
      {
        id: 42428,
        name: "Шутер",
        slug: "shuter",
        language: "rus",
        games_count: 2239,
        image_background:
          "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
      },
      {
        id: 42438,
        name: "Поддержка модификаций",
        slug: "podderzhka-modifikatsii",
        language: "rus",
        games_count: 329,
        image_background:
          "https://media.rawg.io/media/games/149/149bbed9d90dc09328ba79bbacfda3c8.jpg"
      },
      {
        id: 42441,
        name: "От третьего лица",
        slug: "ot-tretego-litsa",
        language: "rus",
        games_count: 1064,
        image_background:
          "https://media.rawg.io/media/games/1bb/1bb86c35ffa3eb0d299b01a7c65bf908.jpg"
      },
      {
        id: 42442,
        name: "Открытый мир",
        slug: "otkrytyi-mir",
        language: "rus",
        games_count: 1983,
        image_background:
          "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
      },
      {
        id: 42443,
        name: "Криминал",
        slug: "kriminal",
        language: "rus",
        games_count: 177,
        image_background:
          "https://media.rawg.io/media/games/546/546cf59a24b0ae308e311a07611ca22f.jpg"
      },
      {
        id: 42444,
        name: "Песочница",
        slug: "pesochnitsa",
        language: "rus",
        games_count: 1417,
        image_background:
          "https://media.rawg.io/media/games/b5a/b5a1ee231afc407b49cc5f9716980b2d.jpg"
      },
      {
        id: 42446,
        name: "Шутер от третьего лица",
        slug: "shuter-ot-tretego-litsa",
        language: "rus",
        games_count: 434,
        image_background:
          "https://media.rawg.io/media/games/1bd/1bd2657b81eb0c99338120ad444b24ff.jpg"
      },
      {
        id: 42461,
        name: "Классика",
        slug: "klassika",
        language: "rus",
        games_count: 1276,
        image_background:
          "https://media.rawg.io/media/games/ad2/ad2ffdf80ba993654f31da045bc02456.jpg"
      },
      {
        id: 42482,
        name: "Смешная",
        slug: "smeshnaia",
        language: "rus",
        games_count: 2453,
        image_background:
          "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
      },
      {
        id: 42491,
        name: "Мясо",
        slug: "miaso",
        language: "rus",
        games_count: 2555,
        image_background:
          "https://media.rawg.io/media/games/e04/e04963f3ac4c4fa83a1dc0b9231e50db.jpg"
      },
      {
        id: 42500,
        name: "Физика",
        slug: "fizika",
        language: "rus",
        games_count: 932,
        image_background:
          "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
      },
      {
        id: 42502,
        name: "Чёрный юмор",
        slug: "chiornyi-iumor",
        language: "rus",
        games_count: 329,
        image_background:
          "https://media.rawg.io/media/screenshots/f2f/f2f3c93d6153da7aee590f3ab8ccd803.jpg"
      },
      {
        id: 42683,
        name: "Сатира",
        slug: "satira",
        language: "rus",
        games_count: 89,
        image_background:
          "https://media.rawg.io/media/screenshots/152/15291bad326bdbd1cf9b06948a31bfc0.jpg"
      },
      {
        id: 42708,
        name: "Боулинг",
        slug: "bouling",
        language: "rus",
        games_count: 11,
        image_background:
          "https://media.rawg.io/media/screenshots/68e/68e97504f735468800ab9aa50a775cdf.jpg"
      }
    ],
    user_game: null,
    reviews_count: 1722,
    saturated_color: "0f0f0f",
    dominant_color: "0f0f0f",
    short_screenshots: [
      {
        id: -1,
        image:
          "https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg"
      },
      {
        id: 139042,
        image:
          "https://media.rawg.io/media/screenshots/07f/07f7cf80741ff306e4eca982c3e64ac8.jpg"
      },
      {
        id: 139043,
        image:
          "https://media.rawg.io/media/screenshots/fef/fefd51ec13aa33acbd796ef79bcef7cb.jpg"
      },
      {
        id: 139044,
        image:
          "https://media.rawg.io/media/screenshots/b78/b78ffd258d5793be704c380e572748bc.jpg"
      },
      {
        id: 139045,
        image:
          "https://media.rawg.io/media/screenshots/17c/17c85ab9dfc4fda8e1e5ba72932ef2bf.jpg"
      },
      {
        id: 139046,
        image:
          "https://media.rawg.io/media/screenshots/a12/a12ca99cc74c1e7eba7100b0891dd1e0.jpg"
      },
      {
        id: 139047,
        image:
          "https://media.rawg.io/media/screenshots/b25/b254f9729ae3f36a9ccffccaa01d5cf6.jpg"
      }
    ],
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
          id: 2,
          name: "PlayStation",
          slug: "playstation"
        }
      },
      {
        platform: {
          id: 3,
          name: "Xbox",
          slug: "xbox"
        }
      }
    ],
    genres: [
      {
        id: 3,
        name: "Adventure",
        slug: "adventure"
      },
      {
        id: 4,
        name: "Action",
        slug: "action"
      }
    ]
  }
];

const searchResult = query => {
  const axios = require("axios");
  return axios({
    method: "GET",
    url:
      "https://rawg-video-games-database.p.rapidapi.com/games?page=1&page_size=5&search=" +
      query,
    headers: {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
      "x-rapidapi-key": KEY,
      useQueryString: true
    }
  })
    .then(response => {
      return response.data.results;
    })
    .catch(error => {
      console.log(error);
    });
};

const NavBar = ({ logout }) => {
  const { Title } = Typography;
  const [options, setOptions] = useState([]);
  const [value, setValue] = useState("");

  const handleSearch = value => {
    if (value) {
      searchResult(value).then(results => {
        let options = new Array(results.length)
        .join(".")
        .split(".")
        .map((item, idx) => {
          const id = results[idx].id;
          const name = results[idx].name;
          const imgSrc = results[idx].background_image;
          return {
            key: id,
            value: name,
            label: (
              <div
                style={{
                  display: "flex",
                  alignItems: "center"
                }}
              >
                <img src={imgSrc} width={100} height={"auto"} />
                <div style={{ marginLeft: "10px" }}>{name}</div>
              </div>
            )
          };
        });
      setOptions(options);
      })
    } else {
      setOptions([]);
    }
  };

  let history = useHistory();

  const onSelect = (value, option) => {
    history.push(GAME_DETAILS + "/" + option.key);
    setValue("");
  };

  const onChange = value => {
    setValue(value);
  };

  return (
    <Row>
      <Col span={24} style={{ display: "flex", alignItems: "center" }}>
        <Link to={HOME}>
          <Button type="link" htmlType="button" block>
            <Title level={3} style={{ color: "white" }}>
              GameTracker
            </Title>
          </Button>
        </Link>

        <AutoComplete
          dropdownMatchSelectWidth={252}
          style={{ width: 500 }}
          onSearch={debounce(handleSearch, 500)}
          options={options}
          onSelect={(value, option) => onSelect(value, option)}
          value={value}
          onChange={value => onChange(value)}
        >
          <Input.Search size="medium" placeholder="Search games..." />
        </AutoComplete>

        <Link to={LOGIN} style={{ marginLeft: "auto" }}>
          <Button type="link" htmlType="button" block onClick={logout}>
            Logout
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

export default withRouter(NavBar);
