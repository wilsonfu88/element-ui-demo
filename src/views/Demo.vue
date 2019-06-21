<template>
    <div class="demo">
        <el-row>
            <el-button @click="click01">{{name}}</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="success">成功按钮</el-button>
            <el-button type="info">信息按钮</el-button>
            <el-button type="warning">警告按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </el-row>
    <el-collapse-transition>
        <div v-show="show"> 
            <el-row >
                <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
            </el-row>

            <el-row>
                <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
            </el-row>
            <el-row>
                <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
            <el-row>
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            </el-row>
            <el-row>
                <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
            </el-row>

            <el-row :gutter="10">
                <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="2"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="2"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
        </div>
    </el-collapse-transition>
    </div>
</template>

<script>
export default {
    data:()=>({
        show:true,
        name:"折叠"
    }),
    methods:{
        click01:function(){
            this.show = !this.show;
        }
    }
}
</script>


<style>
.demo{
    width:100%;
    /*height:200px;*/
    border:solid 1px red;
    border-radius: 10px
}

  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }


</style>
