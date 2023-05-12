(function($) {
	fullpage=function(opt){
		debugger;
		this.panels=[];
		this.parent=$("document");
		this.activePanel=null;
		this.pageindex=0;
		this.width=1024;
		this.height=800;
		this.scale=1;
		this.scaleType=1; //1=fixed,2=width,3=height
		this.timeout=6000;
		this.active=true;
		this.updateinfo=null;
		this.id=null;
		this.loops=false;
		this.playhandler=null;
		this.changing=false;
		this.prepareEnter=null;
		this.end=null;
		$.extend(this,opt);
		this.document={};
		var currentdoc=opt.currentdoc||null;
		if(typeof this.parent==="string")
			this.parent=$(this.parent);
		this.init(currentdoc);
		var showtips=false;
		var offsetx=0,offsety=0;
		var point={x:0,y:0};
		this.mousemove=function(e){
			 var ths=this;
			 var _widget=ths.activePanel.targetwidget;
			 if(_widget&&_widget.hyperlink&&((_widget.hyperlink.url!="")||(_widget.hyperlink.window!=""))&&!_widget.editable){
				 ths.activePanel.Cursor("pointer");
        	 }
			 else if(_widget&&_widget.type==="noticeboard"&&_widget.tooltip.text!=""){
				 ths.activePanel.Cursor("pointer");        		 
       			 showtips=true;
			 }
			 else{
				 ths.activePanel.Cursor("default");
				 if(showtips){
					 ths.activePanel.paint();
					 showtips=false;
				 }
			 }
			 if(e.button===0 && e.buttons===1){
				 offsetx=e.originalEvent.clientX-point.x;
				 offsety=e.originalEvent.clientY-point.y;
				 point.x=e.originalEvent.clientX;
				 point.y=e.originalEvent.clientY;
				 var scrollleft=$(this.parent).scrollLeft()-offsetx;
				 var scrolltop=$(this.parent).scrollTop()-offsety;
				 $(this.parent).scrollLeft(scrollleft);
				 $(this.parent).scrollTop(scrolltop);
			 }
			 if(opt.mousemove)
				 opt.mousemove(e);
		};
		this.mouseup=function(e){
			 if(opt.mouseup)
				 opt.mouseup(e);
		};
		this.mousedown=function(e){
			 if(e.button===0){
				 point.x=e.originalEvent.clientX;
				 point.y=e.originalEvent.clientY;
			 }
			 if(opt.mousedown)
				 opt.mousedown(e);
		 };
		this.click=function(e){			
			 if(opt.click)
				 opt.click.call(this,e);
		 };
	};
	
	fullpage.prototype.setKeypress=function(e){
		var ths=this;
		ths.activePanel.canvas.addEventListener('keydown', function(e){
			ths.activePanel._triggerEvent("keypress", e);
		},true);
	};
	
	fullpage.prototype.playAnimation=function(){
		var ths=this;
		function _playAnimation(){	
			var panel=ths.document.activePanel.instance;		
			if(TWEEN.getAll().length>0)
		  	   requestAnimFrame(_playAnimation);			
			TWEEN.update();
			panel.paint();
		 };
		 _playAnimation();
	};
	
	fullpage.prototype.playGlobalAnimation=function(){
		if(this.document.activePanel.instance.globalAnimations){	
			$(this.document.activePanel.instance.globalAnimations).each(function(i,item){
				item.run();
			});
			this.playAnimation();
			
		}
	};
		
		
	fullpage.prototype.setActive=function(panel){
		var ths=this;
		if(this.changing)
			return;
		if(typeof panel==="number"){
			pagein=this.document.panels[panel].instance.pagein;
			panel=this.document.panels[panel].instance.rootwidget.name;
		}
		else{
			pagein=this.findPanel(panel).pagein||-1;
		}
		pagein=pagein||-1;
		for(var i=0;i<this.document.panels.length;i++){
			if(this.document.panels[i].instance.rootwidget.name===panel){
				this.activePanel=this.document.panels[i].instance;
				this.pageindex=i;
				break;
			}
		}
		this.prepareEnter();
		//this.activePanel.Scale(this.scale);
	};
	
	fullpage.prototype.init=function(doc){
		var ths=this; 
		var id=this.id?this.id:$.queryString("id");
		var currentdoc=doc;
		var url;
		
		if(this.accessType=="authorized"||!this.publishId)
			url=ctx+"/api/visordocument/"+id;
		else 
			url=ctx+"/api/visordocument/p/"+this.publishId;
		if(url){	
			 $.restfulService(ctx+"/api/visordocument",{
				 async:true,
				 retrieveUrl:url,
				 callback:function(data){
					 data.editable=false;
					 ths.document=new visordocument(ths.parent,data);
					 document.title=ths.document.name;
					 $(".designer").each(function(i,item){
						 $(item).addClass("section").css("display","table");
						 $(item).css("left",0).css("top",0);
					 });
					 if(ths.success && typeof ths.success==="function")
						 ths.success();
					 if(ths.active)
						 ths.play();
					 ths.Scale(ths.scale);
				 }
			 });			
		 }
		else{ 
			if(principal!=""&&currentdoc===null){
				var r=localStorage.getItem(principal+"_"+this.type);
				currentdoc=JSON.parse(r);
			}
			else if(currentdoc===null){
				var r=localStorage.getItem("currentDoc_"+this.type);
				currentdoc=JSON.parse(r);
			}
			 
			 if(currentdoc&&currentdoc!="undefined"){
				 ths.document=new visordocument(ths.parent,currentdoc);
				 document.title=ths.document.title;
			 }
			 if(this.success && typeof this.success==="function")
				 this.success();
			 if(this.active){
				 this.play();
			 }
			 this.Scale(this.scale);
		}
		return this;
	};
		
	fullpage.prototype.next=function()
	{
		var ths=this;
		var _next=function(){
			var lastpage=true;
			if(ths.pageindex<ths.size()-1){
				ths.pageindex+=1;
				lastpage=false;
			}
			else if(ths.loops){
				ths.pageindex=0;
				lastpage=false;
			}
			if(!lastpage)
			   ths.setActive(ths.pageindex);
			else{
				if(ths.end)
					ths.end();
			}
		};
		
		function playAnimation(){
			var panel=ths.activePanel;		
			if(TWEEN.getAll().length>0)
		  	  requestAnimFrame(playAnimation);
			TWEEN.update();
			panel.paint();
		 };
		 
		if(this.activePanel.totalsteps>0&&this.activePanel.step==this.activePanel.totalsteps){
			 _next();
		}				
		else if(this.activePanel.totalsteps>0 &&this.activePanel.step<this.activePanel.totalsteps){
			var _animation=this.activePanel.animations.elements[this.activePanel.step].value;
			_animation.enter();
			this.activePanel.step++;
			while(this.activePanel.step<this.activePanel.totalsteps){
				_animation=this.activePanel.animations.elements[this.activePanel.step].value;
				_animation.enter();
				this.activePanel.step++;
			}					
			playAnimation();
			
		}
		else{
			 _next();
		}
	};
		
	fullpage.prototype.play=function(){
		var ths=this;
		this.playhandler=setInterval(function(){
			ths.next();
		},this.timeout);
		$(".btn-play").html("<i class=\"fa fa-2x fa-pause\"></i>");
	};
	
	fullpage.prototype.Scale=function(a){
		if(arguments.length===1){
			this.scale=a;
			for(var i=0;i<=this.document.panels.length-1;i++){
				var _scale=a;
				if(this.scaleType==2){
					_scale=this.width/this.document.panels[i].instance.canvas.width; 	
				}
				else if(this.scaleType==3){
					_scale=this.height/this.document.panels[i].instance.canvas.height;					
				}
				this.document.panels[i].instance.Scale(_scale);
				$(this.document.panels[i].instance.canvas).css("height",this.document.panels[i].instance.canvas.height*_scale).css("width",this.document.panels[i].instance.canvas.width*_scale);
			}
		}
		else
			return this.scale;
	};
	
	fullpage.prototype.Zoom=function(a){
		if(arguments.length===1){
			this.scale=a;			
			for(var i=0;i<=this.panels.length-1;i++){
				this.panels[i].instance.rootwidget.scaleX=a;
				this.panels[i].instance.rootwidget.scaleY=a;
			}
		}
		else
			return this.scale;
	};
	
	fullpage.prototype.stop=function(){
		if(this.playhandler){
			window.clearInterval(this.playhandler);
			this.playhandler=null;
			$(".btn-play").html("<i class=\"fa fa-2x fa-play\"></i>");
		}
	};
	
	fullpage.prototype.size=function(){
		return this.panels.length;
	};	
	
	fullpage.prototype.findPanel=function(panelName){
		for(var i=0;i<=this.document.panels.length-1;i++){
			if(this.panels[i].instance.rootwidget.name===panelName)
				return this.panels[i].instance;
		}
		return null;
	};
	
})(jQuery);