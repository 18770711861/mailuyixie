<template>
  <Navbar>
  </Navbar>
  <section class="show">
    <Search :placeholder="placeholder" choose="简介"></Search>
  </section>
  <section class="page-content">
    <div class="title">
      <div class="left">
        <!-- 这两句吗　１１１ -->
        <h1 id="color1">有时间做义工</h1>
      </div>
      <div class="right">
        <h1 id="color2">有困难找义工</h1>
      </div>
      <!-- <h1 style="float:right;">
          有困难找义工
        </h1> -->
    </div>
    <div class="see">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="video">
              <About v-bind:about="videoImage"></About>
            </div>
          </div>

          <div class="col-md-9">
            <div class="row">
              <div class="col-md-12">
                <div style="height:630px;background-color:white"></div>
              </div>
            </div>
          </div>

          <!-- <div class="col-md-9">
            <div class="row">
              <div class="col-md-6">
                <About v-bind:about="about1"></About>
              </div>
              <div class="col-md-6">
                <About v-bind:about="about2"></About>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <About v-bind:about="about3"></About>
              </div>
              <div class="col-md-6">
                <About v-bind:about="about4"></About>
              </div>
            </div>
          </div>  -->

        </div>
        <div class="row categories">
          <div class="all-categories">
            <h3>义协话题</h2>
          </div>
          <div class="col-md-3 col-sm-6">
            <ul>
              <li v-for="category in category1">
                <a v-link="{name: category.page, query: {text: category.url}}">
                  {{category.name}}
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 col-sm-6">
            <ul>
              <li v-for="category in category2">
                <a v-link="{name: category.page, query: {text: category.url}}">
                  {{category.name}}
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 col-sm-6">
            <ul>
              <li v-for="category in category3">
                <a v-link="{name: category.page, query: {text: category.url}}">
                  {{category.name}}
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 col-sm-6">
            <ul>
              <li v-for="category in category4">
                <a>{{category.name}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="slogan">
      <div class="container">
        <div class="col-md-6">
          <img src="../assets/slogan.jpg">
        </div>
        <div class="col-md-6">
          <div class="slogan-text">
            <h4>爱上义协, 寻找更美的你</h4>
            <p>
              在这瞬间，不是你留住了时间，而是时间记住了你
            </p>
            <p>
              此刻，你是最美的
            </p>
            <p>
              我们的相遇不只风景，还有心情
            </p>
            <p>
              回头看看来时路，你会发现途中的脚印总让人感动
            </p>
            <p>
              某些时光，值得留存
            </p>
            <p>
              时光流逝留在这，美丽青春留给你
            </p>
          </div>
        </div>
      </div>
    </div>
    <section class="video">
      <div class="container">
        <h4>活动视频</h4>
        <div class="row">
          <div class="col-md-4 col-sm-12" v-for="video in videos">
            <Video v-bind:video="video"></Video>
          </div>
        </div>
      </div>
      </secyion>
    </section>
    <Foot></Foot>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 0;

  .show {
    // margin-top: -45px;
    width: auto;
    height: 440px;
    background-size: cover;
    background-image: url('../assets/shows.jpg');
    background-color: black;
  }

  li {
    list-style: none;
  }

  a {
    cursor: pointer;
  }

  a:hover,
  a:focus,
  a:link {
    text-decoration: none;
  }

  .focus {
    opacity: 1!important;
    box-shadow: 0 0 10px white;
  }

  .hide>a>i {
    visibility: hidden;
  }


  section.page-content {
    background-color: #e8eded;
    background-attachment: fixed;
    min-height: 600px;

    .title {
      height: 120px;
      text-align: center;
      .left {
        float: left;
        h1 {
          padding-top: 30px; // padding-left:100px;
          font-family: "Brushpen";
        }
      }
      .right {
        float: right;
        h1 {
          padding-top: 30px; // padding-right: 100px; 
          font-family: "Brushpen";
        }
      } //  h1 {
      //     padding-top: 30px;
      //     // padding-left:100px;
      //     // padding-right: 100px; 
      //     font-family: "黑体";
      //  }
    }

    .see {
      text-align: center;

      .video .about-show {
        height: 630px;
        box-shadow: 0px 0px 20px #aaa;

        .about-item {
          height: 630px;

          .about-img {
            height: 93%;
          }
        }
      }

      div.categories {

        .all-categories {
          margin-top: 30px;

          h3 {
            margin-bottom: 40px;
          }
        }
      }

      ul li {
        height: 25px;

        a {
          color: #028a71;
          padding: 5px;
          font-weight: bold;
        }

        a:hover {
          opacity: 0.8;
        }
      }
    }

    .slogan {
      background-color: #dce1e1;

      img {
        width: 100%;
        height: 100%;
        margin-top: 20px;
        margin-bottom: 20px;
      }

      .slogan-text {
        margin-top: 30px;

        h4 {
          text-align: center;
          margin-bottom: 40px;
          font-weight: bold;
        }

        p {
          padding: 0;
          padding-left: 60px;
        }
      }
    }

    .video {
      background: #e8eded;
      height: 250px;

      h4 {
        margin-top: 20px;
      }
    }
  }
}

@media screen and (min-width: 969px) {
  section.page-content {
    .title {
      .left {
        h1 {
          padding-left: 100px;
        }
      }
      .right {
        h1 {
          padding-right: 100px;
        }
      }
    }
  }
}

@media screen and (max-width: 968px) {
  section.page-content>section.video {
    display: none;
  }
}

@media screen and (max-width: 900px) {
  section.show {
    width: 100%;
    height: 260px;
    background-image: url('../assets/shows.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  section.page-content {
    .title {
      width: 80%;
      margin: auto;
      margin-bottom: 20px;
      height: auto;
      text-align: left;
      h1 {
        padding-top: 30px;
        margin-bottom: 10px;
        font-size: 30px;
        line-height: 25px;
      }
    }

    div.slogan {

      .slogan-text {
        margin-top: 30px;

        h4 {
          text-align: left;
          margin-bottom: 20px;
        }

        p {
          font-size: 14px;
          padding: 0;
          text-align: left;
          margin-bottom: 10px;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  section.page-content>div.see {
    .chat .about-show {
      height: 305px;

      .about-item {
        height: 305px;

        .about-img {
          height: 85%;
        }
      }
    }
  }

  .categories {
    margin-top: 100px;
  }
}

@media screen and (max-width: 540px) {
  div.categories {
    padding-top: 200px;
    .col-sm-6 {
      float: left;
      width: 50%;

      ul {
        padding-left: 0;
      }
    }
  }
}



</style>

<script>
// 暂时先试用保存在本地的图片
import VideoJpg from '../assets/video.jpg'
import Picture from '../assets/login.jpg'

// 导入模块
import Navbar from 'Navbar'
import $ from 'jquery'
import Search from 'Search'
import About from 'AboutShow'
import Foot from 'Footer'
import Video from 'VideoShow'

export default {
  data() {
    return {
      placeholder: '更多关于义协的活动…',
      aboutURL: 'https://pixabay.com/api/?key=2831718-1f9b7c1b490ec182487b38a60&lang=zh&image_type=photo&q=',
      about1: {},
      about2: {},
      about3: {},
      about4: {},
      videoImage: {
        url: VideoJpg,
        id: '#877249',
        title: '义协大记录'
      },
      category1: [
        { id: 1, name: '快闪', url: 'fast', page: 'Activities' },
        { id: 2, name: '爱牙', url: 'teeth', page: 'Search' }
      ],
      category2: [
        { id: 1, name: '迎新', url: 'news', page: 'Search' },
        { id: 2, name: '会议', url: 'metting', page: 'Search' }
      ],
      category3: [
        { id: 1, name: '亲亲宝贝', url: 'baby', page: 'Search' },
        { id: 2, name: '青帆课堂', url: 'class', page: 'Search' }
      ],
      category4: [
        { id: 1, name: '自闭症', url: 'activities', page: 'Search' },
        { id: 2, name: '太阳花', url: 'sun', page: 'Search' }
      ],
      videos: [
        {
          id: 1,
          url: 'http://i.istockimg.com/video_passthrough/73017509/151/73017509.mp4',
          // img: 'http://i.istockimg.com/file_thumbview_approve/73017509/11/stock-video-73017509-machine-gear-wheel.jpg'
          img: Picture
        },
        {
          id: 2,
          url: 'http://i.istockimg.com/video_passthrough/89634773/151/89634773.mp4',
          // img: 'http://i.istockimg.com/file_thumbview_approve/89634773/11/stock-video-89634773-road-to-moon.jpg'
          img: Picture
        },
        {
          id: 3,
          url: 'http://i.istockimg.com/video_passthrough/81034259/151/81034259.mp4',
          // img: 'http://i.istockimg.com/file_thumbview_approve/81034259/11/stock-video-81034259-chemical-elements.jpg'
          img: Picture
        }
      ]
    }
  },
  components: {
    Navbar,
    Search,
    About,
    Foot,
    Video
  },
  route: {
    data() {
      const that = this
      // $.get(this.aboutURL + '爱', function(data) {
      //   var obj = {}
      //   var num = parseInt(Math.random() * data.hits.length)
      //   obj.url = data.hits[num].webformatURL
      //   obj.title = '助童支教'
      //   obj.id = data.hits[num].id
      //   obj.category = '爱'
      //   that.about1 = obj
      // })
      // $.get(this.aboutURL + '风景', function(data) {
      //   var obj = {}
      //   var num = parseInt(Math.random() * data.hits.length)
      //   obj.url = data.hits[num].webformatURL
      //   obj.title = '迎新晚会'
      //   obj.id = data.hits[num].id
      //   obj.category = '风景'
      //   that.about2 = obj
      // })
      // $.get(this.aboutURL + '动漫', function(data) {
      //   var obj = {}
      //   var num = parseInt(Math.random() * data.hits.length)
      //   obj.url = data.hits[num].webformatURL
      //   obj.title = '爱心捐赠'
      //   obj.id = data.hits[num].id
      //   obj.category = '动漫'
      //   that.about3 = obj
      // })
      // $.get(this.aboutURL + '壁纸', function(data) {
      //   var obj = {}
      //   var num = parseInt(Math.random() * data.hits.length)
      //   obj.url = data.hits[num].webformatURL
      //   obj.title = '青帆课堂'
      //   obj.id = data.hits[num].id
      //   obj.category = '壁纸'
      //   that.about4 = obj
      // })
      $.get( this.aboutURL, function(data) {
        var obj1 = {}
        obj1.url = Picture 
        obj1.title = '助童支教'
        obj1.category = ''
        that.about1 = obj1
        var obj2 = {}
        obj2.url = Picture 
        obj2.title = '迎新晚会'
        obj2.category = ''
        that.about2 = obj2
        var obj3 = {}
        obj3.url = Picture 
        obj3.title = '爱心捐赠'
        obj3.category = ''
        that.about3 = obj3
        var obj4 = {}
        obj4.url = Picture 
        obj4.title = '青帆课堂'
        obj4.category = ''
        that.about4 = obj4
      })
    }
  },
  methods: {
    changeColor(dom1) {
      var color = "#82AD99|#A2A288|#E2BA9E|#EE9493|#F84065|#068043|#AEDD81";//定义一条变换颜色的字符串  
      color = color.split("|"); //然后通过split方法进行分割  
      var xuan = document.getElementById(dom1);//获得元素 
      xuan.style.color = color[parseInt(Math.random() * color.length)];
    }
  },
  ready() {
    var vm = this;
    setInterval(function (){
      vm.changeColor('color1');
      vm.changeColor('color2');
    }, 7200);
    //ok
    const that = this
    // 滚动条事件
    $(document).scroll(function() {
      if (that.$route.name === 'Dashboard' && document.body.clientWidth > 850) {
        if (window.scrollY < 120) {
          $('.search').css('top', window.scrollY + 150)
          $('.search').width('800px')
          $('.option').css('top', window.scrollY + 150)
          $('.option').width('800px')
        } else if (window.scrollY <= 310) {
          $('.search').width('800px')
          $('.option').width('800px')
        } else if (window.scrollY < 520) {
          $('.search').width('100%')
          $('.search').css('top', window.scrollY - 45)
          $('.option').width('100%')
          $('.option').css('top', window.scrollY - 45)
        }
      } else if (that.$route.name === 'Dashboard' && document.body.clientWidth < 850) {
        $('.search').width('100%')
        $('.search').css('top', 0)
        $('.option').css('width', 'auto')
        $('.option').css('top', 0)
      }
    })
  }
}
</script>
