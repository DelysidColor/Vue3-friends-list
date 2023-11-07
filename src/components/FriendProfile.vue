<template>
  <div class="user-profile">
    <div class="user-details">
      <div class="user-image-div">
        <img class="user-img" :src="user.picture" alt="Фото пользователя" />
      </div>
      <p class="user-name">{{ user.name }}</p>
      <p>Age: {{ user.age }}</p>
      <div>
        Added as a friend by:
        <ul>
          <li v-for="friend in inFriends" :key="friend.id">
            {{ friend.name }}
          </li>
        </ul>
      </div>
    </div>
    <div class="user-posts">
      <div class="post" v-for="post in user.posts" :key="post.header">
        <h4>{{ post.header }}</h4>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inFriends: [],
      user: null,
    };
  },
  computed: {
    userId() {
      return this.$route.params.id;
    },
  },
  methods: {
    addedAsFriend() {
      this.inFriends = this.$store.state.users.filter((friend) =>
        friend.friends.some((f) => f.id == this.userId)
      );
    },
    setUserById() {
      this.user = this.$store.getters.getUserById(this.userId);
    },
  },
  created() {
    this.setUserById();
    this.addedAsFriend();
  },
};
</script>

<style scoped>
.user-img {
  width: 100%;
  margin-bottom: 20px;
}

.user-image-div {
  max-width: 200px;
}

.user-name {
  color: black !important;
  font-size: 20px !important;
  font-weight: 700 !important;
}

.user-profile {
  display: flex;
  justify-content: space-evenly;
  margin: 20px;
}

.user-details {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  height: fit-content;
  text-align: center;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.user-details h3 {
  margin: 0;
  font-size: 24px;
  color: #333;
}

.user-details p {
  margin: 5px 0;
  font-size: 16px;
  color: #555;
}

.user-details ul {
  list-style: none;
  padding: 0;
}

.user-details li {
  font-size: 16px;
  color: #007bff;
}

.user-posts {
  width: 40%;
  padding: 20px;
}

.post {
  margin: 10px 0;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.post h4 {
  margin: 0;
  font-size: 20px;
  color: #333;
}

.post p {
  font-size: 16px;
  color: #555;
}
</style>
