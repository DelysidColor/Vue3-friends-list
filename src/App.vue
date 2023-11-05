<template>
  <div id="app">
    <nav class="nav">
      <router-link class="nav-btn" to="/source">Исходный</router-link>
      <router-link
        v-if="$store.state.friends.length > 0"
        class="nav-btn"
        to="/friends"
        >Друзья</router-link
      >
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>
<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.nav {
  display: flex;
}

.nav-btn {
  margin-right: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  width: 150px;
  padding: 8px 30px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  text-decoration: none;
  text-align: center;
}

.nav-btn:hover {
  background-color: #0056b3;
}
.active {
  background-color: #023f80;
}
</style>
