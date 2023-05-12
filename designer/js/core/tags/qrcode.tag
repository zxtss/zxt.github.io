<qrcode>
<style>
	.qrcodes{
		display:inline-block;
		padding:15px;
		position:relative;
	}
</style>
<div class="form-group">
	<div class="text-{schema.align}">
		<div class="input-inline">
			<div class="qrcodes">
				<div class="code" style="width:{schema.width}px;height:{schema.width}px;" ></div>
				<img class="img-{schema.imageshape||'rounded'}" src="{schema.imagefile.src}" alt="{schema.title}"  style="position:absolute;top:{schema.width/3+15}px;left:{schema.width/3+15}px;width:{schema.width/3};height:{schema.width/3}" data-holder-rendered="true" if={schema.imagefile.src!=""}/>
			</div>
			<small class="help-block mbn" style="max-width:{1.5*schema.width}px" if={schema.help!=""}>{schema.help}</small>
		</div>
	</div>
</div>

<script>
		var parent=this;
	    while(parent.parent!=null)
	       parent=parent.parent;
		this.schema=parent.opts.schema?parent.opts.schema.get(opts.name):opts;
		this.schema=this.schema||opts;
		var ths =this;
		
		function toUtf8(str) {  
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
		
		this.showimage=function(){
			if(this.data){
				if(this.data.upload)
					return ctx+"/thumbnail/"+this.data.id+"?s=f";
				else
					return this.data;	
			}
			else
				return this.schema.imagefile.src;
		}
		
		this.on("update",function(){
			drawQR();
		})
		
		var drawQR=function(){
			$(ths.root).find(".code").empty();
			if(ths.schema.text){
				$(ths.root).find(".code").qrcode({
					width: ths.schema.width,
					height:ths.schema.width,
					text: toUtf8(ths.schema.text)
				});	
			}
		}

		this.on("mount",function(){
			drawQR();
		});

</script>

</qrcode>