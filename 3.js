


document.addEventListener("DOMContentLoaded", function(){
new Vue({
		el:"#app",
		data:function(){
			return{
			numberTwo:'',
			numberOne:'',
			diceResults:[]
		}
	},
		methods:{
			addition: function(){
				var sum=this.numberOne+this.numberTwo;
				this.diceResults.push({
					value:sum,
					name:this.sum

				});
			},
			subtraction: function(){
				var result=this.numberOne-this.numberTwo;
				this.diceResults.push({
					value:result,
					name:this.result

				});

		},
			multiplication:function(){
				var um=this.numberOne*this.numberTwo;
				this.diceResults.push({
					value:um,
					name:this.um

				});

		},

			division:function(){
				var del=this.numberOne/this.numberTwo;
				this.diceResults.push({
					value:del,
					name:this.del

				});

		},


		}

});
})