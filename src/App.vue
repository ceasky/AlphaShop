<template>
  <div id="shop-forum">
    <NavBar />
    <main role="main" class="mt-5 bg-white">
      <router-view />
    </main>
    <FooTerVue />
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import FooTerVue from './components/FooTer.vue'

export default {
  components: {
    NavBar,
    FooTerVue
  }
}
</script>
