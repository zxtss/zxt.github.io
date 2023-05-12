(function($){
	
	process=function(option){
		var opt={
				border:{
					width:1,
					type:"solid",
					color:"black"
				},		
				corner:{
                     type:"round", //round,rect
                     radius:0
                },
				background:{
					filltype:"gradient",
					color:"#9dd6ea",
					type:"fill",
					image:""
				},				
				shadow:{
					color:"black",
					offsetX : 4,
					offsetY : 4,
					blur : 4
				},
				font:{
	        		style:"normal", 
					weight:"normal", 
					family:"Arial",
	     			size:"10pt",
					color:"#7959ed",
					fill:true
		        },
				width:140,
				height:44
		};
		$.extend(opt,option);
		$.extend(this,new note(opt));
		this.propertyEditors=["common","font","background","hyperlink"];
		this.type="process";
	};
	
	predefinedProc=function(option){
		var opt={
			space:10,
			margin:12,
			width:155,
			height:44
		};
		$.extend(opt,option);
		$.extend(this,new process(opt));
		this.type="predefinedProc";
		
		this.drawTextTo=function(ctx){
			var margin=this.margin;
			var padding=this.space;
			var dx=0.5;
			ctx.save();		
			if(this.border.color!="none")
				ctx.strokeStyle=this.border.color;
			else
				ctx.strokeStyle=this.background.color;
			ctx.beginPath();
			ctx.moveTo(padding,0);
			ctx.lineTo(padding-dx,this.height);
			ctx.moveTo(this.width-padding+dx,0);
			ctx.lineTo(this.width-padding+dx,this.height);
			ctx.stroke();
			if(this.font!=null&&this.text){
				if(typeof this.font==="String")
					ctx.font=this.font;
				else{
					ctx.font=this.font.style+" "+this.font.weight+" "+this.font.size+" "+this.font.family;
				}
				ctx.strokeStyle=this.font.color||"black";
				ctx.fillStyle=this.font.color||"black";
				this.font.fill=this.font.fill!=null?this.font.fill:true;
				if(this.font.fill)
					ctx.fillText(this.text,margin,this.fontSize()+margin);
				else
					ctx.strokeText(this.text,margin,this.fontSize()+margin);
			}
			ctx.restore();
			return this;
		};
		
//		this.drawBorderTo=function(ctx){
//			var dx=0.5;
//			ctx.save();
//			this.border.width=parseInt(this.border.width);
//			ctx.beginPath();
//			ctx.lineWidth=this.border.width;
//			if(this.border.color!="none")
//				ctx.strokeStyle=this.border.color;
//			else
//				ctx.strokeStyle=this.background.color;
//			if(typeof this.font==="String")
//				ctx.font=this.font;
//			else{
//				ctx.font=this.font.style+" "+this.font.weight+" "+this.font.size+" "+this.font.family;
//			}
//			if(this.border.type!=="solid"&&ctx.setLineDash){
//				var dashList = this.border.type==="dashed"?[ this.border.width+3, this.border.width+1]:[this.border.width+1,this.border.width+1]; 
//				ctx.setLineDash(dashList);
//			}
//			if(this.corner&&this.corner.type==="round"){
//				radius=this.corner.radius;
//			}
//			var padding=this.space;
//			ctx.strokeRect(0,0,this.width,this.height);
//			this.fillBackgroundTo(ctx);
//			this.drawImageTo(ctx);	
//			ctx.restore();		
//			ctx.beginPath();
//			ctx.moveTo(padding+dx,0);
//			ctx.lineTo(padding+dx,this.height);
//			ctx.moveTo(this.width-padding+dx,0);
//			ctx.lineTo(this.width-padding+dx,this.height);
//			ctx.stroke();
//		
//			this.drawTextTo(ctx);
//		};
		return this;
	};  
	
	wfdocument=function(option){
		var opt={
			radius:15,
			margin:10,
			width:112,
			height:51
		};
		$.extend(opt,option);
		$.extend(this,new process(opt));
		this.type="document";
		this.drawBorderTo=function(ctx){
			ctx.save();
			this.border.width=parseInt(this.border.width);
			ctx.beginPath();
			ctx.lineWidth=this.border.width;
			if(this.border.color!="none")
				ctx.strokeStyle=this.border.color;
			else
				ctx.strokeStyle=this.background.color;
			if(typeof this.font==="String")
				ctx.font=this.font;
			else{
				ctx.font=this.font.style+" "+this.font.weight+" "+this.font.size+" "+this.font.family;
			}
			if(this.border.type!=="solid"&&ctx.setLineDash){
				var dashList = this.border.type==="dashed"?[ this.border.width+3, this.border.width+1]:[this.border.width+1,this.border.width+1]; 
				ctx.setLineDash(dashList);
			}
			if(this.corner&&this.corner.type==="round"){
				radius=this.corner.radius;
			}
			ctx.beginPath();
			ctx.moveTo(0,0);
			ctx.lineTo(this.width,0);
			ctx.lineTo(this.width,this.height);
			ctx.bezierCurveTo(this.width/4*3,this.height-this.radius,this.width/4,this.height+this.radius, 0, this.height);
			ctx.closePath();
			ctx.stroke();
			this.fillBackgroundTo(ctx,2);
			ctx.restore();
		};
		return this;
	};  
	
	papertape=function(option){
		var opt={
			radius:15,
			margin:10,
			width:112,
			height:51
		};
		$.extend(opt,option);
		$.extend(this,new process(opt));
		this.type="papertape";
		this.drawBorderTo=function(ctx){
			ctx.save();
			this.border.width=parseInt(this.border.width);
			ctx.beginPath();
			ctx.lineWidth=this.border.width;
			if(this.border.color!="none")
				ctx.strokeStyle=this.border.color;
			else
				ctx.strokeStyle=this.background.color;
			if(typeof this.font==="String")
				ctx.font=this.font;
			else{
				ctx.font=this.font.style+" "+this.font.weight+" "+this.font.size+" "+this.font.family;
			}
			if(this.border.type!=="solid"&&ctx.setLineDash){
				var dashList = this.border.type==="dashed"?[ this.border.width+3, this.border.width+1]:[this.border.width+1,this.border.width+1]; 
				ctx.setLineDash(dashList);
			}
			if(this.corner&&this.corner.type==="round"){
				radius=this.corner.radius;
			}
			ctx.beginPath();
			ctx.moveTo(0,0);
			ctx.bezierCurveTo(this.width/4,this.radius,this.width/4*3,-this.radius, this.width,0);
			ctx.lineTo(this.width,this.height);
			ctx.bezierCurveTo(this.width/4*3,this.height-this.radius,this.width/4,this.height+this.radius, 0, this.height);
			ctx.closePath();
			ctx.stroke();
			this.fillBackgroundTo(ctx,2);
			ctx.restore();
		};
		return this;
	}; 
	
	internalstorage=function(option){
		var opt={
			space:10,
			margin:10,
			width:167,
			height:44
		};
		$.extend(opt,option);
		$.extend(this,new process(opt));
		this.type="internalstorage";
		this.drawBorderTo=function(ctx){
			var dx=0.5;
			ctx.save();
			this.border.width=parseInt(this.border.width);
			ctx.beginPath();
			ctx.lineWidth=this.border.width;
			if(this.border.color!="none")
				ctx.strokeStyle=this.border.color;
			else
				ctx.strokeStyle=this.background.color;
			if(typeof this.font==="String")
				ctx.font=this.font;
			else{
				ctx.font=this.font.style+" "+this.font.weight+" "+this.font.size+" "+this.font.family;
			}
			if(this.border.type!=="solid"&&ctx.setLineDash){
				var dashList = this.border.type==="dashed"?[ this.border.width+3, this.border.width+1]:[this.border.width+1,this.border.width+1]; 
				ctx.setLineDash(dashList);
			}
			if(this.corner&&this.corner.type==="round"){
				radius=this.corner.radius;
			}
			var padding=this.space;
			ctx.moveTo(dx,dx);
			ctx.lineTo(dx+this.width,dx);
			ctx.lineTo(dx+this.width,dx+this.height);
			ctx.lineTo(dx,dx+this.height);
			ctx.closePath();
			ctx.stroke();
			ctx.clip();
			this.fillBackgroundTo(ctx);
			this.drawImageTo(ctx);
			ctx.restore();		
			ctx.beginPath();
			ctx.moveTo(padding+dx,0);
			ctx.lineTo(padding+dx,this.height);
			ctx.moveTo(0,padding+dx);
			ctx.lineTo(this.width,padding+dx);
			ctx.stroke();
		
			this.drawTextTo(ctx);
		};
		return this;
	};  
	
	decision=function(option){
		var opt={
				width:153,
				height:70
			};
			$.extend(opt,option);
			$.extend(this,new process(opt));
			this.type="decision";
			this.drawBorderTo=function(ctx){
				ctx.save();
				this.border.width=parseInt(this.border.width);
				ctx.beginPath();
				ctx.lineWidth=this.border.width;
				if(this.border.color!="none")
					ctx.strokeStyle=this.border.color;
				else
					ctx.strokeStyle=this.background.color;
				ctx.fillStyle=this.background.color;
				if(typeof this.font==="String")
					ctx.font=this.font;
				else{
					ctx.font=this.font.style+" "+this.font.weight+" "+this.font.size+" "+this.font.family;
				}
				if(this.border.type!=="solid"&&ctx.setLineDash){
					var dashList = this.border.type==="dashed"?[ this.border.width+3, this.border.width+1]:[this.border.width+1,this.border.width+1]; 
					ctx.setLineDash(dashList);
				}
				if(this.corner&&this.corner.type==="round"){
					radius=this.corner.radius;
				}
				ctx.moveTo(this.width/2,0);
				ctx.lineTo(this.width,this.height/2);								
				ctx.lineTo(this.width/2,this.height);
				ctx.lineTo(0,this.height/2);
				ctx.closePath();
				ctx.stroke();
				ctx.clip();
				this.fillBackgroundTo(ctx,2);
				this.drawImageTo(ctx);	
				ctx.restore();			
			};
			return this;
	};
	
	data=function(option){
		var opt={
				angle:15
			};
			$.extend(opt,option);
			$.extend(this,new process(opt));
			this.type="data";
			this.drawBorderTo=function(ctx){
				ctx.save();
				this.border.width=parseInt(this.border.width);
				ctx.beginPath();
				ctx.lineWidth=this.border.width;
				if(this.border.color!="none")
					ctx.strokeStyle=this.border.color;
				else
					ctx.strokeStyle=this.background.color;
				ctx.fillStyle=this.background.color;
				if(typeof this.font==="String")
					ctx.font=this.font;
				else{
					ctx.font=this.font.style+" "+this.font.weight+" "+this.font.size+" "+this.font.family;
				}
				if(this.border.type!=="solid"&&ctx.setLineDash){
					var dashList = this.border.type==="dashed"?[ this.border.width+3, this.border.width+1]:[this.border.width+1,this.border.width+1]; 
					ctx.setLineDash(dashList);
				}
				if(this.corner&&this.corner.type==="round"){
					radius=this.corner.radius;
				}
				var space=this.height*Math.sin(this.angle*Math.PI/180);
				ctx.moveTo(space,0);
				ctx.lineTo(this.width,0);								
				ctx.lineTo(this.width-space,this.height);
				ctx.lineTo(0,this.height);
				ctx.closePath();
				ctx.stroke();
				ctx.clip();
				this.fillBackgroundTo(ctx,2);
				this.drawImageTo(ctx);
				ctx.restore();			
			};
			return this;
	};
	
	storedata=function(option){
		var opt={
				radius:5
			};
			$.extend(opt,option);
			$.extend(this,new process(opt));
			this.type="storedata";
			this.drawBorderTo=function(ctx){
				ctx.save();
				this.border.width=parseInt(this.border.width);
				ctx.beginPath();
				ctx.lineWidth=this.border.width;
				if(this.border.color!="none")
					ctx.strokeStyle=this.border.color;
				else
					ctx.strokeStyle=this.background.color;
				ctx.fillStyle=this.background.color;
				if(typeof this.font==="String")
					ctx.font=this.font;
				else{
					ctx.font=this.font.style+" "+this.font.weight+" "+this.font.size+" "+this.font.family;
				}
				if(this.border.type!=="solid"&&ctx.setLineDash){
					var dashList = this.border.type==="dashed"?[ this.border.width+3, this.border.width+1]:[this.border.width+1,this.border.width+1]; 
					ctx.setLineDash(dashList);
				}
				if(this.corner&&this.corner.type==="round"){
					radius=this.corner.radius;
				}
				ctx.moveTo(0,0);
				ctx.lineTo(this.width,0);
				ctx.quadraticCurveTo(this.width-20,this.height/2,this.width,this.height);
				ctx.lineTo(0,this.height);
				ctx.quadraticCurveTo(-20,this.height/2,0,0);
				ctx.stroke();
				ctx.clip();
				this.fillBackgroundTo(ctx,2);
				this.drawImageTo(ctx);
				ctx.restore();			
			};
			return this;
	};
	
	directdata=function(option){
		var opt={
				radius:15
			};
			$.extend(opt,option);
			$.extend(this,new process(opt));
			this.type="directdata";
			this.drawBorderTo=function(ctx){
				ctx.save();
				this.border.width=parseInt(this.border.width);
				ctx.beginPath();
				ctx.lineWidth=this.border.width;
				if(this.border.color!="none")
					ctx.strokeStyle=this.border.color;
				else
					ctx.strokeStyle=this.background.color;
				ctx.fillStyle=this.background.color;
				if(typeof this.font==="String")
					ctx.font=this.font;
				else{
					ctx.font=this.font.style+" "+this.font.weight+" "+this.font.size+" "+this.font.family;
				}
				if(this.border.type!=="solid"&&ctx.setLineDash){
					var dashList = this.border.type==="dashed"?[ this.border.width+3, this.border.width+1]:[this.border.width+1,this.border.width+1]; 
					ctx.setLineDash(dashList);
				}
				if(this.corner&&this.corner.type==="round"){
					radius=this.corner.radius;
				}
				ctx.moveTo(0,0);
				ctx.lineTo(this.width,0);
				ctx.lineTo(this.width,this.height);
				ctx.lineTo(0,this.height);
				ctx.quadraticCurveTo(-this.radius,this.height/2,0,0);
				ctx.closePath();
				ctx.stroke();
				this.fillBackgroundTo(ctx,2);
				ctx.beginPath();
				ctx.moveTo(this.width,0);
				ctx.quadraticCurveTo(this.width-this.radius,this.height/2,this.width,this.height);
				ctx.moveTo(this.width,0);
				ctx.quadraticCurveTo(this.width+this.radius,this.height/2,this.width,this.height);
				ctx.stroke();
				this.fillBackgroundTo(ctx,2);
				ctx.restore();	
				this.drawTextTo(ctx);
			};
			return this;
	};
	manualinput=function(option){
		var opt={
				space:15,
				width:142,
				height:77
			};
			$.extend(opt,option);
			$.extend(this,new process(opt));
			this.type="manualinput";
			this.drawBorderTo=function(ctx){
				ctx.save();
				this.border.width=parseInt(this.border.width);
				ctx.beginPath();
				ctx.lineWidth=this.border.width;
				if(this.border.color!="none")
					ctx.strokeStyle=this.border.color;
				else
					ctx.strokeStyle=this.background.color;
				ctx.fillStyle=this.background.color;
				if(typeof this.font==="String")
					ctx.font=this.font;
				else{
					ctx.font=this.font.style+" "+this.font.weight+" "+this.font.size+" "+this.font.family;
				}
				if(this.border.type!=="solid"&&ctx.setLineDash){
					var dashList = this.border.type==="dashed"?[ this.border.width+3, this.border.width+1]:[this.border.width+1,this.border.width+1]; 
					ctx.setLineDash(dashList);
				}
				if(this.corner&&this.corner.type==="round"){
					radius=this.corner.radius;
				}
				ctx.moveTo(0,this.space);
				ctx.lineTo(this.width,0);
				ctx.lineTo(this.width,this.height);
				ctx.lineTo(0,this.height);
				ctx.closePath();
				ctx.stroke();
				this.fillBackgroundTo(ctx,2);
				ctx.restore();			
			};
			return this;
	};
	
	card=function(option){
		var opt={
				space:25,
				width:142,
				height:77
			};
			$.extend(opt,option);
			$.extend(this,new process(opt));
			this.type="card";
			this.drawBorderTo=function(ctx){
				ctx.save();
				this.border.width=parseInt(this.border.width);
				ctx.beginPath();
				ctx.lineWidth=this.border.width;
				if(this.border.color!="none")
					ctx.strokeStyle=this.border.color;
				else
					ctx.strokeStyle=this.background.color;
				ctx.fillStyle=this.background.color;
				if(typeof this.font==="String")
					ctx.font=this.font;
				else{
					ctx.font=this.font.style+" "+this.font.weight+" "+this.font.size+" "+this.font.family;
				}
				if(this.border.type!=="solid"&&ctx.setLineDash){
					var dashList = this.border.type==="dashed"?[ this.border.width+3, this.border.width+1]:[this.border.width+1,this.border.width+1]; 
					ctx.setLineDash(dashList);
				}
				if(this.corner&&this.corner.type==="round"){
					radius=this.corner.radius;
				}
				ctx.moveTo(0,this.space);
				ctx.lineTo(this.space,0);
				ctx.lineTo(this.width,0);
				ctx.lineTo(this.width,this.height);
				ctx.lineTo(0,this.height);
				ctx.closePath();
				ctx.stroke();
				this.fillBackgroundTo(ctx,2);
				ctx.restore();			
			};
			return this;
	};
	
	looplimit=function(option){
		var opt={
				space:25,
				width:112,
				height:62
			};
			$.extend(opt,option);
			$.extend(this,new process(opt));
			this.type="looplimit";
			this.drawBorderTo=function(ctx){
				ctx.save();
				this.border.width=parseInt(this.border.width);
				ctx.beginPath();
				ctx.lineWidth=this.border.width;
				if(this.border.color!="none")
					ctx.strokeStyle=this.border.color;
				else
					ctx.strokeStyle=this.background.color;
				ctx.fillStyle=this.background.color;
				if(typeof this.font==="String")
					ctx.font=this.font;
				else{
					ctx.font=this.font.style+" "+this.font.weight+" "+this.font.size+" "+this.font.family;
				}
				if(this.border.type!=="solid"&&ctx.setLineDash){
					var dashList = this.border.type==="dashed"?[ this.border.width+3, this.border.width+1]:[this.border.width+1,this.border.width+1]; 
					ctx.setLineDash(dashList);
				}
				if(this.corner&&this.corner.type==="round"){
					radius=this.corner.radius;
				}
				ctx.moveTo(0,this.space);
				ctx.lineTo(this.space,0);
				ctx.lineTo(this.width-this.space,0);
				ctx.lineTo(this.width,this.space);
				ctx.lineTo(this.width,this.height);
				ctx.lineTo(0,this.height);
				ctx.closePath();
				ctx.stroke();
				this.fillBackgroundTo(ctx,2);
				ctx.restore();			
			};
			return this;
	};
	
	delay=function(option){
		var opt={
				radius:25,
				width:140,
				height:44
			};
			$.extend(opt,option);
			$.extend(this,new process(opt));
			this.type="delay";
			this.drawBorderTo=function(ctx){
				ctx.save();
				this.border.width=parseInt(this.border.width);
				ctx.beginPath();
				ctx.lineWidth=this.border.width;
				if(this.border.color!="none")
					ctx.strokeStyle=this.border.color;
				else
					ctx.strokeStyle=this.background.color;
				ctx.fillStyle=this.background.color;
				if(typeof this.font==="String")
					ctx.font=this.font;
				else{
					ctx.font=this.font.style+" "+this.font.weight+" "+this.font.size+" "+this.font.family;
				}
				if(this.border.type!=="solid"&&ctx.setLineDash){
					var dashList = this.border.type==="dashed"?[ this.border.width+3, this.border.width+1]:[this.border.width+1,this.border.width+1]; 
					ctx.setLineDash(dashList);
				}
				if(this.corner&&this.corner.type==="round"){
					radius=this.corner.radius;
				}
				ctx.moveTo(0,0);
				ctx.lineTo(this.width-this.radius,0);
				ctx.quadraticCurveTo(this.width,this.height/2,this.width-this.radius,this.height);
				ctx.lineTo(0,this.height);				
				ctx.closePath();
				ctx.stroke();
				this.fillBackgroundTo(ctx,2);
				ctx.restore();			
			};
			return this;
	};
	
	display=function(option){
		var opt={
				rightradius:25,
				leftradius:45,
				width:138,
				height:65
			};
			$.extend(opt,option);
			$.extend(this,new process(opt));
			this.type="display";
			this.drawBorderTo=function(ctx){
				ctx.save();
				this.border.width=parseInt(this.border.width);
				ctx.beginPath();
				ctx.lineWidth=this.border.width;
				if(this.border.color!="none")
					ctx.strokeStyle=this.border.color;
				else
					ctx.strokeStyle=this.background.color;
				ctx.fillStyle=this.background.color;
				if(typeof this.font==="String")
					ctx.font=this.font;
				else{
					ctx.font=this.font.style+" "+this.font.weight+" "+this.font.size+" "+this.font.family;
				}
				if(this.border.type!=="solid"&&ctx.setLineDash){
					var dashList = this.border.type==="dashed"?[ this.border.width+3, this.border.width+1]:[this.border.width+1,this.border.width+1]; 
					ctx.setLineDash(dashList);
				}
				if(this.corner&&this.corner.type==="round"){
					radius=this.corner.radius;
				}
				ctx.moveTo(this.leftradius,0);
				ctx.lineTo(this.width-this.rightradius,0);
				ctx.quadraticCurveTo(this.width,this.height/2,this.width-this.rightradius,this.height);
				ctx.lineTo(this.leftradius,this.height);	
				ctx.quadraticCurveTo(this.leftradius/2,this.height,0,this.height/2);
				ctx.quadraticCurveTo(this.leftradius/2,0,this.leftradius,0);
				ctx.closePath();
				ctx.stroke();
				this.fillBackgroundTo(ctx,2);
				ctx.restore();			
			};
			return this;
	};
	preparation=function(option){
		var opt={
				space:25,
				width:138,
				height:65
			};
			$.extend(opt,option);
			$.extend(this,new process(opt));
			this.type="preparation";
			this.drawBorderTo=function(ctx){
				ctx.save();
				this.border.width=parseInt(this.border.width);
				ctx.beginPath();
				ctx.lineWidth=this.border.width;
				if(this.border.color!="none")
					ctx.strokeStyle=this.border.color;
				else
					ctx.strokeStyle=this.background.color;
				ctx.fillStyle=this.background.color;
				if(typeof this.font==="String")
					ctx.font=this.font;
				else{
					ctx.font=this.font.style+" "+this.font.weight+" "+this.font.size+" "+this.font.family;
				}
				if(this.border.type!=="solid"&&ctx.setLineDash){
					var dashList = this.border.type==="dashed"?[ this.border.width+3, this.border.width+1]:[this.border.width+1,this.border.width+1]; 
					ctx.setLineDash(dashList);
				}
				if(this.corner&&this.corner.type==="round"){
					radius=this.corner.radius;
				}
				ctx.moveTo(this.space,0);
				ctx.lineTo(this.width-this.space,0);
				ctx.lineTo(this.width,this.height/2);
				ctx.lineTo(this.width-this.space,this.height);				
				ctx.lineTo(this.space,this.height);
				ctx.lineTo(0,this.height/2);	
				ctx.closePath();
				ctx.stroke();
				this.fillBackgroundTo(ctx,2);
				ctx.restore();			
			};
			return this;
	};
	manualoperation=function(option){
		var opt={
				space:15,
				width:142,
				height:77
			};
			$.extend(opt,option);
			$.extend(this,new process(opt));
			this.type="manualoperation";
			this.drawBorderTo=function(ctx){
				ctx.save();
				this.border.width=parseInt(this.border.width);
				ctx.beginPath();
				ctx.lineWidth=this.border.width;
				if(this.border.color!="none")
					ctx.strokeStyle=this.border.color;
				else
					ctx.strokeStyle=this.background.color;
				ctx.fillStyle=this.background.color;
				if(typeof this.font==="String")
					ctx.font=this.font;
				else{
					ctx.font=this.font.style+" "+this.font.weight+" "+this.font.size+" "+this.font.family;
				}
				if(this.border.type!=="solid"&&ctx.setLineDash){
					var dashList = this.border.type==="dashed"?[ this.border.width+3, this.border.width+1]:[this.border.width+1,this.border.width+1]; 
					ctx.setLineDash(dashList);
				}
				if(this.corner&&this.corner.type==="round"){
					radius=this.corner.radius;
				}
				ctx.moveTo(0,0);
				ctx.lineTo(this.width,0);
				ctx.lineTo(this.width-this.space,this.height);
				ctx.lineTo(this.space,this.height);
				ctx.closePath();
				ctx.stroke();
				this.fillBackgroundTo(ctx,2);
				ctx.restore();			
			};
			return this;
	};
	start=function(option){
		var opt={
				background:{
					filltype:"gradient",
					color:"#9dd6ea",
					type:"fill",
					image:""
				},
				height:21,
				width:21
			};
			$.extend(opt,option);
			$.extend(this,new circle(opt));
			this.type="start";
			this.text="";
			return this;
	};
	terminator=function(option){
		var opt={
				corner:{
					type:"round", //round,rect
					radius:16
				},
			};
			$.extend(opt,option);
			$.extend(this,new process(opt));
			this.type="terminator";
			return this;
	};
	sequential=function(option){
		var opt={
				space:15,
				width:99,
				height:99
			};
			$.extend(opt,option);
			$.extend(this,new process(opt));
			this.type="sequential";
			this.drawBorderTo=function(ctx){
				var dx=0.5;
				ctx.save();
				this.border.width=parseInt(this.border.width);
				ctx.beginPath();
				ctx.lineWidth=this.border.width;
				if(this.border.color!="none")
					ctx.strokeStyle=this.border.color;
				else
					ctx.strokeStyle=this.background.color;
				ctx.fillStyle=this.background.color;
				if(typeof this.font==="String")
					ctx.font=this.font;
				else{
					ctx.font=this.font.style+" "+this.font.weight+" "+this.font.size+" "+this.font.family;
				}
				if(this.border.type!=="solid"&&ctx.setLineDash){
					var dashList = this.border.type==="dashed"?[ this.border.width+3, this.border.width+1]:[this.border.width+1,this.border.width+1]; 
					ctx.setLineDash(dashList);
				}
				if(this.corner&&this.corner.type==="round"){
					radius=this.corner.radius;
				}
				this.height=this.width;
				$.drawEllipse(ctx,this.width/2,this.height/2,this.width/2,this.width/2);
				ctx.moveTo(this.width/2,this.height+dx);
				ctx.lineTo(this.width,this.height+dx);
				ctx.stroke();
				this.fillBackgroundTo(ctx,2);
				ctx.restore();			
			};
			return this;
	};
	
	 $.register("predefinedProc",predefinedProc);
	 $.register("process",process);
	 $.register("decision",decision);
	 $.register("data",data);
	 $.register("storedata",storedata);
	 $.register("directdata",directdata);
	 $.register("manualinput",manualinput);
	 $.register("card",card);
	 $.register("delay",delay);
	 $.register("display",display);
	 $.register("preparation",preparation);
	 $.register("manualoperation",manualoperation);
	 $.register("internalstorage",internalstorage);
	 $.register("terminator",terminator);
	 $.register("start",start);
	 $.register("document",wfdocument);
	 $.register("papertape",papertape);
	 $.register("looplimit",looplimit);
	 $.register("sequential",sequential);
		
})(jQuery);