<template>
  <div class="source-list">
    <router-link to="/friends">
      <button class="btn" @click="setFriends">All friends</button>
    </router-link>
    <ul class="users-cards">
      <li v-for="user in users" :key="user.id" class="user-card">
        <img class="user-image" :src="user.picture" alt="Фото друга" />
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    setFriends() {
      this.$store.commit("setFriends");
    },
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
};
</script>

<style scoped>
.user-image {
  margin-right: 5px;
  width: 40px;
  height: 40px;
}
.source-list {
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

.users-cards {
  list-style: none;
  padding: 0;
}

.user-card {
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid rgb(246, 246, 246);
  box-sizing: border-box;
}

.btn {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 8px 30px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

.btn:hover {
  background-color: #0056b3;
}

.btn:active {
  background-color: #023f80;
}
</style>
