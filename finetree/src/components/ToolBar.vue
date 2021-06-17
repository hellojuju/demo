<template>
    <div class="header">
        <router-link to="/">Home</router-link> |
        <router-link to="/item">Item</router-link> |
        <router-link to="/mypage">Mypage</router-link>
    </div>
  
</template>

<script>
export default {

}
</script>

<style scoped>
 .header {
     color: white;
     background-color: #42b883;
     display : flex;
     padding : 8px;
  }

  .header .router-link-exact-active {
      color :#34595e;
  }
  .header a {
      color : white;
  }
</style>