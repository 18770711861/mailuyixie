<template>
  <div class="waterfall">
    <div class="show-about">
      <!-- <div class="d-about" v-for="img in imgs">
        <img v-bind:src="img.webformatURL">
        <a v-link="{ name: 'aboutDetail', params: {id: img.id }}">
          <span>提供者: {{img.user}}</span>
          <span>标签: {{img.tags}}</span>
          <span>喜欢人数: {{img.likes}}</span>
          <span>下载次数: {{img.downloads}}</span>
        </a>
      </div> -->
    </div>
    <div class="show-more">
      <a><i class="fa fa-spinner" aria-hidden="true"></i>加载中..</a>
    </div>
  </div>
</template>

<style  lang="scss">
  .waterfall {
    padding-right: 20px;
    padding-left: 20px;

    .show-about {
      // min-height: 600px;
    }
  }

  .show-about > .d-about {
    display: inline-block;
    width: 18%;
    height: 180px;
    margin: 8px 10px;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.3s ease-out;

    img {
      width: 100%;
      height: 100%;
    }

    a {
      position: relative;
      top: -180px;
      display: inline-block;
      height: 100%;
      width: 100%;
      opacity: 0;
      color: black;
      transition: all 0.3s ease-out;

      span {
        display: block;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space:nowrap;
      }
    }

    &:hover img{
      opacity: 0.5;
    }

    &:hover a {
      opacity: 1;
      padding-left: 10px;
      padding-top: 10px;
    }
  }

  .show-more {
    width: 100%;
    height: 50px;
    margin-top: 20px;
    text-align: center;

    a {
      display: inline-block;
      width: 120px;
      height: 30px;
      color: black;
      margin: auto;
      padding: 2px;
      border: 1px solid black;
      border-radius: 5px;

      i {
        animation: start 0.3s infinite;
        padding: 5px;
        @keyframes start {
          0%   {transform: rotate(0deg);}
          25%  {transform: rotate(90deg);}
          50%  {transform: rotate(180deg);}
          75%  {transform: rotate(270deg);}
          100% {transform: rotate(360deg);}
        }
      }
    }

  }


  @media screen and (max-width: 1060px)  {
    .waterfall {
      width: 100%;
      padding: 0;
      margin: auto;

      .d-about {
        width: 30%;
      }
    }
  }

  @media screen and (max-width: 620px)  {
    .waterfall {
      .d-about {
        width: 45%;
      }
    }
  }

  @media screen and (max-width: 420px)  {
    .waterfall {
      .d-about {
        width: 95%;
      }
    }

    .show-about > .d-about {
      height: 260px;
      a {
        position: relative;
        display: inline-block;
        top: -260px;
        height: 260px;
        width: 100%;
        opacity: 0;
        color: black;
      }
      a span{
        display: none;
      }

      img {
        height: 100%;
      }

      &:hover img {
        opacity: 1;
      }

      &:hover a span{
        display: none;
      }
    }
  }
</style>

<script>
  export default {
    // props: ['imgs']
  }
</script>
