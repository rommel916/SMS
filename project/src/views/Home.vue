<template>
  <div>
    <!-- <cheader /> -->
    <div class="layout">
      <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
        <user-header></user-header>
        <Menu
          class="o-hidden"
          :active-name="$route.path"
          theme="dark"
          width="auto"
          :open-names="['1']"
        >
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>发布试题
            </template>
            <MenuItem name="/day" to="/day">日测</MenuItem>
            <MenuItem name="/wek" to="/wek">周测</MenuItem>
            <MenuItem name="/halfM" to="/halfM">半月测</MenuItem>
            <MenuItem name="/month" to="/month">月测</MenuItem>
            <MenuItem name="/management" to="/management">试题管理</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-keypad"></Icon>测试
            </template>
            <MenuItem name="/weekendWeb" to="/weekendWeb">web</MenuItem>
            <MenuItem name="/weekendPhp" to="/weekendPhp">dphp</MenuItem>
            <MenuItem name="/weekendPython" to="/weekendPython">python</MenuItem>
          </Submenu>
          <Submenu name="5">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>成绩检测
            </template>
            <MenuItem name="grade" to="grade">批改作业</MenuItem>
            <MenuItem name="tongji" to="tongji">成绩统计</MenuItem>
            <MenuItem name="answer" to="answer">发布答案</MenuItem>
          </Submenu>
        </Menu>
      </Sider>

      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import userHeader from "./userHeader/userHeader";
export default {
  data() {
    return {};
  },
  components: {
    userHeader
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