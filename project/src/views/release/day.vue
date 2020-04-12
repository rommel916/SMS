<template>
  <div>
    <Layout class :style="{marginLeft: '200px'}">
      <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem>发布试题</BreadcrumbItem>
          <BreadcrumbItem>日测</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <Card>
          <Form ref="php" :model="php" :rules="ruleValidate" label-position="top">
            <FormItem class>
              <input class ref="textName" id="dayInputOutline" placeholder="本次测验的题目" />
            </FormItem>
            <div ref="dayRef" v-for="(d,index) in dayContent" :key="index">
              <p ref="dayAddInputNumber">{{d.day_input_name}}</p>
              <!-- <p ref="dayAddInputNumber">{{d.day_input_name}}</p> -->
              <FormItem prop="input1" label>
                <Input
                  v-model="d.input"
                  style="width:70%"
                  class="m-r-20"
                  ref="dayInput"
                  id="dayInput"
                />
                <!-- <Button @click="dayAnswer" type="info">{{dayButton}}</Button> -->
                <Radio label="apple">
                  <Icon type="social-apple"></Icon>
                  <span @click="answerDay(index)">填写答案按钮</span>
                </Radio>
                <div v-if="d.visibility">
                  <p class="text-black">{{d.day_answer_name}} :</p>
                  <Input class="m-r-20" v-model="d.answer" />
                </div>
              </FormItem>
            </div>
            <!-- {{ php.input1 }} -->
            <Icon type="md-flash" @click="dayInputAdd()" class="fs-25 cursor-pointer" />
            <FormItem>
              <Button class="pull-left" @click="save('php')" type="info">保存</Button>
              <Button class="pull-left m-l-20" @click="daySubmit" type="success">提交</Button>
              <Modal
                @on-ok="dayok"
                @on-cancel="dayCancel"
                title="确认提交提示框"
                v-model="modal7"
                :closable="false"
              >
                <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
                  <div class="text-blue flex text-center">
                    <div class="flex-1">测试的名字:{{ textName }}</div>
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
      customDay: [],
      answerDayFT: false,
      dayAddInputNumber: "2",
      submitTable: false,
      dayContent: [
        {
          day_input_name: "题目",
          day_answer_name: "答案",
          input: "",
          answer: "",
          visibility: false
        },
        {
          day_input_name: "题目",
          day_answer_name: "答案",
          input: "",
          answer: "",
          visibility: false
        },
      ],
      textName: "",
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
  created() {
    this.dayContent.length = 2;
  },
  mounted() {},
  methods: {
    dayInputAdd() {
      if (this.dayContent.length < 10) {
        let obj = {
          day_input_name: "题目",
          day_answer_name: "答案",
          input: "",
          answer: "",
          visibility: false
        };
        this.dayContent.push(obj);
      } else {
        return this.$Message.info("题目够了够了小哥哥");
      }
    },
    answerDay(index) {
      this.dayContent[index].visibility = true;
    },
    dayAnswer() {},
    daySubmit() {
      this.textName = this.$refs.textName.value;
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

    dayok() {
      this.$Message.info("提交成功");
      this.submitTable = true;
      // alert(this.submitTable);
    },
    beforeRouteEnter(to, from, next) {
      console.log(to);
      console.log(this.submitTable);
    },
    BeforeRouteUpdate(to, from, next) {
      console.log(to);
    },
    BeforeRouteLeave(to, from, next) {
      console.log(to);
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
      // alert(data)
      if (data.length === this.user.length + 1) {
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