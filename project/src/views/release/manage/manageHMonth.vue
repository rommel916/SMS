<template>
  <div>
    <Layout class :style="{marginLeft: '200px'}">
      <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem>试题管理</BreadcrumbItem>
          <BreadcrumbItem>半月测</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>

        <Form ref="php" :model="php" :rules="ruleValidate" label-position="top">
          <Table stripe :columns="columns1" :data="data1"></Table>
          <div class="m-10 m-t-20 o-hidden">
            <div style="float: right;">
              <Page
                :current="pages.curIndex"
                :page-size="pages.pagesize"
                :total="pages.total"
                @on-change="changePage"
              ></Page>
            </div>
          </div>
          <FormItem>
            <Button class="m-t-20 m-l-20 pull-left" @click="phpDay('php')" type="success">发布</Button>
          </FormItem>
        </Form>
      </Content>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pages: {
        curIndex: 1,
        pagesize: 10,
        total: 100
      },
      columns1: [
        {
          title: "名字",
          key: "name"
        },
        {
          title: "时间",
          key: "date"
        },
        {
          title: "是否完成",
          key: "state"
        }
      ],
      data1: [
        {
          name: "张三",
          date: "2016-10-01 10:30",
          state: "未完成"
        },
        {
          name: "李四",
          date: "2016-10-01 10:30",
          state: "未完成"
        },
        {
          name: "张锋",
          date: "2016-10-01 10:30",
          state: "未完成"
        },
        {
          name: "郭琦",
          date: "2016-10-01 10:30",
          state: "未完成"
        }
      ],
      php: {
        input1: "",
        input2: "",
        input3: "",
        input4: "",
        input5: "",
        input6: ""
      },
      ruleValidate: {
        input1: [
          {
            trigger: "blur"
          }
        ],
        input2: [
          {
            trigger: "blur"
          }
        ],
        input3: [
          {
            trigger: "blur"
          }
        ],
        input4: [
          {
            trigger: "blur"
          }
        ],
        input5: [
          {
            trigger: "blur"
          }
        ],
        input6: [
          {
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    phpDay(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("添加成功");
        } else {
          this.$Message.error("添加失败");
        }
      });
    }
  }
};
</script>
<style lang="stylus" scoped></style>