<template>
<div>
  <!-- 右侧固定 -->
		<div class="home_tool_bar">
			<a href="#" class="a1">
				<div class="avatar_app">
					<img src="./images/bar_app.png" alt="" class="block">
					<img src="./images/bar_app_seclect.png" alt="" class="none">
				</div>
				<span>手机APP</span>
				<div class="appcode">
					<img src="./images/qrcode.png" alt="" class="qrcode">
					<span>手机扫一扫一份赢好礼</span>
				</div>
			</a>
			<a href="#" class="a2">
				<div class="avatar">
					<img src="./images/avatar_center.png" alt="">
					<img src="./images/avatar_center_seclect.png" alt="" class="none">
				</div>
				<span>个人中心</span>
			</a>
			<a href="#" class="a3">
				<div class="avatar">
					<img src="./images/service.png" alt="">
					<img src="./images/service_seclect.png" alt="" class="none">
				</div>
				<span>售后服务</span>
			</a>
			<a href="#" class="a4">
				<div class="avatar">
					<img src="./images/customer.png" alt="">
					<img src="./images/customer_seclect.png" alt="" class="none">
				</div>
				<span>人工客服</span>
			</a>
			<a href="#" class="a5">
				<div class="avatar">
					<img src="./images/shop_cart.png" alt="">
					<img src="./images/shop_cart_seclect.png" alt="" class="none">
				</div>
				<span>购物车</span>
			</a>
			<a href="#" class="a6">
				<div class="avatar">
					<img src="./images/totop.png" alt="">
					<img src="./images/totop_hover.png" alt="" class="none">
				</div>
				<span>返回顶部</span>
			</a>
		</div>
		
</div>
</template>
<script>
export default {
  name:'Home_R_bar',
  props:{
    
  },
  components:{
    
  },
  data(){
    return {
   
    }
  },
  methods:{
  
  }
}
</script>
<style lang="less"	scoped>
  /* 固定开始 */
.home_tool_bar {
	height: 455px;
	width: 84px;
	position: fixed;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto 0;
	background-color: #000000;
	z-index: 9999;
	a {
		position: relative;
		display: block;
		width: 82px;
		height: 90px;
		margin-top: -1px;
		background-color: #fff;
		border: 1px solid #f5f5f5;
		text-align: center;
		color: #757575;
	}
	.appcode {
		position: absolute;
		right: 100px;
		top: 0;
		width: 130px;
		height: 190px;
		border: 1px #f5f5f5 solid;
		background: #FFFFFF;
		padding: 14px;
		box-sizing: border-box;
		display: none;
		img {
			width: 100px;
			height: 100px;
			margin: 6px auto;
		}
		span {
			display: block;
			width: 80px;
			height: 50px;
			margin: 10px auto 0;
			color: #757575;
		}
	}
	.appcode::before {
		content: '';
		position: absolute;
		width: 0px;
		height: 0px;
		border: 8px #F5F5F5 solid;
		border-color: transparent transparent transparent #fff;
		right: -15px;
		top: 40px;
		margin: 0 auto;
		z-index: 1;
	}
	.appcode::after {
		content: '';
		position: absolute;
		width: 0px;
		height: 0px;
		border: 8px #F5F5F5 solid;
		border-color: transparent transparent transparent #f5f5f5;
		right: -16px;
		top: 40px;
		margin: 0 auto;
	}
	.avatar_app,
	.avatar {
		width: 30px;
		height: 30px;
		margin: 0 auto 8px;
		padding-top: 18px;
		position: relative;
	}
	.a6 {
		display: none;
		margin-top: 14px;
	}
	
	.none {
		display: none;
	}
	
	.a1:hover,
	.a2:hover,
	.a3:hover,
	 .a4:hover,
	 .a5:hover,
	.a6:hover {
		color: #ff6700;
	}
	.a1:hover .appcode {
		display: block;
	}
	.home_tool_bar .a1:hover img:nth-child(2),
	.home_tool_bar .a2:hover img:nth-child(2),
	.home_tool_bar .a3:hover img:nth-child(2),
	.home_tool_bar .a4:hover img:nth-child(2),
	.home_tool_bar .a5:hover img:nth-child(2),
	.home_tool_bar .a6:hover img:nth-child(2) {
		display: block;
	}
	
	.home_tool_bar .a1:hover .block,
	.home_tool_bar .a2:hover img:first-child,
	.home_tool_bar .a3:hover img:first-child,
	.home_tool_bar .a4:hover img:first-child,
	.home_tool_bar .a5:hover img:first-child,
	.home_tool_bar .a6:hover img:first-child {
		display: none;
	}
}


</style>