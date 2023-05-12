<diagrampanel>
  <style>
    .responsive{ 
      display:flex; 
      justify-content:left; 
      padding: 17px 0 20px 17px;
    } 
    .responsive li.active{ 
      background:#FFD976;
      border-radius: 8px;
    }
    .responsive li.active a{
      color: #6C6562;
    }
    .panel {
      background-color: transparent;
    }
    .switch{
      position: absolute;
      right: 17px;
      top: 19.5px;
    }
    .form-box{
	    width: 266px;
	    height: 275px;
	    margin: 0 24px 25px 0;
	    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.33);
	    background-color: #FFFFFF;
	    cursor: pointer;
    }
    .form-box:nth-child(4n){
      margin: 0 0 25px 0;
    }
    .new-design{
	    width: 236px;
	    height: 245px;
	    margin: 15px;
	    border: 1px dashed #999;
	    text-align: center;
	    font-size: 18px;
	    color: #999;
    }
    .plus-box{
	    width: 60px;
	    height: 60px;
	    line-height: 51px;
	    margin: 78px auto 5px auto;
	    text-align: center;
	    font-size: 50px;
	    border-radius: 50%;
	    border: 1px solid #999;
    }
    .operation{
	    border: 1px solid #E0DFDB;
	    color: #999999;
	    padding: 0;
	    font-size: 16px;
	    background-color: #FFFFFF;
	    margin-bottom: 15px;
    }
    .operation li{
	    display: inline-block;
	    padding: 10px 15px;
	    border-right: 1px solid #E0DFDB;
	    cursor: pointer;
    }
    .formlist .listdetail{
	    width: 1136px; 
	    padding: 0 10px 15px 10px; 
	    margin-bottom: 25px;
	    background-color: #FFFFFF;
	    box-shadow: inset 0 1px 0 rgba(255,255,255,.15),0 1px 5px rgba(0,0,0,.12);
    }
    .formlist table{
	    width: 100%;
    }
    .formlist table th{
	    color: #999;
	    text-align: left;
	    font-weight: normal;
	    font-size: 14px;
	    padding-top: 8px;
	    padding-bottom: 8px;
	    border-bottom: 1px solid #E0DFDB;
    }
    .formlist .list-img{
	    width: 42px;
	    height: 30px;
	    vertical-align: middle;
	    margin-right: 10px;
    }
    .formlist td{
	    font-size: 15px;
	    color: #515151;
	    padding: 10px 0;
	    border-bottom: 1px solid #E0DFDB;
	    text-align: left;
    }
    .formlist .author{
	    font-size: 12px;
	    color: #999;
    }
    .listdetail input{
      margin: 0 0 0 20px;
    }
    .box-header{
	    position: relative;
	    height: 213px;
	    border-bottom: 1px solid #999;
	    background-image: url("css/images/logo.png");
  	  background-repeat: no-repeat;
	    background-position: center center;
	    background-size: 80% 80%;
    }
    .box-header .star{
	    color: #999;
	    position: absolute;
	    left: 15px;
	    top: 15px;
	    font-size: 16px;
    }
    .box-header .attention{
      color: #FFD976;
    }
    .option-btn{
	    position: absolute;
	    right: 15px;
	    top: 15px;
	    z-index: 100;
    }
    .box-header .dropdown-menu{
	    min-width: 80px;
	    padding: 5px 0;
	    margin: 2px 0 0;
	    border: 1px solid rgba(0,0,0,.15);
	    -webkit-box-shadow: 0 6px 12px rgba(0,0,0,.175) !important;
	    box-shadow: 0 6px 12px rgba(0,0,0,.175) !important;
    }
    .box-header .dropdown-menu li a{
	    padding: 5px 10px;
    }
    .box-footer{
	    padding: 8px 15px;
	    color: #424242;
	    font-size: 15px;
	    font-weight: bolder;
    }
    .box-footer b{
	    display: block;
	    color: #999;
	    font-size: 13px;
	    line-height: 1.8;
	    font-weight: normal;
    }  
    .disableddel{
      opacity: 0.6;
      cursor: not-allowed !important; 
    }
    .btnback{
      background-color: #FFD976;
      border: 1px solid #E0DFDB;
    }
    .btn.focus, .btn:focus, .btn:hover {
      color: #999;
    }
    .btncolor{
      color:#333 !important;
    }
    .whj_jqueryPaginationCss-2 .whj_padding{
      padding: 0 12px !important;
    }
    .whj_jqueryPaginationCss-2 .whj_bgc{
      height: 30px;
      line-height: 28px;
      color: #999 !important;
    }
    .whj_jqueryPaginationCss-2 .whj_border{
      border: 1px solid #FFD976 !important;
    }
    .whj_jqueryPaginationCss-2 .whj_bgc{
      background-color: #FFD976 !important;
    }
    .whj_jqueryPaginationCss-2 .whj_checked {
      color: #333 !important;
    }
    .whj_jqueryPaginationCss-2 .whj_hoverDisable {
      opacity: 0.6 !important;
    }
  </style>
  <ul class="nav nav-tab responsive"> 
    <li class="active"><a href="#" alt="">我的设计</a></li> 
	  <li><a href="#" alt="shared">共享设计</a></li>
	  <li><a href="#" alt="favorite">关注</a></li> 
	  <li><a href="#" alt="trash">回收站</a></li>
  </ul>
  <div class="btn-group switch"> 
	  <a href="#" alt="table" title="表格模式" class="btn btn-table btn-md btnback { btncolor: module == 'table' }" onclick={ table }><i class="fa fa-table"></i></a>
	  <a href="#" alt="list" title="列表模式" class="btn btn-list btn-md btnback { btncolor: module == 'list' }" onclick={ list }><i class="fa fa-th"></i></a>
  </div>
  <div class="panel panel-blue" style="border:1px;width: 100%;padding: 0 15px;">
    <div class="templatelist" style="display:flex;flex-direction:column;" if={ module == 'list' }> 
      <div style="display:flex;flex-direction:row;flex-wrap:wrap;">
        <div class="form-box" onclick="location.href='index.html'">
          <div class="new-design">
            <div class="plus-box">+</div>创建表单
          </div>
        </div>
        <div class="form-box" each={ message, i in lists }>
          <div class="box-header">
            <a href="#" title="{ message.favoriteId ? "取消关注" : "添加关注" }" class="star { attention: message.favoriteId }" onclick={ attention }>
              <i class="fa fa-star"></i>
            </a>
            <div class="dropdown option-btn">
              <span class="fa fa-ellipsis-h fa-lg dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style="color:#999;"></span>
              <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                <li><a href="#">编辑</a></li>
                <li onclick={ delone }><a href="#">删除</a></li>
              </ul>
            </div>
          </div>
          <div class="box-footer">
            { message.name }
            <b>作者： <span title={ message['lastModifiedBy']['displayName'] }>{ nameformat(message['lastModifiedBy']['displayName']) }</span></b>
          </div>
        </div>
      </div> 
    </div> 
    <div class="formlist" if={ module == 'table' }>
      <ul class="operation">
        <li onclick={ deletelist } class={ disableddel: disdel }><i class="fa fa-trash"></i> 删除表单</li>
        <li onclick="location.href='index.html'"><i class="fa fa-plus"></i> 创建表单</li>
      </ul>
      <div class="listdetail">
        <table>
          <tr>
            <th><input type="checkbox" onclick={ allselect } checked={ allchecked } disabled={ !lists.length }/></th>
            <th>表单名称</th>
            <th>大小</th>
            <th>类别</th>
            <th>最后修改</th>
          </tr>
          <tr each={ message, i in lists }>
            <td><input type="checkbox" checked={ message.checkedone } onclick={ toggle }/></td>
            <td><img src="css/images/logo.png" class="list-img"/><div style="display: inline-block;vertical-align: middle; text-align: left;">{ message.name }<br><span class="author"><span title={ message['createdBy']['displayName'] } style="cursor: pointer">{ nameformat(message['createdBy']['displayName']) }</span> { dateformat(message.createdDate) }</span></div></td>
            <td>{ sizeformat(message.size) }</td>
            <td>{ message.type }</td>
            <td><span style="text-align:left;display:inline-block;">{ dateformat(message.lastModifiedDate) }<br><span class="author" title={ message['lastModifiedBy']['displayName'] } style="cursor: pointer">{ nameformat(message['lastModifiedBy']['displayName']) }</span></span></td>
          </tr>
        </table>
      </div>				
    </div>
    <div class="text-center"> 
      <div id="pagination"></div> 
    </div> 
  </div>
  <script>
    this.lists = opts.content;
    this.disdel = true;
    this.stared = false;
    this.module = 'list';
    this.allchecked = false;
    var ths = this;
    var cur = this.lists.length-1;
    var totalNum = this.lists.length + 1;
    var totalpage = Math.ceil(totalNum / 8); 
    deletelist(){ 
      for(var i = cur; i >= 0; i--){
        if(ths.lists[i].checkedone){
          ths.lists.splice(i, 1);
        }
      }
      if(!this.lists.length){
        ths.allchecked = false;
      }
      cur = this.lists.length-1;
      ths.disdel = true; 
    }
    toggle(e){
      var message = e.item.message;
      message.checkedone = !message.checkedone;    
      for(var i = cur; i >= 0; i--){
        if(ths.lists[i].checkedone){
          ths.disdel = false;
          break;
        }
        ths.disdel = true;
      }
      cur = this.lists.length-1;
      return true;
    }
    attention(e){
      e.item.message.favoriteId = !e.item.message.favoriteId;
    }
    delone(e){
      ths.lists.splice(e.item.i, 1);
    }
    list(){
      ths.module = 'list';
    }
    table(){
      ths.module = 'table';
    }
    allselect(){
      ths.allchecked = !ths.allchecked;
      ths.disdel = ths.allchecked ? false : true;
      for(var i = cur; i >= 0; i--){
        ths.lists[i].checkedone = ths.allchecked;
      }
    }
    sizeformat(size){
      return ( size / 1000 ).toFixed(1) + 'KB';      
    }
    dateformat(str){
      var year = str.substring(6, 10);
      var month = str.substring(0, 2);
      var date = str.substring(3, 5);
      var hour = str.substring(11, 13);
      var minute = str.substring(14, 16);
      var formated = year + '/' + month + '/' + date + ' ' + hour + ':' + minute; 
      return formated;
    }
    nameformat(displayname){
      if(displayname.length > 8){
        return displayname.substring(0, 7) + '...';
      }     
    }
    $(document).ready(function(){
      $("#pagination").whjPaging({
        css: 'css-2',
        totalPage: 18,
        showPageNum: 3,
        previousPage: '<',
        nextPage: '>',
        isShowFL: false,
        isShowPageSizeOpt: false,
        isShowSkip: false,
        isShowRefresh: false,
        isShowTotalPage: false,
        isResetPage: false,
        callBack: function (currPage, pageSize) {
          console.log('currPage:' + currPage + '     pageSize:' + pageSize);
        }
      });
    });
  </script>
</diagrampanel>
