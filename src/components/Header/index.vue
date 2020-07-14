<template>
  <div>
    <header>
      <!-- 导航条 -->
      <div class="topbar_wrappar">
        <!-- 内部容器 -->
        <div class="topbar w">
          <!-- 三个菜单 -->
          <!-- 左侧 -->
          <ul class="shortcut">
            <li class="item">
              <a href="#">小米商城</a>
            </li>
            <li class="line">|</li>
            <li class="item">
              <a href="#">MIUI</a>
            </li>
            <li class="line">|</li>
            <li class="item">
              <a href="#">loT</a>
            </li>
            <li class="line">|</li>
            <li class="item">
              <a href="#">云服务</a>
            </li>
            <li class="line">|</li>
            <li class="item">
              <a href="#">金融</a>
            </li>
            <li class="line">|</li>
            <li class="item">
              <a href="#">有品</a>
            </li>
            <li class="line">|</li>
            <li class="item">
              <a href="#">小爱开放平台</a>
            </li>
            <li class="line">|</li>
            <li class="item">
              <a href="#">企业团购</a>
            </li>
            <li class="line">|</li>
            <li class="item">
              <a href="#">资质证照</a>
            </li>
            <li class="line">|</li>
            <li class="item">
              <a href="#">协议规则</a>
            </li>
            <li class="line">|</li>
            <li class="item download">
              <a href="#">
                下载APP
                <!-- 下拉 -->
                <div class="hide-wrapper">
                  <div class="hide_inner">
                    <div class="qrcode">
                      <img src="./images/qrcode.png" alt />
                    </div>
                    <span>小米商城APP</span>
                  </div>
                </div>
              </a>
            </li>
            <li class="line">|</li>
            <li class="item">
              <a href="#">Seclet Location</a>
            </li>
          </ul>
          <!-- 右侧购物车 -->
          <div class="shopcart">
            <a href="#">
              <span class="fas fa-shopping-cart"></span>
              <span>购物车（0）</span>
              <div class="hide_cart">
                <span>购物车中还没有商品,赶紧选购吧！</span>
              </div>
            </a>
          </div>
          <!-- 右侧user-->
          <ul class="userinfo">
            <li class="item">
              <!-- <a href="" to="/login">
              <router-link to="/login">登录</router-link>
              </a> -->
              <router-link to="/login">登录</router-link>
            </li>
            <li class="line">|</li>
            <li class="item">
              <!-- <a href="">
                <router-link to="/register">注册</router-link>
              </a> -->
              <router-link to="/register">注册</router-link>
            </li>
            <li class="line">|</li>
            <li class="item">
              <a href="#">消息通知</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 头部 -->
      <div class="header w clearfix">
        <!-- 头部logo -->
        <h1 class="logo" title="小米商城">
          <router-link to="/home">
            小米商城
          </router-link>
        </h1>
        <!-- 头部主导航 -->
        <ul class="main_menu">
          <li class="item no-show">
            <a href="#" class="all_goods">全部商品分类</a>
          </li>
          <li class="item">
            <a href="#">小米手机</a>
          </li>
          <li class="item">
            <a href="#">Redmi 红米</a>
          </li>
          <li class="item">
            <a href="#">电视</a>
          </li>
          <li class="item">
            <a href="#">笔记本</a>
          </li>
          <li class="item">
            <a href="#">家电</a>
          </li>
          <li class="item">
            <a href="#">路由器</a>
          </li>
          <li class="item">
            <a href="#">智能硬件</a>
          </li>
          <li class="item no-show">
            <a href="#">服务</a>
          </li>
          <li class="item no-show">
            <a href="#">社区</a>
          </li>
          <div class="goods_list clearfix">
            <div class="main_menu_hidden_card w">
              <a href="#">
                <div class="main_hidden_card">
                  <img src="./images/redmi.png" alt />
                  <span>Redmi K30 Pro</span>
                  <p>2399元起</p>
                </div>
              </a>
              <a href="#">
                <div class="main_hidden_card">
                  <img src="./images/redmi.png" alt />
                  <span>Redmi K30 Pro</span>
                  <p>2399元起</p>
                </div>
              </a>
              <a href="#">
                <div class="main_hidden_card">
                  <img src="./images/redmi.png" alt />
                  <span>Redmi K30 Pro</span>
                  <p>2399元起</p>
                </div>
              </a>
              <a href="#">
                <div class="main_hidden_card">
                  <img src="./images/redmi.png" alt />
                  <span>Redmi K30 Pro</span>
                  <p>2399元起</p>
                </div>
              </a>
              <a href="#">
                <div class="main_hidden_card">
                  <img src="./images/redmi.png" alt />
                  <span>Redmi K30 Pro</span>
                  <p>2399元起</p>
                </div>
              </a>
              <a href="#">
                <div class="main_hidden_card">
                  <img src="./images/redmi.png" alt />
                  <span>Redmi K30 Pro</span>
                  <p>2399元起</p>
                </div>
              </a>
            </div>
          </div>
        </ul>
        <!-- 搜索/关键词 -->
        <div class="mi_search">
          <!-- <button >6666</button> -->
          <input type="keywords" v-model="kws" />
          <span class="fas fa-search" @click="toSearch"></span>

          <div class="inp_keyword">
            <a href="#">小米10</a>
            <a href="#">Redmi K30 Pro</a>
          </div>

          <div class="keys_list">
            <ul>
              <li>
                <a href="#">Redmi K30</a>
              </li>
              <li>
                <a href="#">小米10</a>
              </li>
              <li>
                <a href="#">Redmi Note 8</a>
              </li>
              <li>
                <a href="#">小米CC9</a>
              </li>
              <li>
                <a href="#">黑鲨游戏手机</a>
              </li>
              <li>
                <a href="#">小米电视</a>
              </li>
              <li>
                <a href="#">小米笔记本</a>
              </li>
              <li>
                <a href="#">路由器</a>
              </li>
              <li>
                <a href="#">小爱音响</a>
              </li>
              <li>
                <a href="#">净水器</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 轮播 -->
    </header>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: {},
  components: {},
  data() {
    return {
      kws: ""
    };
  },
  methods: {
    toSearch() {
      alert(666);
      //基本不用
      //this.$router.push(`/search/${this.kws}?keywords=${this.kws.toUpperCase()}`)

      //如果使用对象
      //传递params参数必须和name配合
      //params和path是根本使用不了的
      this.$router.push({
        name: "search",
        //path:'/search',
        query: {
          keywords: this.kws.toUpperCase()
        },
        params: {
          //如果是空串，会出问题
          kws: this.kws || undefined
        }
      });
    }
  }
};
</script>
<style lang="less"	scoped>
header {
  .topbar_wrappar {
    height: 40px;
    line-height: 40px;
    background: #333333;
    .topbar {
      height: 40px;
      /* 	background: #bfa; */
      .shortcut {
        float: left;
        li {
          float: left;
          a {
            display: block;
            height: 40px;
            font-size: 12px;
            color: #b0b0b0;
          }
          a:hover {
            color: #ffffff;
          }
        }
        .line {
          margin: 0 8px;
          color: #424242;
        }
        .download {
          position: relative;
        }
        .download:hover .hide-wrapper {
          /* 	display: block; */
          visibility: visible;
          height: 148px;
        }
        .hide-wrapper {
          width: 124px;
          height: 0;
          visibility: hidden;
          text-align: center;
          line-height: 1.5;
          position: absolute;
          left: -36px;
          z-index: 999999;
          background: #ffffff;
          box-shadow: rgba(0, 0, 0, 0.3) 0 0 4px;
          transition: all 0.5s;
          .hide_inner {
            height: 100%;
            overflow: hidden;
          }
          span {
            color: #333;
          }
        }
        .hide-wrapper::before {
          content: "";
          position: absolute;
          width: 0px;
          height: 0px;
          border: 8px white solid;
          border-top: none;
          border-color: transparent transparent white;
          left: 0;
          right: 0;
          top: -8px;
          margin: 0 auto;
        }
        .qrcode {
          width: 90px;
          height: 90px;
          margin: 0 auto;
          margin: 18px auto 12px;
        }
      }
      .shopcart:hover {
        background: #ffffff;
      }
      .shopcart:hover .hide_cart {
        height: 100px;
        visibility: visible;
        /* 	overflow: visible; */
      }
      .shopcart .hide_cart {
        height: 0px;
        line-height: 100px;
        width: 320px;
        /* 	visibility: hidden; */
        overflow: hidden;
        position: absolute;
        /* display: none; */
        z-index: 1;
        background: #ffffff;
        right: 0;
        box-shadow: rgba(0, 0, 0, 0.3) 0 4px 4px;
        transition: all 0.5s;
        color: #424242;
      }
      .shopcart a:hover {
        color: #ff6700;
      }
      .userinfo {
        float: right;
        li {
          float: left;
          router-link {
            display: block;
            height: 40px;
            font-size: 12px;
            color: #b0b0b0;
          }
          router-link:hover {
            color: #ffffff;
          }
          a {
            display: block;
            height: 40px;
            font-size: 12px;
            color: #b0b0b0;
          }
          a:hover {
            color: #ffffff;
          }
        }
        .line {
          margin: 0 8px;
          color: #424242;
        }
      }
      .shopcart {
        position: relative;
        float: right;
        width: 120px;
        margin-left: 25px;
        text-align: center;
        background: #424242;
      }
    }
  }
  .header {
    .logo {
      width: 55px;
      height: 55px;
      font-size: 0px;
      margin: 22px 7px 0 0;
      overflow: hidden;
      background: #ff6700;
      float: left;
      a {
        display: block;
        width: 110px;
        height: 100%;
        margin-left: -55px;
        transition: margin-left 0.2s;
      }
      a:hover {
        margin-left: 0;
      }
      a::before {
        content: "";
        display: inline-block;
        width: 55px;
        height: 55px;
        background: url(./images/mi-home.png) no-repeat center;
      }
      a::after {
        content: "";
        display: inline-block;
        width: 55px;
        height: 55px;
        background: url(./images/mi-logo.png) no-repeat center;
      }
    }
    .main_menu {
      height: 100px;
      line-height: 100px;
      width: 800px;
      padding-left: 50px;
      float: left;
      .item:not(.no-show):hover ~ .goods_list .main_hidden_card,
      .goods_list:hover .main_hidden_card {
        visibility: visible;
        height: 210px;
      }
      /* 当鼠标移入li时，显示商品列表 */
      .item:not(.no-show):hover ~ .goods_list,
      .goods_list:hover {
        border-top: 1px solid #e0e0e0;
        height: 229px;
        box-shadow: rgba(0, 0, 0, 0.3) 0 4px 4px;
      }
      .all_goods {
        visibility: hidden;
      }
      .goods_list {
        /* display: none; */
        /* 设置绝对定位 */
        position: absolute;

        /* 
					元素的宽度设置百分比时，它的宽度是相对于包含块的宽度进行计算的
					目前goods-list的包含块是header，所以width:100%
						会将goods-list的宽度设置为和header的宽度一样
						header的宽度是1226，不是全屏，所以不能满足需求
						
					我们希望goods-list的宽度和视口（根元素）的宽度一样，
						如果goods-list的包含块是根元素那么就太好了
				*/
        width: 100%;
        left: 0;
        top: 140px;
        height: 0;
        overflow: hidden;
        /* 内容裁剪！！！！犯了好多次了 */
        z-index: 9999;
        background-color: #fff;
        transition: height 0.5s;
        .main_menu_hidden_card {
          a {
            width: 200px;
            height: 200px;
            float: left;
            display: block;
            .main_hidden_card {
              width: 200px;
              height: 0px;
              text-align: center;
              margin: 10px;
              transition: height 0.1s;
              position: absolute;
              img {
                height: 100px;
                width: 100px;
              }
              span {
                display: block;
                height: 20px;
                margin-top: -50px;
              }
              p {
                color: #ff6700;
                font-size: 12px;
              }
            }
          }
        }
      }
      .left_meun {
        width: 237px;
        height: 440px;
        background-color: rgba(0, 0, 0, 0.3);
        padding-top: 20px;
        left: 50%;
        z-index: 999;
        margin-left: -613px;
        position: absolute;

        /* 设置隐藏盒子 */
        .hide1,
        .hide2,
        .hide3,
        .hide4,
        .hide5,
        .hide6,
        .hide7,
        .hide8,
        .hide9,
        .hide10 {
          position: absolute;
          width: 989px;
          height: 460px;
          background-color: #ffffff;
          box-shadow: rgba(0, 0, 0, 0.6) 0 0 4px;
          top: 0;
          left: 237px;
          display: none;
        }

        /* 分类的hover */
        .classify1:hover .hide1,
        .classify2:hover .hide2,
        .classify3:hover .hide3,
        .classify4:hover .hide4,
        .classify5:hover .hide5,
        .classify6:hover .hide6,
        .classify7:hover .hide7,
        .classify8:hover .hide8,
        .classify9:hover .hide9,
        .classify10:hover .hide10 {
          display: block;
        }

        a {
          height: 42px;
          line-height: 42px;
          display: block;
          color: #ffffff;
          font-size: 14px;
          padding: 0 24px 0 30px;
          .fa-angle-right {
            float: right;
            line-height: 42px;
          }
        }
        a:hover {
          background: #ff6700;
        }
      }
      .item {
        float: left;
        a {
          font-size: 16px;
          display: block;
          padding: 0 10px;
        }
        a:hover {
          color: #ff6700;
        }
      }
    }
    .mi_search:hover span,
    .mi_search:hover input {
      border-color: #b0b0b0;
    }
    .mi_search {
      height: 50px;
      width: 297px;
      float: right;
      margin-top: 25px;
      position: relative;

      input {
        height: 48px;
        width: 231px;
        outline: none;
        /* border: none; */
        border: 1px #d9d9d9 solid;
        font-size: 16px;
        padding-left: 12px;
      }
      input:focus + span,
      input:focus {
        border-color: #ff6700;
      }
      input:focus .mi_search {
        border-color: #ff6700;
      }
      input:focus ~ .keys_list {
        display: block;
      }
      span {
        display: block;
        height: 50px;
        width: 50px;
        margin: 0px;
        float: right;
        font-size: 18px;
        text-align: center;
        line-height: 50px;
        border: 1px #d9d9d9 solid;
        border-left: none;
        position: absolute;
        right: 0;
        top: 0;
      }
      span:hover {
        background: #ff6700;
        border-color: #ff6700;
        color: white;
      }
      .inp_keyword {
        position: absolute;
        top: 14px;
        right: 62px;
        a {
          margin: 5px;
          padding: 2px;
          display: inline-block;
          background: #eee;
          color: #757575;
          font-size: 12px;
          transition: all 0.2s;
        }
        a:hover {
          background: #ff6700;
          color: #fff;
        }
      }
      /* 关键词 */
      .keys_list {
        position: absolute;
        left: 0;
        top: 51px;
        width: 245px;
        height: 300px;
        display: none;
        border: 1px #ff6700 solid;
        z-index: 999;
        background: #ffffff;
        a {
          display: block;
          width: 233px;
          height: 30px;
          line-height: 30px;
          padding-left: 12px;
          font-size: 12px;
          color: #424242;
        }
        a:hover {
          background: rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
}
</style>