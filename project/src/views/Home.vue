<template>
  <div>
    <!-- <cheader /> -->
    <div class="layout">
      <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
        <Menu
          class="m-t-40 o-hidden"
          :active-name="$route.path"
          theme="dark"
          width="auto"
          :open-names="['1']"
        >
          <ul class="p-t-10 text-center fs-15">
            <List header footer="Footer" size="small">
              <ListItem style="color:#2d8cf0 " class="w-200 text-center">组长:李可爱 {{ wpy }}</ListItem>
              <ListItem style="color:#2d8cf0 ">
                <ul>
                  <li class="pull-left">管理中心</li>
                  <li class="pull-left m-l-15">退出</li>
                </ul>
              </ListItem>
              <ListItem style="color:#2d8cf0 ">
                <li class="text-center w-150 link-blue" id="linkMessage">
                  消息列表
                  <div class="bg-blue" id="homeMessage">
                    <li>
                      <ul class="w-200 bg-red p-5">
                        <li class="fs-15">
                          <Icon type="ios-paper" class=" fs-20 pull-left" />消息头部消息头部
                        </li>
                        <li class="fs-13">消息内容消息内容</li>
                      </ul>
                       <ul class="w-200 bg-red p-5">
                        <li class="fs-15">
                          <Icon type="ios-paper" class=" fs-20 pull-left" />消息头部消息头部
                        </li>
                        <li class="fs-13">消息内容</li>
                      </ul>
                       <ul class="w-200 bg-red p-5">
                        <li class="fs-15">
                          <Icon type="ios-paper" class=" fs-20 pull-left" />消息头部消息头部
                        </li>
                        <li class="fs-13">消息内容</li>
                      </ul>
                       <ul class="w-200 bg-red p-5">
                        <li class="fs-15">
                          <Icon type="ios-paper" class=" fs-20 pull-left" />消息头部消息头部
                        </li>
                        <li class="fs-13">消息内容</li>
                      </ul>
                       <ul class="w-200 bg-red p-5">
                        <li class="fs-15">
                          <Icon type="ios-paper" class=" fs-20 pull-left" />消息头部消息头部
                        </li>
                        <li class="fs-13">消息内容</li>
                      </ul>
                    </li>
                  </div>
                </li>
              </ListItem>
            </List>
          </ul>
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-navigate"></Icon>发布试题
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
          <Submenu name="5">
            <template slot="title">
              <Icon type="ios-analytics"></Icon>成绩检测
            </template>
            <MenuItem name="grade" to="grade">批改作业</MenuItem>
            <MenuItem name="tongji" to="tongji">成绩统计</MenuItem>
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
  data() {
    return {
      wpy: "web"
    };
  },
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