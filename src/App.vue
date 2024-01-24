<template>
  <div>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from './components/contact/TheFooter.vue';

export default {
  components: {
    TheFooter
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  line-height: 1.5;
  font-family: 'Poppins', sans-serif;
  margin: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 16px;
  color: #666666;
  background-color: #FCEAD7;
  width: 100%;
}

:focus-visible {
  outline: rgb(10, 46, 44, 0.1) auto 0.5px;
  outline-offset: -2px;
}
</style>
