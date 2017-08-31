import Vue from 'vue'
import App from './App.vue'
import  VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.use(VueRouter);

import Mint from 'mint-ui';
import { Header } from 'mint-ui';
import { Cell } from 'mint-ui';
import { Tabbar, TabItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';

import { Button } from 'mint-ui';
Vue.use(Mint);
new Vue({
  el: '#app',
  render: h => h(App)
})
