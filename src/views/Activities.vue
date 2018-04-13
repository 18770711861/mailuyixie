<template>
  <Navbar></Navbar>
  <section class="page-content">
    <Search :placeholder="placeholder" choose="活动"></Search>
  </section>
  <Top></Top>
</template>

<script>
  // 导入模块
  import Navbar from 'Navbar'
  import Foot from 'Footer'
  import Search from 'Search'
  import Waterfall from 'Waterfall'
  import Top from 'Top'

  export default {
    data () {
      return {
        placeholder: '嘿! 想找什么活动呀？'
      }
    },
    components: {
      Navbar,
      Foot,
      Search,
      Waterfall,
      Top
    }
  }
</script>
