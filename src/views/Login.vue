<template>
<div id="Login">
<div class="container">
            <div class="row">
              <div class="col"></div>
                <div class="col-md-offset-3 col-md-6">
                    <form class="form-horizontal">
                        <span class="heading">用户登录</span>
                        <div class="form-group">
                            <input type="email" class="form-control" id="inputEmail3" placeholder="用户名或电子邮件" v-model="LoginName">
                            <i class="fa fa-user"></i>
                        </div>
                        <div class="form-group help">
                            <input type="password" class="form-control" id="inputPassword3" placeholder="密　码" v-model="LoginPwd">
                            <i class="fa fa-lock"></i>
                            <a href="#" class="fa fa-question-circle"></a>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-default" id="login-button" @click="loginAction()">登录</button>
                        </div>
                    </form>
                </div>
                 <div class="col"></div>
            </div>
        </div>
</div>
</template>
<script>
export default {
  name:'Login',
  data(){
return{
    LoginName:'',
    LoginPwd:''
}
  },
  methods: {
loginAction:function(){
 
    let data={"LoginName":this.LoginName,"LoginPwd":this.LoginPwd};
    console.log("小鸭子");
   console.log(this.LoginName);
   console.log(this.LoginPwd);
  this.$axios.post("http://127.0.0.1:63452/api/Web/GetLoginInfo",data)
  .then(res=>{
      console.log(res);
        let a = JSON.parse(res.data)
          console.log(a.Result);
      debugger;
      if(res.status=="200" && a.Result=="0")
      {
            console.log('进入小鸭子')
       this.$router.replace('/main');
      }else
      {console.log("离开小鸭子");}
  })
}
  }
}
</script>
//在vue文件中添加测试代码
 
    <style type="text/css">
  @import '../assets/Login.css';
    </style>
