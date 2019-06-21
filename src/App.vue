<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/demo">Demo</router-link>|
      <router-link to="/list">List</router-link>|
      <router-link to="/Upload">Upload</router-link>|
      <router-link to="/Form">Form</router-link>|
      <router-link to="/Table">Table</router-link>|
      <router-link to="/Dialog">Dialog</router-link>|
      <router-link to="/Progress">Progress</router-link>|
      <router-link to="/Tree">Tree</router-link>|  
      <router-link to="/Pagination">Pagination</router-link> |   
      <router-link to="/Carousel">Carousel</router-link>         
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
