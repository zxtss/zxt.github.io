(function($){
    
     rightArrow=function(option){
          var opt={
                    name:"rightArrow",
                    height:150,
                    width:280,
                    text:"label",                    
                    minheight:17,
                    arrow:{
                    	angel:45,
                    	size:0.3
                    },
                    background:{
                    	filltype:"none",
                    	color:"gray"
                    },
                    border:{
                        	width : 0.3,
                        	type:"solid", //solid, dotted,dashed
                        	color : "black"
                    },
                    corner:null,
                    afterfunctionPoint:function(ev){                    
                      if(ev.functionPoint==1){
                    	  if(size+ev.offset.y>10)
                    	    size+=ev.offset.y;
                    	  this.arrow.size=size/this.height;                    	  				
						  this.functionPoints=[
				    		                 {x:0,y:size,cursor:"pointer",visible:true},
				    		                 {x:this.width-sharp,y:0,cursor:"pointer",visible:true}
				    	                  ];	
						  this.setResizers();
                      }
                      else if(ev.functionPoint==2){
                    	  sharp-=ev.offset.x;
                    	  sharp=Math.min(sharp,this.width-20);
                    	  sharp=Math.max(sharp,10);
                    	  this.arrow.angel=Math.atan(this.height/(2*sharp))*180/Math.PI;
                    	  angel=this.arrow.angel;
                    	  this.functionPoints=[
				    		                 {x:0,y:size,cursor:"pointer",visible:true},
				    		                 {x:this.width-sharp,y:0,cursor:"pointer",visible:true}
				    	                  ];	
                    	  
                      }
                    },
                    afterresize:function(ev2){
                    	  this.functionPoints=[
				    		                 {x:0,y:size,cursor:"pointer",visible:true},
				    		                 {x:this.width-sharp,y:0,cursor:"pointer",visible:true}
				    	                  ];	 
                    }
          };
          
          $.extend(opt,option);
          if(option.focus)
        	  opt.text="";
          $.extend(this,new note(opt));
          this.propertyEditors=["common","border","font","background","shadow","hyperlink","paragraph"];
          this.persist=function(){
              var r=widget.persistproperty(this);
              if(this.arrow){
                   r.arrow={};
                   $.extend(r.arrow,this.arrow);
              }
              return r;
          };
          var angel=this.arrow.angel;
          var size=this.height*this.arrow.size;
          var sharp=this.height/(2*Math.tan(angel*Math.PI/180));
          this.type="rightArrow";  
          if(this.functionPoints.length===0)
        	  this.functionPoints=[
    		                 {x:0,y:size,cursor:"pointer",visible:true},
    		                 {x:this.width-sharp,y:0,cursor:"pointer",visible:true}
    	                    ];	
          this.drawBorderTo=function(ctx){
        	var dx=0.5;
        	var _widget=this;
      		if(_widget.border.color==="none" && _widget.background && _widget.background.filltype==="color" &&_widget.background.color!="none")
      			_widget.border.color=_widget.background.color;
      		else if(_widget.border.color==="none" && _widget.background && _widget.background.filltype==="gradient" &&_widget.gradient.begincolor!="none")
      			_widget.border.color=_widget.gradient.begincolor;
      		sharp=this.height/(2*Math.tan(angel*Math.PI/180));
        	this.width=Math.max(sharp+20,this.width);
        	this.height=Math.max(size*2+5,this.height);
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
  			sharp=this.height/(2*Math.tan(angel*Math.PI/180));
  			size=this.height*this.arrow.size;
            ctx.moveTo(dx,size+dx);
            ctx.lineTo(this.width+dx-sharp,size+dx);
            ctx.lineTo(this.width-sharp+dx,dx);
            ctx.lineTo(this.width+dx,this.height/2+dx);
            ctx.lineTo(this.width-sharp+dx,this.height+dx);
            ctx.lineTo(this.width-sharp+dx,this.height-size+dx);
            ctx.lineTo(dx,this.height-size+dx);
            ctx.lineTo(dx,size+dx);
            ctx.stroke();            
  			this.fillBackgroundTo(ctx,2);
  			ctx.clip();	
            this.fillBackgroundTo(ctx);
  			this.drawImageTo(ctx);	
  			ctx.restore();
      		return this;
          };
          
          return this;
     }; 
    
     leftArrow=function(option){
         var opt={
                   name:"leftArrow",
                   height:150,
                   width:280,
                   text:"label",                    
                   minheight:17,
                   arrow:{
                	    angel:45,
                   		size:0.3
                   },
                   background:{
                   	filltype:"none",
                   	color:"gray"
                   },
                   corner:null,
                   border:{
                       	width : 0.3,
                       	type:"solid", //solid, dotted,dashed
                       	color : "black"
                   },
                   afterfunctionPoint:function(ev){                    
                     if(ev.functionPoint==1){
                   	   if(size+ev.offset.y>10)
                   	       size+=ev.offset.y;
                   	   this.arrow.size=size/this.height;                    	  				
					   this.functionPoints=[
				    		                  {x:this.width,y:size,cursor:"pointer",visible:true},
				    		                  {x:sharp,y:0,cursor:"pointer",visible:true}
				    	                  ];	
						  this.setResizers();
                     }
                     else if(ev.functionPoint==2){
	                   	  sharp+=ev.offset.x;
	                   	  sharp=Math.min(sharp,this.width-20);
	                   	  sharp=Math.max(sharp,10);
	                   	  this.arrow.angel=Math.atan(this.height/(2*sharp))*180/Math.PI;
	                   	  angel=this.arrow.angel;
	                   	  this.functionPoints=[
		                   	                   {x:this.width,y:size,cursor:"pointer",visible:true},
		                   	                   {x:sharp,y:0,cursor:"pointer",visible:true}
					    	              ];	
	                   	  
	                     }
                   },
                   afterresize:function(ev2){
	                   	  this.functionPoints=[
		                   	                 {x:this.width,y:size,cursor:"pointer",visible:true},
		              		                 {x:sharp,y:0,cursor:"pointer",visible:true}
					    	              ];	 
                   }
         };
         
         $.extend(opt,option);
         if(option.focus)
       	  opt.text="";
         $.extend(this,new note(opt));
         this.propertyEditors=["common","border","font","background","shadow","hyperlink","paragraph"];
         this.persist=function(){
             var r=widget.persistproperty(this);
             if(this.arrow){
                  r.arrow={};
                  $.extend(r.arrow,this.arrow);
             }
             return r;
         };
         var angel=this.arrow.angel;
         var size=this.height*this.arrow.size;
         var sharp=this.height/(2*Math.tan(angel*Math.PI/180));
         this.type="leftArrow"; 
         if(this.functionPoints.length===0)
        	 this.functionPoints=[
   		                 {x:this.width,y:size,cursor:"pointer",visible:true},
   		                 {x:sharp,y:0,cursor:"pointer",visible:true}
   	                    ];	
         this.drawBorderTo=function(ctx){
        	var _widget=this;
        	var dx=0.5;
     		if(_widget.border.color==="none" && _widget.background && _widget.background.filltype==="color" &&_widget.background.color!="none")
     			_widget.border.color=_widget.background.color;
     		else if(_widget.border.color==="none" && _widget.background && _widget.background.filltype==="gradient" &&_widget.gradient.begincolor!="none")
     			_widget.border.color=_widget.gradient.begincolor;
     		sharp=this.height/(2*Math.tan(angel*Math.PI/180));
	       	this.width=Math.max(sharp+20,this.width);
	       	this.height=Math.max(size*2+5,this.height);
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
 			sharp=this.height/(2*Math.tan(angel*Math.PI/180));
 			size=this.height*this.arrow.size;
            ctx.moveTo(dx,this.height/2+dx);
            ctx.lineTo(sharp+dx,dx);
            ctx.lineTo(sharp+dx,size+dx);
            ctx.lineTo(this.width+dx,size+dx);
            ctx.lineTo(this.width+dx,this.height-size+dx);
            ctx.lineTo(sharp+dx,this.height-size+dx);
            ctx.lineTo(sharp+dx,this.height+dx);
            ctx.lineTo(dx,this.height/2+dx);
            ctx.stroke();            
 			this.fillBackgroundTo(ctx,2);
 			ctx.clip();	
            this.fillBackgroundTo(ctx);  			
 			this.drawImageTo(ctx);	
 			ctx.restore();
     		return this;
         };
         
         return this;
    }; 
    
     leftRightArrow=function(option){
        var opt={
                  name:"leftRightArrow",
                  height:150,
                  width:280,
                  text:"label",                    
                  minheight:17,
                  arrow:{
                	  angel:45,
                	  size:0.3
                  },
                  border:{
                      	width : 0.3,
                      	type:"solid", //solid, dotted,dashed
                      	color : "black"
                  },
                  corner:null,
                  background:{
                  	filltype:"none",
                  	color:"gray"
                   },
                  afterfunctionPoint:function(ev){                    
                    if(ev.functionPoint==1){
                  	   if(size+ev.offset.y>10)
                  	       size+=ev.offset.y;
                  	   this.arrow.size=size/this.height;                    	  				
					   this.functionPoints=[					                     
						                 {x:this.width-sharp,y:size,cursor:"pointer",visible:true},
						                 {x:sharp,y:0,cursor:"pointer",visible:true}						                 
				    	               ];	
						  this.setResizers();
                    }
                    else if(ev.functionPoint==2){
	                   	  sharp+=ev.offset.x;
	                   	  sharp=Math.min(2*sharp,this.width-20)/2;
	                   	  sharp=Math.max(sharp,10);
	                   	  this.arrow.angel=Math.atan(this.height/(2*sharp))*180/Math.PI;
	                   	  angel=this.arrow.angel;
	                   	  this.functionPoints=[
		                   	                {x:this.width-sharp,y:size,cursor:"pointer",visible:true},
							                {x:sharp,y:0,cursor:"pointer",visible:true}		
					    	              ];	
	                   	  
	                     }
                  },
                  afterresize:function(ev2){
	                   	  this.functionPoints=[
		                   	                {x:this.width-sharp,y:size,cursor:"pointer",visible:true},
							                {x:sharp,y:0,cursor:"pointer",visible:true}		
					    	              ];	 
                  }
        };
        
        $.extend(opt,option);
        if(option.focus)
      	  opt.text="";
        $.extend(this,new note(opt));
        this.propertyEditors=["common","border","font","background","shadow","hyperlink","paragraph"];
        this.persist=function(){
            var r=widget.persistproperty(this);
            if(this.arrow){
                 r.arrow={};
                 $.extend(r.arrow,this.arrow);
            }
            return r;
        };
        var angel=this.arrow.angel;
        var size=this.height*this.arrow.size;
        var sharp=this.height/(2*Math.tan(angel*Math.PI/180));
        this.type="leftRightArrow";    
        if(this.functionPoints.length===0)
        	this.functionPoints=[
                         {x:this.width-sharp,y:size,cursor:"pointer",visible:true},
		                 {x:sharp,y:0,cursor:"pointer",visible:true}		
  	                    ];	
        this.drawBorderTo=function(ctx){
        	var _widget=this;
        	var dx=0.5;
    		if(_widget.border.color==="none" && _widget.background && _widget.background.filltype==="color" &&_widget.background.color!="none")
    			_widget.border.color=_widget.background.color;
    		else if(_widget.border.color==="none" && _widget.background && _widget.background.filltype==="gradient" &&_widget.gradient.begincolor!="none")
    			_widget.border.color=_widget.gradient.begincolor;
    	 	sharp=this.height/(2*Math.tan(angel*Math.PI/180));
	       	this.width=Math.max(2*sharp+20,this.width);
	       	this.height=Math.max(size*2+5,this.height);
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
			sharp=this.height/(2*Math.tan(angel*Math.PI/180));
			size=this.height*this.arrow.size;
            ctx.moveTo(dx,this.height/2+dx);
            ctx.lineTo(sharp+dx,dx);
            ctx.lineTo(sharp+dx,size+dx);
            ctx.lineTo(this.width-sharp+dx,size+dx);
            ctx.lineTo(this.width-sharp+dx,dx);
            ctx.lineTo(this.width+dx,this.height/2+dx);
            ctx.lineTo(this.width-sharp+dx,this.height+dx);
            ctx.lineTo(this.width-sharp+dx,this.height-size+dx);           
            ctx.lineTo(sharp+dx,this.height-size+dx);
            ctx.lineTo(sharp+dx,this.height+dx);
            ctx.lineTo(dx,this.height/2+dx);
            ctx.stroke();            
			this.fillBackgroundTo(ctx,2);
			ctx.clip();	
            this.fillBackgroundTo(ctx);
			this.drawImageTo(ctx);	
			ctx.restore();
    		return this;
        };
        return this;
   }; 
   
     curvedUpArrow=function(option){
       var opt={
                 name:"curvedUpArrow",
                 height:150,
                 width:280,
                 text:"label",                    
                 arrow:{
               	   sharp:25,
               	   size:25,
               	   space:30,
               	   color:"darkgray",
                 },
                 background:{
                	filltype:"none",
                	color:"gray"
                 },
                 corner:null,
                 border:{
                     	width : 0.3,
                     	type:"solid", //solid, dotted,dashed
             			color : "black"
                 },
                 afterfunctionPoint:function(ev){  
                   if(ev.functionPoint==1){
                	  size-=ev.offset.x/2;
                	  a=a+ev.offset.x;
                	  this.functionPoints=[
                                     {x:endPoint(sharp).x-size,y:0,cursor:"pointer",visible:true},
              		                 {x:this.width-size,y:sharp,cursor:"pointer",visible:true},
              		                 {x:this.width,y:sharp,cursor:"pointer",visible:true}	
              	                   ];
                	  this.arrow.size=size;                 	
                   }
                   else if(ev.functionPoint==2){                	   
                	   space=space+ev.offset.x;
                	   size-=ev.offset.x/2;
                	   this.arrow.size=size;                    	 
                	   this.arrow.space=space;
                	   this.functionPoints=[
                	                     {x:endPoint(sharp).x-size,y:0,cursor:"pointer",visible:true},
                 		                 {x:this.width-size,y:sharp,cursor:"pointer",visible:true},
                 		                 {x:this.width,y:sharp,cursor:"pointer",visible:true}	
	              	                   ];	
	                   	  
                   }
                   else if(ev.functionPoint==3){
	                   	  sharp+=ev.offset.y;
	                   	  this.functionPoints=[
	                   	                 {x:endPoint(sharp).x-size,y:0,cursor:"pointer",visible:true},
                		                 {x:this.width-size,y:sharp,cursor:"pointer",visible:true},
                		                 {x:this.width,y:sharp,cursor:"pointer",visible:true}	
	              	                   ];
	                   	  this.arrow.sharp=sharp;
	                   	  
	                     }
                 },
                 afterresize:function(ev2){
                	  b=this.height;
               	      a=(this.width-space-size)/2;
                	  this.arrow.sharp=sharp;
                	  this.functionPoints=[
                                     {x:X(sharp)-size,y:0,cursor:"pointer",visible:true},
              		                 {x:this.width-size,y:sharp,cursor:"pointer",visible:true},
              		                 {x:this.width,y:sharp,cursor:"pointer",visible:true}	
              	                   ];
                 }
       };
       $.extend(opt,option);
       if(option.focus)
     	  opt.text="";
       $.extend(this,new note(opt));
       this.propertyEditors=["common","border","font","background","shadow","hyperlink","paragraph"];
       this.persist=function(){
           var r=widget.persistproperty(this);
           if(this.arrow){
                r.arrow={};
                $.extend(r.arrow,this.arrow);
           }
           return r;
       };
       var space=this.arrow.space;
       var size=this.arrow.size;       
       var sharp=this.arrow.sharp;
       var b=this.height;
	   var a=(this.width-size-space)/2;
	   var ths=this;
	   var X=function(y){
    	   var size=ths.arrow.size;       
    	   var b=ths.height;
    	   var a=(ths.width-space-size)/2;
    	   return a*Math.sqrt(b*b-y*y)/b+a;   
       };
       
       var endPoint=function(sharp){
    	   return{
				  y:sharp,
				  x:X(sharp),
				  angel:Math.atan(sharp/X(sharp))*180/Math.PI
    	   };
       };
       var endPoint2=function(sharp){
    	   return{
				  y:sharp,
				  x:X(sharp)+space,
				  angel:Math.atan(sharp/(a*Math.cos(endPoint(sharp).angel)+space+a))*180/Math.PI
				  
    	   };
		};

		//if(this.functionPoints.length===0)
          this.functionPoints=[
                         {x:endPoint(sharp).x-size,y:0,cursor:"pointer",visible:true},
		                 {x:this.width-size,y:sharp,cursor:"pointer",visible:true},
		                 {x:this.width,y:sharp,cursor:"pointer",visible:true}	
	                   ];	
       this.type="curvedUpArrow";        
       this.drawBorderTo=function(ctx){
    	  var _widget=this;
	   	  if(_widget.border.color==="none" && _widget.background && _widget.background.filltype==="color" &&_widget.background.color!="none")
	   			_widget.border.color=_widget.background.color;
	   	  else if(_widget.border.color==="none" && _widget.background && _widget.background.filltype==="gradient" &&_widget.gradient.begincolor!="none")
	   			_widget.border.color=_widget.gradient.begincolor;
	   		
	   	  var k =.5522848;
	   	  ctx.save();
	   	  ctx.beginPath();
	   	  ctx.lineJoin="round";
	   	  _widget.border.width=parseInt(_widget.border.width);
	   	  ctx.lineWidth = _widget.border.width;
	   	  ctx.lineCap="round";
	   	  ctx.strokeStyle = _widget.border.color;
	   	  ctx.fillStyle=this.arrow.color;
	   	  if(_widget.border.type!=="solid"){
	   		  var dashList = _widget.border.type==="dashed"?[ _widget.border.width+3, _widget.border.width+1]:[_widget.border.width+1,_widget.border.width+1]; 
	   		  ctx.setLineDash(dashList);
	   	  }
	   	  a=(this.width-size-space)/2;
		  var ox=a*k, oy=b*k;	
		  var x=a;
		  var y=0;
	      ctx.moveTo(0,0);       
	      ctx.bezierCurveTo(x - a, y + oy, x - ox, y + b, x, y + b);
	      ctx.lineTo(x+space,y+b);
	      x2=x+space;
	      ctx.bezierCurveTo(x2 - ox, y + b,x2 - a, y + oy, space, 0);	      
	      ctx.lineTo(0,0);
	      ctx.stroke();
	      ctx.fill();
	      ctx.beginPath();	
	      ctx.moveTo(a,b);	
	      ctx.lineTo(a+space,b);
	      ctx.bezierCurveTo(x2 +ox, y + b, x2 + a, y + oy,endPoint2(sharp).x, sharp);
	      ctx.lineTo(endPoint2(sharp).x+size,sharp);
	      ctx.lineTo(2*a+space/2,0);
	      ctx.lineTo(X(sharp)-size,sharp);
	      ctx.lineTo(X(sharp),sharp);
	      ctx.bezierCurveTo(x +a, y + oy, x + ox, y + b,a, b);
	      ctx.stroke();
	      this.fillBackgroundTo(ctx,2);
	      ctx.clip();	
          this.fillBackgroundTo(ctx);
	      this.drawImageTo(ctx);	
	      ctx.restore();
	      return this;
       };
       return this;
  }; 
  
     curvedDownArrow=function(option){
      var opt={
                name:"curvedDownArrow",
                height:150,
                width:280,
                text:"label",                    
                arrow:{
              	   sharp:25,
              	   size:25,
              	   space:30,
              	   color:"darkgray",
                },
                background:{
               	filltype:"none",
               	color:"gray"
                },
                corner:null,
                border:{
                    	width : 0.3,
                    	type:"solid", //solid, dotted,dashed
            			color : "black"
                },
                afterfunctionPoint:function(ev){  
                  if(ev.functionPoint==1){
               	  size-=ev.offset.x/2;
               	  a=a+ev.offset.x;
               	  this.setFunctionPoints();
               	  this.arrow.size=size;                 	
                  }
                  else if(ev.functionPoint==2){                	   
	               	   space=space+ev.offset.x;
	               	   size-=ev.offset.x/2;
	               	   this.arrow.size=size;                    	 
	               	   this.arrow.space=space;
	               	   this.setFunctionPoints();
	                   	  
                  }
                  else if(ev.functionPoint==3){
	                   	  sharp-=ev.offset.y;	                   	  
	                   	  this.arrow.sharp=sharp;
	                   	  this.setFunctionPoints();
	                   	  
	                     }
                },
                afterresize:function(ev2){
               	  b=this.height;
              	  a=(this.width-space-size)/2;
               	  this.arrow.sharp=sharp;
               	  this.setFunctionPoints();
                }
      };
      $.extend(opt,option);
      if(option.focus)
    	  opt.text="";
      $.extend(this,new note(opt));
      this.propertyEditors=["common","border","font","background","shadow","hyperlink","paragraph"];
      this.persist=function(){
          var r=widget.persistproperty(this);
          if(this.arrow){
               r.arrow={};
               $.extend(r.arrow,this.arrow);
          }
          return r;
      };
      
      var space=this.arrow.space;
      var size=this.arrow.size;       
      var sharp=this.arrow.sharp;
      var b=this.height;
	  var a=(this.width-size-space)/2;
	  var ths=this;
	  var X=function(y){
	   	  var size=ths.arrow.size;       
	   	  var b=ths.height;
	   	  var a=(ths.width-space-size)/2;
	   	  return a*Math.sqrt(b*b-y*y)/b+a;   
      };
      
      var endPoint=function(sharp){
   	   		return{
				  y:sharp,
				  x:X(sharp),
				  angel:Math.atan(sharp/X(sharp))*180/Math.PI
   	   		};
      };
      var endPoint2=function(sharp){
   	   		return{
				  y:sharp,
				  x:X(sharp)+space,
				  angel:Math.atan(sharp/(a*Math.cos(endPoint(sharp).angel)+space+a))*180/Math.PI
				  
   	   		};
	  };

	  this.setFunctionPoints=function(){
			 this.functionPoints=[
			                        {x:endPoint(sharp).x-size,y:this.height,cursor:"pointer",visible:true},
					                {x:this.width-size,y:this.height-sharp,cursor:"pointer",visible:true},
					                {x:this.width,y:this.height-sharp,cursor:"pointer",visible:true}	
				                 ];
	  };
	  if(this.functionPoints.length<3)
		  this.setFunctionPoints();
         	
      this.type="curvedDownArrow";        
      this.drawBorderTo=function(ctx){
   	  var _widget=this;
	   	  if(_widget.border.color==="none" && _widget.background && _widget.background.filltype==="color" &&_widget.background.color!="none")
	   			_widget.border.color=_widget.background.color;
	   	  else if(_widget.border.color==="none" && _widget.background && _widget.background.filltype==="gradient" &&_widget.gradient.begincolor!="none")
	   			_widget.border.color=_widget.gradient.begincolor;
	   		
	   	  var k =.5522848;
	   	  ctx.save();
	   	  ctx.beginPath();
	   	  ctx.lineJoin="round";
	   	  _widget.border.width=parseInt(_widget.border.width);
	   	  ctx.lineWidth = _widget.border.width;
	   	  ctx.lineCap="round";
	   	  ctx.strokeStyle = _widget.border.color;
	   	  ctx.fillStyle=this.arrow.color;
	   	  if(_widget.border.type!=="solid"){
	   		  var dashList = _widget.border.type==="dashed"?[ _widget.border.width+3, _widget.border.width+1]:[_widget.border.width+1,_widget.border.width+1]; 
	   		  ctx.setLineDash(dashList);
	   	  }
	   	  a=(this.width-size-space)/2;
		  var ox=a*k, oy=b*k;	
		  var x=a;
		  var y=0;
		  ctx.scale(1, -1);
		  ctx.translate(0,-this.height);
	      ctx.moveTo(0,0);       
	      ctx.bezierCurveTo(x - a, y + oy, x - ox, y + b, x, y + b);
	      ctx.lineTo(x+space,y+b);
	      x2=x+space;
	      ctx.bezierCurveTo(x2 - ox, y + b,x2 - a, y + oy, space, 0);	      
	      ctx.lineTo(0,0);
	      ctx.stroke();
	      ctx.fill();
	      ctx.beginPath();	
	      ctx.moveTo(a,b);	
	      ctx.lineTo(a+space,b);
	      ctx.bezierCurveTo(x2 +ox, y + b, x2 + a, y + oy,endPoint2(sharp).x, sharp);
	      ctx.lineTo(endPoint2(sharp).x+size,sharp);
	      ctx.lineTo(2*a+space/2,0);
	      ctx.lineTo(X(sharp)-size,sharp);
	      ctx.lineTo(X(sharp),sharp);
	      ctx.bezierCurveTo(x +a, y + oy, x + ox, y + b,a, b);
	      ctx.stroke();
	      this.fillBackgroundTo(ctx,2);
	      ctx.clip();	
          this.fillBackgroundTo(ctx);
	      this.drawImageTo(ctx);	
	      ctx.restore();
	      return this;
      };
      return this;
 }; 
   
     leftUpArrow=function(option){
    	 var opt={
                 name:"leftUpArrow",
                 height:150,
                 width:280,
                 minheight:17,
                 arrow:{
                	size:80,
                	sharp:60,
              	    width:30
                 },
                 background:{
                 	filltype:"none",
                 	color:"white"
                 },
                 corner:null,
                 border:{
                     	width : 0.5,
                     	type:"solid", //solid, dotted,dashed
                     	color : "black"
                 },
                 afterfunctionPoint:function(ev){ 
                   if(ev.functionPoint==1){
                 	  this.arrow.size-=ev.offset.x;    
                 	  if(this.arrow.size<this.arrow.width)
                 		  this.arrow.size=this.arrow.width;
                 	  this.setfunctionPoints();
                   }
                   else if(ev.functionPoint==2){
                	   
                	  this.arrow.sharp+=ev.offset.y;
                	  if(this.arrow.sharp<0)
                		  this.arrow.sharp=0;
                   	  this.setfunctionPoints();             	  
	               }
                   else if(ev.functionPoint==3){
                	   if(this.arrow.width-ev.offset.x<this.arrow.size&&this.arrow.width-ev.offset.x>1)
                    	  this.arrow.width-=ev.offset.x;
                    	  
                    	  this.setfunctionPoints();             	  
 	               }
                 },
                 afterresize:function(ev2){
                	 this.setfunctionPoints(); 
                 }
       };
       
       $.extend(opt,option);
       if(option.focus)
     	  opt.text="";
       $.extend(this,new note(opt));
       this.propertyEditors=["common","border","font","background","shadow","hyperlink","paragraph"];
       this.persist=function(){
           var r=widget.persistproperty(this);
           if(this.arrow){
                r.arrow={};
                $.extend(r.arrow,this.arrow);
           }
           return r;
       };
       this.type="leftUpArrow"; 
       this.setfunctionPoints=function(){
    	   this.functionPoints=[
    	 		                 {x:this.width-this.arrow.size,y:0,cursor:"pointer",visible:true},
    	 		                 {x:this.width-this.arrow.width/2-this.arrow.size/2,y:this.arrow.sharp,cursor:"pointer",visible:true},
    	 		                 {x:this.width-this.arrow.width/2-this.arrow.size/2,y:this.height-this.arrow.width/2-this.arrow.size/2,cursor:"pointer",visible:true}
    	 	                    ];	
       };
       
       if(this.functionPoints.length===0)
    	   this.setfunctionPoints();
      	
       this.drawBorderTo=function(ctx){
	      var _widget=this;
	      var dx=0.5;
	   	  if(_widget.border.color==="none" && _widget.background && _widget.background.filltype==="color" &&_widget.background.color!="none")
	   		_widget.border.color=_widget.background.color;
	   	  else if(_widget.border.color==="none" && _widget.background && _widget.background.filltype==="gradient" &&_widget.gradient.begincolor!="none")
	   		_widget.border.color=_widget.gradient.begincolor;
	   		
	      this.width=Math.max(this.arrow.sharp+this.arrow.size,this.width);
	      this.height=Math.max(this.arrow.sharp+this.arrow.size,this.height);
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
		
	      ctx.moveTo(dx,this.height-this.arrow.size/2+dx);
	      ctx.lineTo(this.arrow.sharp+dx,this.height+dx);
	      ctx.lineTo(this.arrow.sharp+dx,this.height-this.arrow.size/2+this.arrow.width/2+dx);
	      ctx.lineTo(this.width-this.arrow.size/2+this.arrow.width/2+dx,this.height-this.arrow.size/2+this.arrow.width/2+dx);
	      ctx.lineTo(this.width-this.arrow.size/2+this.arrow.width/2+dx,this.arrow.sharp+dx);
	      ctx.lineTo(this.width+dx,this.arrow.sharp+dx);
	      ctx.lineTo(this.width-this.arrow.size/2+dx,dx);
	      ctx.lineTo(this.width-this.arrow.size+dx,this.arrow.sharp+dx);
	      ctx.lineTo(this.width-this.arrow.size/2-this.arrow.width/2+dx,this.arrow.sharp+dx);
	      ctx.lineTo(this.width-this.arrow.size/2-this.arrow.width/2+dx,this.height-this.arrow.size/2-this.arrow.width/2+dx);
	      ctx.lineTo(this.arrow.sharp+dx,this.height-this.arrow.size/2-this.arrow.width/2+dx);
	      ctx.lineTo(this.arrow.sharp+dx,this.height-this.arrow.size+dx);
	      ctx.lineTo(dx,this.height-this.arrow.size/2+dx);
	      ctx.stroke();            
		  this.fillBackgroundTo(ctx,2);
		  ctx.clip();	
	      this.fillBackgroundTo(ctx);  			
		  this.drawImageTo(ctx);	
		  ctx.restore();
		  return this;
      };
       return this;
     };
     
     bentUpArrow=function(option){
    	 var opt={
                 name:"bentUpArrow",
                 height:150,
                 width:280,
                 minheight:17,
                 arrow:{
                	 size:80,
                	 sharp:60,
                	 width:30
                 },
                 background:{
                 	filltype:"none",
                 	color:"white"
                 },
                 corner:null,
                 border:{
                     	width : 0.5,
                     	type:"solid", //solid, dotted,dashed
                     	color : "black"
                 },
                 afterfunctionPoint:function(ev){ 
                   if(ev.functionPoint==1){
                 	  this.arrow.size-=ev.offset.x;    
                 	  if(this.arrow.size<this.arrow.width)
                 		  this.arrow.size=this.arrow.width;
                 	  this.setfunctionPoints();
                   }
                   else if(ev.functionPoint==2){
                	   
                	  this.arrow.sharp+=ev.offset.y;
                	  if(this.arrow.sharp<0)
                		  this.arrow.sharp=0;
                   	  this.setfunctionPoints();             	  
	               }
                   else if(ev.functionPoint==3){
                	   if(this.arrow.width-ev.offset.y<this.arrow.size&&this.arrow.width-ev.offset.y>1)
                    	  this.arrow.width-=ev.offset.y;
                    	  
                    	  this.setfunctionPoints();             	  
 	               }
                 },
                 afterresize:function(ev2){
                	 this.setfunctionPoints(); 
                 }
       };
       
       $.extend(opt,option);
       if(option.focus)
     	  opt.text="";
       $.extend(this,new note(opt));
       this.propertyEditors=["common","border","font","background","shadow","hyperlink","paragraph"];
       this.persist=function(){
           var r=widget.persistproperty(this);
           if(this.arrow){
                r.arrow={};
                $.extend(r.arrow,this.arrow);
           }
           return r;
       };
       this.type="bentUpArrow"; 
       this.setfunctionPoints=function(){
    	   this.functionPoints=[
    	 		                 {x:this.width-this.arrow.size,y:0,cursor:"pointer",visible:true},
    	 		                 {x:this.width-this.arrow.width/2-this.arrow.size/2,y:this.arrow.sharp,cursor:"pointer",visible:true},
    	 		                 {x:0,y:this.height-this.arrow.width,cursor:"pointer",visible:true}
    	 	                    ];	
       };
       
       if(this.functionPoints.length<3)
    	   this.setfunctionPoints();
      	
       this.drawBorderTo=function(ctx){
	      var _widget=this;
	      var dx=0.5;
	   	  if(_widget.border.color==="none" && _widget.background && _widget.background.filltype==="color" &&_widget.background.color!="none")
	   		_widget.border.color=_widget.background.color;
	   	  else if(_widget.border.color==="none" && _widget.background && _widget.background.filltype==="gradient" &&_widget.gradient.begincolor!="none")
	   		_widget.border.color=_widget.gradient.begincolor;
	   		
	      this.width=Math.max(this.arrow.size,this.width);
	      this.height=Math.max(this.arrow.sharp+this.arrow.width,this.height);
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
		
	      ctx.moveTo(dx,this.height-this.arrow.width+dx);
	      ctx.lineTo(dx,this.height+dx);	      
	      ctx.lineTo(this.width-this.arrow.size/2+this.arrow.width/2+dx,this.height+dx);
	      ctx.lineTo(this.width-this.arrow.size/2+this.arrow.width/2+dx,this.arrow.sharp+dx);
	      ctx.lineTo(this.width+dx,this.arrow.sharp+dx);
	      ctx.lineTo(this.width-this.arrow.size/2+dx,dx);
	      ctx.lineTo(this.width-this.arrow.size+dx,this.arrow.sharp+dx);
	      ctx.lineTo(this.width-this.arrow.size/2-this.arrow.width/2+dx,this.arrow.sharp+dx);
	      ctx.lineTo(this.width-this.arrow.size/2-this.arrow.width/2+dx,this.height-this.arrow.width+dx);	      
	      ctx.lineTo(dx,this.height-this.arrow.width+dx);
	      ctx.stroke();            
		  this.fillBackgroundTo(ctx,2);
		  ctx.clip();	
	      this.fillBackgroundTo(ctx);  			
		  this.drawImageTo(ctx);	
		  ctx.restore();
		  return this;
      };
       return this;
     };
     
     bentRightArrow=function(option){
    	 var opt={
                 name:"bentRightArrow",
                 height:150,
                 width:280,
                 minheight:17,
                 arrow:{
                	 size:80,
                	 sharp:60,
                	 width:30,                	
              	     radius:30
                 },
                 background:{
                 	filltype:"none",
                 	color:"white"
                 },
                 corner:null,
                 border:{
                     	width : 0.5,
                     	type:"solid", //solid, dotted,dashed
                     	color : "black"
                 },
                 afterfunctionPoint:function(ev){ 
                   if(ev.functionPoint==1){
                	  this.arrow.sharp-=ev.offset.x;
                	  if(this.arrow.sharp<0)
                		  this.arrow.sharp=0;
                	  if(this.arrow.sharp>this.width-this.arrow.width)
                		  this.arrow.sharp=this.width-this.arrow.width;
                   	  this.setfunctionPoints();             	  
	               }
                   else if(ev.functionPoint==2){
                	   this.arrow.size+=ev.offset.y;    
                  	  if(this.arrow.size<this.arrow.width)
                  		  this.arrow.size=this.arrow.width;
                  	if(this.arrow.size>this.height)
                		  this.arrow.size=this.height;
                  	  this.setfunctionPoints();
 	               }
                   else if (ev.functionPoint==3){
                	   	  this.arrow.width+=ev.offset.x;
                	   	  if(this.arrow.width<1)
                	   		  this.arrow.width=1;
                	   	  else if(this.arrow.width>this.arrow.size)
                	   		  this.arrow.width=this.arrow.size;
                	   		  
                     	  this.setfunctionPoints();
                   }
                   else if (ev.functionPoint==4){
             	   	  this.arrow.radius+=ev.offset.x;
             	   	  if(this.arrow.radius<0)
             	   		  this.arrow.radius=0;
             	   	  else if(this.arrow.radius>this.width-this.arrow.sharp)
             	   		  this.arrow.radius=this.width-this.arrow.sharp;
             	   	  else if(this.arrow.radius>this.height-this.arrow.size/2+this.arrow.width/2)
             	   		this.arrow.radius=this.height-this.arrow.size/2+this.arrow.width/2;
                  	  this.setfunctionPoints();
                   }
                 },
                 afterresize:function(ev2){
                	 if(this.height<this.arrow.size)
                		 this.height=this.arrow.size;
                	 if(this.width<this.arrow.radius+this.arrow.sharp)
                		 this.width=this.arrow.radius+this.arrow.sharp;
                	 this.setfunctionPoints(); 
                 }
       };
       
       $.extend(opt,option);
       if(option.focus)
     	  opt.text="";
       $.extend(this,new note(opt));
       this.propertyEditors=["common","border","font","background","shadow","hyperlink","paragraph"];
       this.persist=function(){
           var r=widget.persistproperty(this);
           if(this.arrow){
                r.arrow={};
                $.extend(r.arrow,this.arrow);
           }
           return r;
       };
       this.type="bentRightArrow"; 
       this.setfunctionPoints=function(){
    	   this.functionPoints=[
    	 		                 {x:this.width-this.arrow.sharp,y:0,cursor:"pointer",visible:true},
    	 		                 {x:this.width,y:this.arrow.size,cursor:"pointer",visible:true},
    	 		                 {x:this.arrow.width,y:this.height,cursor:"pointer",visible:true},
    	 		                 {x:this.arrow.radius,y:0,cursor:"pointer",visible:true}
    	 	                    ];	
       };
       
       if(this.functionPoints.length<4)
    	   this.setfunctionPoints();
      	
       this.drawBorderTo=function(ctx){
	      var _widget=this;
	      var dx=0.5;
	   	  if(_widget.border.color==="none" && _widget.background && _widget.background.filltype==="color" &&_widget.background.color!="none")
	   		_widget.border.color=_widget.background.color;
	   	  else if(_widget.border.color==="none" && _widget.background && _widget.background.filltype==="gradient" &&_widget.gradient.begincolor!="none")
	   		_widget.border.color=_widget.gradient.begincolor;
	   		
//	      this.width=Math.max(this.arrow.sharp+this.arrow.size,this.width);
//	      this.height=Math.max(this.arrow.sharp+this.arrow.size,this.height);
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
		
	      ctx.moveTo(dx,this.height+dx);
	      ctx.lineTo(this.arrow.width+dx,this.height+dx);
	      if(this.arrow.radius>this.arrow.width){
	    	  ctx.lineTo(this.arrow.width+dx,this.arrow.size/2-this.arrow.width/2+this.arrow.radius+dx);
	    	  ctx.arcTo(this.arrow.width+dx,this.arrow.size/2+this.arrow.width/2+dx,this.arrow.radius+dx,this.arrow.size/2+this.arrow.width/2+dx,this.arrow.radius-this.arrow.width);
	      }
	      else{
	    	  ctx.lineTo(this.arrow.width+dx,this.arrow.size/2+this.arrow.width/2+dx);
	      }
	      ctx.lineTo(this.width-this.arrow.sharp+dx,this.arrow.size/2+this.arrow.width/2+dx);
	      ctx.lineTo(this.width-this.arrow.sharp+dx,this.arrow.size+dx);
	      ctx.lineTo(this.width+dx,this.arrow.size/2+dx);
	      ctx.lineTo(this.width-this.arrow.sharp+dx,dx);
	      ctx.lineTo(this.width-this.arrow.sharp+dx,this.arrow.size/2-this.arrow.width/2+dx);
	      ctx.lineTo(this.arrow.radius+dx,this.arrow.size/2-this.arrow.width/2+dx);
	      ctx.arcTo(dx,this.arrow.size/2-this.arrow.width/2+dx,dx,this.arrow.size/2-this.arrow.width/2+this.arrow.radius+dx,this.arrow.radius);	      
	      ctx.lineTo(dx,this.height+dx);
	      ctx.stroke();            
		  this.fillBackgroundTo(ctx,2);
		  ctx.clip();	
	      this.fillBackgroundTo(ctx);  			
		  this.drawImageTo(ctx);	
		  ctx.restore();
		  return this;
      };
       return this;
     };
     
     bentLeftArrow=function(option){
    	 var opt={
                 name:"bentLeftArrow",
                 height:150,
                 width:280,
                 minheight:17,
                 arrow:{
                	 size:80,
                	 sharp:60,
                	 width:30,                	
              	     radius:30
                 },
                 background:{
                 	filltype:"none",
                 	color:"white"
                 },
                 corner:null,
                 border:{
                     	width : 0.5,
                     	type:"solid", //solid, dotted,dashed
                     	color : "black"
                 },
                 afterfunctionPoint:function(ev){ 
                   if(ev.functionPoint==1){
                	  this.arrow.sharp+=ev.offset.x;
                	  if(this.arrow.sharp<0)
                		  this.arrow.sharp=0;
                	  if(this.arrow.sharp>this.width-this.arrow.width-10)
                		  this.arrow.sharp=this.width-this.arrow.width-10;
                   	  this.setfunctionPoints();             	  
	               }
                   else if(ev.functionPoint==3){
                	   this.arrow.size+=ev.offset.y;    
                  	  if(this.arrow.size<this.arrow.width)
                  		  this.arrow.size=this.arrow.width;
                  	if(this.arrow.size>this.height)
                		  this.arrow.size=this.height;
                  	  this.setfunctionPoints();
 	               }
                   else if (ev.functionPoint==4){
                	   	  this.arrow.width-=ev.offset.x;
                	   	  if(this.arrow.width<1)
                	   		  this.arrow.width=1;
                	   	  else if(this.arrow.width>this.arrow.size-5)
                	   		  this.arrow.width=this.arrow.size-5;
                	   		  
                     	  this.setfunctionPoints();
                   }
                   else if (ev.functionPoint==2){
             	   	  this.arrow.radius-=ev.offset.x;
             	   	  if(this.arrow.radius<0)
             	   		  this.arrow.radius=0;
             	   	  else if(this.arrow.radius>this.width-this.arrow.sharp-10)
             	   		  this.arrow.radius=this.width-this.arrow.sharp-10;
             	   	  else if(this.arrow.radius>this.height-this.arrow.size/2+this.arrow.width/2-5)
             	   		this.arrow.radius=this.height-this.arrow.size/2+this.arrow.width/2-5;
                  	  this.setfunctionPoints();
                   }
                 },
                 afterresize:function(ev2){
                	 if(this.height<this.arrow.size)
                		 this.height=this.arrow.size;
                	 if(this.width<this.arrow.radius+this.arrow.sharp&&this.arrow.radius>this.arrow.width)
                		 this.width=this.arrow.radius+this.arrow.sharp;
                	 else if(this.width<this.arrow.radius+this.arrow.sharp&&this.arrow.radius<=this.arrow.width)
                		 this.width=this.arrow.width+this.arrow.sharp;
                	 this.setfunctionPoints(); 
                 }
       };
       
       $.extend(opt,option);
       if(option.focus)
     	  opt.text="";
       $.extend(this,new note(opt));
       this.propertyEditors=["common","border","font","background","shadow","hyperlink","paragraph"];
       this.persist=function(){
           var r=widget.persistproperty(this);
           if(this.arrow){
                r.arrow={};
                $.extend(r.arrow,this.arrow);
           }
           return r;
       };
       this.type="bentLeftArrow"; 
       this.setfunctionPoints=function(){
    	   this.functionPoints=[
    	 		                 {x:this.arrow.sharp,y:0,cursor:"pointer",visible:true},
    	 		                 {x:this.width-this.arrow.radius,y:0,cursor:"pointer",visible:true},
    	 		                 {x:0,y:this.arrow.size,cursor:"pointer",visible:true},
    	 		                 {x:this.width-this.arrow.width,y:this.height,cursor:"pointer",visible:true}
    	 	                    ];	
       };
       
       if(this.functionPoints.length<4)
    	   this.setfunctionPoints();
      	
       this.drawBorderTo=function(ctx){
	      var _widget=this;
	      var dx=0.5;
	   	  if(_widget.border.color==="none" && _widget.background && _widget.background.filltype==="color" &&_widget.background.color!="none")
	   		_widget.border.color=_widget.background.color;
	   	  else if(_widget.border.color==="none" && _widget.background && _widget.background.filltype==="gradient" &&_widget.gradient.begincolor!="none")
	   		_widget.border.color=_widget.gradient.begincolor;
	   		
//	      this.width=Math.max(this.arrow.sharp+this.arrow.size,this.width);
//	      this.height=Math.max(this.arrow.sharp+this.arrow.size,this.height);
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
		
	      ctx.moveTo(this.width+dx,this.height+dx);
	      ctx.lineTo(this.width-this.arrow.width+dx,this.height+dx);
	      if(this.arrow.radius>this.arrow.width){
	    	  ctx.lineTo(this.width-this.arrow.width+dx,this.arrow.size/2-this.arrow.width/2+this.arrow.radius+dx);
	    	  ctx.arcTo(this.width-this.arrow.width+dx,this.arrow.size/2+this.arrow.width/2+dx,this.width-this.arrow.radius+dx,this.arrow.size/2+this.arrow.width/2+dx,this.arrow.radius-this.arrow.width);
	      }
	      else{
	    	  ctx.lineTo(this.width-this.arrow.width+dx,this.arrow.size/2+this.arrow.width/2+dx);
	      }
	      ctx.lineTo(this.arrow.sharp+dx,this.arrow.size/2+this.arrow.width/2+dx);
	      ctx.lineTo(this.arrow.sharp+dx,this.arrow.size+dx);
	      ctx.lineTo(dx,this.arrow.size/2+dx);
	      ctx.lineTo(this.arrow.sharp+dx,dx);
	      ctx.lineTo(this.arrow.sharp+dx,this.arrow.size/2-this.arrow.width/2+dx);
	      ctx.lineTo(this.width-this.arrow.radius+dx,this.arrow.size/2-this.arrow.width/2+dx);
	      ctx.arcTo(this.width+dx,this.arrow.size/2-this.arrow.width/2+dx,this.width+dx,this.arrow.size/2-this.arrow.width/2+this.arrow.radius+dx,this.arrow.radius);	      
	      ctx.lineTo(this.width+dx,this.height+dx);
	      ctx.stroke();            
		  this.fillBackgroundTo(ctx,2);
		  ctx.clip();	
	      this.fillBackgroundTo(ctx);  			
		  this.drawImageTo(ctx);	
		  ctx.restore();
		  return this;
      };
       return this;
     };
     
     leftRightUpArrow=function(option){
    	 var opt={
                 name:"leftRightUpArrow",
                 height:150,
                 width:280,
                 minheight:17,
                 arrow:{
                	 size:80,
                	 sharp:60,
                	 width:30
                 },
                 background:{
                 	filltype:"none",
                 	color:"white"
                 },
                 corner:null,
                 border:{
                     	width : 0.5,
                     	type:"solid", //solid, dotted,dashed
                     	color : "black"
                 },
                 afterfunctionPoint:function(ev){ 
                   if(ev.functionPoint==2){
                 	  this.arrow.size-=ev.offset.x;    
                 	  if(this.arrow.size<this.arrow.width)
                 		  this.arrow.size=this.arrow.width;
                 	  this.setfunctionPoints();
                   }
                   else if(ev.functionPoint==3){
                	  this.arrow.sharp+=ev.offset.y;
                	  if(this.arrow.sharp<0)
                		  this.arrow.sharp=0;
                   	  this.setfunctionPoints();             	  
	               }
                   else if(ev.functionPoint==4){
                	   if(this.arrow.width-ev.offset.x<this.arrow.size&&this.arrow.width-ev.offset.x>1)
                    	  this.arrow.width-=ev.offset.x;
                    	  
                    	  this.setfunctionPoints();             	  
 	               }
                 },
                 afterresize:function(ev2){
                	 this.setfunctionPoints(); 
                 }
       };
       
       $.extend(opt,option);
       if(option.focus)
     	  opt.text="";
       $.extend(this,new box(opt));
       this.persist=function(){
           var r=widget.persistproperty(this);
           if(this.arrow){
                r.arrow={};
                $.extend(r.arrow,this.arrow);
           }
           return r;
       };
       this.type="leftRightUpArrow"; 
       this.setfunctionPoints=function(){
    	   this.functionPoints=[
    	                         {x:this.width/2,y:this.height+10,cursor:"pointer",visible:false},
    	 		                 {x:this.width/2-this.arrow.size/2,y:0,cursor:"pointer",visible:true},
    	 		                 {x:this.width,y:this.arrow.sharp,cursor:"pointer",visible:true},
    	 		                 {x:this.width/2-this.arrow.width/2,y:this.arrow.sharp,cursor:"pointer",visible:true}
    	 	                    ];	
       };
       
       if(this.functionPoints.length<4)
    	   this.setfunctionPoints();
      	
       this.drawBorderTo=function(ctx){
	      var _widget=this;
	      var dx=0.5;
	   	  if(_widget.border.color==="none" && _widget.background && _widget.background.filltype==="color" &&_widget.background.color!="none")
	   		_widget.border.color=_widget.background.color;
	   	  else if(_widget.border.color==="none" && _widget.background && _widget.background.filltype==="gradient" &&_widget.gradient.begincolor!="none")
	   		_widget.border.color=_widget.gradient.begincolor;
	   		
	      this.width=Math.max(this.arrow.sharp+this.arrow.size,this.width);
	      this.height=Math.max(this.arrow.sharp+this.arrow.size,this.height);
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
		
	      ctx.moveTo(dx,this.height-this.arrow.size/2+dx);
	      ctx.lineTo(this.arrow.sharp+dx,this.height+dx);
	      ctx.lineTo(this.arrow.sharp+dx,this.height-this.arrow.size/2+this.arrow.width/2+dx);
	      ctx.lineTo(this.width-this.arrow.sharp+dx,this.height-this.arrow.size/2+this.arrow.width/2+dx);
	      ctx.lineTo(this.width-this.arrow.sharp+dx,this.height+dx);
	      ctx.lineTo(this.width+dx,this.height-this.arrow.size/2+dx);
	      ctx.lineTo(this.width-this.arrow.sharp+dx,this.height-this.arrow.size+dx);
	      ctx.lineTo(this.width-this.arrow.sharp+dx,this.height-this.arrow.size/2-this.arrow.width/2+dx);
	      ctx.lineTo(this.width/2+this.arrow.width/2+dx,this.height-this.arrow.size/2-this.arrow.width/2+dx);
	      ctx.lineTo(this.width/2+this.arrow.width/2+dx,this.arrow.sharp+dx);
	      ctx.lineTo(this.width/2+this.arrow.size/2+dx,this.arrow.sharp+dx);
	      ctx.lineTo(this.width/2+dx,dx);
	      ctx.lineTo(this.width/2-this.arrow.size/2+dx,this.arrow.sharp+dx);
	      ctx.lineTo(this.width/2-this.arrow.width/2+dx,this.arrow.sharp+dx);
	      ctx.lineTo(this.width/2-this.arrow.width/2+dx,this.height-this.arrow.width/2-this.arrow.size/2+dx);
	      ctx.lineTo(this.arrow.sharp+dx,this.height-this.arrow.width/2-this.arrow.size/2+dx);
	      ctx.lineTo(this.arrow.sharp+dx,this.height-this.arrow.size+dx);
	      ctx.lineTo(dx,this.height-this.arrow.size/2+dx);
	      ctx.stroke();            
		  this.fillBackgroundTo(ctx,2);
		  ctx.clip();	
	      this.fillBackgroundTo(ctx);  			
		  this.drawImageTo(ctx);	
		  ctx.restore();
		  return this;
      };
       return this;
     };
     
     notchedRightArrow=function(option){
    	 var opt={
                 name:"notchedRightArrow",
                 height:150,
                 width:280,
                 minheight:17,
                 arrow:{
                	sharp:80,
              	    width:60,
              	    offset:20
                 },
                 background:{
                 	filltype:"none",
                 	color:"white"
                 },
                 corner:null,
                 border:{
                     	width : 0.5,
                     	type:"solid", //solid, dotted,dashed
                     	color : "black"
                 },
                 afterfunctionPoint:function(ev){ 
                   
                   if(ev.functionPoint==1){
                	  this.arrow.sharp-=ev.offset.x;
                	  this.arrow.sharp=this.arrow.sharp>0?this.arrow.sharp:0;
                	  this.arrow.sharp=this.arrow.sharp<this.width/2?this.arrow.sharp:this.width/2;
                   	  this.setfunctionPoints();             	  
	               }
                   else if(ev.functionPoint==2){
                   	  this.arrow.width-=ev.offset.y;
                      this.arrow.width=this.arrow.width>0?this.arrow.width:0;
              	      this.arrow.width=this.arrow.width<this.width/2?this.arrow.width:this.width/2;
                   	  this.setfunctionPoints();             	  
 	               }
                   else if(ev.functionPoint==3){
                       this.arrow.offset+=ev.offset.x;
                       this.arrow.offset=this.arrow.offset>0?this.arrow.offset:0;
               	       this.arrow.offset=this.arrow.offset<this.height/2?this.arrow.offset:this.height/2;
                       this.setfunctionPoints();             	  
  	               }
                 },
                 afterresize:function(ev2){
                	 this.setfunctionPoints(); 
                 }
       };
       
       $.extend(opt,option);
       if(option.focus)
     	  opt.text="";
       $.extend(this,new note(opt));
       this.propertyEditors=["common","border","font","background","shadow","hyperlink","paragraph"];
       this.persist=function(){
           var r=widget.persistproperty(this);
           if(this.arrow){
                r.arrow={};
                $.extend(r.arrow,this.arrow);
           }
           return r;
       };
       this.type="notchedRightArrow"; 
       this.setfunctionPoints=function(){
    	   this.functionPoints=[
    	                         {x:this.width-this.arrow.sharp,y:0,cursor:"pointer",visible:true},
    	 		                 {x:0,y:this.height/2-this.arrow.width/2,cursor:"pointer",visible:true},
    	                         {x:this.arrow.offset,y:this.height/2,cursor:"pointer",visible:true}
    	 	                    ];	
       };
       
       if(this.functionPoints.length<2)
    	   this.setfunctionPoints();
      	
       this.drawBorderTo=function(ctx){
	      var _widget=this;
	      var dx=0.5;
	   	  if(_widget.border.color==="none" && _widget.background && _widget.background.filltype==="color" &&_widget.background.color!="none")
	   		_widget.border.color=_widget.background.color;
	   	  else if(_widget.border.color==="none" && _widget.background && _widget.background.filltype==="gradient" &&_widget.gradient.begincolor!="none")
	   		_widget.border.color=_widget.gradient.begincolor;
	   		
	      this.width=Math.max(this.arrow.sharp+this.arrow.width,this.width);
	      this.height=Math.max(this.arrow.width,this.height);
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

	      ctx.moveTo(dx,this.height/2-this.arrow.width/2+dx);
	      ctx.lineTo(this.width-this.arrow.sharp+dx,this.height/2-this.arrow.width/2+dx);
	      ctx.lineTo(this.width-this.arrow.sharp+dx,dx);
	      ctx.lineTo(this.width+dx,this.height/2+dx);
	      ctx.lineTo(this.width-this.arrow.sharp+dx,this.height+dx);
	      ctx.lineTo(this.width-this.arrow.sharp+dx,this.height/2+this.arrow.width/2+dx);
	      ctx.lineTo(dx,this.height/2+this.arrow.width/2+dx);
	      ctx.lineTo(this.arrow.offset+dx,this.height/2+dx);
	      ctx.lineTo(dx,this.height/2-this.arrow.width/2+dx);
	      ctx.stroke();            
		  this.fillBackgroundTo(ctx,2);
		  ctx.clip();	
	      this.fillBackgroundTo(ctx);  			
		  this.drawImageTo(ctx);	
		  ctx.restore();
		  return this;
      };
       return this;
     };
     
     notchedLeftArrow=function(option){
    	 var opt={
                 name:"notchedLeftArrow",
                 height:150,
                 width:280,
                 minheight:17,
                 arrow:{
                	sharp:80,
              	    width:60,
              	    offset:20
                 },
                 background:{
                 	filltype:"none",
                 	color:"white"
                 },
                 corner:null,
                 border:{
                     	width : 0.5,
                     	type:"solid", //solid, dotted,dashed
                     	color : "black"
                 },
                 afterfunctionPoint:function(ev){ 
                   if(ev.functionPoint==1){
                	  this.arrow.sharp+=ev.offset.x;
                	  this.arrow.sharp=this.arrow.sharp>0?this.arrow.sharp:0;
                	  this.arrow.sharp=this.arrow.sharp<this.width/2?this.arrow.sharp:this.width/2;                	  
                   	  this.setfunctionPoints();             	  
	               }
                   else if(ev.functionPoint==2){
                   	  this.arrow.width-=ev.offset.y;
                   	  this.arrow.width=this.arrow.width>1?this.arrow.width:1;
                   	  this.arrow.width=this.arrow.width<this.height?this.arrow.width:this.height;
                   	  this.setfunctionPoints();             	  
 	               }
 	               else if(ev.functionPoint==3){
                   	  this.arrow.offset-=ev.offset.x;
                   	  this.arrow.offset=this.arrow.offset>0?this.arrow.offset:0;
                   	  this.arrow.offset=this.arrow.offset<this.height/2?this.arrow.offset:this.height/2;
                   	  this.setfunctionPoints();             	  
 	               }
                 },
                 afterresize:function(ev2){
                	 this.setfunctionPoints(); 
                 }
       };
       
       $.extend(opt,option);
       if(option.focus)
     	  opt.text="";
       $.extend(this,new note(opt));
       this.propertyEditors=["common","border","font","background","shadow","hyperlink","paragraph"];
       this.persist=function(){
           var r=widget.persistproperty(this);
           if(this.arrow){
                r.arrow={};
                $.extend(r.arrow,this.arrow);
           }
           return r;
       };
       this.type="notchedLeftArrow"; 
       this.setfunctionPoints=function(){
    	   this.functionPoints=[
    	                         {x:this.arrow.sharp,y:0,cursor:"pointer",visible:true},
    	 		                 {x:this.width,y:this.height/2-this.arrow.width/2,cursor:"pointer",visible:true},
    	 		                 {x:this.width-this.arrow.offset,y:this.height/2,cursor:"pointer",visible:true}
    	 	                    ];	
       };
       
       if(this.functionPoints.length<2)
    	   this.setfunctionPoints();
      	
       this.drawBorderTo=function(ctx){
	      var _widget=this;
	      var dx=0.5;
	   	  if(_widget.border.color==="none" && _widget.background && _widget.background.filltype==="color" &&_widget.background.color!="none")
	   		_widget.border.color=_widget.background.color;
	   	  else if(_widget.border.color==="none" && _widget.background && _widget.background.filltype==="gradient" &&_widget.gradient.begincolor!="none")
	   		_widget.border.color=_widget.gradient.begincolor;
	   		
	      this.width=Math.max(this.arrow.sharp+this.arrow.width,this.width);
	      this.height=Math.max(this.arrow.width,this.height);
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
	      ctx.scale(-1,1);
	      ctx.translate(-this.width,0);
		
	      ctx.moveTo(dx,this.height/2-this.arrow.width/2+dx);
	      ctx.lineTo(this.width-this.arrow.sharp+dx,this.height/2-this.arrow.width/2+dx);
	      ctx.lineTo(this.width-this.arrow.sharp+dx,dx);
	      ctx.lineTo(this.width+dx,this.height/2+dx);
	      ctx.lineTo(this.width-this.arrow.sharp+dx,this.height+dx);
	      ctx.lineTo(this.width-this.arrow.sharp+dx,this.height/2+this.arrow.width/2+dx);
	      ctx.lineTo(dx,this.height/2+this.arrow.width/2+dx);
	      ctx.lineTo(this.arrow.offset+dx,this.height/2+dx);
	      ctx.lineTo(dx,this.height/2-this.arrow.width/2+dx);
	      ctx.stroke();            
		  this.fillBackgroundTo(ctx,2);
		  ctx.clip();	
	      this.fillBackgroundTo(ctx);  			
		  this.drawImageTo(ctx);	
		  ctx.restore();
		  return this;
      };
       return this;
     };
     
     uTurnArrow=function(option){
    	 var opt={
                 name:"uTurnArrow",
                 height:150,
                 width:280,
                 minheight:17,
                 arrow:{
                	size:60,
                	sharp:30,
              	    width:40,
              	    radius:40,
              	    offset:50
                 },
                 background:{
                 	filltype:"none",
                 	color:"white"
                 },
                 corner:null,
                 border:{
                     	width : 0.5,
                     	type:"solid", //solid, dotted,dashed
                     	color : "black"
                 },
                 afterfunctionPoint:function(ev){ 
                   if(ev.functionPoint==1){
                	  this.arrow.radius+=ev.offset.x;
                	  this.arrow.radius=this.arrow.radius<this.width/2?this.arrow.radius:this.width/2;
                	  if(this.arrow.radius<0)
                		  this.arrow.radius=0;
                   	  this.setfunctionPoints();             	  
	               }
                   else if(ev.functionPoint==2){
                   	  this.arrow.sharp-=ev.offset.y;
                   	  if(this.arrow.sharp<0)
                   		  this.arrow.sharp=0;
                   	  if(this.arrow.sharp>this.height-this.arrow.offset-this.arrow.radius)
                   		  this.arrow.sharp=this.height-this.arrow.offset-this.arrow.radius;
                   	  this.setfunctionPoints();             	  
 	               }
 	              else if(ev.functionPoint==3){
                   	  this.arrow.offset-=ev.offset.y;
                   	  if(this.arrow.offset<0)
                   		  this.arrow.offset=0;
                   	  if(this.arrow.offset>this.height-this.arrow.width-this.arrow.sharp){
                 		    this.arrow.offset=this.height-this.arrow.width-this.arrow.sharp;
                 		    if(this.arrow.radius>this.height-this.arrow.offset-this.arrow.sharp)
                 		    	this.arrow.radius=this.height-this.arrow.offset-this.arrow.sharp;
                   	  }
                   	  this.setfunctionPoints();             	  
 	               }
 	              else if(ev.functionPoint==4){
                   	  this.arrow.width+=ev.offset.x;
                   	  if(this.arrow.width<1)
                   		this.arrow.width=1;
                   	  else if(this.arrow.width>this.arrow.size)
                   		  this.arrow.width=this.arrow.size;
                   		
                   	  this.setfunctionPoints();             	  
 	               }
 	              else if(ev.functionPoint==5){
                  	  this.arrow.size-=ev.offset.x;
                  	  if(this.arrow.size<this.arrow.width)
                  		 this.arrow.size=this.arrow.width;
                  	  this.setfunctionPoints();             	  
	               }
                 },
                 afterresize:function(ev2){
                	 if(this.height<this.arrow.sharp+Math.max(this.arrow.width,this.arrow.radius)+this.arrow.offset){
                		 if(this.arrow.offset>0)
                			 this.arrow.offset+=ev2.offset.y;
                	 }
                	 this.setfunctionPoints(); 
                 }
       };
       
       $.extend(opt,option);
       if(option.focus)
     	  opt.text="";
       $.extend(this,new note(opt));
       this.propertyEditors=["common","border","font","background","shadow","hyperlink","paragraph"];
       this.persist=function(){
           var r=widget.persistproperty(this);
           if(this.arrow){
                r.arrow={};
                $.extend(r.arrow,this.arrow);
           }
           return r;
       };
       this.type="uTurnArrow"; 
       this.setfunctionPoints=function(){
    	   this.functionPoints=[
    	                         {x:this.arrow.radius,y:0,cursor:"pointer",visible:true},
    	                         {x:this.width-this.arrow.size,y:this.height-this.arrow.sharp-this.arrow.offset,cursor:"pointer",visible:true},
    	                         {x:this.width,y:this.height-this.arrow.offset,cursor:"pointer",visible:true},
    	                         {x:this.arrow.width,y:this.height,cursor:"pointer",visible:true},
    	                         {x:this.width-this.arrow.size,y:this.height,cursor:"pointer",visible:true}
    	 	                    ];	
       };
       
       if(this.functionPoints.length<5)
    	   this.setfunctionPoints();
      	
       this.drawBorderTo=function(ctx){
	      var _widget=this;
	      var dx=0.5;
	   	  if(_widget.border.color==="none" && _widget.background && _widget.background.filltype==="color" &&_widget.background.color!="none")
	   		_widget.border.color=_widget.background.color;
	   	  else if(_widget.border.color==="none" && _widget.background && _widget.background.filltype==="gradient" &&_widget.gradient.begincolor!="none")
	   		_widget.border.color=_widget.gradient.begincolor;
	   		
	      this.width=Math.max(this.arrow.width+this.arrow.size,this.width);	      
	      this.height=Math.max(this.arrow.sharp+Math.max(this.arrow.width,this.arrow.radius)+this.arrow.offset,this.height);
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
		
	      ctx.moveTo(dx,this.height+dx);
	      ctx.lineTo(dx,this.arrow.radius+dx);	      
	      ctx.arcTo(dx,dx,this.arrow.radius+dx,dx,this.arrow.radius);
	      ctx.lineTo(this.width-this.arrow.size/2-this.arrow.radius+dx,dx);
	      ctx.arcTo(this.width-this.arrow.size/2+this.arrow.width/2+dx,dx,this.width-this.arrow.size/2+this.arrow.width/2+dx,this.arrow.radius+dx,this.arrow.radius);
	      ctx.lineTo(this.width-this.arrow.size/2+this.arrow.width/2+dx,this.height-this.arrow.offset-this.arrow.sharp+dx);
	      ctx.lineTo(this.width+dx,this.height-this.arrow.offset-this.arrow.sharp+dx);
	      ctx.lineTo(this.width-this.arrow.size/2+dx,this.height-this.arrow.offset+dx);
	      ctx.lineTo(this.width-this.arrow.size+dx,this.height-this.arrow.offset-this.arrow.sharp+dx);
	      ctx.lineTo(this.width-this.arrow.size+(this.arrow.size/2-this.arrow.width/2)+dx,this.height-this.arrow.offset-this.arrow.sharp+dx);
	      if(this.arrow.width>this.arrow.radius)	    	  
	    	  ctx.lineTo(this.width-this.arrow.size+(this.arrow.size/2-this.arrow.width/2)+dx,this.arrow.width+dx);
	      else{
	    	  ctx.lineTo(this.width-this.arrow.size+(this.arrow.size/2-this.arrow.width/2)+dx,this.arrow.radius+dx);	
	    	  ctx.arcTo(this.width-this.arrow.size+(this.arrow.size/2-this.arrow.width/2)+dx,this.arrow.width+dx,this.width-this.arrow.size+(this.arrow.size/2-this.arrow.width/2)-(this.arrow.radius-this.arrow.width)+dx,this.arrow.width+dx,this.arrow.radius-this.arrow.width);
	      }
	      if(this.arrow.width<this.arrow.radius){
	    	  ctx.lineTo(this.arrow.radius+dx,this.arrow.width+dx);
	    	  ctx.arcTo(this.arrow.width+dx,this.arrow.width+dx,this.arrow.width+dx,this.arrow.radius+dx,this.arrow.radius-this.arrow.width);
	      }
	      else{
	    	  ctx.lineTo(this.arrow.width+dx,this.arrow.width+dx);
	      }
	      ctx.lineTo(this.arrow.width+dx,this.height+dx);
	      ctx.lineTo(dx,this.height+dx);
	      
	      ctx.stroke();            
		  this.fillBackgroundTo(ctx,2);
		  ctx.clip();	
	      this.fillBackgroundTo(ctx);  			
		  this.drawImageTo(ctx);	
		  ctx.restore();
		  return this;
      };
       return this;
     };
     
     calloutRightArrow=function(option){
         var opt={
                   name:"calloutRightArrow",
                   height:150,
                   width:280,
                   text:"label",                    
                   minheight:17,
                   arrow:{
                      sharp:50,
                      size:80,
                      width:40,
                      space:50
                      
                   },
                   background:{
                   	filltype:"none",
                   	color:"gray"
                   },
                   border:{
                       	width : 0.3,
                       	type:"solid", //solid, dotted,dashed
                       	color : "black"
                   },
                   corner:null,
                   afterfunctionPoint:function(ev){                    
                     if(ev.functionPoint==1){
                   	    this.arrow.sharp-=ev.offset.x;
                   	    this.arrow.sharp=this.arrow.sharp>0?this.arrow.sharp:0;
                   	    this.arrow.sharp=this.arrow.sharp<this.width-this.arrow.space-10?this.arrow.sharp:this.width-this.arrow.space-10;
                     }
                     else if(ev.functionPoint==2){
                    	 this.arrow.size-=ev.offset.y;
                    	 this.arrow.size=this.arrow.size>this.arrow.width?this.arrow.size:this.arrow.width;
                    	 this.arrow.size=this.arrow.size<this.height?this.arrow.size:this.height;
                     }
                     else if(ev.functionPoint==3){
                    	 this.arrow.width-=ev.offset.y;	
                    	 this.arrow.width=this.arrow.width>0?this.arrow.width:1;
                    	 this.arrow.width=this.arrow.width<this.arrow.size?this.arrow.width:this.arrow.size;
                     }
                     else if(ev.functionPoint==4){
                    	 this.arrow.space+=ev.offset.x;	
                    	 this.arrow.space=this.arrow.space>0?this.arrow.space:0;
                    	 this.arrow.space=this.arrow.space<this.width-this.arrow.sharp-10?this.arrow.space:this.width-this.arrow.sharp-10;
                     }
                     this.setfunctionPoints();
                   },
                   afterresize:function(ev2){
                	   this.width=this.width>this.arrow.space+this.arrow.sharp+10?this.width:this.arrow.space+this.arrow.sharp+10;
                	   this.height=this.height>this.arrow.size?this.height:this.arrow.size;
                	   this.setfunctionPoints();
                   }
         };
         
         $.extend(opt,option);
         if(option.focus)
       	  opt.text="";
         $.extend(this,new note(opt));
         this.propertyEditors=["common","border","font","background","shadow","hyperlink","paragraph"];
         this.persist=function(){
             var r=widget.persistproperty(this);
             if(this.arrow){
                  r.arrow={};
                  $.extend(r.arrow,this.arrow);
             }
             return r;
         };
         this.type="calloutRightArrow";  
         this.setfunctionPoints=function(){
      	   this.functionPoints=[
      	                         {x:this.width-this.arrow.sharp,y:0,cursor:"pointer",visible:true},
      	                         {x:this.width,y:(this.height-this.arrow.size)/2,cursor:"pointer",visible:true},
      	                         {x:this.width-this.arrow.sharp,y:(this.height-this.arrow.size)/2+(this.arrow.size/2-this.arrow.width/2),cursor:"pointer",visible:true},
      	                         {x:this.arrow.space,y:this.height,cursor:"pointer",visible:true}
      	 	                    ];	
         };
         
         if(this.functionPoints.length<4)
      	   this.setfunctionPoints();
         this.drawBorderTo=function(ctx){
			var _widget=this;
			var dx=0.5;
			if(_widget.border.color==="none" && _widget.background && _widget.background.filltype==="color" &&_widget.background.color!="none")
				_widget.border.color=_widget.background.color;
			else if(_widget.border.color==="none" && _widget.background && _widget.background.filltype==="gradient" &&_widget.gradient.begincolor!="none")
				_widget.border.color=_widget.gradient.begincolor;
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
			ctx.moveTo(dx,dx);
			ctx.lineTo(this.arrow.space+dx,dx);
			ctx.lineTo(this.arrow.space+dx,this.height/2-this.arrow.width/2+dx);
			ctx.lineTo(this.width-this.arrow.sharp+dx,this.height/2-this.arrow.width/2+dx);			
			ctx.lineTo(this.width-this.arrow.sharp+dx,this.height/2-this.arrow.width/2-this.arrow.size/2+this.arrow.width/2+dx);
			ctx.lineTo(this.width+dx,this.height/2+dx);
			ctx.lineTo(this.width-this.arrow.sharp+dx,this.height/2+this.arrow.size/2+dx);
			ctx.lineTo(this.width-this.arrow.sharp+dx,this.height/2+this.arrow.width/2+dx);
			ctx.lineTo(this.arrow.space+dx,this.height/2+this.arrow.width/2+dx);
			ctx.lineTo(this.arrow.space+dx,this.height+dx);
			ctx.lineTo(dx,this.height+dx);
			ctx.lineTo(dx,dx);
			ctx.stroke();            
			this.fillBackgroundTo(ctx,2);
			ctx.clip();	
			this.fillBackgroundTo(ctx);
			this.drawImageTo(ctx);	
			ctx.restore();
			return this;
         };
         return this;
    }; 
    
     quadArrow=function(option){
        var opt={
                  name:"quadArrow",
                  height:200,
                  width:250,
                  text:"label",                    
                  minheight:17,
                  arrow:{
                     sharp:50,
                     size:80,
                     width:40
                  },
                  background:{
                  	filltype:"none",
                  	color:"gray"
                  },
                  border:{
                      	width : 0.3,
                      	type:"solid", //solid, dotted,dashed
                      	color : "black"
                  },
                  corner:null,
                  afterfunctionPoint:function(ev){                    
                    if(ev.functionPoint==1){
                    	
                    	 this.arrow.size-=ev.offset.x;
                       	 this.arrow.size=this.arrow.size>this.arrow.width?this.arrow.size:this.arrow.width;
                       	 this.arrow.size=this.arrow.size<this.height?this.arrow.size:this.height;
                  	    
                    }
                    else if(ev.functionPoint==2){
                    	this.arrow.width-=ev.offset.x;	
                      	 this.arrow.width=this.arrow.width>0?this.arrow.width:1;
                      	 this.arrow.width=this.arrow.width<this.arrow.size?this.arrow.width:this.arrow.size;
                    }
                    else if(ev.functionPoint==3){
                    	this.arrow.sharp+=ev.offset.y;
                  	    this.arrow.sharp=Math.max(this.arrow.sharp<0?0:this.arrow.sharp);
                  	    this.arrow.sharp=Math.max(this.arrow.sharp>(this.height-this.arrow.size)/2?(this.height-this.arrow.size)/2:this.arrow.sharp);
                   	 
                    }
                    this.setfunctionPoints();
                  },
                  afterresize:function(ev2){
                	  this.setfunctionPoints();
                  }
        };
        
        $.extend(opt,option);
        if(option.focus)
      	  opt.text="";
        $.extend(this,new note(opt));
        this.propertyEditors=["common","border","font","background","shadow","hyperlink","paragraph"];
        this.persist=function(){
            var r=widget.persistproperty(this);
            if(this.arrow){
                 r.arrow={};
                 $.extend(r.arrow,this.arrow);
            }
            return r;
        };
        this.type="quadArrow";  
        this.setfunctionPoints=function(){
     	   this.functionPoints=[
     	                         {x:this.width/2-this.arrow.size/2,y:0,cursor:"pointer",visible:true},
     	                         {x:this.width/2-this.arrow.width/2,y:this.arrow.sharp,cursor:"pointer",visible:true},
     	                         {x:this.width,y:this.arrow.sharp,cursor:"pointer",visible:true}
     	 	                    ];	
        };
        
        if(this.functionPoints.length<3)
     	   this.setfunctionPoints();
        this.drawBorderTo=function(ctx){
			var _widget=this;
			this.width=Math.max(this.arrow.sharp*2+this.arrow.size,this.width);
  			this.height=Math.max(this.arrow.sharp*2+this.arrow.size,this.height);
			if(_widget.border.color==="none" && _widget.background && _widget.background.filltype==="color" &&_widget.background.color!="none")
				_widget.border.color=_widget.background.color;
			else if(_widget.border.color==="none" && _widget.background && _widget.background.filltype==="gradient" &&_widget.gradient.begincolor!="none")
				_widget.border.color=_widget.gradient.begincolor;
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
			ctx.moveTo(0,this.height/2);
			ctx.lineTo(this.arrow.sharp,this.height/2+this.arrow.size/2);
			ctx.lineTo(this.arrow.sharp,this.height/2+this.arrow.width/2);
			ctx.lineTo(this.width/2-this.arrow.width/2,this.height/2+this.arrow.width/2);
			ctx.lineTo(this.width/2-this.arrow.width/2,this.height-this.arrow.sharp);
			ctx.lineTo(this.width/2-this.arrow.size/2,this.height-this.arrow.sharp);
			ctx.lineTo(this.width/2,this.height);
			ctx.lineTo(this.width/2+this.arrow.size/2,this.height-this.arrow.sharp);
			ctx.lineTo(this.width/2+this.arrow.width/2,this.height-this.arrow.sharp);
			ctx.lineTo(this.width/2+this.arrow.width/2,this.height/2+this.arrow.width/2);
			ctx.lineTo(this.width-this.arrow.sharp,this.height/2+this.arrow.width/2);
			ctx.lineTo(this.width-this.arrow.sharp,this.height/2+this.arrow.size/2);
			ctx.lineTo(this.width,this.height/2);
			ctx.lineTo(this.width-this.arrow.sharp,this.height/2-this.arrow.size/2);
			ctx.lineTo(this.width-this.arrow.sharp,this.height/2-this.arrow.width/2);
			ctx.lineTo(this.width/2+this.arrow.width/2,this.height/2-this.arrow.width/2);
			ctx.lineTo(this.width/2+this.arrow.width/2,this.arrow.sharp);
			ctx.lineTo(this.width/2+this.arrow.size/2,this.arrow.sharp);
			ctx.lineTo(this.width/2,0);
			ctx.lineTo(this.width/2-this.arrow.size/2,this.arrow.sharp);
			ctx.lineTo(this.width/2-this.arrow.width/2,this.arrow.sharp);
			ctx.lineTo(this.width/2-this.arrow.width/2,this.height/2-this.arrow.width/2);
			ctx.lineTo(this.arrow.sharp,this.height/2-this.arrow.width/2);
			ctx.lineTo(this.arrow.sharp,this.height/2-this.arrow.size/2);
			ctx.lineTo(0,this.height/2);
			ctx.stroke();            
			this.fillBackgroundTo(ctx,2);
			ctx.clip();	
			this.fillBackgroundTo(ctx);
			this.drawImageTo(ctx);	
			ctx.restore();
			return this;
        };
        return this;
   }; 
     
     $.register("leftArrow",leftArrow);
     $.register("rightArrow",rightArrow);
     $.register("calloutRightArrow",calloutRightArrow);
     $.register("quadArrow",quadArrow);
     $.register("leftRightArrow",leftRightArrow);
     $.register("curvedUpArrow",curvedUpArrow);
     $.register("curvedDownArrow",curvedDownArrow);
     $.register("leftUpArrow",leftUpArrow);
     $.register("bentUpArrow",bentUpArrow);
     $.register("leftRightUpArrow",leftRightUpArrow);
     $.register("notchedRightArrow",notchedRightArrow);
     $.register("notchedLeftArrow",notchedLeftArrow);
     $.register("uTurnArrow",uTurnArrow);
     $.register("bentRightArrow",bentRightArrow);
     $.register("bentLeftArrow",bentLeftArrow);
     
})(jQuery);