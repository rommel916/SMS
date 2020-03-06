<template>
  <div>
    <Layout :style="{marginLeft: '200px'}">
      <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb class :style="{margin: '16px 0'}">
          <BreadcrumbItem>成绩检测</BreadcrumbItem>
          <BreadcrumbItem>嘟嘟嘟嘟</BreadcrumbItem>
        </Breadcrumb>
        <Form ref="web" :model="web" :rules="ruleValidate" label-position="top">
          <div class="m-10 bg-white b-r-10" style v-for="(item,index) in member" :key="index">
            <div class="m-5 w-750">
              <ul class="m-l-10 link-grey">
                <li class="bold p-t-15 text-blue  fs-15">{{item.question}}</li>
                <li class="fs-13 m-t-8 m-l-15 p-b-10">{{item.answer}}</li>
              </ul>
            </div>
          </div>
          <Button class="m-10" @click="phpDay('php')" type="success">发布</Button>
        </Form>
      </Content>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      member: [
        {
          question: "题目",
          answer: "内容内容内容内容内容内容内容内容内容内容"
        },
        {
          question: "题目",
          answer: "内容内容内容内容内容内容内容内容内容"
        },
        {
          question: "题目",
          answer:
            "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
        },
        {
          question: "题目",
          answer: "内容"
        },
        {
          question: "题目",
          answer: "内容"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped></style>