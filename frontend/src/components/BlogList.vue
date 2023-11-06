<template>
  <div>
    <h1>Blog List</h1>
    <div v-for="post in posts" :key="post._id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.content }}</p>
      <router-link :to="`/post/${post._id}`">Read More</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "BlogList",
  data() {
    return {
      posts: [], // This should be an array of blog post objects
    };
  },
  created() {
    axios
      .get("/api/posts")
      .then((response) => {
        this.posts = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
