<template>
	<div class="wrap">
		<div class="bread min-price">
						<div>
							<a href="javascript:void(0)">Default</a>
										<a href="javascript:void(0)">Price
											<svg class="icon" aria-hidden="true">
										    	<use xlink:href="#icon-plus-shiftdown"></use>
											</svg>
										</a>
						</div>
						
						<a href="javascript:void(0)" id="min-filter" v-on:click="show">FILTER</a>
				</div>	
			<div class="goodList">
				<div class="priceControl">
					<span>Sort by:</span>
					<a href="#" style="color:#ff7100 ">Default</a>
					<div class="Price">
						<a href="javascript:void(0)">Price</a>
						<svg class="icon" aria-hidden="true">
						    	<use xlink:href="#icon-plus-shiftdown"></use>
						</svg>
					</div>

				</div>
			
					<div class="goods">	
						<aside>
							<ol class="PriceFilter">
					

								<li>PRICE:</li>

								<li  @click="PriceCheck = 'all'"   v-bind:class="{'cur':PriceCheck == 'all'}">All</li>
				
								<li v-for="(item,index) in priceFilter"   @click="PriceCheck = index"   v-bind:class="{'cur':PriceCheck == index }">
									
								{{item.startPrice}} - {{item.endPrice}}
								
								</li>
							</ol>
						</aside>
						<main>
							<div class="pic" v-for="(item ,index) in goodlist">
								<img v-lazy="`${item.productImg}`" alt="">
								<div class="buy">
									<div class="imformation">
										<p>{{item.productName}}</p>
										<p class="good-price">{{item.productPrice}}</p>
									</div>
									
									<div class="buy-button">加入购物车</div>
								</div>
							</div>
							
						</main>
					</div>


			</div>	
		}
	</div>
</template>

<style>
	.cur{
		color:#ff6200;
		/*border-left: solid 3px #ff6200; */
	}
	.PriceFilter li:not(:first-of-type){
		cursor: pointer;
	}
</style>


<script>
	export default{
		data(){
			return{
				PriceCheck:'all'
			}
		},
		props:[
		 'goodlist',
		 'priceFilter'
		],
		methods:{
			show(e){
				e.preventDefault()
				e.stopPropagation()
				
			document.querySelector('.price-pannel').style.transition = "0.5s all"
			document.querySelector('#app').classList.add('shade')
			document.querySelector('.price-pannel').style.transform = "translateX(-100%)"
			}
		}
	}
</script>