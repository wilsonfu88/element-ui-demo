<template>
    <div>  
        <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :beforeUpload = "beforeUpload"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>


        <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>


          <el-button
            plain
            @click="open1">
            右上角
        </el-button>

    </div>
</template>
<script>
export default {
    data() {
      return {
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
          console.log(files, fileList);
        //this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
          console.log(file, fileList);
        //return this.$confirm(`确定移除 ${ file.name }？`);
      },
      beforeUpload(file){
          console.log(file);
          this.$message({
						message: '上传文件只能是 xls、xlsx格式!',
                        type: 'warning',
                        offset:'400',
                        showClose:true,
                        duration:3000
					});

          return false;
      },
      open1:function(){
          this.$notify({
          title: '自定义位置',
          message: '右下角弹出的消息',
          position: 'bottom-right',
          duration: 0
        });
      }
    }
}
</script>

<style scoped>

</style>


