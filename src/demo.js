    // 对话框组件
	function Dialog(obj){
        this.width = obj.w;
		this.radius = obj.radius;
		this.location = obj.location;
		this.animate = obj.animate;
		this.bgc = obj.bgc;
		this.title = obj.title;
		this.titleLocation = obj.titleLocation;
		this.content = obj.content;
		this.btn1 = obj.btn1;
		this.btn2 = obj.btn2;
		this.init();
		this.domevent();
    };
	Dialog.prototype.init = function(){
		$(".modal-dialog").css({"width":this.width,"border-radius":this.radius+"px","background-color":this.bgc});
		$("h4.modal-title").text(this.title);
		$("h4.modal-title").css("text-align",this.titleLocation)
		$(".modal-body p").text(this.content);
		$(".btn-default").text(this.btn1);
		$(".btn-primary").text(this.btn2);
		if(this.location == "top"){
			var m_w = $(".modal-dialog").width();
			$(".modal-dialog").css({"top":"0","left":"50%","margin-top":"0","margin-left":-(m_w/2)+"px"});
		}else if(this.location == "center"){
			var m_h = $(".modal-dialog").height();
			var m_w = $(".modal-dialog").width();
			console.log(m_w)
			$(".modal-dialog").css({"top":"50%","left":"50%","margin-top":-(m_h/2)+"px","margin-left":-(m_w/2)+"px"});
		};

		$(".modal-dialog").removeClass().addClass("modal-dialog "+this.animate+"");
	};
/* 	Dialog.prototype.animate = function(){
		$(".modal").show();
		$(".modal").css({"animation-name": "fadeIn","animation-duration": "1s","animation-timing-function":"linear","animation-fill-mode":"forwards"});
	} */ 
	Dialog.prototype.domevent = function(){
		$("button.close").on("click",function(){
			$(this).parents("div.modal").hide();
		})
		$("button.btn-default").on("click",function(){
			$(this).parents("div.modal").hide();
		})
		$("button.btn-primary").on("click",function(){
			$(this).parents("div.modal").hide();
		})
	}
	var dialog1 = new Dialog(obj); 

	$("#fadeIn").on("click",function(){
		$(".modal").show();
		$(".modal-dialog").removeClass().addClass("modal-dialog fadeIn");
	})
	$("#bounceInDown").on("click",function(){
		$(".modal").show();
		$(".modal-dialog").removeClass().addClass("modal-dialog bounceInDown");
	})
	$("#fadeInDown").on("click",function(){
		$(".modal").show();
		$(".modal-dialog").removeClass().addClass("modal-dialog fadeInDown");
	})
	$("#fadeInDownBig").on("click",function(){
		$(".modal").show();
		$(".modal-dialog").removeClass().addClass("modal-dialog fadeInDownBig");
	})