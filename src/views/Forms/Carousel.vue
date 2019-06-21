<template>
    <div>
       <el-carousel :interval="5000" arrow="always" height="100">
            <el-carousel-item v-for="item in items" :key="item.id">
            <!--<h3>{{ item.name }}</h3>-->
            <img :src="item.url" class="image-item" @click="showBigImg" />         
            </el-carousel-item>
        </el-carousel>
     
      <img src="@/assets/img/ob_hwry.jpg" />
     

       <el-dialog title="图片查看" :visible.sync="dialogVisible">
              <img :src="dialogImgUrl"   />

              <span slot="footer" class="dialog-footer">               
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                 <el-button @click="dialogVisible = false">取 消</el-button>
              </span>
      </el-dialog>


    </div>
</template>

<script>
export default {
    data(){
        return{
        msg:'OK',
        items:[
           {id:1,url:"../img/ob_cjry.jpg",name:"采集员"},
           {id:2,url:"./img/ob_hwry.jpg",name:"环卫人员"},
           {id:3,url:"./img/ob_lvhua.jpg",name:"绿化人员"},
           {id:4,url:"./img/ob_zf.jpg",name:"执法人员"},
           {id:5,url:"./img/ob_cjry.jpg",name:"VUE"}
        ],
        dialogVisible:false,
        dialogImgUrl:''
        };
    },
    methods:{
      showBigImg(evt){
          this.dialogVisible = true;
          this.dialogImgUrl = evt.target.src;
      }
    }
}
</script>
<style scoped>
.el-carousel__item h3 {
    color: #d3dce6;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #d3dce6;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .image-item{
    cursor: pointer;
  }
</style>

