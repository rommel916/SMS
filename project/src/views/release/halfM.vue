<template>
  <div>
    <Layout class :style="{marginLeft: '200px'}">
      <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem>发布试题</BreadcrumbItem>
          <BreadcrumbItem>半月测</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <Card>
          <Form ref="php" :model="php" :rules="ruleValidate" label-position="top">
            <FormItem prop="input1" label="题目">
              <Input ref="dayInput" id="dayInput" v-model="php.input2" />
            </FormItem>
            <FormItem prop="input1" label="题目">
              <Input ref="dayInput" id="dayInput" v-model="php.input3" />
            </FormItem>
            <div v-for="(d,index) in dayContent" :key="index">
              <FormItem prop="input1" label="题目">
                <Input ref="dayInput" id="dayInput" />
              </FormItem>
            </div>
            {{ php.input1 }}
            <Icon type="md-flash" @click="dayInputAdd" class="fs-25 cursor-pointer" />
            <FormItem>
              <Button class="pull-left" @click="save('php')" type="info">保存</Button>
              <Button class="pull-left m-l-20" @click="halfMSubmit" type="success">提交</Button>
              <Modal
                @on-ok="dayok"
                @on-cancel="dayCancel"
                title="确认提交提示框"
                v-model="modal7"
                :closable="false"
              >
                <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
                  <div class="text-blue flex text-center">
                    <div class="flex-1">测试的名字:{{ dayName }}</div>
                    <div class="flex-1 b-h">发布试题人:{{ userName }}</div>
                    <div class="flex-1">{{dateTime}}</div>
                  </div>
                </div>
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
        </Card>
      </Content>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dayContent: [],
      dayName: "日测一",
      userName: "石潇文",
      dateTime: "",
      modal7: false,
      indeterminate: true,
      checkAll: false,
      checkAllGroup: ["张三", "李四", "赵苏", "李章"],
      user: [{ name: "张三" }, { name: "李四" }, { name: "张三" }],
      php: {
        input1: ""
      },
      ruleValidate: {
        input1: [
          {
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    dayInputAdd() {
      // alert("addInputAdd")
      this.dayContent.push({});
    },
    dayok() {
      this.$Message.info("提交成功");
    },
    dayCancel() {
      this.$Message.info("确认取消");
    },
    handleCheckAll() {
      if (this.indeterminate) {
        this.checkAll = false;
      } else {
        this.checkAll = !this.checkAll;
      }
      this.indeterminate = false;

      if (this.checkAll) {
        this.checkAllGroup = ["张三", "李四", "赵苏", "李章"];
      } else {
        this.checkAllGroup = [];
      }
    },
    checkAllGroupChange(data) {
      if (data.length === 4) {
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
    halfMSubmit() {
      this.modal7 = true;
      var aData = new Date();

      this.value =
        aData.getFullYear() +
        "年" +
        (aData.getMonth() + 1) +
        "月" +
        aData.getDate() +
        "日" +
        aData.getHours() +
        "点" +
        aData.getMinutes() +
        "分";

      this.dateTime = this.value;
    },
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