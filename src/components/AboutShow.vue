<template>
  <div class="about-show">
    <a class="about-item" v-link="{name: 'Search', query: {text: about.category}}">
      <div class="about-img">
        <img v-bind:src="about.url">
      </div>
      <h5>{{about.title}}</h5>
    </a>
    <a class="about-id" v-link="{ name: 'AboutDetail', params: {id: about.id }}">
      <i class="fa fa-camera"></i>
      <span>{{about.id}}</span>
    </a>
  </div>
</template>

<style lang="scss">
  .about-show {
    width: 100%;
    height: 305px;
    background-color: white;
    margin-bottom: 20px;
    // padding: 8px;//图片展示图片与边框之间的宽度
    text-align: center;

    a.about-item {
      width: 100%;
      height: 305px;
      display: block;
      z-index: 1;
    }

    h5 {
      color: black;
      padding: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space:nowrap;
    }

    .about-img{
      height: 85%;
      overflow: hidden;
      transition: all 0.25s ease-out;

      img {
        width: 100%;
        height: 100%;
        transition: all 0.25s ease-out;
        transform: scale(1.1);
        background-size: cover;
      }
    }

    a.about-id {
      display: none;
      position: absolute;
      top: 8px;
      left: 22px;
      z-index: 99;
      color: gray;
      min-width: 100px;
      height: 30px;
      background-color: white;
      padding-top: 3px;

      i {
        padding-left: 4px;
        padding-right: 4px;
      }
    }

    a.about-id:hover span{
      color: #02a388;
    }

    .about-item:hover  img{
      width: 90%;
      height: 94%;
      opacity: 0.8;
    }
  }

  @media screen and (max-width: 420px) {
    .about-show {
      a.about-id:hover span{
        color: #02a388;
      }

      .about-item:hover  img{
        width: 100%;
        height: 100%;
        opacity: 1;
      }
    }
  }
</style>

<script>
  import $ from 'jquery'

  export default {
    props: ['about'],
    ready () {
      $('.about-show').mouseover(function () {
        $(this).children('a.about-id').show()
      }).mouseout(function () {
        $(this).children('a.about-id').hide()
      })
    }
  }
</script>
