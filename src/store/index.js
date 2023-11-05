import { createStore } from "vuex";

export default createStore({
  state: {
    friends: [],
    users: [
      {
        id: 0,
        name: "Arto Saari",
        gender: "male",
        age: 42,
        posts: [
          {
            header: "post11",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
          },
          {
            header: "post22",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
          },
          {
            header: "post33",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
          },
        ],
        friendCount: 10,
        friends: [
          {
            id: 2,
            name: "Tom Penny",
            gender: "male",
            age: 45,
            friendCount: 20,
            friends: [
              {
                id: 0,
                name: "Arto Saari",
                gender: "male",
                age: 42,
                posts: [
                  {
                    header: "post11",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post22",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post33",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                ],
              },
              {
                id: 1,
                name: "Marl Appleyard",
                gender: "male",
                age: 39,
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
        id: 2,
        name: "Tom Penny",
        gender: "male",
        age: 45,
        friendCount: 20,
        friends: [
          {
            id: 0,
            name: "Arto Saari",
            gender: "male",
            age: 42,
            posts: [
              {
                header: "post11",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
              },
              {
                header: "post22",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
              },
              {
                header: "post33",
                body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
              },
            ],
            friendCount: 10,
            friends: [
              {
                id: 2,
                name: "Tom Penny",
                gender: "male",
                age: 45,
                friendCount: 20,
                friends: [
                  {
                    id: 0,
                    name: "Arto Saari",
                    gender: "male",
                    age: 42,
                    posts: [
                      {
                        header: "post11",
                        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                      },
                      {
                        header: "post22",
                        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                      },
                      {
                        header: "post33",
                        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                      },
                    ],
                  },
                  {
                    id: 1,
                    name: "Marl Appleyard",
                    gender: "male",
                    age: 39,
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
            name: "Marl Appleyard",
            gender: "male",
            age: 39,
            friendCount: 10,
            friends: [
              {
                id: 2,
                name: "Tom Penny",
                gender: "male",
                age: 45,
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
        name: "Marl Appleyard",
        gender: "male",
        age: 39,
        friendCount: 10,
        friends: [
          {
            id: 2,
            name: "Tom Penny",
            gender: "male",
            age: 45,
            friendCount: 20,
            friends: [
              {
                id: 0,
                name: "Arto Saari",
                gender: "male",
                age: 42,
                posts: [
                  {
                    header: "post11",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post22",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                  {
                    header: "post33",
                    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                  },
                ],
                friendCount: 10,
                friends: [
                  {
                    id: 2,
                    name: "Tom Penny",
                    gender: "male",
                    age: 45,
                    friendCount: 20,
                    friends: [
                      {
                        id: 0,
                        name: "Arto Saari",
                        gender: "male",
                        age: 42,
                        posts: [
                          {
                            header: "post11",
                            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                          },
                          {
                            header: "post22",
                            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                          },
                          {
                            header: "post33",
                            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
                          },
                        ],
                      },
                      {
                        id: 1,
                        name: "Marl Appleyard",
                        gender: "male",
                        age: 39,
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
                name: "Marl Appleyard",
                gender: "male",
                age: 39,
                friendCount: 10,
                friends: [
                  {
                    id: 2,
                    name: "Tom Penny",
                    gender: "male",
                    age: 45,
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
        id: "3",
        name: "Aron Homoky",
        gender: "male",
        age: 40,
        posts: [
          {
            header: "post11",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
          },
          {
            header: "post22",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
          },
          {
            header: "post33",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, non aliquam facere explicabo eius quisquam exercitationem minus itaque quia sit.",
          },
        ],
        friendCount: 0,
        friends: [],
      },
    ],
  },
  getters: {
    sortedFriends(state) {
      return state.friends.sort((a, b) => (a.name > b.name ? 1 : -1));
    },
    getFriends(state) {
      const uniqueFriendsSet = new Set();

      state.users.forEach((user) => {
        user.friends.forEach((friend) => {
          uniqueFriendsSet.add(JSON.stringify(friend));
        });
      });
      const uniqueFriends = Array.from(uniqueFriendsSet).map((friendStr) =>
        JSON.parse(friendStr)
      );

      return uniqueFriends;
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
