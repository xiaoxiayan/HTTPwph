var register = (function(){
	return {
		init :function(ele){
			this.$ele = document.querySelector(ele);
			this.$inpone =document.getElementById("one");
//			console.log(this.$inpone)
			this.event();
		},
		event:function(){
			var _this =this
			_this.$inpone.onblur = function(){
				sendAjax("register.php",_this.$inpone.value)
			}
		}
	}
}())
