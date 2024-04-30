<template>
  <div style="padding: 10px;">

    <!--    功能区域-->
    <div style="margin: 10px 0">
      <el-button type="primary" @click="add">{{CQS}}</el-button><!--@click="add"表示点击这个按钮就触发add的函数-->
      <el-button type="primary">导入</el-button>
      <el-button type="primary">导出</el-button>
    </div>
    <!--    查找区域-->
    <div>
      <el-input v-model="search" placeholder="Please input" style="width: 30%" clearable/>
      <el-button type="primary" style="margin-left: 5px " @click="load">查询</el-button>
    </div>
    <div style="margin: 10px 0">
      <el-table :data="tableData" border stripe style="width: 100%"><!-- tableData是外来变量-->
        <el-table-column prop="id" label="ID" width="80" sortable /><!--sortable是按data排序-->
        <el-table-column prop="username" label="用户名" width="180" /><!--prop是tableData对象的一个属性名；label是显示给页面的属性名 -->
        <el-table-column prop="nickName" label="昵称" /><!--后台的数据到前台来下划线都会变成驼峰-->
        <el-table-column prop="age" label="年龄" />
        <el-table-column prop="sex" label="性别" />
        <el-table-column prop="address" label="地址" />
        <el-table-column label="操作">
          <template #default="scope">
            <el-button size="mini" type="success" plain @click="showBooks(scope.row.bookList)">查看图书列表</el-button>
            <el-button size="small" @click="handleEdit(scope.row)"
            >编辑</el-button
            >
            <el-popconfirm title="是否确定删除?" @confirm="handleDelete(scope.row.id)"><!--气泡绑定按钮的事件用@confirm-->
              <template #reference>
                <el-button
                    size="small"
                    type="danger"
                >删除</el-button
                >
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
      <!--分页-->
      <div style="margin: 10px 0">
        <el-pagination
            v-model:currentPage="currentPage"
            v-model:page-size="pageSize"
            :page-sizes="[5, 10, 15, 20]"
            :small="small"
            :disabled="disabled"
            :background="background"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        /><!--page-size一页多少条数据，page-sizes="[5, 10, 15, 20]"数据的间距，total="total"总页数-->
        <!--@size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            两个函数
            -->
        <el-dialog title="用户拥有的图书列表" v-model="bookVis" width="30%">
          <el-table :data="bookList" stripe border>
            <el-table-column prop="id" label="ID"></el-table-column>
            <el-table-column prop="name" label="名称"></el-table-column>
            <el-table-column prop="price" label="价格"></el-table-column>
          </el-table>
        </el-dialog>

        <el-dialog
            v-model="dialogVisible"
            title="提示"
            width="30%"
        >
          <el-form :model="form" label-width="30%">
            <el-form-item label="用户名">
              <el-input v-model="form.username" style="width: 80%" /><!--:model="form"是绑定的对象变量；username是from的属性-->
            </el-form-item>
            <el-form-item label="昵称">
              <el-input v-model="form.nickName" style="width: 80%"/>
            </el-form-item>
            <el-form-item label="年龄">
              <el-input v-model="form.age" style="width: 80%"/>
            </el-form-item>
            <el-form-item label="性别">
              <el-radio label="男" v-model="form.sex" size="large">男</el-radio>
              <el-radio label="女" v-model="form.sex" size="large">女</el-radio>
              <el-radio label="未知" v-model="form.sex" size="large">未知</el-radio>
            </el-form-item>
            <el-form-item label="地址">
              <el-input type="textarea" v-model="form.address" style="width: 80%"/>
            </el-form-item>
          </el-form>
          <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="save"
        >确定</el-button
        >
      </span>
          </template>
        </el-dialog>

      </div>

    </div>

  </div>
</template>

<script>

import request from "@/utils/request";
import axios from "axios"
export default {
  name: 'User',
  components: {
  },
  data(){
    return{
      form:{},
      dialogVisible:false,
      search:'',
      currentPage:1,
      total:0,
      pageSize:10,
      CQS:'新增',
      tableData:[

      ],
      bookList:[],
      bookVis:false,
      tryList:[],
      num:{50_55:0,55_60:0,60_65:0,65_70:0,70_75:0},
      careers:{'垃圾倾倒':0, '环境清扫':0, '景物维护':0, '设施养护':0},
      workings:{'在职':0, '离职':0}
    }
  },
  created() {
    this.load()
    // this.load_echart_age()
    // this.load_echart_career()
    this.load_echart_working()
  },
  methods:{
    showBooks(books) {
      this.bookList = books
      this.bookVis = true
    },
    handleEdit(row){//编辑数据
     this.form=JSON.parse(JSON.stringify(row))//对数据进行深拷贝与其他form对象隔开
      this.dialogVisible=true//打开弹窗
    },
    handleSizeChange(pageSize){//改变当前每页的个数触发
      this.pageSize=pageSize
      this.load()
    },
    handleCurrentChange(pageNum){//改变当前页码触发
      this.currentPage=pageNum
      this.load()
    },
    add(){
      this.dialogVisible=true;
      this.form={}//清空之前的记录
    },//this.dialogVisible=true是add函数触发时，改变变量
    save(){
      if (this.form.id){//更新
        request.put("/api/user/updata",this.form).then(res => {console.log(res)
          if (res.code==='0') {//res.code是放回结果的一些性质,0就是成功
            this.$message({type:"success",message:"更新成功"})//this.$message是自带的弹窗
          }
          else {
            this.$message({type:"error",message:res.msg})
          }
        })
      }
      else {//新增
        request.post("/api/user/save",this.form).then(res => {console.log(res)
          if (res.code === '0') {//res.code是放回结果的一些性质,0就是成功
            this.$message({type:"success",message:"新增成功"})//this.$message是自带的弹窗
          }
          else {
            this.$message({type:"error",message:res.msg})
          }
        })

        //request是需要import引入的(写完时用Alt+Shift+Enter快捷引入)
        //request.post("接口的路径",传的参数)   //then是多余的。用来给后台看返回信息的
      }
      this.load()
    },
    load(){
      request.get("/api/user/findPage",{params: {
          pageNum: this.currentPage,
          pageSize: this.pageSize,
          search:this.search
        }}).then(res => {
        console.log(res)
        this.tableData=res.data.records
        this.total=res.data.total
        sessionStorage.setItem("users", JSON.stringify(res.data))  // 缓存用户信息
      })
    },
    load_echart_age(){
      request.get("/api/echart/shows").then(res => {
        this.tryList=res.data;
        for (let i=0 ;i<this.tryList.length;i++){
          var age=2022-parseInt(this.tryList[i]["birthday"].slice(0, 4))
          if(age>=70){
            this.num[70_75]++
          }else if (age>=65){
            this.num[65_70]++
          }else if (age>=60){
            this.num[60_65]++
          }else if (age>=55){
            this.num[55_60]++
          }else if (age>=50){
            this.num[50_55]++
          }
        }
        sessionStorage.setItem("echart_num", JSON.stringify(this.num))  // 缓存echart数据
      })
    },
    load_echart_career(){
      request.get("/api/echart/shows").then(res => {
        this.tryList=res.data;
        for (let i=0 ;i<this.tryList.length;i++){
          var career=this.tryList[i]["career"]
          if (career=='垃圾倾倒'){
            this.careers['垃圾倾倒']++
          }else if (career=='环境清扫'){
            this.careers['环境清扫']++
          }else if (career=='景物维护'){
            this.careers['景物维护']++
          }else if (career=='设施养护'){
            this.careers['设施养护']++
          }
        }
        sessionStorage.setItem("echart_career", JSON.stringify(this.careers))  // 缓存echart数据
      })
    },
    load_echart_working(){
      request.get("/api/echart/shows").then(res => {
        this.tryList=res.data;
        for (let i=0 ;i<this.tryList.length;i++){
          var working=this.tryList[i]["workingState"]
          if (working=='在职'){
            this.workings['在职']++
          }else{
            this.workings['离职']++
          }
        }
        sessionStorage.setItem("echart_working", JSON.stringify(this.workings))  // 缓存echart数据
      })
    },
    handleDelete(id){
      console.log(id)
      request.delete("/api/user/delUser/"+id).then(res=>{
        if (res.code === '0') {//res.code是放回结果的一些性质,0就是成功
          this.$message({type:"success",message:"删除成功"})//this.$message是自带的弹窗
        }
        else {
          this.$message({type:"error",message:res.msg})
        }
      })
      this.load()
    }

  }

}
</script>
