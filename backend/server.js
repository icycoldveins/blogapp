const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Post = require("./models/post"); // Import your Post model at the top of your file
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing application/json

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// Define routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/posts", async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).send(post);
  } catch (error) {
    res.status(400).send(error);
  }
});

const userRoutes = require("./routes/userRoutes");

app.use("/api/users", userRoutes);

app.get("/api/posts", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.send(posts);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.get("/posts/:id", async (req, res) => {
  const id = req.params.id;
  const post = await Post.findById(id); // Assuming Post is your Mongoose model
  if (post) {
    res.json(post);
  } else {
    res.status(404).send("Post not found");
  }
});
app.post("/posts", async (req, res) => {
  const { title, content } = req.body;
  const post = new Post({ title, content });
  try {
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: "Error creating post" });
  }
});
app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Error fetching posts" });
  }
});
app.get("/api/posts/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
