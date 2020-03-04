<template>
  <div>
    <Layout :style="{marginLeft: '200px'}">
      <!--   <ul class="w-300 bg-blue h-50 fs-16" style="list-style:none">
        <li style="float:left">姓名</li>
        <li style="float:left">全屏</li>
        <li style="float:left">个人中心</li>
      </ul>
      <li class="w-100" style="list-style:none">消息中心</li>-->
      <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem>成绩检测</BreadcrumbItem>
          <BreadcrumbItem>批改作业</BreadcrumbItem>
        </Breadcrumb>

        <Form ref="web" :model="web" :rules="ruleValidate" label-position="top"></Form>
      </Content>
    </Layout>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped></style>