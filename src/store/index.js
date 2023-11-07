import { createStore } from "vuex";
import { hasFriend } from "@/utils/array";

export default createStore({
  state: {
    friends: [],
    users: [
      {
        id: 0,
        picture: "http://placehold.it/200x200",
        age: 24,
        name: "Stuart Griffith",
        gender: "male",
        posts: [
          {
            header: "post1",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
          },
          {
            header: "post2",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
          },
          {
            header: "post3",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
          },
        ],
        friendsCount: 1,
        friends: [
          {
            id: 1,
            picture: "http://placehold.it/200x200",
            age: 29,
            name: "Trudy Short",
            gender: "female",
            posts: [
              {
                header: "post1",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
              },
              {
                header: "post2",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
              },
              {
                header: "post3",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
              },
            ],
            friendsCount: 3,
            friends: [
              {
                id: 2,
                picture: "http://placehold.it/200x200",
                age: 34,
                name: "Florine Ball",
                gender: "female",
                posts: [
                  {
                    header: "post1",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post2",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post3",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                ],
              },
              {
                id: 0,
                picture: "http://placehold.it/200x200",
                age: 24,
                name: "Stuart Griffith",
                gender: "male",
                posts: [
                  {
                    header: "post1",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post2",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post3",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                ],
              },
              {
                id: 3,
                picture: "http://placehold.it/200x200",
                age: 38,
                name: "Anthony Stafford",
                gender: "male",
                posts: [
                  {
                    header: "post1",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post2",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post3",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 1,
        picture: "http://placehold.it/200x200",
        age: 29,
        name: "Trudy Short",
        gender: "female",
        posts: [
          {
            header: "post1",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
          },
          {
            header: "post2",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
          },
          {
            header: "post3",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
          },
        ],
        friendsCount: 3,
        friends: [
          {
            id: 2,
            picture: "http://placehold.it/200x200",
            age: 34,
            name: "Florine Ball",
            gender: "female",
            posts: [
              {
                header: "post1",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
              },
              {
                header: "post2",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
              },
              {
                header: "post3",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
              },
            ],
            friends: [
              {
                id: 1,
                picture: "http://placehold.it/200x200",
                age: 29,
                name: "Trudy Short",
                gender: "female",
                posts: [
                  {
                    header: "post1",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post2",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post3",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                ],
              },
              {
                id: 3,
                picture: "http://placehold.it/200x200",
                age: 38,
                name: "Anthony Stafford",
                gender: "male",
                posts: [
                  {
                    header: "post1",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post2",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post3",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                ],
              },
            ],
          },
          {
            id: 0,
            picture: "http://placehold.it/200x200",
            age: 24,
            name: "Stuart Griffith",
            gender: "male",
            posts: [
              {
                header: "post1",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
              },
              {
                header: "post2",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
              },
              {
                header: "post3",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
              },
            ],
            friends: [
              {
                id: 1,
                picture: "http://placehold.it/200x200",
                age: 29,
                name: "Trudy Short",
                gender: "female",
                posts: [
                  {
                    header: "post1",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post2",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post3",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            picture: "http://placehold.it/200x200",
            age: 38,
            name: "Anthony Stafford",
            gender: "male",
            posts: [
              {
                header: "post1",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
              },
              {
                header: "post2",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
              },
              {
                header: "post3",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
              },
            ],
            friends: [
              {
                id: 2,
                picture: "http://placehold.it/200x200",
                age: 34,
                name: "Florine Ball",
                gender: "female",
                posts: [
                  {
                    header: "post1",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post2",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post3",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                ],
              },
              {
                id: 1,
                picture: "http://placehold.it/200x200",
                age: 29,
                name: "Trudy Short",
                gender: "female",
                posts: [
                  {
                    header: "post1",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post2",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post3",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        picture: "http://placehold.it/200x200",
        age: 34,
        name: "Florine Ball",
        gender: "female",
        posts: [
          {
            header: "post1",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
          },
          {
            header: "post2",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
          },
          {
            header: "post3",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
          },
        ],
        friendsCount: 2,
        friends: [
          {
            id: 1,
            picture: "http://placehold.it/200x200",
            age: 29,
            name: "Trudy Short",
            gender: "female",
            posts: [
              {
                header: "post1",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
              },
              {
                header: "post2",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
              },
              {
                header: "post3",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
              },
            ],
            friends: [
              {
                id: 2,
                picture: "http://placehold.it/200x200",
                age: 34,
                name: "Florine Ball",
                gender: "female",
                posts: [
                  {
                    header: "post1",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post2",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post3",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                ],
              },
              {
                id: 0,
                picture: "http://placehold.it/200x200",
                age: 24,
                name: "Stuart Griffith",
                gender: "male",
                posts: [
                  {
                    header: "post1",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post2",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post3",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                ],
              },
              {
                id: 3,
                picture: "http://placehold.it/200x200",
                age: 38,
                name: "Anthony Stafford",
                gender: "male",
                posts: [
                  {
                    header: "post1",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post2",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post3",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                ],
              },
            ],
          },
          {
            id: 3,
            picture: "http://placehold.it/200x200",
            age: 38,
            name: "Anthony Stafford",
            gender: "male",
            posts: [
              {
                header: "post1",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
              },
              {
                header: "post2",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
              },
              {
                header: "post3",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
              },
            ],
            friends: [
              {
                id: 2,
                picture: "http://placehold.it/200x200",
                age: 34,
                name: "Florine Ball",
                gender: "female",
                posts: [
                  {
                    header: "post1",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post2",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post3",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 3,
        picture: "http://placehold.it/200x200",
        age: 38,
        name: "Anthony Stafford",
        gender: "male",
        posts: [
          {
            header: "post1",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
          },
          {
            header: "post2",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
          },
          {
            header: "post3",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
          },
        ],
        friendsCount: 2,
        friends: [
          {
            id: 2,
            picture: "http://placehold.it/200x200",
            age: 34,
            name: "Florine Ball",
            gender: "female",
            posts: [
              {
                header: "post1",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
              },
              {
                header: "post2",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
              },
              {
                header: "post3",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
              },
            ],
            friends: [
              {
                id: 1,
                picture: "http://placehold.it/200x200",
                age: 29,
                name: "Trudy Short",
                gender: "female",
                posts: [
                  {
                    header: "post1",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post2",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post3",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                ],
              },
              {
                id: 3,
                picture: "http://placehold.it/200x200",
                age: 38,
                name: "Anthony Stafford",
                gender: "male",
                posts: [
                  {
                    header: "post1",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post2",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post3",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                ],
              },
            ],
          },
          {
            id: 1,
            picture: "http://placehold.it/200x200",
            age: 29,
            name: "Trudy Short",
            gender: "female",
            posts: [
              {
                header: "post1",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
              },
              {
                header: "post2",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
              },
              {
                header: "post3",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
              },
            ],
            friends: [
              {
                id: 2,
                picture: "http://placehold.it/200x200",
                age: 34,
                name: "Florine Ball",
                gender: "female",
                posts: [
                  {
                    header: "post1",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post2",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post3",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                ],
              },
              {
                id: 0,
                picture: "http://placehold.it/200x200",
                age: 24,
                name: "Stuart Griffith",
                gender: "male",
                posts: [
                  {
                    header: "post1",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post2",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post3",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                ],
              },
              {
                id: 3,
                picture: "http://placehold.it/200x200",
                age: 38,
                name: "Anthony Stafford",
                gender: "male",
                posts: [
                  {
                    header: "post1",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post2",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post3",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 4,
        picture: "http://placehold.it/200x200",
        age: 38,
        name: "Beck Jennings",
        gender: "male",
        posts: [
          {
            header: "post1",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
          },
          {
            header: "post2",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
          },
          {
            header: "post3",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
          },
        ],
        friends: [
          {
            id: 1,
            picture: "http://placehold.it/200x200",
            age: 29,
            name: "Trudy Short",
            gender: "female",
            posts: [
              {
                header: "post1",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
              },
              {
                header: "post2",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
              },
              {
                header: "post3",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
              },
            ],
            friendsCount: 3,
            friends: [
              {
                id: 2,
                picture: "http://placehold.it/200x200",
                age: 34,
                name: "Florine Ball",
                gender: "female",
                posts: [
                  {
                    header: "post1",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post2",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post3",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                ],
              },
              {
                id: 0,
                picture: "http://placehold.it/200x200",
                age: 24,
                name: "Stuart Griffith",
                gender: "male",
                posts: [
                  {
                    header: "post1",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post2",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post3",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                ],
              },
              {
                id: 3,
                picture: "http://placehold.it/200x200",
                age: 38,
                name: "Anthony Stafford",
                gender: "male",
                posts: [
                  {
                    header: "post1",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post2",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post3",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  getters: {
    sortedFriends(state) {
      return state.friends.sort((a, b) => (a.name > b.name ? 1 : -1));
    },
    getFriends(state) {
      const uniqueFriendsSet = [];

      state.users.forEach((user) => {
        if (user.friends.length > 0) {
          user.friends.forEach((friend) => {
            if (!hasFriend(uniqueFriendsSet, friend.id)) {
              uniqueFriendsSet.push(friend);
            }
          });
        }
      });

      return uniqueFriendsSet;
    },
    getUserById: (state) => (id) => {
      return state.users.find((user) => user.id == id);
    },
  },
  mutations: {
    setFriends(state) {
      state.friends = this.getters.getFriends;
    },
  },
  actions: {},
  modules: {},
});
