<template>
  <header style="height:40px;width:100%;background:dark-black" class="fixed z4 bg-blue">
    <div class="left">
      <ul class="lh-40 fs-25">
        <Icon class="m-r-15 pointer" type="md-information" />
        <Icon class="m-r-15 pointer" type="md-code" />
        <Icon class="m-r-15 pointer" type="ios-contact-outline" />
      </ul>
    </div>
    <div class="right">
      <Button type="primary" @click="renderFunc">消息中心</Button>
    </div>
  </header>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  methods: {
    time() {
      this.$Notice.open({
        title: "Notification title",
        desc:
          "This notification does not automatically close, and you need to click the close button to close.",
        duration: 0
      });
    },
    renderFunc() {
      this.$Notice.success({
        title: "消息",
        desc: "The desc will hide when you set render.",
        duration: 0,
        render: h => {
          return h("div", [
            "消息中心 ",
            h("a", "render"),
            " function"
          ]);
        }
      });
    }
  }
};
</script>
<style >
.left,
.right {
  width: 240px;
  height: 40px;
  text-align: center;
  float: left;
}
.left > ul > li {
  list-style: none;
  float: left;
  margin: 0 0 0 20px;
  line-height: 40px;
}
.right {
  width: 100px;
  height: 40px;
  float: right;
  line-height: 40px;
}
span{
}
</style>
