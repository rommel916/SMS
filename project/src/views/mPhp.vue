<template>
  <div>
    <Layout class="bg-blue p-t-40" :style="{marginLeft: '200px'}">
      <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem>月测</BreadcrumbItem>
          <BreadcrumbItem>Php</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <Form>
          如何想用文件上传请点击此处:
          <Radio v-model="single"></Radio>
          <br />
          <template v-if="single">
            <Upload action="//jsonplaceholder.typicode.com/posts/">
              <Button icon="ios-cloud-upload-outline">Upload files</Button>
            </Upload>
          </template>
          <template v-else>
            <Input
              v-model="value17"
              mixlength="300"
              show-word-limit
              type="textarea"
              placeholder="输入 ..."
            /> <br>
          </template>
          <Button type="success" sm>提交</Button>
        </Form>
      </Content>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      single: false
    };
  },
  methods: {}
};
</script>
<style lang="stylus" scoped></style>