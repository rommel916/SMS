<template>
  <div>
    <Layout class="p-t-40" :style="{marginLeft: '200px'}">
      <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem>日测</BreadcrumbItem>
          <BreadcrumbItem>Python</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <Card>
          <Form ref="hMPython" :model="hMPython" :rules="ruleValidate" label-position="top">
            <FormItem prop="input1" label="提米">
              <Input v-model="hMPython.input1" />
            </FormItem>
            <FormItem prop="input2" label="提米">
              <Input v-model="hMPython.input2" />
            </FormItem>
            <FormItem prop="input3" label="提米">
              <Input v-model="hMPython.input3" />
            </FormItem>

            <FormItem prop="input4" label="提米">
              <Input v-model="hMPython.input4" />
            </FormItem>
            <FormItem prop="input5" label="提米">
              <Input v-model="hMPython.input5" />
            </FormItem>
            <FormItem prop="input6" label="提米">
              <Input v-model="hMPython.input6" />
            </FormItem>
            <FormItem>
              <Button class @click="hMPythonDay('hMPython')" type="success">提交</Button>
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
      hMPython: {
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
    hMPythonDay(name) {
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