<template>
  <Navbar></Navbar>
  <section class="page-content">
    <Search :placeholder="placeholder" choose="简介"></Search>
  </section>
  <Foot></Foot>
</template>

<style lang="scss">
</style>

<script>
  // 导入模块
  import Navbar from 'Navbar'
  import Search from 'Search'
  import About from 'AboutShow'
  import Foot from 'Footer'
  export default {
    data () {
      return {
        placeholder: 'hi ! 想找到什么图片'
      }
    },
    components: {
      Navbar,
      Search,
      About,
      Foot
    }
  }
</script>
