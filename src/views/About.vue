<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span>{{value}}</span>
    <el-switch
      v-model="value"
      active-color="#13ce66"
      inactive-color="#ff4949">
    </el-switch>

   <el-slider v-model="value2" class="slider"></el-slider>
   <el-input v-model="value2" placeholder="请输入内容"></el-input>
   <el-input placeholder="请输入密码" show-password v-model="value3"></el-input>
   <el-input-number v-model="value2"  :min="1" :max="100" label="描述文字"></el-input-number>

   <el-select v-model="selectVal" placeholder="请选择" multiple @change="onSelect" >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>


  </div>
</template>
<script>
export default {
  data(){
    return {
      value:true,
      value2:50,
      value3:'',
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        selectVal: ''
    };
  },
  methods:{
    onSelect:function(data){
        console.log(data);
    }
  }
}
</script>


<style scoped>
.slider{
  width:98%;
}
</style>
