<template>
          <div class="main-sidebar">
              <div class="container">
                  <div class="row">
                      <div class="col-sm-7">
 <ul class="nav nav-pills nav-stacked" id="nav-main">
                <li><a href="#"><span class="glyphicon glyphicon-home"></span>主页</a></li>
                <li><a href="#"><span class="glyphicon glyphicon-user"></span>用户管理</a></li>
                <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                <span class="glyphicon glyphicon-folder-open"></span> 任务管理 <span class="caret"></span>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#">日常任务</a></li>
                            <li><a href="#">紧急任务</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                                    <span class="glyphicon glyphicon-folder-open"></span> 资源管理 <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="#"> <span class="	glyphicon glyphicon-open"></span>上传资源</a></li>
                                <li><a href="#"><span class="	glyphicon glyphicon-save"></span>下载资源</a></li>
                            </ul>
                        </li>
            </ul>
                      </div>
                  </div>
              </div>
        </div>
</template>
<script>

export default {
    name:'mainside'
}
</script>
 <style>
        .main-sidebar{
           top: 100px;
          height: 100%;
          width: 200px;
          background-color:rgb(44, 59,65);
           position: absolute;
         
        }
     
      #navside{
          font: large
      }
    </style>