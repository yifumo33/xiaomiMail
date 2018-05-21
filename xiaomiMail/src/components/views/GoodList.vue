<template>
	<div>
	<nav-header></nav-header>
	<bread>
		<a href="#" slot='a'>Goods</a>
	</bread>
	<pricePannel v-bind:priceFilter="priceFilter"></pricePannel>
	<wrap v-bind:goodlist ="goodlist" v-bind:priceFilter="priceFilter"></wrap>	
	<div class="line"></div>
	<navfooter></navfooter>

	</div>
</template>

<script>
    import NavHeader from './Header'
    import bread from './bread'
    import navfooter from './footer'
    import pricePannel from './price-pannel'
    import wrap from'./wrap'
    import axios from  'axios'

	import './style.css'
	export default{
			data(){
				return{
					
					goodlist:[],
					priceFilter:[
						{
							startPrice:'0.00',
							endPrice:'500.00'
						},
						{
							startPrice:'500.00',
							endPrice:'1000.00'
						},
						{
							startPrice:'1000.00',
							endPrice:'1500.00'
						},
						{
							startPrice:'1500.00',
							endPrice:'2000.00'
						}


					]
				}

			},
			methods:{
				getGoodList(){
					axios.get("/api/phones").then((result)=>{
						console.log(result)
						console.log(result.data)
						this.goodlist = result.data.data
						console.log(this.goodlist)
						// this.goodList = res.result
					})
				}
			
			},
			components:{
				NavHeader:NavHeader,
				bread:bread,
				navfooter:navfooter,
				pricePannel:pricePannel,
				wrap:wrap
			},
			mounted:function(){
		            this.getGoodList()
					

			}
	}
</script>