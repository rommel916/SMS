<template>
  <div>
    <Layout class="p-t-40" :style="{marginLeft: '200px'}">
    <!--   <ul class="w-300 bg-blue h-50 fs-16" style="list-style:none">
        <li style="float:left">姓名</li>
        <li style="float:left">全屏</li>
        <li style="float:left">个人中心</li>
      </ul>
      <li class="w-100" style="list-style:none">消息中心</li> -->
      <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem>发布试题</BreadcrumbItem>
          <BreadcrumbItem>半月测</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        
          <Form ref="web" :model="web" :rules="ruleValidate" label-position="top">
            <FormItem prop="input1" label="题目">
              <Input v-model="web.input1" />
            </FormItem>
            <FormItem prop="input2" label="题目">
              <Input v-model="web.input2" />
            </FormItem>
            <FormItem prop="input3" label="题目">
              <Input v-model="web.input3" />
            </FormItem>

            <FormItem prop="input4" label="题目">
              <Input v-model="web.input4" />
            </FormItem>
            <FormItem prop="input5" label="题目">
              <Input v-model="web.input5" />
            </FormItem>
            <FormItem prop="input6" label="题目">
              <Input v-model="web.input6" />
            </FormItem>
            <FormItem>
              <Button class @click="webDay('web')" type="success">发布</Button>
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
      web: {
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
    webDay(name) {
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