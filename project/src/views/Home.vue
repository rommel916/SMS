<template>
  <div class>
    <!-- <cheader /> -->
    <div class="layout">
      <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
        <Menu
          class="m-t-40"
          :active-name="$route.path"
          theme="dark"
          width="auto"
          :open-names="['1']"
        >
          <ul class="p-t-10 text-center fs-15">
            <li style="color:#2d8cf0 " class="l-h-2">姓名:李皮皮</li>
            <li style="color:#2d8cf0 " class="l-h-2">个人中心</li>
            <li style="color:#2d8cf0 " class="l-h-2">退出</li>
            <Button type="primary" @click="time">消息中心</Button>
          </ul>
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>测试
            </template>
            <MenuItem name="/day" to="/day">日测</MenuItem>
            <MenuItem name="/wek" to="/wek">周测</MenuItem>
            <MenuItem name="/halfM" to="/halfM">半月测</MenuItem>
            <MenuItem name="/month" to="/month">月测</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>周测
            </template>
            <MenuItem name="/weekendWeb" to="/weekendWeb">web</MenuItem>
            <MenuItem name="/weekendPhp" to="/weekendPhp">dphp</MenuItem>
            <MenuItem name="/weekendPython" to="/weekendPython">python</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>半月测
            </template>
            <MenuItem name="/halfMWeb" to="/halfMWeb">web</MenuItem>
            <MenuItem name="/halfMPhp" to="/halfMPhp">dphp</MenuItem>
            <MenuItem name="/halfMPython" to="/halfMPython">python</MenuItem>
          </Submenu>
          <Submenu name="4">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>月测
            </template>
            <MenuItem name="mWeb" to="mWeb">Web</MenuItem>
            <MenuItem name="mPhp" to="mPhp">Php</MenuItem>
            <MenuItem name="mPython" to="mPython">Python</MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
// import cheader from "./Header";
export default {
  components: {
    // cheader
  },
  methods: {
    time() {
      this.$Notice.open({
        title: "Notification title",
        desc:
          "This notification does not automatically close, and you need to click the close button to close.",
        duration: 0
      });
    }
  }
};
</script>
<style lang="sass">

</style>