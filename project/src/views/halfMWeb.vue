<template>
  <div>
    <Layout class="p-t-40" :style="{marginLeft: '200px'}">
      <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem>日测</BreadcrumbItem>
          <BreadcrumbItem>Web</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <Card>
          <Form ref="hMWeb" :model="hMWeb" :rules="ruleValidate" label-position="top">
            <FormItem prop="input1" label="题目">
              <Input v-model="hMWeb.input1" />
            </FormItem>
            <FormItem prop="input2" label="题目">
              <Input v-model="hMWeb.input2" />
            </FormItem>
            <FormItem prop="input3" label="题目">
              <Input v-model="hMWeb.input3" />
            </FormItem>

            <FormItem prop="input4" label="题目">
              <Input v-model="hMWeb.input4" />
            </FormItem>
            <FormItem prop="input5" label="题目">
              <Input v-model="hMWeb.input5" />
            </FormItem>
            <FormItem prop="input6" label="题目">
              <Input v-model="hMWeb.input6" />
            </FormItem>
            <FormItem>
              <Button class @click="hMWebDay('hMWeb')" type="success">提交</Button>
            </FormItem>
          </Form>
        </Card>
      </Content>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hMWeb: {
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
    hMWebDay(name) {
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