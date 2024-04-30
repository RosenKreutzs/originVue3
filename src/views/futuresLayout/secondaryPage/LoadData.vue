<template>
  <!--  ablility-1-->
  <div class="banner-section">
    <div class="banner-area img-bg">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="banner-content">
              <h3 class="mb-20">下载数据</h3>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><a href="#">序列</a></li>
                  <li class="breadcrumb-item active" aria-current="page">图表</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--   ablility-2-->
  <div style="padding: 10px;">
    <!--    查找区域-->
    <div >
      <el-input v-model="search" placeholder="Please input" class="elInputClass" clearable/>
      <el-button type="primary" style="margin-left: 5px " @click="load" class="elButtonClass">search</el-button>
    </div>

    <div style="margin: 10px 0;margin-top: 3%;margin-left: 5% ;">
      <el-table :data="tableData" border stripe  style="width: 90%;border-radius: 15px 15px 15px 15px;border: 2px solid #cccccc;" @selection-change="handleSelectionChange">

        <el-table-column prop="id" label="ID"  width="240" sortable />
        <el-table-column prop="name" label="名字" width="240" />
        <el-table-column prop="author" label="作者" />
        <el-table-column label="操作">
          <template #default="scope">
            <el-button size="small" @click="loadFile(scope.row)" style="margin-left: 40%"
            >查看</el-button
            >
            <el-button type="primary" @click="openDialog(scope.row)">下载</el-button>
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
        <el-dialog
            v-model="dialogVisible"
            title="是否下载？"
            width="30%"
        >
          <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="save"
        ><a :href=filesDownloadUrl>确定</a></el-button
        >
      </span>
          </template>
        </el-dialog>
<el-dialog v-model="dialogVisible1" title="显示数据" width="100%">
  <el-table :data="currentTableData1" style="width: 100%;height: 300px">
    <el-table-column
        v-for="(value, key) in csvData[0]"
        :key="key"
        :prop="key"
        :label="value"
    ></el-table-column>
  </el-table>
  <el-pagination
      @size-change="handleSizeChange1"
      @current-change="handleCurrentChange1"
      :current-page="currentPage1"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize1"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total1">
  </el-pagination>
</el-dialog>
      </div>

    </div>
  </div>
</template>

<script>
import request from "@/utils/request";
import axios from 'axios'; // 引入 axios 用于发起 HTTP 请求
import Papa from 'papaparse'; // 引入 papaparse 用于解析 CSV

export default {
  name: "LoadData",
  components: {
  },
  data(){
    return{
      currentTableData1: [], // 当前页的数据
      currentPage1: 1, // 当前页数
      pageSize1: 10, // 每页数据量
      total1: 0, // 数据总量
      form:{},
      dialogVisible:false,
      search:'',
      currentPage:1,
      total:0,
      pageSize:10,
      CQS:'新增',
      csvData: null,
      dialogVisible1:false,
      tableData:[

      ],
      filesUploadUrl: "http://localhost:9090/files/upload",
      ids:[],
      filesDownloadUrl:"",
    }
  },
  created() {
    this.load()
  },
  methods:{
    openDialog(row) {
      this.filesDownloadUrl=row.cover;
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
    },
    load(){
      request.get("/api/dataFile/findPage",{params: {
          pageNum: this.currentPage,
          pageSize: this.pageSize,
          search:this.search
        }}).then(res => {
        console.log(res)
        this.tableData=res.data.records
        this.total=res.data.total
      })
    },
    filesUploadSuccess(res) {
      console.log(res)
      this.form.cover = res.data
    },
    async loadFile(row) {
      try {
        // 发起 HTTP GET 请求获取 CSV 文件内容
        const response = await axios.get(row.cover);
        if (response.status === 200) {
          // 使用 papaparse 解析 CSV 文件内容
          Papa.parse(response.data, {
            complete: (results) => {
              // console.log(results.data); // 在控制台打印解析后的数据
              this.csvData = results.data; // 将解析后的数据存储在组件的 data 中
            },
          });
        } else {
          console.error('请求失败', response.status);
        }
      } catch (error) {
        console.error('发生错误', error);
      }
      this.fetchData()
      this.dialogVisible1=true
    },
    fetchData() {
      // 这里是模拟从服务器获取数据的过程
      // 实际上，你可能会发送一个 AJAX 请求到服务器
      // 假设服务器返回了所有数据，我们在这里模拟一下
      const allData = this.csvData; // 生成模拟数据
      // 设置总数据量

      this.total1 = allData.length;
      // 根据当前页和每页数据量获取当前页的数据
      this.currentTableData1 = this.getCurrentPageData1(allData);
      console.log(this.currentTableData1)
    },
    getCurrentPageData1(data) {
      const start = (this.currentPage1 - 1) * this.pageSize1;
      const end = this.currentPage1 * this.pageSize1;
      return data.slice(start, end);
    },
    handleSizeChange1(val) {
      // 每页数据量变化时触发
      this.pageSize1 = val;
      this.fetchData();
    },
    handleCurrentChange1(val) {
      // 当前页数变化时触发
      this.currentPage1 = val;
      this.fetchData();
    },

  }
}
</script>

<style scoped>
.elInputClass{
  width: 70%;
  height: 50px;
  border: 2px solid #cccccc;
  border-radius: 15px 0px 0px 15px;
  margin-left: 10%;
  margin-top: 2%;
}
.elButtonClass{
  width: 5%;
  height: 50px;
  border-radius: 0px 15px 15px 0px;
  margin-top: 2%;
}

</style>