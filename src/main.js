import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ListaHeroes from './components/ListaHeroes.vue'
import DetalleHeroe from './components/DetalleHeroe.vue'
import Redirect from './components/Redirect.vue'
import HelloWorld from './components/HelloWorld.vue'
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false


Vue.use(VueRouter);
 
const routes = [
  {path: '/', component: HelloWorld},
  {path: '/home/:param', component: ListaHeroes},
  {path: '/detalle/:id?', component: DetalleHeroe},
  { path: "/redirect/:param", component: Redirect }
];

const router = new VueRouter({routes, mode: 'history'});

new Vue({
  router,
  render: h => h(App)
  
}).$mount('#app')