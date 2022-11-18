<template>
  <nav class="header">
    <h1>LOGO</h1>
    <div class="gnb">
      <ul>
        <!-- <li><a href="#" @click="$router.push({name:'home'})">HOME</a></li>
        <li><a href="#" @click="$router.push({name:'product'})">PRODUCT</a></li> -->
        <li><router-link to="/">HOME</router-link></li>
        <li><router-link to="/product">PRODUCT</router-link></li>
      </ul>
    </div>
    <div class="footer">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, tempora!
    </div>

  </nav>
  <router-view></router-view>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.gnb{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
