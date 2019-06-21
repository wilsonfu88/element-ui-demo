<template>
  <div>
    <el-button @click="getData">获取</el-button>
    <el-table
      :data="tableData"
      v-loading.fullscreen.lock="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      height="600"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="id"
        width="50">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="birthday"
        width="100"
        label="生日">
      </el-table-column>
      <el-table-column
        prop="city"
        width="100"
        label="城市">
      </el-table-column>
      <el-table-column
        
        label="图像">
        <template slot-scope="scope">                     
            <img :src="scope.row.image" @click="showBigImg" class="img_pic" />
        </template>
      </el-table-column>
      <el-table-column
        prop="country"
        label="地址">
      </el-table-column>
       <el-table-column
        prop="views"
        label="查看次数">
      </el-table-column>
    </el-table>

      <el-dialog title="图片查看" :visible.sync="dialogVisible">
              <img :src="dialogImgUrl"   />
      </el-dialog>

      <div style="width:200px;height:200px;border:solid 1px red"  @click="divClick">
        <span>
           测试文字
        </span>
      </div>
  </div>
</template>
<script>
import axios from 'axios';

  export default {
    data(){
        return {
          tableData: [],
          dialogVisible:false,
          dialogImgUrl:'',
          loading:false
          
        }
      },
      created(){
          this.getData();
      },
      methods:{
        getData(){
          this.loading = true;
          this.tableData = [];
          let that = this;
            axios.get('http://localhost:3003/users/')
            .then(function(res){
                  that.tableData = res.data;
                  that.loading = false;
            })
            .catch(function(error){

            })
        },
        showBigImg:function(evt){
          console.log(evt.target.src);
          this.dialogImgUrl = evt.target.src;
          this.dialogVisible = true;
          return false;
        },
        divClick(evt){
            evt.preventDefault();
            console.log(evt);
            if(evt.srcElement.tagName==="SPAN"){
              console.log("not click");
              return false;
            }
            console.log("click");
        }
      }
  };
</script>


<style scoped>
 .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .img_pic{
    width:100px;
    height: 100px;
    cursor: pointer;
    border-radius: 10px
  }
</style>

