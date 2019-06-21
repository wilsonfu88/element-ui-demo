<template>
<div>
    <!--<el-container>
    <el-header>Header</el-header>
    <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
        <el-main>            
            <i class="el-icon-edit" @click="edit"></i>
            <i class="el-icon-share"></i>
            <i class="el-icon-delete" @click="del"></i>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </el-main>
        <el-footer>Footer

            {{radio}}
        </el-footer>
        </el-container>
    </el-container>
    </el-container>

     <el-radio v-model="radio" label="1" @change="radioChange">备选项</el-radio>
     <el-radio v-model="radio" label="2" disabled  @change="radioChange">备选项</el-radio>


   <el-input placeholder="请输入密码" show-password v-model="pwd"></el-input>

   -->
    <div class="div_space">
        <span class="red_light"></span>红灯
    </div>
    <div class="div_space">
        <span class="green_light"></span>绿灯
    </div>
    <div class="div_space">
        <span class="yellow_light"></span>黄灯
    </div>

    <div style="text-align:center;border:solid 2px blue">
        测试文字
    </div>
</div>
</template>

<script>
export default {
    methods:{
        edit:function(){
            //alert('edit');
            if(this.radio=='2'){
                this.radio = '1';
            }
            else{
                this.radio = '2';
            }
        },
        del:function(){
            alert("del");
        },
        radioChange:function(data){
            console.log("data=" + data);
            //console.log("data=" + data);
        }
    },
   data(){
       return{
           radio:'2',
           pwd:""
       };
   }
}
</script>

<style scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

span.red_light,span.green_light,span.yellow_light{width:19px;height:20px;display:block
;background:url(../assets/light.gif) no-repeat 3px -81px;width:100%;}
span.green_light{background-position:3px 0px;}
span.yellow_light{background-position:3px -43px;}

.div_space{
    margin:5px;
    text-align: center;
    align-content: center;
    border:solid 1px red;
}
</style>
