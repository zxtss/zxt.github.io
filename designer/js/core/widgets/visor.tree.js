(function($){
	
	treeNode=function(option){
		var opt={
				font:{
					style:"normal", // normal,italic,
					weight:"normal",//normal,lighter,bold  
					family:"Arial",
	     			size:"9pt",
	     			color:"none",
	     			fill:true
				},
				background:{
					filltype:"image",
		        	color : "white",
					image : 'images/tree/3.png',
					imageType : "center"// repeat center fit fill
				},
				objectdata:{
					datatype:"String",//String,Integer,object,array,Datetime
					targetpath:'',
					collapse:false,
					layer:0,
					index:0	
				},	
				hyperlink:null,
				shadow:null,
				width:140,
				height:44,
				includeChildren:false,
				text:""
		};		
		if(option.objectdata){
			$.extend(opt.objectdata,option.objectdata);
			delete option.objectdata;
		}	
		
		$.extend(opt,option);		
		$.extend(this,new widget(opt));
		this.propertyEditors=["common","font"];
		var ths=this;
		var  src='images/tree/2-50.png';
		if(this.objectdata.datatype=="Array")
			src='images/tree/1-40.png';
		else if(this.objectdata.datatype=="Object")
			src='images/tree/3-40.png';
		else if(this.objectdata.datatype=="Date")
			src='images/tree/date-40.png';
		else if(this.objectdata.datatype=="Integer")
			src='images/tree/number-40.png';
		this.Background({filltype:'image',image:src},function(){
			ths.paint();
		});
		this.click=function(e){		
			var inputbox=this.objectTree().presenters[0].textbox;
			for(var i=0;i<=this.parent.widgets.length-1;i++){
				this.parent.widgets[i].focus=false;
			}
			this.focus=true;
			this.objectTree().presenters[0].focuswidget=this;
			
			$(inputbox).hide();
			this.objectTree().presenters[0].paint();			
			if(this.objectTree().fieldclickEvent){
				this.objectTree().fieldclickEvent.call(this,e);
			}
			e.cancel=true;
		};

		if(!this.includeChildren&&option.widgets&&option.widgets.length>0){
			var _widgets=[];
			$.extend(_widgets,option.widgets);
			option.widgets.splice(0,option.widgets.length);
			this.restoreChildren(_widgets,{
				editable:true,
				click:this.click
			});
		}
		
		
		this.type="treeNode";	
		this.autosize=false;
		this.editable=false;
		var ths=this;
		this.objectTree=function(){
			  var objectTree=this.parent;
			  while(objectTree&&objectTree.type!="objectTree")
				  objectTree=objectTree.parent;
			  return objectTree;
		}
		
		this.persist=function(){			
			var r=widget.persistproperty(this);
			r.treename=this.objectTree().name;
			r.objectdata={};
			$.extend(r.objectdata,this.objectdata);
			return r;
		};
		
		
		this.newfield=function(option){
			var attributename=this.getName();
			var opt={
				name:attributename,
				font:this.font
			};
			$.extend(opt,option);	
			var node1=new treeNode(opt);
			this.addnode(node1);
			return node1;
		};
		
		this.addnode=function(node){
			if(node.type&&node.type==="treeNode"&&this.findnode(node.name)==null){
				node.objectdata.index=this.widgets.length+1;
				node.objectdata.layer=this.objectdata.layer+1;
				this.objectdata.datatype="Object";
				this.appendWidget(node);
				node.fieldclickEvent=this.fieldclickEvent;
				src='images/tree/3-40.png';
				this.Background({filltype:'image',image:src},function(){
					ths.paint();
				});
			}
			return this;
		};
		
		this.deletefield=function(){
			var parent=this.parent;
			var index=parent.widgets.indexOf(this);
			if(index<0)
				return;
			var presenter=this.objectTree().presenters[0];
			if(this.objectdata.targetpath){
				var connector=presenter.Widget(this.objectdata.targetpath);
				presenter.removeWidget(connector);
			}
			parent.removeWidget(this);
			if(parent.widgets.length>0){
				if(index==parent.widgets.length){
					parent.widgets[index-1].focus=true;
					presenter.focuswidget=parent.widgets[index-1];
				}
				else {
					parent.widgets[index].focus=true;
					presenter.focuswidget=parent.widgets[index];
				}
			}
			this.paint();
		};	
		
		this.findnode=function(attributename){
			for(var i=0;i<=this.widgets.length-1;i++){
				if(this.widgets[i].name===attributename)
					return this.widgets[i];
			}
			return null;
		};
		
		
		this.beforePaint=function(ctx){
			if(this.parent.type=="objectTree")
				this.objectdata.layer=0;
			else if(this.parent.type=="treeNode")
				this.objectdata.layer=this.parent.objectdata.layer+1;
			var lineheight=this.fontSize()+2*this.margin;
			var height=lineheight;
			if(this.widgets.length>0){
				if((this.objectdata.datatype!='Object')&&(this.objectdata.datatype!='Array'))
					this.objectdata.datatype='Object';
				$(this.widgets).each(function(i,item){
					item.y=height;
					height=height+item.height+Math.round(this.margin/2);
				})
				if(this.objectdata.targetpath){
					var connector=this.objectTree().presenters[0].Widget(this.objectdata.targetpath);
					if(connector){
						if(connector.end.position=='left'||connector.end.position=='right'){
							connector.end.y=relativeY(this)+lineheight/2;
							connector.end.offsetx=this.margin+this.objectdata.layer*(layerinst+iconwidth)+0.5;
						}
						else {
							connector.end.offsety=relativeY(this)+0.5;
						}
					}
				}
			}
			this.Height(height);
			if(this.parent){
				this.Width(this.parent.canvas.width);
			}	
		};
		
		var relativeY=function(node){
			var y=node.y;
			while(node.parent&&node.parent.type=="treeNode"){
				y+=node.parent.y;
				node=node.parent;
			}
			return y;
		}
		
		
		this.drawBorderTo=function(ctx){
			this.x=0;
			ctx.save();
			var ths=this;
			this.lineheight=ths.fontSize()+2*ths.margin;
			var _widget=this;
			if(this.widgets.length>0&&this.objectdata.targetpath){
				_widget.border.type="dashed";
				_widget.border.color="red";
			}
			if (_widget.border.color !== "none") {
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
				var left=this.margin+this.objectdata.layer*(layerinst+iconwidth)+0.5;
				var offsetX=this.objectdata.layer*3;
				ctx.strokeRect(left,1.5,_widget.width-left-2.5,_widget.height-this.margin+1.5);
			}
			this.drawImageTo(ctx);	
			ctx.restore();
			return this;
		};
		
		this.drawImageTo = function(ctx) {
			var _widget=this;
			var dx=1;
			if(_widget.background==null||_widget.background.filltype!="image")
				return;
			var image = _widget.background.image;
			if (image) {
				var left=this.margin+this.objectdata.layer*(layerinst+iconwidth)+iconwidth+3;
				ctx.drawImage(image, left-iconwidth, this.margin/2, iconwidth,iconwidth);
			}
			return this;
		};
	
		var layerinst=5;
		var iconwidth=18;
		this.drawTextTo=function(ctx){
			var text=this.name;
			var margin=this.margin;
			var autosize=this.autosize||false;		
			ctx.save();
			var font=this.font;
			if(this.font.color==="none")
			   font=this.parent.font;
			if(this.focus){
				ctx.fillStyle= "#cecfff";
				var left=this.margin+this.objectdata.layer*(layerinst+iconwidth)+iconwidth+3;
				ctx.fillRect(0,0,this.width,this.height);
				ctx.fillStyle="white";
				ctx.strokeStyle="white";
			}
			else{
				ctx.fillStyle=font.color||"black";
				ctx.strokeStyle=font.color||"black";
			}
			if(font!=null&&text){
				if(typeof font==="String")
					ctx.font=font;
				else{
					ctx.font=font.style+" "+font.weight+" "+font.size+" "+font.family;
				}
				metrics=ctx.measureText(text);	
				this.minwidth=metrics.width+2*this.margin+this.objectdata.layer*(layerinst+iconwidth);
				var left=margin+this.objectdata.layer*(layerinst+iconwidth)+iconwidth+3;
				font.fill=font.fill!=null?font.fill:true;
				if(font.fill)
					ctx.fillText(text,left,margin+this.parent.fontSize(),this.width-margin);
				else
					ctx.strokeText(text,margin,this.parent.fontSize()+margin);
				ctx.save()
				ctx.restore();
			}
			ths.drawImageTo(ctx);
			ctx.restore();
			return this;
		};
		
		this.keypress=function(e){
			console.info(e.keyCode);
			if(e.keyCode===46){  //delete
				if(this.focus){
					debugger;
					this.deletefield();
					e.cancel=true;
				}		
			}
			else if(e.keyCode===45){  //insert
				this.newfield();
			}
			else if(e.keyCode===38){ //ctrl+up
				if(e.ctrlKey){					
					e.preventDefault();
					this.goup();
					e.cancel=true;
				}
				else{
					var parent=this.parent;
					var index=parent.widgets.indexOf(this);
					this.focus=false;
					if(index>0){
						this.objectTree().presenters[0].focuswidget=parent.widgets[index-1];
						parent.widgets[index-1].focus=true;
					}
					else if(ths.parent.type=="treeNode"){
						this.objectTree().presenters[0].focuswidget=ths.parent;
						ths.parent.focus=true;
					}
					parent.paint();
					e.preventDefault();
					e.cancel=true;
				}
			}
			else if(e.keyCode===40){ //ctrl+down
				if(e.ctrlKey){					
					e.preventDefault();
					this.godown();
					e.cancel=true;
				}
				else{
					var parent=this.parent;
					var index=parent.widgets.indexOf(this);
					this.focus=false;
					if(index<parent.widgets.length-1){
						this.objectTree().presenters[0].focuswidget=parent.widgets[index+1];
						parent.widgets[index+1].focus=true;
						parent.paint();
					}
					e.preventDefault();
					e.cancel=true;
				}
			}
		};

		this.goup=function(){
			var _a = this.parent.widgets;
			for(var i=0;i<=_a.length-1;i++){
				if(_a[i]===this&&i>0){
				  var _temp=_a[i-1];
				  _a[i-1]=this;
				  _a[i]=_temp;
				  this.parent.widgets[i-1]=this;
				  this.parent.widgets[i]=_temp;
				  this.parent.paint();
				  return;
				}					
			}
		};
		this.godown=function(){
			var _a = this.parent.widgets;
			for(var i=0;i<=_a.length-1;i++){
				if(_a[i]===this&&i<_a.length-1){
				  var _temp=_a[i+1];
				  _a[i+1]=this;
				  _a[i]=_temp;
				  this.parent.widgets[i+1]=this;
				  this.parent.widgets[i]=_temp;
				  this.parent.paint();
				  return;
				}					
			}
		};
		
		this.prev=function(e){
			var _a = this.parent.widgets;
			for(var i=0;i<=_a.length-1;i++){
				if(_a[i]===this&&i>0){	
				  this.parent.widgets[i].focus=false;
				  this.parent.widgets[i-1].focus=true;
				  this.parent.focuswidget=_a[i-1];
				  this.parent.paint();
				  if(this.parent.fieldclickEvent){
						this.parent.fieldclickEvent.call(this,e);
				  }
				  e.cancel=true;				  
				}					
			}
		};
		
		this.next=function(e){
			var _a = this.parent.widgets;
			for(var i=0;i<=_a.length-1;i++){
				if(_a[i]===this&&i<_a.length-1){
				  this.parent.widgets[i].focus=false;
				  this.parent.widgets[i+1].focus=true;
				  this.parent.focuswidget=_a[i+1];
				  this.parent.paint();
				  if(this.parent.fieldclickEvent){
						this.parent.fieldclickEvent.call(this,e);
				  }
				  e.cancel=true;
				}					
			}
		};
		
		this.getName=function(prefix){
			var f="treeNode";
			if (arguments.length === 1){
				if(this.findnode(prefix)==null)
					return prefix;
				else
					f=prefix;
			}
			var index=1;
			while(this.findnode(f+index)!=null){
				index++;
			}
			return f+index;
		};	
		
	};
	
	//*  objectTree
	objectTree=function(option){
		var opt={
				border:{
		        	width : 1,
		        	type:"dashed", //solid, dotted,dashed
					color : "red"
		        },
				corner:null,
				background:{
					color:"white",
					type:"fill",
					image:""
				},
				font:{
					style:"normal", // normal,italic,
					weight:"normal",//normal,lighter,bold  
					family:"Arial",
	     			size:"9pt",
	     			color:"black",
	     			fill:true
				},
				hyperlink :null,
				shadow:{
		        	color : "black",
					offsetX : 4,
					offsetY : 4,
					blur : 4
		        },
				width:180,
				height:260,
				includeChildren: false,
				references:[]
		};
		$.extend(opt,option);
		$.extend(this,new widget(opt));
		this.propertyEditors=["common"];
		this.gradient=null;
		var ths=this;
		this.type="objectTree";	
		this.allowRotate=false;
		
		this.click=function(e){
			for(var i=0;i<=this.widgets.length-1;i++){
				this.widgets[i].focus=false;
			}	
			this.focuswidget=null;
			if(option.click)
				option.click.call(this,e);			
			this.paint();
		};
		
		if(!this.includeChildren&&option.widgets&&option.widgets.length>0){
			var _widgets=[];
			$.extend(_widgets,option.widgets);
			option.widgets.splice(0,option.widgets.length);
			this.restoreChildren(_widgets,{
				editable:true,
				click:this.click
			});
		}

		this.persist=function(){
			var r=widget.persistproperty(this);
			return r;
		};
		
		this.dblclick=function(e){
			if(e.y>this.lineheight)
				e.cancel=true;
		};
		
		this.keypress=function(e){
			console.info(e.keyCode);
			if(e.keyCode===46){
				if(this.focuswidget){
					this.deletenode();
					e.cancel=true;
				}		
			}
			else if(e.keyCode===45){
				this.newfield();
			}
			else if(e.keyCode===38){
				var focusfield=this.focuswidget;
				if(e.ctrlKey){					
					if(focusfield!=null){
						e.preventDefault();
						focusfield.goup();
						e.cancel=true;
					}
				}
				else{
					if(focusfield!=null){
						e.preventDefault();
						focusfield.prev(e);						
					}	
					e.cancel=true;
				}
			}
			else if(e.keyCode===40){
				var focusfield=this.focuswidget;
				if(e.ctrlKey){					
					if(focusfield!=null){
						e.preventDefault();
						focusfield.godown();
						e.cancel=true;
					}
				}
				else{
					if(focusfield!=null){
						e.preventDefault();
						focusfield.next(e);
					}	
					e.cancel=true;
				}
			}
		};
		
		
		this.findtargets= function(e) {
			var ths=this;
			var targets=[];
			var findtarget=function(widget,e){
				var _a = widget.widgets;
				for (var i = _a.length - 1; i >= 0; --i) {
					if (_a[i].checkPointIn(e.x, e.y)) {
						var _cc = _a[i].relativePoint(e.x, e.y);
						var ev={};
						ev.x=_cc.x;
						ev.y=_cc.y;
						targets.push(_a[i]);
						findtarget(_a[i],ev);
						break;
					}
				}		
			}
			findtarget(this,e);
			return targets;
		};
		
		this.beforePaint=function(ctx){
			var lineheight=this.parent.fontSize()+2*this.margin;
			var height=lineheight;
			$(this.widgets).each(function(i,item){
				ths.minwidth=Math.max(ths.minwidth,item.minwidth);
				item.y=height;
				height+=item.height;
				item.width=this.width;
			})
			this.minheight=height;
			if(this.height<this.minheight)
				this.Height(height+2*this.margin);
		};
		
		this.drawBorderTo=function(ctx){
			ctx.save();
			var ths=this;
			this.lineheight=ths.fontSize()+2*ths.margin;
			var _widget=this;
			if (_widget.border.color !== "none") {
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
				ctx.strokeRect(0,ths.lineheight,_widget.width,_widget.height-this.fontSize()-2*this.margin);
				
			}
			this.fillBackgroundTo(ctx);
			ctx.restore();
			return this;
		};
		
		this.fillBackgroundTo=function(ctx){
			if (this.background!=null && this.background.color !== "none") {
				ctx.save();
				ctx.fillStyle = this.background.color;
				this.drawShadowTo(ctx);
				ctx.fillRect(0, ths.lineheight,this.width,this.height-this.fontSize()-2*this.margin);
				ctx.restore();				
			}
			if(this.focus&&this.editable){
				ctx.save();
				ctx.fillStyle="blue";
				ctx.fillRect(0, 0, this.width, ths.lineheight);
				ctx.restore();				
			}
		};	
		
		this.drawResizerTo=function(ctx){
			ctx.save();
			ctx.beginPath();
			ctx.globalAlpha = 1;
			ctx.fillStyle = "#cecfff";
			ctx.lineWidth = 1;
			var l=4;
			if(!this.autosize){
				for(var i=0;i<=this.resizers.length-1;i++){
				  if(this.resizers[i].visible)
				     ctx.fillRect(this.resizers[i].x-l,this.resizers[i].y-l,l*2,l*2);	
				}
			}
			ctx.restore();
		};	
		
		
		this.drawTextTo=function(ctx){
			var margin=this.margin;
			var text=this.name;
			ctx.save();
			if(this.font!=null&&this.text){
				if(typeof this.font==="String")
					ctx.font=this.font;
				else{
					ctx.font=this.font.style+" "+this.font.weight+" "+this.font.size+" "+this.font.family;
				}
				if(this.focus&&this.editable){
					ctx.strokeStyle="white";
					ctx.fillStyle="white";
				}
				else{
					ctx.strokeStyle=this.font.color||"black";
					ctx.fillStyle=this.font.color||"black";
				}
				this.font.fill=this.font.fill!=null?this.font.fill:true;
				if(this.font.fill)
					ctx.fillText(text,0,this.fontSize()+margin);
				else
					ctx.strokeText(text,0,this.fontSize()+margin);
			}
			ctx.restore();
			return this;
		};
		
		this.getName=function(prefix){
			var f="treeNode";
			if (arguments.length === 1){
				if(this.findnode(prefix)==null)
					return prefix;
				else
					f=prefix;
			}
			var index=1;
			while(this.findnode(f+index)!=null){
				index++;
			}
			return f+index;
		};
		
		this.newfield=function(option){
			var attributename=this.getName();
			var opt={
				name:attributename,
				font:this.font
			};
			$.extend(opt,option);	
			var node1=new treeNode(opt);
			node1.objectdata.name=attributename;
			this.addnode(node1);
			return node1;
		};
		
		this.addnode=function(node){
			if(node.type&&node.type==="treeNode"&&this.findnode(node.name)==null){
				node.objectdata.index=this.widgets.length+1;
				node.objectdata.layer=1;
				this.appendWidget(node);
				this.paint();
			}
			return this;
		};
		
		this.deletefield=function(){
			var parent=this.parent;
			var index=parent.widgets.indexOf(this);
			if(index<0)
				return;
			parent.removeWidget(this);
			if(parent.widgets.length>0){
				if(index==parent.widgets.length){
					parent.widgets[index-1].focus=true;
					this.focuswidget=parent.widgets[index-1];
				}
				else {
					parent.widgets[index].focus=true;
					this.focuswidget=parent.widgets[index];
				}
			}
			this.paint();
		};	
		
		this.findnode=function(attributename){
			for(var i=0;i<=this.widgets.length-1;i++){
				if(this.widgets[i].name===attributename)
					return this.widgets[i];
			}
			return null;
		};
	};
	
	mapConnector=function(option){
		var opt={
				name:"mapConnector",
				width:150,
				height:30,
				objectdata:{
					mappingtype:'',
					targetpath:'',
					matchcriteria:{
						type:'object',
						fields:[
						        {id:"source",value:"",type:"textinput",title:"源"},
						        {id:"target",value:"",type:"textinput",title:"目标"}
						       ],
						values:[]
					},
					fieldmaps:{
						type:'object',
						fields:[
						        {id:"source",value:"",type:"textinput",title:"源"},
						        {id:"target",value:"",type:"textinput",title:"目标"}
						       ],
						values:[]
					}
				}
		};
		
		$.extend(opt,option);		
		$.extend(this,new brokenLineConnector(opt));
		this.propertyEditors=["common"];
		this.text=this.text?this.name:this.text;
		this.border.type="solid";
		this.begin.shape.name="none";
		this.end.shape.name="arrow";
		this.type="mapConnector";
		var ths=this;
		var gettargetpath=function(node){
			var paths=[];
			if(node.type=="treeNode")
				paths.push(node.name);
			while(node.parent&&node.parent.type=="treeNode"){
				node=node.parent;
				paths.push(node.name);
			}
			return paths.reverse().join(",");
		}
		
		this.persist=function(){
			var r=widget.persistproperty(this);
			r.offsetX=this.offsetX;
			r.offsetY=this.offsetY;
			r.linecap=this.linecap;
			r.minOffset=this.minOffset;
			r.begin=this.begin.persist();
			r.end=this.end.persist();
			r.begin.position=this.begin.position;
			r.end.position=this.end.position;
			r.elements=[];
			r.objectdata={};
			$.extend(r.objectdata,this.objectdata);
			if(this.objectdata.target){
				r.objectdata.targetpath=gettargetpath(this.objectdata.target);
				delete r.objectdata.target;
			}
			return r;
		};
		
		this.ondelete=function(){
			for(var i=0;i<=this.begin.widget.connections.length-1;i++){
				if(this.begin.widget.connections[i]===this)
					this.begin.widget.connections.splice(i,1);
			}
			for(var i=0;i<=this.end.widget.connections.length-1;i++){
				if(this.end.widget.connections[i]===this)
					this.end.widget.connections.splice(i,1);
			}
		
			if(this.objectdata.target)
				this.objectdata.target.parent.removeWidget(this.objectdata.target);
			else if(this.objectdata.targetpath){
				var paths=this.objectdata.targetpath.split(",");
				if(paths.length>0){
					this.end.widget.includeChildren=true;
					var objectTree=this.presenters[0].Widget(this.end.widget.name);
					this.objectdata.target=objectTree.Widget(paths[0]);
					for(var i=1;i<=paths.length-1;i++){
						this.objectdata.target=this.objectdata.target.Widget(paths[i]);
					}
					this.objectdata.target.parent.removeWidget(this.objectdata.target);
				}
			}
			
		};
		
		this.onconnected=function(target){
			this.begin.widget.focus=false;
			this.end.widget.focus=true;
			this.presenters[0].focuswidget=this.end.widget;
			var newNode;
			if(target){
				newNode=target.newfield({
					name:this.begin.widget.name,
				});
			}
			else{
				newNode=this.end.widget.newfield({
					name:this.begin.widget.name,
				});
			}
			this.end.offsetx=newNode.x;
			this.end.offsety=newNode.y;
			this.objectdata={
				target:newNode,
				mappingtype:"Object",
				matchcriteria:{
					type:'object',
					fields:[
					        {id:"source",value:"",type:"textinput",title:"源"},
					        {id:"target",value:"",type:"textinput",title:"目标"}
					       ],
					values:[]
				},
				fieldmaps:{
					type:'object',
					fields:['source','target'],
					values:[]
				},
				layer:newNode.objectdata.layer,
				index:newNode.objectdata.index
			};
			for(var i=0;i<=this.begin.widget.pk.length-1;i++){				
				var name=this.begin.widget.pk[i].name;			
				this.objectdata.matchcriteria.values.push({source:name,target:name});
				this.objectdata.fieldmaps.values.push({source:name,target:name});
			}
			newNode.objectdata={
					datatype:"Object",
					targetpath:this.name
			};
			for(var i=0;i<=this.begin.widget.pk.length-1;i++){
				var field=this.begin.widget.pk[i];
				newNode.newfield({
					name:field.name,
					dataobject:{
						datatype:field.datatype,
					}
				});
			}
			for(var i=0;i<=this.begin.widget.fields.length-1;i++){
				var field=this.begin.widget.fields[i];
				newNode.newfield({
					name:field.name,
					dataobject:{
						datatype:field.datatype,
					}
				});
			}
			var src='images/tree/3-40.png';
			newNode.Background({filltype:'image',image:src},function(){
				ths.paint();
			});
		};
		
		this.beforePaint=function(ctx){	
			
		};
		
		this.refresh=function(){			
			for(var i=0;i<=this.begin.widget.pk.length-1;i++){
				var r=this.begin.widget.pk[i].persist();
				var field1=new field(r);
				field1.data.isfk=true;
				if(this.end.widget.findfield(field1.name)!=null){
					field1.name=this.begin.widget.getName(this.begin.widget.name+"_"+r.name);
					field1.data.name=field1.name;
					field1.text=field1.name;
				}
				this.end.widget.addfield(field1);
			}
		};
	};
	
	
		
	 $.register("objectTree",objectTree);
	 $.register("treeNode",treeNode);
	 $.register("mapConnector",mapConnector);
})(jQuery);