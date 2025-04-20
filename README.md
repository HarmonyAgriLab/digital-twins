# 运行步骤

1. 克隆之后文件目录

![alt text](/images/image.png)



## 安装运行环境

申明：本项目使用得是 node 20.17.0 版本，尝试过使用 node 23  以及 node 14.20.0 版本，运行似乎没有报错。



```bash
node -v # 查看当前 node 版本
```



### 安装过 node 



如果电脑环境中已经有 node，建议尝试运行，如果出现报错卸载掉原来的node。

1. 首先进入到与那么目录下面

```bash
cd demo
```



![image-20250420103915332](D:\coding\frontEnd\digital-twins\images\image-20250420103915332.png)



2. 下载依赖

```shell
npm install
```

+ 下载的时候可能长达10分钟，具体看电脑，只要一直在转圈圈就可以的

#### 如果出现报错 error

##### 重新准备环境

+ 使用nvm管理多个版本的node

[window下安装并使用nvm（含卸载node、卸载nvm、全局安装npm）-CSDN博客](https://blog.csdn.net/HuangsTing/article/details/113857145)

+ 直接卸载掉原来的node。
  + 打开控制面板 -> 打开程序和功能 -> 右上角搜索输入`node` -> 右键卸载
  + 为了确保彻底删除node在看看你的node安装目录中还有没有node文件夹，有的话一起删除。再看看C:\Users\用户名 文件夹下有没有 `.npmrc` 以及 `.yarnrc` 等等统统删除。再去看看你的环境变量有没有 `node` 相关的，有的话也一起删除了

##### 重新安装依赖

删掉 ：`node_modules` 和 `package-lock.json`。

跳到项目运行那一步。

### 没有安装 node

考虑到兼容性的问题，建议使用 node 20.17.0 版本。

[Node.js安装及环境配置超详细教程【Windows系统】_windows 安装nodejs-CSDN博客](https://blog.csdn.net/Nicolecocol/article/details/136788200)

## 项目运行



如果电脑环境中已经有 node，建议尝试运行，如果出现报错卸载掉原来的node。

1. 首先进入到与那么目录下面

```bash
cd demo
```



![image-20250420103915332](D:\coding\frontEnd\digital-twins\images\image-20250420103915332.png)



2. 下载依赖

```shell
npm install
```

+ 出现 `warn` 没有关系
+ 出现 `erro` 则说明有错误

+ 下载的时候可能长达10分钟，具体看电脑，只要一直在转圈圈就可以的

3. 运行项目

```shell
npm run serve
```

+ 运行需要的时间也很长。。。



最终效果大致如下：

![image-20250420110157030](D:\coding\frontEnd\digital-twins\images\image-20250420110157030.png)

![image-20250420110210979](D:\coding\frontEnd\digital-twins\images\image-20250420110210979.png)