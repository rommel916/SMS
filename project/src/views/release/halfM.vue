<template>
  <div>
    <Layout class :style="{marginLeft: '200px'}">
      <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem>发布试题</BreadcrumbItem>
          <BreadcrumbItem>半月测</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>

        <Form ref="php" :model="php" :rules="ruleValidate" label-position="top">
          <FormItem prop="input1" label="题目">
            <Input v-model="php.input1" />
          </FormItem>
          <FormItem prop="input2" label="题目">
            <Input v-model="php.input2" />
          </FormItem>
          <FormItem prop="input3" label="题目">
            <Input v-model="php.input3" />
          </FormItem>

          <FormItem prop="input4" label="题目">
            <Input v-model="php.input4" />
          </FormItem>
          <FormItem prop="input5" label="题目">
            <Input v-model="php.input5" />
          </FormItem>
          <FormItem prop="input6" label="题目">
            <Input v-model="php.input6" />
          </FormItem>
          <FormItem>
            <Button class="pull-left" @click="save('php')" type="info">保存</Button>
            <!-- <Button @click="modal7 = true">Disable upper right corner (including Esc key)</Button> -->

            <Button class="pull-left m-l-20" @click="modal7 = true" type="success">提交</Button>
            <Modal title="选择要发送的对象" v-model="modal7" :closable="false">
              <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
                <Checkbox
                  :indeterminate="indeterminate"
                  :value="checkAll"
                  @click.prevent.native="handleCheckAll"
                >全选</Checkbox>
              </div>
              <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">
                <Checkbox label="张三"></Checkbox>
                <Checkbox label="李四"></Checkbox>
                <Checkbox label="赵苏"></Checkbox>
                <Checkbox label="李章"></Checkbox>
              </CheckboxGroup>
            </Modal>
            <Button class="pull-left m-l-20" @click="cancel('php')" type="error">取消</Button>
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
      modal7: false,
      indeterminate: true,
      checkAll: false,
      // checkAllGroup: ["张三", "李四","赵肃"],
      user: [{ name: "张三" },{ name: "李四" },{ name: "张三" }],
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
    handleCheckAll() {
      if (this.indeterminate) {
        this.checkAll = false;
      } else {
        this.checkAll = !this.checkAll;
      }
      this.indeterminate = false;

      if (this.checkAll) {
          this.checkAllGroup = ["张三", "李四","赵苏","李章"];
      } else {
        this.checkAllGroup = [];
      }
    },
    checkAllGroupChange(data) {
      if (data.length === 3) {
        this.indeterminate = false;
        this.checkAll = true;
      } else if (data.length > 0) {
        this.indeterminate = true;
        this.checkAll = false;
      } else {
        this.indeterminate = false;
        this.checkAll = false;
      }
    },
    /*      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("提交成功");
        } else {
          this.$Message.error("提交失败");
        }
      }); */
    /*  checkAllGroupChange(data) {
      if (data.length === 3) {
        this.indeterminate = false;
        this.checkAll = true;
      } else if (data.length > 0) {
        this.indeterminate = true;
        this.checkAll = false;
      } else {
        this.indeterminate = false;
        this.checkAll = false;
      }
    }, */
    save(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("保存成功");
        } else {
          this.$Message.error("保存失败");
        }
      });
    },

    cancel(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("取消成功");
        } else {
          this.$Message.error("取消失败");
        }
      });
    }
  }
};
</script>
<style lang="stylus" scoped></style>