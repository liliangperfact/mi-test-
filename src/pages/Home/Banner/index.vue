<template>
  <div>
    <div class="mi_banner">
      <ul class="left_meun">
        <li class="classify" v-for="(c1,index) in categoryList" :key="c1.categoryId">
          <a href="#" class="lista">
            {{c1.categoryName}}
            <span class="fas fa-angle-right"></span>
          </a>
          <div class="item-list clearfix">
            <div class="subitem">
              <dl class="fore" v-for="(c2,index) in c1.categoryChild" :key="c2.categoryId">
                <dt>
                  <a href>{{c2.categoryName}}</a>
                </dt>
                <dd>
                  <em v-for="(c3,index) in c2.categoryChild" :key="c3.categoryId">
                    <a href>{{c3.categoryName}}</a>
                  </em>
                </dd>
              </dl>
            </div>
          </div>
        </li>
      </ul>
      <ul class="img-list">
        <li>
          <a href="#">
            <img src="./images/banner_img5.jpg" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./images/banner_img1.jpg" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./images/banner_img2.jpg" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./images/banner_img3.jpg" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./images/banner_img4.jpg" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./images/banner_img5.jpg" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./images/banner_img1.jpg" />
          </a>
        </li>
      </ul>
      <!-- 创建5个导航点 -->
      <div class="pointer">
        <!-- 
					如果将超链接的href属性设置为javascript:;
						则此时超链接点击后不会出现任何变化
        -->
        <a class="active" href="#"></a>
        <a href="#"></a>
        <a href="#"></a>
        <!-- active表示当前显示的图片 -->
        <a href="#"></a>
        <a href="#"></a>
      </div>
      <div class="prev-next">
        <!-- 向左箭头 -->
        <div class="prev"></div>
        <!-- 向右箭头 -->
        <div class="next"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "Banner",
  props: {},
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.getCategoryList();
  },
  methods: {
    getCategoryList() {
      this.$store.dispatch("getCategoryList");
    }
  },
  computed: {
    // ...mapState(['categoryList'])
    //错误的

    ...mapState({
      //获取的数据格式化，逐一分离出来
      categoryList: state => state.home.categoryList
    })
  }
};
</script>
<style lang="less"	scoped>
/* 轮播 */
.mi_banner {
  margin: 0 auto;
  width: 1226px;
  height: 460px;
  background: #000000;
  overflow: hidden;
  position: relative;
  .left_meun {
    width: 237px;
    height: 440px;
    background-color: rgba(0, 0, 0, 0.3);
    padding-top: 6px;
    left: 50%;
    z-index: 999;
    margin-left: -613px;
    position: absolute;

    .classify {
      .lista {
        height: 30px;
        line-height: 30px;
        display: block;
        color: #ffffff;
        font-size: 14px;
        padding: 0 24px 0 30px;
        .fa-angle-right {
          float: right;
          line-height: 30px;
        }
      }
      .lista:hover {
        background: #ff6700;
      }
      .item-list {
        display: none;
        position: absolute;
        width: 750px;
        min-height: 460px;
        background: #f7f7f7;
        left: 235px;
        border: 1px solid #ddd;
        top: 0;
        z-index: 9999 !important;
        a {
          color: #4f4c4c;
           font-size: 14px;
        padding: 0 5px 0 5px;
        }
        .subitem {
          float: left;
          width: 750px;
          padding: 0 4px 0 8px;

          dl {
            border-top: 1px solid #eee;
            padding: 6px 0;
            overflow: hidden;
            zoom: 1;

            &.fore {
              border-top: 0;
            }

            dt {
              float: left;
              width: 80px;
              line-height: 22px;
              text-align: right;
              padding: 3px 6px 0 0;
              font-weight: 700;
            }

            dd {
              float: left;
              width: 550px;
              padding: 3px 0 0;
              overflow: hidden;

              em {
                float: left;
                height: 14px;
                line-height: 14px;
                padding: 0 8px;
                margin-top: 5px;
                border-left: 1px solid #ccc;
              }
            }
          }
        }
      }
      &:hover {
        .item-list {
          display: block;
        }
      }
      &:last-of-type {
        display: none;
      }
    }
  }

  .img-list {
    width: 8582px;
    height: 100%;
    position: absolute;
    top: 0;
    left: -1226px;
    li {
      float: left;
    }
  }
  img {
    height: 460px;
    width: 100%;
  }
  .pointer {
    position: absolute;
    width: 110px;
    left: auto;
    right: 30px;
    bottom: 20px;
    text-align: right;
    a {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      border: 2px solid #fff;
      /* 	background-color: rgba(0, 0, 0, 0.1); */
      float: left;
      margin: 5px 4px;
    }
    a:hover,
    .active {
      /* 	background: hsla(0, 0%, 100%, .4);
			background-color: rgba(0, 0, 0, 0.4); */
      background-color: #008000;
    }
  }
  .prev-next {
    div {
      /* 				display: none; */
      width: 41px;
      height: 69px;
      background-color: transparent;
      color: rgba(255, 255, 255, 0.3);
      text-align: center;
      line-height: 64px;
      font-size: 30px;
      /* 开启绝对定位 */
      position: absolute;
      /* 设置垂直居中 */
      top: 0;
      bottom: 0;
      margin: auto 0;
    }
    .next:hover {
      background-position: -42px 0;
    }
    .prev:hover {
      background-position: 0 0;
    }
    .next {
      right: 0;
      background: url(./images/icon-slides.png) no-repeat -125px 50%;
    }
    .prev {
      left: 237px;
      background: url(./images/icon-slides.png) no-repeat -84px 50%;
    }
  }
}
</style>