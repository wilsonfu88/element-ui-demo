<template>
    <div>
       <el-input
        placeholder="输入关键字进行过滤"
        v-model="filterText">
      </el-input>
        <el-button @click="loadTreeData">加载数据</el-button>
         <el-button @click="clearTreeData">清空树数据</el-button>
        <el-button @click="getSelNode">获取选中节点</el-button>
      <el-tree
      accordion
      class="filter-tree"
      :data="treeData"
      :props="defaultProps"
      show-checkbox
      node-key="id"
      :filter-node-method="filterNode"
      @node-click="nodeClick"
      ref="myTree">
    </el-tree>

    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>

    </div>
</template>

<script>

import Axios from 'axios';


export default {
    watch: {
      filterText(val) {
        this.$refs.myTree.filter(val);
      }
    },
    created:function(){
      setTimeout(() => {
        this.loadTreeData();
      }, 500);
        //console.log("created!");
        
    },
    methods: {
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      loadTreeData(){
          let that = this;//this.treeData=[];        
          Axios.get('./json/tree.json')
          .then(function(res){
              that.treeData = res.data;
          })
          .catch(function(error){
              console.log(error);
          })
      },
      nodeClick(data,nodeVal,nodeSel){
        console.log(data.id,data.label);
        console.log(data,nodeVal,nodeSel);
      },
      getSelNode(){
          let selNodes = this.$refs.myTree.getCheckedNodes();         
          selNodes.forEach((val,index)=>{
            console.log(JSON.stringify(val),index);
          })
      },
       handleClick(tab, event) {
        console.log(tab, event);
      },clearTreeData(){
        this.treeData =[];
      }
    },

    data() {
      return {
        filterText: '',
        treeData: [],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        activeName: 'second'
      };
    }
  };
</script>

<style scoped>

</style>


