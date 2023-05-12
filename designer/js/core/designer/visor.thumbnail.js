(function($) {
	$.thumbnails = function(option) {
		return new thumbnail(option ? option : {});
	};
	
	thumbnail=function(opt){
		var option={
			dom:$("document"),		
			owner:null,
			name:"thumbnail",
			scale:1,
			background:{
				filltype:"color",
				imageType : "center",
				color:"white",
			},			
			showgrid:false,
			width:400,
			height:450,
			onboxchange:null,
			activeRect:{
					x:0,
					y:0,
					width:1024,
					height:400
			},
			mousemove:function(e){
				if(ths.targetwidget!=null){
					console.info("ths.targetwidget.name="+ths.targetwidget.name);
					ths.Cursor("move");
				}
				else
					ths.Cursor("default");
			},
			click:function(e){
				box.x=Math.max(e.desktopX-box.width/2,0);
				box.y=Math.max(e.desktopY-box.height/2,0);
				ths.paint();
				if(ths.onboxchange)
					ths.onboxchange(box);
			}
		};
		$.extend(option,opt);
		$.extend(this,new presenter(option));
		var ths=this;
		var addScrollListener=function(element, wheelHandle) {
			if (typeof element != 'object')
				return;
			if (typeof wheelHandle != 'function')
				return;
			// 监测浏览器
			if (typeof arguments.callee.browser == 'undefined') {
				var user = navigator.userAgent;
				var b = {};
				b.opera = user.indexOf("Opera") > -1
						&& typeof window.opera == "object";
				b.khtml = (user.indexOf("KHTML") > -1
						|| user.indexOf("AppleWebKit") > -1 || user
						.indexOf("Konqueror") > -1)
						&& !b.opera;
				b.ie = user.indexOf("MSIE") > -1 && !b.opera;
				b.gecko = user.indexOf("Gecko") > -1 && !b.khtml;
				arguments.callee.browser = b;
			}
			if (element == window)
				element = document;
			if (arguments.callee.browser.ie)
				element.attachEvent('onmousewheel', wheelHandle);
			else
				element.addEventListener(arguments.callee.browser.gecko ? 'DOMMouseScroll' : 'mousewheel', wheelHandle, false);
		};

		addScrollListener(ths.canvas,function(e){
			var offset=e.wheelDelta?e.wheelDelta:-e.detail;
			box.y-=offset;
			if(ths.onboxchange)
				ths.onboxchange(box);
		});
		
		
		if(this.owner!=null){
			var scaleX=this.width/this.owner.rootwidget.width;
			var scaleY=this.height/this.owner.rootwidget.height;
			this.scale=Math.min(scaleX,scaleY);
			this.rootwidget.width=this.owner.rootwidget.width*this.scale;
			this.rootwidget.height=this.owner.rootwidget.height*this.scale;
			var box=new widget({
				name:"box",
				editable:true,
				allowconnectionPoint:false,
				allowResizer:false,
				allowRotate:false,
				x:this.activeRect.x*this.scale,
				y:this.activeRect.y*this.scale,
				width:this.activeRect.width*this.scale,
				height:this.activeRect.height*this.scale,
				background:{
					filltype:"color",
					color:"#cecfff"
				},
				mousedown:function(e){
					ths.refresh();
				},	
				mouseup:function(e){
					if(ths.onboxchange)
						ths.onboxchange(this);
				},
				dblclick:function(e){
					e.cancel=true;
				},
				alpha:0.3,
			}).appendPresenter(this);
			
		};
		this.updateBoxSize=function(activeRect){
			var _box=this.widgets[0];
			this.activeRect=activeRect;
			_box.x=this.activeRect.x*this.scale;
			_box.y=this.activeRect.y*this.scale,
			_box.width=this.activeRect.width*this.scale,
			_box.height=this.activeRect.height*this.scale;
			this.rootwidget.width=this.owner.rootwidget.width*this.scale;
//			this.width=this.rootwidget.width;
		};
		
		this.refresh=function(){
			if(this.owner!=null&&this.owner.rootwidget){
				var scaleX=this.width/this.owner.rootwidget.width;
				var scaleY=this.height/this.owner.rootwidget.height;
				this.scale=Math.min(scaleX,scaleY);
				this.rootwidget.width=this.owner.rootwidget.width*this.scale;
				this.rootwidget.height=this.owner.rootwidget.height*this.scale;
				var imageData=this.owner.rootwidget.getImageData(0,0,null,null,this.width,this.height);
				if(this.rootwidget.background.image==null){
					var image=new Image();
					image.src=imageData;
					this.rootwidget.background.image=image;
					
//					var _a = document.createElement("img");
//					var ths=this;
//					_a.addEventListener("load", function(e) {
//						ths.rootwidget.background.image = e.target;						
//					}, false);
//					_a.src = imageData;
				}
				else
					this.rootwidget.background.image.src=imageData;
				this.rootwidget.background.filltype="image";
				this.rootwidget.background.imageType="center";
			}
			this.paint();
			return this;
		};
		return this;
	};
})(jQuery);