import { createRouter, createWebHistory } from "vue-router";
import SourceList from "@/components/SourceList.vue";
import FriendsList from "@/components/FriendsList.vue";
import FriendProfile from "@/components/FriendProfile.vue";

const routes = [
  { path: "/source", component: SourceList },
  { path: "/friends", component: FriendsList },
  { path: "/friend/:id", component: FriendProfile, name: "user" },
  { path: "/", redirect: "/source" },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
