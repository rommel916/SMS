<template>
  <div>
    <Layout :style="{marginLeft: '200px'}">
      <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb class="p-b-30" :style="{margin: '16px 0'}">
          <BreadcrumbItem>成绩检测</BreadcrumbItem>
          <BreadcrumbItem>成绩管理</BreadcrumbItem>
        </Breadcrumb>
        <Form ref="web" :model="web" :rules="ruleValidate" label-position="top">
           <div id="grade"  class="h-90 m-20 bg-white b-r-10" style="" >
            <div  class="w-800 h-90 m-auto">
              <Icon type="ios-paper" class="m-t-25 m-l-20 m-r-10 fs-40 pull-left text-center" />
              <div class=" m-5 w-750 h-80">
                <ul class="m-l-10 link-grey ">
                  <router-link to="manageDay">
                    <li class="bold p-t-15 fs-15">日测</li>
                  </router-link>
                  <li class="fs-13 m-t-8  ">日测日测日测日测日测日测日测日测日测日测日测</li>
                </ul>
              </div>
            </div>
          </div>
           <div id="grade"  class="h-90 m-20 bg-white b-r-10" style="" >
            <div  class="w-800 h-90 m-auto">
              <Icon type="ios-paper" class="m-t-25 m-l-20 m-r-10 fs-40 pull-left text-center" />
              <div class=" m-5 w-750 h-80">
                <ul class="m-l-10 link-grey ">
                  <router-link to="manageWek">
                    <li class="bold p-t-15 fs-15">周测</li>
                  </router-link>
                  <li class="fs-13 m-t-8  ">周测周测周测周测周测周测周测周测周测周测</li>
                </ul>
              </div>
            </div>
          </div>
           <div id="grade"  class="h-90 m-20 bg-white b-r-10" style="" >
            <div  class="w-800 h-90 m-auto">
              <Icon type="ios-paper" class="m-t-25 m-l-20 m-r-10 fs-40 pull-left text-center" />
              <div class=" m-5 w-750 h-80">
                <ul class="m-l-10 link-grey ">
                  <router-link to="manageHMonth">
                    <li class="bold p-t-15 fs-15">半月测</li>
                  </router-link>
                  <li class="fs-13 m-t-8  ">半月测半月测半月测半月测半月测半月测半月测半月测半月测</li>
                </ul>
              </div>
            </div>
          </div>
             <div id="grade"  class="h-90 m-20 bg-white b-r-10" style="" >
            <div  class="w-800 h-90 m-auto">
              <Icon type="ios-paper" class="m-t-25 m-l-20 m-r-10 fs-40 pull-left text-center" />
              <div class=" m-5 w-750 h-80">
                <ul class="m-l-10 link-grey ">
                  <router-link to="manageMonth">
                    <li class="bold p-t-15 fs-15">月测</li>
                  </router-link>
                  <li class="fs-13 m-t-8  ">月测月测月测月测月测月测月测月测月测</li>
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
          title: "日测",
          text: "日测日测日测日测日测日测日测日测日测日测日测日测日测"
        },
        {
          title: "周测",
          text: "周测周测周测周测周测周测周测周测周测周测周测周测"
        },
        {
          title: "半月测",
          text: "半月测半月测半月测半月测半月测半月测半月测半月测半月测半月测半月测"
        },
        {
          title: "月测",
          text: "月测月测月测月测月测月测月测月测月测月测月测月测"
        },
      ]
    };
  }
};
</script>
<style lang="stylus" scoped></style>