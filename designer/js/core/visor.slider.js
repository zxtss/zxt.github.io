(function($) {
	
	slider=function(opt){
		this.items=[];
		this.activePanel=null;
		this.width=1024;
		this.height=800;
		this.pageindex=0;
		this.timeout=6000;
		this.speed=500;
		this.parent=null;
		this.distance=1024;
		this.active=true;
		this.updateInfo=null;
		this.showtype=-1;
		this.playhandler=null;
		this.changing=false;
		$.extend(this,opt);
		this.items=this.parent.find("ul>li");
		this.items.each(function(i,item){
			$(item).css("position","relative").attr("id",i);
		});
		var ths=this;
		this.parent.find("ol>li").each(function(i,item){
			$(item).on("click",function(){
				ths.setActive(i);
			});
		});
		this.init();
	};
	
	slider.prototype.enter=function(item,showtype){
		var ths=this;
		if(typeof item==="number"){
			item=this.items[item];
		}		
		var $curli=item;
		var direction=showtype===-1?Math.round(Math.random()*8+1):showtype;
		var width=ths.parent.css("width");
		var height=ths.parent.css("height");
		width=parseInt(width.substring(0,width.length-2));
		height=parseInt(height.substring(0,height.length-2));
		var liheight=$curli.css("height");
		liheight=parseInt(liheight.substring(0,liheight.length-2));
		var portrait=liheight;
//		direction=3;
		if(direction===2){
//			right enter
			var distance=width;
			$curli.css("left",+distance).show().animate({left:0},ths.speed);
		}
		else if(direction===1){
//			left enter
			var distance=width;
			$curli.css("left",-distance).show().animate({left:0},ths.speed);
		}
		else if(direction===4){
//			top enter
			var distance=portrait;
			$curli.css("top",-distance).show().animate({top:0},ths.speed);
		}
		else if(direction===3){
//			bottom enter
			var distance=portrait;
			$curli.css("top",distance).show().animate({top:0},ths.speed);
		}
		else if(direction===5){
//			top left top enter
			var distance=portrait;
			$curli.css("top",distance).css("left",-distance).show().animate({top:0,left:0},ths.speed);
		}
		else if(direction===6){
//			bottom left bottom enter
			var distance=portrait;
			$curli.css("top",-distance).css("left",-distance).show().animate({top:0,left:0},ths.speed);
		}
		else if(direction===7){
//			top right top enter
			var distance=portrait;
			$curli.css("top",distance).css("left",distance).show().animate({top:0,left:0},ths.speed);
		}
		else if(direction===8){
//			bottom right enter
			var distance=portrait;
			$curli.css("top",-distance).css("left",distance).show().animate({top:0,left:0},ths.speed);
		}
		else if(direction===9){
//			fadein enter
			$curli.css("top",0).css("left",0).css("opacity",0.1).show().animate({opacity:1},ths.speed);
		}
	};
	
	slider.prototype.setActive=function(index){
		var ths=this;
		var pagein=-1;
		if(this.changing)
			return;
		var item;
		if(typeof index==="number"){
			this.pageindex=index;
			item=this.items.eq(index);
		}
		else{
			 item=this.finditem(index);
			 this.pageindex=this.indexOf(index);
		}
		pagein=$(item).attr("data-pagein");
		pagein=pagein||-1;
		var $container=this.parent.find("ul");
		var $navigation=this.parent.find("ol");
		var $li=$container.find("li:visible");
		$navigation.find(".active").removeClass("active");
		var index=parseInt(item.attr("id"));
		$navigation.find("li").eq(index).addClass("active");
		if($li.size()>1||$li.size()==0){
			$li.hide();
			$(item).show();
			ths.enter(item,pagein);
			return;
		}
		else{
			var $curli=$container.find("li:visible");
			var pageout=$curli.attr("data-pageout");
			if(this.showtype>0)
				pageout=this.showtype;		
			pageout=pageout||-1;
			var direction=pageout===-1?Math.round(Math.random()*8+1):pageout;
			var width=ths.parent.css("width");
			var height=ths.parent.css("height");
			width=parseInt(width.substring(0,width.length-2));
			height=parseInt(height.substring(0,height.length-2));
			var liwidth=$curli.css("width");
			var liheight=$curli.css("height");
			liwidth=parseInt(liwidth.substring(0,liwidth.length-2));
			liheight=parseInt(liheight.substring(0,liheight.length-2));
			var landscape=(width-liwidth)/2;
			var portrait=(height-liheight)/2;
			if($curli!=item){
				this.changing=true;
				if(direction===2){
					ths.instance=landscape;
//					right-->left
					$curli.animate({left:-ths.distance},ths.speed,function(){
						$(this).hide().css("left",0).appendTo($container);
						ths.enter(item,pagein);
						ths.changing=false;
					});				
				}
				else if(direction===1){
					ths.instance=landscape;
//					left-->right
					$curli.animate({left:ths.distance},ths.speed,function(){
						$(this).hide().css("left",0).appendTo($container);
						ths.enter(item,pagein);
						ths.changing=false;
					});
				}
				else if(direction===4){
					ths.instance=portrait;
//					top-->bottom
					$curli.animate({top:ths.distance},ths.speed,function(){
						$(this).hide().css("top",0).appendTo($container);
						ths.enter(item,pagein);
						ths.changing=false;
					});
				}
				else if(direction===3){
					ths.instance=portrait;
//					bottom-->top
					$curli.animate({top:-ths.distance},ths.speed,function(){
						$(this).hide().css("top",0).appendTo($container);
						ths.enter(item,pagein);
						ths.changing=false;
					});
				}
				else if(direction===5){
					ths.instance=portrait;
//					bottom-->top,right
					$curli.animate({top:-ths.distance,left:ths.distance},ths.speed,function(){
						$(this).hide().css("top",0).css("left",0).appendTo($container);
						ths.enter(item,pagein);
						ths.changing=false;
					});
				}
				else if(direction===6){
					ths.instance=portrait;
//					bottom-->top,left
					$curli.animate({top:-ths.distance,left:-ths.distance},ths.speed,function(){
						$(this).hide().css("top",0).css("left",0).appendTo($container);
						ths.enter(item,pagein);
						ths.changing=false;
					});
				}
				else if(direction===7){
					ths.instance=portrait;
//					top-->bottom,right
					$curli.animate({top:ths.distance,left:ths.distance},ths.speed,function(){
						$(this).hide().css("top",0).css("left",0).appendTo($container);
						ths.enter(item,pagein);
						ths.changing=false;
					});
				}
				else if(direction===8){
					ths.instance=portrait;
//					top-->bottom,left
					$curli.animate({top:ths.distance,left:-ths.distance},ths.speed,function(){
						$(this).hide().css("top",0).css("left",0).appendTo($container);
						ths.enter(item,pagein);
						ths.changing=false;
					});
				}
				else if(direction===9){
					ths.instance=portrait;
//					fadeout
					$curli.animate({opacity:0.2},ths.speed,function(){
						$(this).hide().css("top",0).css("left",0).css("opacity",1).appendTo($container);
						ths.enter(item,pagein);
						ths.changing=false;
					});
				}
			}
		}
		if(ths.updateInfo)
			ths.updateInfo();
	};
	
	slider.prototype.init=function(){
		var ths=this; 
		 
		this.parent.find(".btn-nextpage").on("click",function(){
				ths.stop();
				ths.next();
				if(ths.active)
					setTimeout(ths.play(),2000);
		    });
				
		this.parent.find(".btn-prevpage").on("click",function(){
			ths.stop();
			ths.prev();
			if(ths.active)
				setTimeout(ths.play(),2000);
		});
		this.parent.find("li.dot").on("click",function(){
			ths.stop();
			ths.setActive($(this).text());
		});
		this.setActive(this.pageindex);
		if(this.active)
			  this.play();
		return this;
	};
	
	slider.prototype.next=function()
	{
		if(this.pageindex<this.size()-1){
			this.pageindex+=1;
		}
		else{
			this.pageindex=0;
		}
		this.setActive(this.pageindex);
	};
	
	slider.prototype.prev=function()
	{
		if(this.pageindex==0){
			this.pageindex=this.size()-1;
		}
		else{
			this.pageindex-=1;
		}
		this.setActive(this.pageindex);
	};
	
	slider.prototype.play=function(){
		var ths=this;
		this.playhandler=setInterval(function(){
			if(ths.pageindex<ths.items.length-1){
				ths.pageindex+=1;
			}
			else{
				ths.pageindex=0;
			}
			ths.setActive(ths.pageindex);
		},this.timeout);
		$(".btn-play").html("<i class=\"fa fa-2x fa-pause\"></i>");
	};
	
	slider.prototype.stop=function(){
		if(this.playhandler){
			window.clearInterval(this.playhandler);
			this.playhandler=null;
			$(".btn-play").html("<i class=\"fa fa-2x fa-play\"></i>");
		}
	};
	
	
	slider.prototype.size=function(){
		return this.items.length;
	};	
	
	slider.prototype.finditem=function(itemName){
		for(var i=0;i<=this.items.size()-1;i++){
			if(this.items.eq(i).attr("id")===itemName||this.items.eq(i).attr("name")==itemName)
				return this.items.eq(i);
		}
		return null;
	};
	
	slider.prototype.indexOf=function(itemName){
		for(var i=0;i<=this.items.size()-1;i++){
			if(this.items.eq(i).attr("id")===itemName||this.items.eq(i).attr("name")==itemName)
				return i;
		}
		return null;
	};
	
})(jQuery);