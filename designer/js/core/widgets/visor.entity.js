(function($){
	
	attribute=function(option){
		var opt={
				border:null,
				corner:null,
				background:null,
				font:{
					style:"normal", // normal,italic,
					weight:"normal",//normal,lighter,bold  
					family:"Arial",
	     			size:"9pt",
	     			color:"none",
	     			fill:true
				},
				property:{
					abbreviation:"",
					annotation:"",
					datatype:"String",//String,Integer,Fixedpoint,Long,reference
					joinColumnName:"",
					inverseJoinColumnName:"",
					joinTableName:"",
					referenceTypeName:"",
					collectionType:"List",//Set,List
					relationship:"",
					refconnector:"",
					nullable:true,
					format:"",
					unique:false,
					defaultvalue:"",
					maxlength:255,
					integer:19,
					decimal:0,
					fetch:"FetchType.LAZY",
					mappedby:"",
					cascade:["CascadeType.REFRESH"],
					cachable:false,
					orphanremoval:false
				},				
				hyperlink :null,
				shadow:null,
				width:140,
				height:44,
				text:""
		};
		if(option.property){
			$.extend(opt.property,option.property);
			delete option.property;
		}			
		$.extend(opt,option);		
		$.extend(this,new widget(opt));		
		this.propertyEditors=["common","font"];
		this.allowconnectionPoint=false;
		this.type="attribute";
		if(this.text==="")
			this.text=this.name;
		this.autosize=false;		
		this.editable=false;
		this.persist=function(){
			var r=widget.persistproperty(this);
			r.property={};
			$.extend(r.property,this.property);
			return r;
		};
		this.drawBorderTo=function(ctx){
			this.x=0;
			if(!this.parent.focus)
				this.focus=false;
		};

		this.click=function(e){
			var inputbox=this.parent.presenters[0].textbox;
			for(var i=0;i<=this.parent.widgets.length-1;i++){
				this.parent.widgets[i].focus=false;
			}
			this.focus=true;
			this.parent.focuswidget=this;
			$(inputbox).hide();
			this.parent.paint();			
			if(this.parent.fieldclickEvent){
				this.parent.fieldclickEvent.call(this,e);
			}
			e.cancel=true;
		};
		this.goup=function(){
			var _a = this.parent.attributes;
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
			var _a = this.parent.attributes;
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
			var _a = this.parent.attributes;
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
			var _a = this.parent.attributes;
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
		
		this.beforePaint=function(ctx){
			this.property.name=this.name;
			this.property.text=this.text;
		};
		this.drawTextTo=function(ctx){
			var text=this.property.name+":"+this.property.datatype;
			if(this.property.datatype==="reference"){
				if(this.property.collectionType==="")
					text=this.property.name+":"+this.property.referenceTypeName;
				else{
					text=this.property.name+":"+this.property.collectionType+"<"+this.property.referenceTypeName+">";
				}
			}
			if(this.parent.showtype==="logical"){
				text=this.property.text+":"+this.property.datatype;
				if(this.property.datatype==="reference"){
					if(this.property.collectionType==="")
						text=this.property.text+":"+this.property.referenceTypeName;
					else{
						text=this.property.text+":"+this.property.collectionType+"<"+this.property.referenceTypeName+">";
					}
				}
			}
			var margin=this.margin;
			var autosize=this.autosize||false;		
			ctx.save();
			var font=this.font;
			if(this.font.color==="none")
			   font=this.parent.font;
			if(this.focus){
				ctx.fillStyle= "#cecfff";
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
				this.minwidth=metrics.width+2*this.margin;
				if(!autosize){
					if(this.parent){
						this.width=this.parent.width;
					}
					this.height=Math.round(this.fontSize()+2*margin);
				}
				font.fill=font.fill!=null?font.fill:true;
				if(font.fill)
					ctx.fillText(text,margin,this.parent.fontSize()+margin);
				else
					ctx.strokeText(text,margin,this.parent.fontSize()+margin);
			}
			ctx.restore();
			return this;
		};
	};
	
	
	entity=function(option){
		var opt={
				border:{
		        	width : 1,
		        	type:"solid", //solid, dotted,dashed
					color : "black"
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
		        settings:{
		        	auditable:false,
		        	cachable:false,
		        	prefix:"",
		        	abbreviation:"",
		        	namespace:"com.mudou.tech",
		        	annotation:"",
		        	owner:"",
		        	strategy:"TABLE",//table,auto,sequence
		        	sequenceName:""
		        },
				width:140,
				height:160,
				includeChildren:true,
				showtype:"physical",
				attributes:[],
				references:[]
		};
		$.extend(opt,option);
		$.extend(this,new widget(opt));
		this.propertyEditors=["common","font"];
		this.gradient=null;
		var ths=this;
		this.type="entity";	
		this.allowRotate=false;
		if(this.widgets.length>0){
			var _widgets=[];
			$.extend(_widgets,this.widgets);
			this.widgets.splice(0,this.widgets.length);
			this.restoreChildren(_widgets,{
				editable:ths.editable,
				click:this.click
			});
		}
		if(this.attributes.length>0){
			var _attributes=[];
			$.extend(_attributes,this.attributes);
			this.attributes.splice(0,this.attributes.length);
			for(var i=0;i<=_attributes.length-1;i++){
				this.attributes.push(ths.Widget(_attributes[i]));
			}
		}
		if(this.references.length>0){
			var _references=[];
			$.extend(_references,this.references);
			this.references.splice(0,this.references.length);
			for(var i=0;i<=_references.length-1;i++){
				this.references.push(ths.Widget(_references[i]));
			}
		}
		
		this.persist=function(){
			var r=widget.persistproperty(this);
			r.attributes=[];
			for(var i=0;i<=this.attributes.length-1;i++)
				r.attributes.push(this.attributes[i].name);
			r.references=[];
			for(var i=0;i<=this.references.length-1;i++){
				r.references.push(this.references[i].name);
			}
			r.settings={};
			$.extend(r.settings,this.settings);
			return r;
		};
		this.click=function(e){
			for(var i=0;i<=this.widgets.length-1;i++){
				this.widgets[i].focus=false;
			}	
			this.focuswidget=null;
			if(option.click)
				option.click.call(this,e);			
			this.paint();
		};
		this.dblclick=function(e){
			if(e.y>this.lineheight)
				e.cancel=true;
		};
		this.keypress=function(e){
			console.info(e.keyCode);
			if(e.keyCode===46){
				if(this.focuswidget){
					this.deletefield();
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
		//var ths=this;
		attributecount=2;
		this.drawBorderTo=function(ctx){
			ctx.save();
			var ths=this;
			attributecount=Math.max(this.attributes.length,2)+1;
			this.lineheight=ths.fontSize()+2*ths.margin;
			this.minheight=attributecount*ths.lineheight;
			if(this.height<this.minheight)
				this.height=this.minheight;
			$(this.widgets).each(function(i,item){
				ths.minwidth=Math.max(ths.minwidth,item.minwidth);
			});
			ths.width=Math.max(this.width,this.minwidth);
			$(this.pk).each(function(i,item){
				var _w=ths.findattribute(item.name);
				if(_w)
					_w.y=(i+1)*(ths.lineheight);
			});
			$(this.attributes).each(function(i,item){
				ths.findattribute(item.name).y=(i+1)*(ths.lineheight)+1;
			});
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
		this.drawSelectRect=function(ctx){
			if(this.selectable){
				ctx.save();
				ctx.beginPath();
				ctx.globalAlpha = 1;
				ctx.strokeStyle= "#cecfff";
				ctx.strokeRect(0,0,this.width,this.height);
				ctx.closePath();
				ctx.restore();
			}
			return this;
		};	
		this.drawTextTo=function(ctx){
			var margin=this.margin;
			var text=this.name;
			if(this.showtype==="logical")
				text=this.text;
				
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
			var f="attribute";
			if (arguments.length === 1){
				if(this.findattribute(prefix)==null)
					return prefix;
				else
					f=prefix;
			}
			var index=1;
			while(this.findattribute(f+index)!=null){
				index++;
			}
			return f+index;
		};	
		
		
		this.addattribute=function(attribute){
			if(attribute.type&&attribute.type==="attribute"&&this.findattribute(attribute.name)==null){
				this.attributes.push(attribute);
				this.appendWidget(attribute);
			}
			return this;
		};
		
		this.deletefield=function(){
			var focusattribute=this.focuswidget;				
			if(focusattribute!=null){
				this.removeattribute(this.focuswidget);
				if(this.connections.length>0&&focusattribute.property.datatype==="reference"){
					for(var i=0;i<=this.connections.length-1;i++){
						if(this.connections[i].type=="referenceConnector"&&(this.connections[i].begin.widget==focusattribute.parent||this.connections[i].end.widget==focusattribute.parent)){
							this.connections[i].parent.removeWidget(this.connections[i]);
							if(this.connections[i].ondelete!=null)
								this.connections[i].ondelete.call(this.connections[i]);
						};
					}
				}	
				if(this.widgets.length>0){
					this.widgets[this.widgets.length-1].focus=true;
					this.focuswidget=this.widgets[this.widgets.length-1];
				}
				else
					this.focuswidget=null;
				this.paint();
			}
		};		
		
		this.newfield=function(option){
			var attributename=this.getName();
			var opt={
				name:attributename,
				editable:true,
				font:this.font
			};
			$.extend(opt,option);	
			var attribute1=new attribute(opt);
			attribute1.property.name=attributename;
			this.addattribute(attribute1);
			attribute1.click({x:0,y:0});
//			sh(attribute1.persist());
			return attribute1;
		};
		
		this.findattribute=function(attributename){
			for(var i=0;i<=this.widgets.length-1;i++){
				if(this.widgets[i].name===attributename)
					return this.widgets[i];
			}
			return null;
		};
		
		this.findreferenceattribute=function(referenceTypeName){
			for(var i=0;i<=this.widgets.length-1;i++){
				if(this.widgets[i].property.datatype==="reference"&&this.widgets[i].property.referenceTypeName===referenceTypeName)
					return this.widgets[i];
			}
			return null;
		};
		
		this.findattributebyconnector=function(connectorName){
			for(var i=0;i<=this.widgets.length-1;i++){
				if(this.widgets[i].property.datatype==="reference"&&this.widgets[i].property.refconnector===connectorName)
					return this.widgets[i];
			}
			return null;
		};
		
		this.removeattribute=function(attribute){
			for(var i=0;i<this.attributes.length;i++){
				if(this.attributes[i]===attribute){
					this.attributes.splice(i,1);
					this.removeWidget(attribute);
					return this;
				}
			}
			return this;
		};
		
		var camelFormat=function(input){
			var result="";
			$(input.split("_")).each(function(i,item){				
				 item=item.substring(0,1).toUpperCase()+item.substring(1,item.length).toLowerCase();
				 result=result+item;
			});
			return result.substring(0,1).toLowerCase()+result.substring(1,result.length);
		};
		
		var propertyFormat=function(input){
			var result="";
			$(input.split("_")).each(function(i,item){				
				 item=item.substring(0,1).toUpperCase()+item.substring(1,item.length).toLowerCase();
				 result=result+item;
			});
			return result.substring(0,1).toUpperCase()+result.substring(1,result.length);
		};
		
		this.getdata=function(){
		  var r={};
		  $.extend(r,this.settings);
		  r.name=this.name;
		  if(r.prefix){
		  	  r.abbreviation=r.prefix.toUpperCase()+"_"+(r.abbreviation.toUpperCase()||r.name.toUpperCase());
		  	  r.name=propertyFormat(r.prefix+"_"+r.name);
		  }
		  else{
			  r.abbreviation=r.abbreviation.toUpperCase()||r.name.toUpperCase();
			  r.name=propertyFormat(r.name);
		  }
		  r.text=this.text;
		  r.type="entity";
		  r.attributes=[];
		  
		  for(var i=0;i<=this.attributes.length-1;i++){
			  r.attributes.push(this.attributes[i].property);
			  r.attributes[i].name=camelFormat(r.attributes[i].name);
			  r.attributes[i].referenceTypeName=propertyFormat(r.attributes[i].referenceTypeName);
		  }
		  
			
		  if(this.settings.auditable){
			  attribute_created_by={
					    name:"created_by",					
						datatype:"long",
						nullable:true
			  };
			  r.attributes.push(attribute_created_by);
			  var attribute_last_mosified_by={};
			  $.extend(attribute_last_mosified_by,attribute_created_by,{name:"last_modified_by"});
			  r.attributes.push(attribute_last_mosified_by);
			  var attribute_created_date={};
			  $.extend(attribute_created_date,attribute_created_by,{name:"created_date",datatype:"datetime"});
			  var attribute_last_modified_date={};
			  $.extend(attribute_last_modified_date,attribute_created_by,{name:"last_modified_date",datatype:"datetime"});
			  r.attributes.push(attribute_created_date);
			  r.attributes.push(attribute_last_modified_date);
		  }
		  return r;
		};	
	};
	
	referenceConnector=function(option){
		var opt={
				name:"referenceConnector",
				width:150,
				height:30,
				key:{
					type:"one-to-many", //many-to-one,many-to-many,one-to-one,one-to-many
					duplexing:false,
					collectionType:"List"//Set,List
				}
		};
		$.extend(opt,option);		
		$.extend(this,new brokenLineConnector(opt));	
		this.propertyEditors=["common"];
		this.text=this.text?this.name:this.text;
		this.type="referenceConnector";
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
			r.key={};
			$.extend(r.key,this.key);
			return r;
		};
		
		this.ondelete=function(){
			var sourceattr=this.begin.widget.findreferenceattribute(this.end.widget.name);
			if(sourceattr)
				this.begin.widget.removeattribute(sourceattr);
			var targetattr=this.end.widget.findreferenceattribute(this.begin.widget.name);
			if(targetattr)
				this.end.widget.removeattribute(targetattr);
		};
		
		this.onconnected=function(){
			if(this.begin.widget.findreferenceattribute(this.end.widget.name)){
				alert("The reference attribute already exist in entity");
				this.presenters[0].removeWidget(this);
				return;
			}
			
			var referenceTypeName=this.end.widget.name;
			var name=this.end.widget.getName(referenceTypeName);
			var joinColumnName="";
			var inverseJoinColumnName="";
			var joinTableName="";
			var text=name;
			var collectionType=this.key.collectionType;
			var datatype="reference";//String,Integer,Fixedpoint,Long,reference
			
			
			var referenceTypeName2=this.begin.widget.name;
			var name2=this.begin.widget.getName(referenceTypeName2);
			var joinColumnName2=referenceTypeName2+"_ID";
			var inverseJoinColumnName2="";
			var joinTableName2="";
			var collectionType2=this.key.collectionType;
			var text2=name2;
			var relationship2=this.key.type;
			
			if(this.key.type==="one-to-many"){
				name=name+"s";
				text=name;
				joinColumnName=this.begin.widget.name+"_ID";
				
				relationship2="many-to-one";
				collectionType2="";
				joinColumnName2=this.begin.widget.name+"_ID";
			}
			else if(this.key.type==="one-to-one"){
				text=name;
				collectionType="";
				joinColumnName=this.end.widget.name+"_ID";
				relationship2="one-to-one";
				collectionType2="";
				joinColumnName2=this.end.widget.name;
			}
			else if(this.key.type==="many-to-many"){
				name=name+"s";
				text=name;
				joinTableName=this.begin.widget.name+"_"+this.end.widget.name;
				joinColumnName=this.begin.widget.name+"_ID";
				inverseJoinColumnName=this.end.widget.name+"_ID";
				joinColumnName2=inverseJoinColumnName;
				inverseJoinColumnName2=joinColumnName;
				this.key.nullable=false;
				name2=name2+"s";
				text2=name2;
				joinTableName2=this.begin.widget.name+"_"+this.end.widget.name;
			}
			else if(this.key.type==="many-to-one"){
				collectionType="";
				joinColumnName=this.end.widget.name+"_ID";
				this.key.nullable=false;
				name2=name2+"s";
				text2=name2;
				relationship2="one-to-many";
				joinColumnName2=this.end.widget.name;
			}
			var attribute1=new attribute({
				name:name,
				text:text,
				property:{
					name:name,
					abbreviation:"",
					annotation:"",
					relationship:this.key.type,
					datatype:datatype,
					collectionType:collectionType,
					joinColumnName:joinColumnName,
					joinTableName:joinTableName,
					referenceTypeName:referenceTypeName,
					inverseJoinColumnName:inverseJoinColumnName,
					refconnector:this.name,
					nullable:false,					
					unique:false						
				}
			});		
			this.begin.widget.addattribute(attribute1);
			if(this.key.duplexing){				
				var attribute2=new attribute({
					name:name2,
					text:text2,
					property:{
						name:name2,
						abbreviation:"",
						annotation:"",
						relationship:relationship2,
						datatype:datatype,
						collectionType:collectionType2,
						joinColumnName:joinColumnName2,
						joinTableName:joinTableName2,
						referenceTypeName:referenceTypeName2,
						inverseJoinColumnName:inverseJoinColumnName2,
						refconnector:this.name,
						nullable:false,					
						unique:false						
					}
				});			
				this.end.widget.addattribute(attribute2);
			}
		};
		this.beforePaint=function(ctx){	
			var sourceattr=this.begin.widget.findattributebyconnector(this.name);
			if(sourceattr){
				sourceattr.property.referenceTypeName=this.end.widget.name;
			}
			
			var endattr=this.end.widget.findattributebyconnector(this.name);
			if(endattr){
				endattr.property.referenceTypeName=this.begin.widget.name;
			}
			
			if(this.key.duplexing){
				this.begin.shape.name="arrow";
			}
			else{
				this.begin.shape.name="none";
			}
				
			this.border.type="solid";
			if(this.key.type==="one-to-one"){
				this.begin.shape.name="arrow";
				this.begin.shape.type=2;
				this.end.shape.name="arrow";
				if(this.key.duplexing)
					this.end.shape.type=2;
				else
					this.end.shape.type=3;					
				if(sourceattr)
					sourceattr.property.nullable=false;
			}
			else if(this.key.type==="one-to-many"){
				this.begin.shape.name="arrow";
				this.begin.shape.type=2;
				this.end.shape.name="diamond";
				this.end.shape.size=5;
				if(this.key.duplexing)
					this.end.shape.type=2;
				else
					this.end.shape.type=3;					
				if(sourceattr)
					sourceattr.property.nullable=false;
			}
			else if(this.key.type==="many-to-one"){
				this.begin.shape.name="diamond";
				this.begin.shape.size=5;
				this.begin.shape.type=2;
				this.end.shape.name="arrow";
				if(this.key.duplexing)
					this.end.shape.type=2;
				else
					this.end.shape.type=3;	
			}
			else if(this.key.type==="many-to-many"){
				this.begin.shape.name="diamond";
				this.begin.shape.size=5;
				this.begin.shape.type=2;
				this.end.shape.name="diamond";
				this.end.shape.size=5;
				if(this.key.duplexing)
					this.end.shape.type=2;
				else
					this.end.shape.type=3;	
			}
		};
		
		this.refresh=function(){
			this.ondelete();
			this.onconnected();

		};
	};
	 $.register("referenceConnector",referenceConnector);
	 $.register("entity",entity);
	 $.register("attribute",attribute);
})(jQuery);