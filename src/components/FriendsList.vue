<template>
  <div>
    <ul>
      <li
        v-for="friend in sortedFriends"
        :key="friend.id"
        :style="friendPanelStyle(friend)"
        class="friend-panel"
        @click="
          $router.push({
            name: 'user',
            params: { id: Number(friend.id) },
          })
        ">
        <img :src="friend.photo" alt="Фото друга" />
        <h3>{{ friend.name }}</h3>
        <p>Пол: {{ friend.gender }}</p>
        <p>Возраст: {{ friend.age }}</p>
        <p>Количество друзей: {{ friend.friends.length }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    sortedFriends() {
      return this.$store.getters.sortedFriends;
    },
  },
  created() {
    this.$store.commit("setFriends");
  },
  methods: {
    friendPanelStyle(friend) {
      const commonFriendsCount = this.calculateCommonFriends(
        friend,
        this.$store.state.users
      );
      const brightness = commonFriendsCount / this.$store.state.users.length;
      const background = `rgba(123, 12, 12, ${brightness})`;
      return { background };
    },
    calculateCommonFriends(friend, users) {
      const commonFriends = [];

      users.forEach((user) => {
        if (user.id !== friend.id) {
          let friendSet = new Set();
          let userSet = new Set();
          if (friend.friends && Array.isArray(friend.friends)) {
            friendSet = new Set(friend.friends.map((f) => f.id));
          }
          if (user.friends && Array.isArray(user.friends)) {
            userSet = new Set(user.friends.map((f) => f.id));
          }

          const intersection = [...friendSet].filter((friendId) =>
            userSet.has(friendId)
          );

          if (intersection.length > 0) {
            commonFriends.push({
              userId: user.id,
              commonFriends: intersection.length,
            });
          }
        }
      });

      return commonFriends.length;
    },
  },
};
</script>

<style scoped>
.friend-panel {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  display: inline-block;
  width: 200px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: transform 0.2s;
}

.friend-panel:hover {
  transform: scale(1.1);
}

.friend-panel img {
  max-width: 100%;
}

.friend-panel h3 {
  margin: 10px 0;
}

.friend-panel.active {
  background-color: rgba(255, 0, 0, 0.2);
}
</style>
