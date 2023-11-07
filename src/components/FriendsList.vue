<template>
  <div class="uniq-friends">
    <div class="input-block">
      <h3>Find Friend:</h3>
      <input
        v-model="searchFriend"
        type="text"
        class="source-input"
        placeholder="Friend Name..." />
    </div>
    <ul class="friends-list">
      <li
        v-for="friend in sortedAndFilteredFriends"
        :key="friend.id"
        :style="friendPanelStyle(friend)"
        class="friend-panel"
        @click="
          $router.push({
            name: 'user',
            params: { id: Number(friend.id) },
          })
        ">
        <img class="friend-img" :src="friend.picture" alt="Фото друга" />
        <h3>{{ friend.name }}</h3>
        <p>
          Gender: <span class="friend-info">{{ friend.gender }}</span>
        </p>
        <p>
          Age: <span class="friend-info">{{ friend.age }}</span>
        </p>
        <p>
          Friends number:
          <span class="friend-info">{{ friend.friends.length }}</span>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchFriend: "",
    };
  },
  computed: {
    sortedFriends() {
      return this.$store.getters.sortedFriends;
    },
    users() {
      return this.$store.state.users;
    },
    sortedAndFilteredFriends() {
      return this.sortedFriends.filter((friend) =>
        friend.name
          .toLowerCase()
          .includes(this.searchFriend.toLocaleLowerCase())
      );
    },
  },
  created() {
    this.$store.commit("setFriends");
  },
  methods: {
    friendPanelStyle(friend) {
      const hasInFriends = this.inFriends(friend, this.users);

      const brightness = hasInFriends / this.users.length;

      const background = `rgba(123, 12, 12, ${brightness})`;
      return { background };
    },
    inFriends(friend, users) {
      let addedInFriends = users.filter((fr) =>
        fr.friends.some((f) => f.id == friend.id)
      );
      return addedInFriends.length;
    },
  },
};
</script>

<style scoped>
.uniq-friends {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-block {
  margin-top: 20px;
  margin-bottom: 5px;
}

.source-input {
  width: 150px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 12px;
  margin-bottom: 10px;
}

.friends-list {
  padding: 0;
  max-width: 970px;
}

.friend-img {
  width: 130px;
  height: 100px;
}

.friend-info {
  font-weight: 600;
  font-size: 18px;
}

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
