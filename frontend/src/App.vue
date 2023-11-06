<template>
    <div id="app">
      <header>
        <h1>My Blog</h1>
        <nav>
          <router-link to="/">Home</router-link> |
          <router-link to="/create">Create Post</router-link>
        </nav>
      </header>
      <main>
        <router-view/>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
  };
  </script>
  
  <style>
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
  }
  
  header {
    background-color: #333;
    color: white;
    padding: 10px;
    text-align: center;
  }
  
  nav a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
  }
  
  main {
    margin: 20px;
  }
  </style>