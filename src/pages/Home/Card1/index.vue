<template>
<div>
  <!-- 商品卡片1 -->
		<div class="box_mi w">
			<div class="box1">
				<ul>
					<li>
						<a href="#">
							<img src="./images/mi_miaosha.png" alt="">
							小米秒杀
						</a>
					</li>
					<li>
						<a href="#">
							<img src="./images/mi_qiye.png" alt="">
							企业团购
						</a>
					</li>
					<li>
						<a href="#">
							<img src="./images/mi_F.png" alt="">
							F码通道
						</a>
					</li>
					<li>
						<a href="#">
							<img src="./images/mi_card.png" alt="">
							米粉卡
						</a>
					</li>
					<li>
						<a href="#">
							<img src="./images/mi_coin.png" alt="">
							以旧换新
						</a>
					</li>
					<li>
						<a href="#">
							<img src="./images/mi_pay.png" alt="">
							话费充值
						</a>
					</li>
				</ul>
			</div>
			<div class="box2">
				<a href="#">
					<img src="./images/mi1.jpg" alt="">
				</a>
			</div>
			<div class="box2">
				<a href="#">
					<img src="./images/mi2.jpg" alt="">
				</a>
			</div>
			<div class="box2">
				<a href="#">
					<img src="./images/mi3.jpg" alt="">
				</a>
			</div>
		</div>
		
</div>
</template>
<script>
export default {
  name:'card1',
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
  
.box_mi {
	margin-top: 15px;
	height: 170px;
	background: #FFFFFF;
	.box1 {
		width: 234px;
		height: 100%;
		background: #5F5750;
		float: left;
		padding-left: 2px;
		li {
			position: relative;
			width: 70px;
			height: 82px;
			float: left;
			padding: 0 3px;
		}
		li::before {
			position: absolute;
			content: '';
			width: 64px;
			height: 1px;
			top: 3px;
			left: 6px;
			background: #665e57;
		}
		li::after {
			position: absolute;
			content: '';
			background: #665e57;
			height: 70px;
			width: 1px;
			top: 10px;
			left: 0;
		}
		img {
			display: block;
			width: 24px;
			height: 24px;
			margin: 0 auto 4px;
		}
		a {
			display: block;
			padding-top: 18px;
			color: #ffffff;
			text-align: center;
			text-overflow: ellipsis;
			opacity: .7;
			-webkit-transition: opacity .2s;
			transition: opacity .2s;
		}
		a:hover {
			opacity: 1;
		}
		
	}
	
	
	.box2 {
		width: 316px;
		height: 100%;
		background: #FFFFFF;
		margin-left: 14px;
		float: left;
		transition: all .2s;
	}
	.box2:hover {
		box-shadow: rgba(0, 0, 0, 0.3) 0 4px 30px;
	}
}

</style>