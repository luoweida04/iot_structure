<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <el-row :gutter="24">
      <el-col :span="3">
        <div class="leftNav">
          <div class="mainTitle">
            <span>基于多传感器的</span>
            <span>城市智能路灯系统</span>
          </div>
          <el-tree
            :data="data"
            :props="defaultProps"
            accordion
            highlight-current
            @node-click="handleNodeClick"
          >
          </el-tree>
        </div>
      </el-col>
      <el-col :span="21">
        <div class="top">
          <el-button type="primary">注销</el-button>
        </div>
        <div class="box">
          <div class="innerbox">
            <el-row :gutter="24">
              <el-col class="col1" :span="6">
                <div class="group">
                  <span>设备分组：</span>
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </div>
                <div class="list">
                  <div class="title">设备列表</div>
                  <el-tree
                    :data="machineData"
                    :props="defaultProps"
                    accordion
                    highlight-current
                    :render-content="renderContent"
                    @node-click="handleMachineNodeClick"
                  >
                  </el-tree>
                </div>
              </el-col>
              <el-col class="col2" :span="18">
                <div class="machineId">设备ID: {{ machineId }}</div>
                <br /><br />
                <div class="titles">
                  <span
                    :class="selectedTitle === 0 ? 'selectedTitle' : ''"
                    @click="selectTitle(0)"
                    >智能终端检测结果</span
                  >
                  <span
                    :class="selectedTitle === 1 ? 'selectedTitle' : ''"
                    @click="selectTitle(1)"
                    >智能终端实时画面</span
                  >
                </div>
                <div class="result" v-show="!selectedTitle">
                  <el-button type="primary" class="queryBtn">查询</el-button>
                  <el-table
                    :data="tableData"
                    height="500"
                    border
                    stripe
                    style="width: 100%"
                  >
                    <el-table-column prop="pn" label="PersonNum" width="180">
                    </el-table-column>
                    <el-table-column prop="cn" label="CarNum" width="180">
                    </el-table-column>
                    <el-table-column prop="bn" label="BikeNum">
                    </el-table-column>
                  </el-table>
                </div>
                <div class="picture" v-show="selectedTitle"></div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {
    // HelloWorld
  },
  data() {
    return {
      data: [
        {
          label: "单灯控制管理",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                },
              ],
            },
          ],
        },
        {
          label: "集中控制管理",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1",
                },
              ],
            },
          ],
        },
        {
          label: "系统信息管理",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1",
                },
              ],
            },
          ],
        },
        {
          label: "智能终端管理",
          children: [
            {
              label: "道路感知结果",
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "区域分组",
      machineId: 37,
      selectedTitle: 0,
      machineData: [
        {
          label: "华工终端一",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                },
              ],
            },
          ],
        },
        {
          label: "华工终端二",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                },
              ],
            },
          ],
        },
        {
          label: "华工新终端",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                },
              ],
            },
          ],
        },
        {
          label: "华工智能终端一",
          children: [
            { label: "hglightb3" },
            { label: "hglightb4" },
            { label: "hglightb5" },
            { label: "hglightb6" },
            { label: "hglightb7" },
            { label: "hglightb8" },
            { label: "hglight_library" },
          ],
        },
      ],
      tableData: [
        {
          pn: 1,
          cn: 4,
          bn: 0,
        }
      ],
    };
  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    selectTitle(i) {
      this.selectedTitle = i;
    },
    handleMachineNodeClick(data) {
      if (data.children == null) {
        console.log(data);
      }
    },
    renderContent: function (h, { data, node }) {
      if (data.children == null)
        return (
          <span>
            <div class="greenCircle"></div>
            <span style="padding-left: 4px;">{node.label}</span>
          </span>
        );
      return (
        <span>
          <span style="padding-left: 4px;">{node.label}</span>
        </span>
      );
    },
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box !important;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
.el-row {
  padding: 0 !important;
}
.el-col {
  padding: 0 !important;
}
.leftNav {
  height: 100vh;
  background-color: rgb(53, 52, 52);
  // padding-top: 25px;
  padding: 25px;
  .mainTitle {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly; 
    width: 90%;
    height: 60px;
    color: #fff;
    background-color: rgb(39, 38, 38);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    margin: auto;
    margin-bottom: 20px;
  }
  .el-tree {
    background-color: rgb(53, 52, 52);
  }
  .el-tree-node {
    padding-left: 15px;
  }

  .el-tree-node.is-current > .el-tree-node__content {
    background-color: rgb(31, 144, 230) !important;
  }
  .el-tree-node__content:hover {
    background-color: rgb(31, 144, 230);
  }
  .el-tree-node__label {
    width: auto;
    font-size: 16px;
    color: #fff;
    letter-spacing: 1px;
    white-space: nowrop;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .el-tree-node__content {
    height: 50px;
  }
}
.top {
  width: 100%;
  height: 100px;
  background-color: #fff;
  padding-right: 30px;
}
.top .el-button {
  float: right;
  transform: translateY(30px);
  border-radius: 5px;
}
.box {
  width: 100%;
  height: calc(100vh - 100px);
  background-color: rgb(231, 231, 231);
  padding-left: 25px;
  padding-top: 25px;
}
.box .innerbox {
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 20px;
}
.el-row {
  height: 100%;
  padding-top: 20px;
  .col1 {
    height: 100%;
    border-right: 1px solid rgb(231, 230, 230);
    .group {
      margin: auto;
      .el-select {
        width: 150px;
      }
    }
    .list {
      width: 80%;
      height: 85%;
      border: 1px solid rgb(231, 230, 230);
      border-radius: 5px;
      margin: auto;
      margin-top: 10px;
      .title {
        width: 40%;
        font-size: 20px;
        font-weight: bold;
        border-bottom: 2px solid #000;
        margin: 20px auto 10px;
        padding: 5px;
      }
      .el-tree {
        width: 80%;
        margin: auto;
      }
      .el-tree-node__content {
        height: 40px;
      }
    }
  }
  .col2 {
    height: 100%;
    padding-left: 20px !important;
    .machineId {
      float: left;
      font-size: 24px;
      font-weight: bold;
    }
    .titles {
      float: left;
      display: flex;
      width: 100%;
      border-bottom: 1px solid rgb(231, 230, 230);
      padding-top: 20px;
      span {
        width: 250px;
        font-size: 20px;
        font-weight: bold;
        padding: 10px;
        cursor: pointer;
      }
      .selectedTitle {
        border-bottom: 2px solid rgb(31, 144, 230);
        color: rgb(31, 144, 230);
      }
    }
    .result {
      .queryBtn {
        float: left;
        width: 100px;
        margin-top: 20px;
        margin-bottom: 15px;
      }
    }
  }
}
.greenCircle {
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: rgb(15, 189, 15);
  border-radius: 6px;
  vertical-align: middle;
}
</style>
