<template>
    <div>
         <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top"> 
             <el-button type="warning" @click="outerVisible = true">点击打开外层 Dialog</el-button>  
        </el-tooltip>
        <el-dialog title="外层 Dialog" :visible.sync="outerVisible"  center :close-on-click-modal="false" :close-on-press-escape="false">
            <el-dialog
            width="30%"
            title="内层 Dialog"
            :visible.sync="innerVisible"
            :before-close="innerBeforeClose"
            append-to-body>
            </el-dialog>
            <div slot="footer" class="dialog-footer">
                <el-button @click="outerVisible = false">取 消</el-button>
               
                    <el-button type="primary" @click="innerVisible = true">打开内层 Dialog</el-button>
               
            </div>
        </el-dialog>

        <el-tooltip placement="top">
            <div slot="content">多行信息<br/>第二行信息</div>
            <el-button>Top center</el-button>
        </el-tooltip>
    </div>
</template>

<script>
export default {
     data() {
      return {
        outerVisible: false,
        innerVisible: false
      };
    },
    methods:{
        innerBeforeClose(done){
            this.$message('beforeClose');
            done(true);
            console.log(done);
        }
    }
}
</script>

<style scoped>
.box {
    width: 400px;

    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 60px;
    }

    .right {
      float: right;
      width: 60px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .el-tooltip__popper,
    .right .el-tooltip__popper {
      padding: 8px 10px;
    }
  }
</style>

