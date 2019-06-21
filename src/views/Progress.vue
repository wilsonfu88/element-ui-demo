<template>
    <div>
        <el-progress type="circle" :percentage="0"></el-progress>
        <el-progress type="circle" :percentage="25"></el-progress>
        <el-progress type="circle" :percentage="100" status="success"></el-progress>
        <el-progress type="dashboard" :percentage="90" status="warning"></el-progress>
        <el-progress type="circle" :percentage="80" 
        :width="150"
        status="exception"></el-progress>
    </div>
</template>

<script>
export default {
    
}
</script>

