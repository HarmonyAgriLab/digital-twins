<template>
    <div class="hello-world">
        <h1>{{ message }}</h1>
        <el-button @click="changeMessage">点击我</el-button>
    </div>
</template>

<script>
export default {
name: 'HelloWorld',
data() {
    return {
    message: 'Hello World'
    };
},
methods: {
    changeMessage() {
    this.message = '欢迎使用 Vue!';
    }
}
};
</script>

<style lang="scss" scoped>
.hello-world {
text-align: center;
padding: 50px;
background-color: #f5f7fa;

h1 {
    color: #333;
    margin-bottom: 20px;
}

.el-button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #409EFF;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
    background-color: #66b1ff;
    }
}
}
</style>