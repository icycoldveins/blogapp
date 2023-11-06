<template>
  <div class="create-post">
    <h1>Create Post</h1>
    <form @submit.prevent="submitPost">
      <div>
        <label for="title">Title:</label>
        <input type="text" id="title" v-model="post.title" required />
      </div>
      <div>
        <label for="content">Content:</label>
        <textarea id="content" v-model="post.content" required></textarea>
      </div>
      <button type="submit">Create Post</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CreatePost",
  data() {
    return {
      post: {
        title: "",
        content: "",
      },
    };
  },
  methods: {
    async submitPost() {
      try {
        const response = await axios.post(
          "http://localhost:5000/posts",
          this.post
        );
        console.log(response.data); // Log the response data to the console
        alert("Post Created with ID: " + response.data._id); // Alert the user with the ID of the created post
        this.$router.push("/post/" + response.data._id); // Redirect to the page of the created post
      } catch (error) {
        console.error(error);
        alert("Error creating post");
      }
    },
  },
};
</script>

<style>
/* Styling for CreatePost */
.create-post {
  /* Add your styles here */
}
</style>
