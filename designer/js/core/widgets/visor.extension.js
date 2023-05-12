(function($){
	   
    icon=function(option){
		var opt={
				name:"icon",
				width:100,
				height:100,
				icon:{
	     			color:"black",
	     			text:"?",
	     			fill:true,
	     			size:16
				},
				text:"icon",
				minwidth:16,
				minheight:16,
				autosize:false
		};
		$.extend(opt,option);
		$.extend(this,new actionWidget(opt));
		this.propertyEditors=["common","background","shadow","hyperlink"];
		this.type="icon";
		this.font=null;
		this.persist=function(){
			var r=widget.persistproperty(this);
			if(this.icon){
				r.icon={};
				$.extend(r.icon,this.icon);
			}
			return r;
		};
		var font = new Font();
		var ths=this;
		font.onload = function() {
	  	   ths.paint();
	  	};
	  	font.onerror = function(e) {
	  	   alert(e);
	  	};
	  	font.fontFamily = "fontawesome";
	  //	font.src =ctx+"/res/css/font-awesome-4.1.0/fonts/fontawesome-webfont.ttf";
	  	
	  	this.calculateSize=function(ctx){
			ctx.save();
			this.width=Math.max(this.width,this.minwidth);
			this.height=this.width;
			this.icon.size=this.height-2*this.margin;
			ctx.restore();
			return this;
		};
		
	  	this.drawTextTo=function(ctx){
			ctx.save();
			var icon_font=this.icon.size+"px "+font.fontFamily;
			ctx.font=icon_font;
			ctx.strokeStyle=this.icon.color||"black";
			ctx.fillStyle=this.icon.color||"black";
			ctx.textBaseline="top";
			metrics=ctx.measureText(this.icon.text);	
			if(this.icon.fill)
				ctx.fillText(this.icon.text,(this.width-metrics.width)/2,this.margin);
			else
				ctx.strokeText(this.icon.text,(this.width-metrics.width)/2,this.margin);
			ctx.restore();
			return this;
		};
		this.type="icon";
		return this;
	}; 
	
	ruler=function(option){
			var opt={
					name:"ruler",
					width:100,
					height:100,
					corner:null,
					shadow:null,
					text:"",
					minwidth:16,
					minheight:16,
					border:{
						color:"black",
						width:1,
						type:"solid"
					},
					autosize:false,
					ruler:{
						type:"normal",//system,normal,custom
						direction:"horizonal",//vertical,horizonal
						width:12
					},
					allowconnectionPoint:false
			};
			$.extend(opt,option);
			$.extend(this,new widget(opt));
			this.allowRotate=false;
			this.persist=function(){
				var r=widget.persistproperty(this);
				if(this.ruler){
					r.ruler={};
					$.extend(r.ruler,this.ruler);
				}
				return r;
			};
			this.text="";
			this.type="ruler";
			this.calculateSize=function(ctx){
				if(this.ruler.type=="system"){
					this.x=0;
					this.y=0;
					if(this.ruler.direction==="vertical"){
						this.width=this.ruler.width;
						this.height=this.root.height;
					}
					else{
						this.width=this.root.width;
						this.height=this.ruler.width;
					}
				}
				else{
					if(this.ruler.direction==="vertical"){
						this.width=this.ruler.width;
					}
					else{
						this.height=this.ruler.width;
					}
				}
				this.setResizers();
			};
			this.drawBorderTo=function(ctx){
				var _widget=this;
				if(_widget.border.color==="none" && _widget.background && _widget.background.filltype==="color" &&_widget.background.color!="none")
					_widget.border.color=_widget.background.color;
				else if(_widget.border.color==="none" && _widget.background && _widget.background.filltype==="gradient" &&_widget.gradient.begincolor!="none")
					_widget.border.color=_widget.gradient.begincolor;
				if (_widget.border.color !== "none") {
					ctx.save();
					ctx.beginPath();
					ctx.lineJoin="round";
					_widget.border.width=parseInt(_widget.border.width);
					ctx.lineWidth = _widget.border.width;
					ctx.lineCap="round";
					ctx.strokeStyle = _widget.border.color;
					if(_widget.border.type!=="solid"){
						var dashList = _widget.border.type==="dashed"?[ _widget.border.width+3, _widget.border.width+1]:[_widget.border.width+1,_widget.border.width+1]; 
						ctx.setLineDash(dashList);
					}
					this.fillBackgroundTo(ctx);
					this.drawImageTo(ctx);	
					var l=4;
					var h=12;
					ctx.beginPath();
					if(this.ruler.direction==="vertical"){	
						var startY=0;
						ctx.moveTo(this.ruler.width,startY);
						ctx.lineTo(this.ruler.width,this.height);	
						for(var i=startY,j=0;i<=this.height-1;i+=this.root.dpi,j++){
							if(j%5>0){
								if(this.ruler.type!=="custom"){
									ctx.moveTo(this.ruler.width-l,i);
									ctx.lineTo(this.ruler.width,i);		
								}
							}
							else{
								if(i>0){
									ctx.moveTo(this.ruler.width-h,i);
									ctx.lineTo(this.ruler.width,i);
								}
							}
						}
					}
					else{
						var startX=0;
						ctx.moveTo(startX,this.ruler.width);
						ctx.lineTo(this.width,this.ruler.width);	
						for(var i=startX,j=0;i<=this.width-1;i+=this.root.dpi,j++){
							if(j%5>0){
								if(this.ruler.type!=="custom"){
									ctx.moveTo(i,this.ruler.width-l);
									ctx.lineTo(i,this.ruler.width);		
								}
							}
							else{
								if(i>0){
									ctx.moveTo(i,this.ruler.width-h);
									ctx.lineTo(i,this.ruler.width);
								}
							}
						}
					}
					ctx.stroke();
					ctx.restore();
				}
				else{
					this.fillBackgroundTo(ctx);
					this.drawImageTo(ctx);	
				}
				return this;
			};
	 };	
	
	qrcode=function(option){
		var opt={
				name:"qrcode",
				width:150,
				height:150,
				text:"",
				minwidth:16,
				minheight:16,
				font:null,
				border:{
					color:"none",
					width:1,
					type:"solid"
				},
				background:{
					filltype:"color",
		        	color : "white",
					image : null,
					imageType : "center"
				},
				QRCode:{
					typeNumber:-1,
					correctLevel: QRErrorCorrectLevel.H, //H,Q,M,L,
                    foreground      : "#000000",
				}
								
		};
		$.extend(opt,option);
		$.extend(this,new widget(opt));
		this.type="qrcode";
		this.calculateSize=function(ctx){
			var len=Math.max(this.width,this.height);
			this.width=len;
			this.height=len;
			this.setResizers();
		};
		function utf16to8(str) {  
		    var out, i, len, c;  
		    out = "";  
		    len = str.length;  
		    for(i = 0; i < len; i++) {  
		    c = str.charCodeAt(i);  
		    if ((c >= 0x0001) && (c <= 0x007F)) {  
		        out += str.charAt(i);  
		    } else if (c > 0x07FF) {  
		        out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F));  
		        out += String.fromCharCode(0x80 | ((c >>  6) & 0x3F));  
		        out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));  
		    } else {  
		        out += String.fromCharCode(0xC0 | ((c >>  6) & 0x1F));  
		        out += String.fromCharCode(0x80 | ((c >>  0) & 0x3F));  
		    }  
		    }  
		    return out;  
		}
		
		this.drawTextTo=function(ctx){
			var margin=this.margin;
			ctx.save();
			var qrcode	= new QRCode(this.QRCode.typeNumber, this.QRCode.correctLevel);
			qrcode.addData(utf16to8(this.text));
			qrcode.make();
			// compute tileW/tileH based on options.width/options.height
			var offset=margin;
			var tileW	= (this.width-2*margin) / qrcode.getModuleCount();
			var tileH	= (this.height-2*margin)/ qrcode.getModuleCount();
			
			if(this.corner.type==="round"){
				offset=margin+this.corner.radius;
				tileW=(this.width-2*margin-2*this.corner.radius)/qrcode.getModuleCount();
				tileH=(this.height-2*margin-2*this.corner.radius)/qrcode.getModuleCount();
			}
			
			var gradient=this.getgradient(ctx);

			// draw in the canvas
			for( var row = 0; row < qrcode.getModuleCount(); row++ ){
				for( var col = 0; col < qrcode.getModuleCount(); col++ ){
					if(this.background.filltype==="color"||(this.background.filltype==="gradient"&&gradient==null))
						ctx.fillStyle = qrcode.isDark(row, col) ? this.QRCode.foreground : this.background.color;
					else
						ctx.fillStyle = qrcode.isDark(row, col) ? this.QRCode.foreground : gradient;
					var w = (Math.ceil((col+1)*tileW) - Math.floor(col*tileW));
					var h = (Math.ceil((row+1)*tileW) - Math.floor(row*tileW));
					ctx.fillRect(Math.round(col*tileW)+offset,Math.round(row*tileH)+offset, w, h);  
				}	
			}
			ctx.restore();
			return this;
		};
		return this;
	 };
	 
	qrcode.prototype.getgradient=function(ctx){
			var gradient=null;
			if(this.gradient){
				if(this.gradient.type==="liner"){
					var angle=Math.atan(this.height/this.width)/Math.PI*180;
					var startx,starty,endx,endy;
					if(this.gradient.angle<90){
						startx=0,starty=0;
						if(this.gradient.angle<angle){
						  endx=this.width;
						  endy=this.width*Math.tan(this.gradient.angle*Math.PI/180);
						}
						else{
							 endy=this.height;
							 endx=this.height*Math.atan(this.gradient.angle*Math.PI/180);
						}
					}
					else if(this.gradient.angle===90){
						startx=0,starty=0;
						endx=0,endy=this.height;
						
					}
					else{
						startx=this.width,starty=0;
						if(this.gradient.angle<angle+90){
							 endy=this.height;
							 endx=this.width-this.height*Math.atan(this.gradient.angle*Math.PI/180);
						}					
						else{
							endx=0;
							endy=-this.height*Math.tan(this.gradient.angle*Math.PI/180);
						}
					}
					gradient = ctx.createLinearGradient(startx,starty,endx,endy);	
					if(this.gradient.angle<180){
						gradient.addColorStop(0,this.gradient.begincolor);
						gradient.addColorStop(1,this.gradient.endcolor);
					}
					else{
						gradient.addColorStop(0,this.gradient.endcolor);
						gradient.addColorStop(1,this.gradient.begincolor);					
					}
				}
				else if(this.gradient.type==="radial"){
					var radius=Math.max(this.width/2,this.height/2);
					gradient = ctx.createRadialGradient(this.width/2,this.height/2,this.gradient.radius,this.width/2,this.height/2,radius);
					gradient.addColorStop(0,this.gradient.begincolor);
					gradient.addColorStop(1,this.gradient.endcolor);
				}
			}
			return gradient;
		};
	
	$.register("qrcode",qrcode);
	$.register("ruler",ruler);
	$.register("icon",icon);
	
})(jQuery);