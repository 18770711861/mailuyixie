<template>
  <Navbar></Navbar>
  <section class="page-content">
    <Search :placeholder="placeholder" choose="交流"></Search>
  </section>
  <foot></foot>
</template>

<style lang="scss">
  section.page-content {
  }
</style>

<script>
  // 导入模块
  import Navbar from 'Navbar'
  import Search from 'Search'

  export default {
    data () {
      return {
        placeholder: '嘿! 想一起交流吗？'
      }
    },
    components: {
      Navbar,
      Search
    }
  }
</script>
