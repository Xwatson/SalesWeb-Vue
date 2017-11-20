<template>
    <div class="login-container">
        <div class="login-window">
            <h4>SCP分销商端</h4>
            <el-form class="login-form" :model="loginForm" :rules="rules" ref="loginForm" status-icon label-width="0px">
              <el-form-item prop="name" >
                <el-input type="text" v-model="loginForm.name" placeholder="请输入用户名" auto-complete="off">
                  <i slot="prefix" style="font-size:22px;font-weight: 500;" class="icon iconfont icon-user2"></i>
                </el-input>
              </el-form-item>
              <el-form-item label-width="0" prop="password">
                <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" auto-complete="off">
                  <i slot="prefix" style="font-size:22px;font-weight: 500;" class="icon iconfont icon-password"></i>
                </el-input>
              </el-form-item>
              <el-form-item>
                <div class="remember">
                  <el-checkbox>记住我</el-checkbox>
                  <a href="#" style="color:#409EFF">忘记密码?</a>
                </div>
                <el-button style="width:100%" type="primary" @click="submitForm('ruleForm2')">提交</el-button>
              </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loginForm: {
                name: '',
                password: ''
            },
            rules: {
                name: [
                  { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password: [
                  { required: true, message: '请输入密码', trigger: 'blur' },
                  { min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
                ]
            }
        }
    }
}
</script>
<style lang="scss" scoped>
$bg-rgba: rgba(255,255,255,0.4);
.login-container{
  width: 100%;
  height: 100%;
  background: url("../assets/images/login-bg.jpg") no-repeat;
  background-size: cover;
  .login-window{
    width: 320px;
    height: auto;
    padding: 15px;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
    -webkit-transform: translate(-50%,-50%);
    -moz-transform: translate(-50%,-50%);
    border: 1px solid $bg-rgba;
    background-color: $bg-rgba;
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    .login-form-button{
      display: block;
      width: 100%;
    }
    .login-form-forgot{
      float: right;
    }
    h4{
      margin: 0;
      padding: 0;
      text-align: center; color: rgb(245, 245, 245); margin-bottom: 10px;
      margin-bottom: 15px
    }
    .login-form{
      .remember{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
}

</style>
