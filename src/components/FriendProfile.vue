<template>
  <div class="user-profile">
    <div class="user-details">
      <img :src="user.photo" alt="Фото пользователя" />
      <h3>{{ user.name }}</h3>
      <p>Пол: {{ user.gender }}</p>
      <p>Возраст: {{ user.age }}</p>
      <p>В друзьях у:
        <ul>
          <li v-for="friend in inFriends" :key="friend.id">{{ friend.name }}</li>
        </ul>
      </p>
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
  created() {
    this.user = this.$store.getters.getUserById(this.userId);
    this.inFriends = this.$store.state.users.filter((friend) =>
      friend.friends.some((f) => f.id == this.userId)
    );
  },
};
</script>

<style scoped>
.user-profile {
  display: flex;
  justify-content: space-between;
  margin: 20px;
}

.user-details {
  width: 20%;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
	text-align: center;
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
  width: 60%;
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
