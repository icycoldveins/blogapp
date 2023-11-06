<template>
  <div class="blog-post">
    <h1>{{ post?.title || "" }}</h1>
    <p>{{ post?.datePosted ? formatDate(post.datePosted) : "" }}</p>
    <div v-html="post?.content || ''"></div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

export default {
  name: "BlogPost",
  setup() {
    const post = ref(null);
    const route = useRoute();

    const formatDate = (date) => {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Intl.DateTimeFormat("en-US", options).format(new Date(date));
    };

    const fetchPost = async () => {
      const id = route.params.id;
      console.log("ID:", id);
      if (id) {
        try {
          const response = await axios.get(`/api/posts/${id}`);
          post.value = response.data;
        } catch (error) {
          // Consider setting an error state and displaying it in the template
          console.error("Error fetching post:", error);
        }
      } else {
        console.error("ID is undefined");
        // Handle the undefined ID case appropriately
      }
    };

    onMounted(fetchPost);

    return {
      post,
      formatDate,
      fetchPost,
    };
  },
};
</script>
