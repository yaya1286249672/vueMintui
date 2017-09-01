<template>
  <div id="app">
    <div>
      <mt-header fixed title="标题">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="outsale">
          <div>
            哈哈
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item id="order">
          <mt-cell v-for="n in 5" title="tab-container 2"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="find">
          <mt-cell v-for="n in 7" title="tab-container 3"></mt-cell>
        </mt-tab-container-item>
        <mt-tab-container-item id="mine">
          <mt-cell v-for="n in 7" title="tab-container 5"></mt-cell>
        </mt-tab-container-item>
      </mt-tab-container>
      <mt-tabbar v-model="selected">
        <mt-tab-item id="outsale">
          <img slot="icon" src="./assets/logo.png">
          外卖1
        </mt-tab-item>
        <mt-tab-item id="order">
          <img slot="icon" src="./assets/logo.png">
          订单2
        </mt-tab-item>
        <mt-tab-item id="find">
          <img slot="icon" src="./assets/logo.png">
          发现3
        </mt-tab-item>
        <mt-tab-item id="mine">
          <img slot="icon" src="./assets/logo.png">
          我的4
        </mt-tab-item>
      </mt-tabbar>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
      return {
          selected: 'outsale',
          active:'outsale'
      };
  }
}
</script>

<style>
  *{mrgin:0;padding:0}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
