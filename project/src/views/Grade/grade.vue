<template>
  <div>
    <Layout :style="{marginLeft: '200px'}">
      <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb class="p-b-30" :style="{margin: '16px 0'}">
          <BreadcrumbItem>成绩检测</BreadcrumbItem>
          <BreadcrumbItem>批改作业</BreadcrumbItem>
        </Breadcrumb>
        <Form ref="web" :model="web" :rules="ruleValidate" label-position="top">
          <div id="grade"  class="h-90 m-20 bg-white b-r-10" style="" v-for="(item,index) in member" :key="index">
            <div  class="w-800 h-90 m-auto">
              <Icon type="ios-paper" class="m-t-25 m-l-20 m-r-10 fs-40 pull-left text-center" />
              <div class=" m-5 w-750 h-80">
                <ul class="m-l-10 link-grey ">
                  <router-link :to="'grade/member/'+item.user">
                    <li class="bold p-t-15 fs-15">{{item.user}}</li>
                  </router-link>
                  <li class="fs-13 m-t-8  ">{{item.text}}</li>
                </ul>
              </div>
            </div>
          </div>
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
          user: "李四",
          text: "秋风来了，早始的凉意轻缓而来，轻抚至我的身体"
        },
        {
          user: "张三",
          text: "秋风来了，早始的凉意轻缓而来，轻抚至我的身体"
        },
        {
          user: "赵四",
          text: "秋风来了，早始的凉意轻缓而来，轻抚至我的身体"
        },
        {
          user: "王二",
          text: "秋风来了，早始的凉意轻缓而来，轻抚至我的身体"
        },
        {
          user: "李非",
          text: "秋风来了，早始的凉意轻缓而来，轻抚至我的身体"
        }
      ]
    };
  }
};
</script>
<style lang="stylus" scoped></style>