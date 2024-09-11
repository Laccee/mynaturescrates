<template>
  <header class="header">
    <div class="site-title">
      <router-link to="/">Nature's Crates</router-link>
    </div>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About Us</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/community">Community</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>

<style scoped>
.header {
  background-color: #2c3e50;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.site-title {
  font-size: 1.5em;
  color: white;
}
nav ul {
  display: flex;
  list-style: none;
  padding: 0;
}
nav ul li {
  margin: 0 15px;
}
nav ul li a {
  color: white;
  text-decoration: none;
}
</style>
