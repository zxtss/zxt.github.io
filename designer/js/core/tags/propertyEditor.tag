<propertyEditor>
<style>
#propertyEditForm .tab-content{
padding:0px;

}
#propertyEditForm .tab-content panel{
	padding:0px;
	font-size:8px;
}
</style>
	<div id="thumbnail-box" class="box" style="z-index:2;margin:0px;padding:0px;background:lightgray;">
		<div class="box-content"  style="padding:0px">
			<div id="thumbnail">
			</div>
		</div>
	</div>
	<div class="propertyEditForm sidebar-nav" style="margin:0px;border-top:solid 5px #e5e5e5;">
		<div role="tabpanel">
		  <ul class="nav nav-tabs" role="tablist">
		    <li role="presentation" class="active"><a href="#page-tab" aria-controls="page" role="tab" data-toggle="tab">页面</a></li>
		    <li role="presentation"><a href="#widget-tab" aria-controls="widget" role="tab" data-toggle="tab">属性</a></li>
		    <li role="presentation"><a href="#setup-tab" aria-controls="setup" role="tab" data-toggle="tab">设置</a></li>
		    <li role="presentation"><a href="#animation-tab" aria-controls="animation" role="tab" data-toggle="tab">动画</a></li>
		    <li role="presentation"><a href="#publish-tab" aria-controls="publish" role="tab" data-toggle="tab">发布</a></li>
		  </ul>
		
		  <div class="tab-content"  style="margin-bottom:0px;padding:10px 5px;">
		  	<div role="tabpanel" class="tab-pane active" id="page-tab">
		    	 <propertyEditorPage></propertyEditorPage>	    	 
		    </div>
		    <div role="tabpanel" class="tab-pane" id="widget-tab">
		    	<div class="propertyEditorWidget" id="propertyEditorWidget">
		    		<propertyEditorWidget></propertyEditorWidget>
		    	</div>
		    	<div class="property_message">
		    		<label>请先选择控件</label>
		    	</div>
		    </div>
		    <div role="tabpanel" class="tab-pane" id="animation-tab">
		    	<animation></animation>
		    </div>
		    <div role="tabpanel" class="tab-pane" id="publish-tab">
		    	<diagramPublish></diagramPublish>
		    </div>
		    <div role="tabpanel" class="tab-pane" id="setup-tab">
		    	<diagramsetup></diagramsetup>
		    </div>
		  </div>
		</div>
	</div>
</propertyEditor>