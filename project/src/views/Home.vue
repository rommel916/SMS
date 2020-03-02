<template>
  <div class=" ">
      <cheader/>
        <div class="layout">
        <Sider class=" m-t-40 " :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu  class=" m-t-40 " :active-name="$route.path" theme="dark" width="auto" :open-names="['1']">
                <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        日测
                    </template>
                    <MenuItem name="/web" to="/web" >web</MenuItem>
                    <MenuItem name="/php" to="/php" >dphp</MenuItem>
                    <MenuItem name="/python" to="/python" >python</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-keypad"></Icon>
                        周测
                    </template>
                    <MenuItem name="/weekendWeb" to="/weekendWeb" >web</MenuItem>
                    <MenuItem name="/weekendPhp" to="/weekendPhp" >dphp</MenuItem>
                    <MenuItem name="/weekendPython" to="/weekendPython" >python</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        半月测
                    </template>
                  <MenuItem name="/halfMWeb" to="/halfMWeb" >web</MenuItem>
                    <MenuItem name="/halfMPhp" to="/halfMPhp" >dphp</MenuItem>
                    <MenuItem name="/halfMPython" to="/halfMPython" >python</MenuItem>
                </Submenu>
                 <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        月测
                    </template>
                    <MenuItem name="3-1">月测 1</MenuItem>
                    <MenuItem name="3-2">月测 2</MenuItem>
                </Submenu>
            </Menu>
        </Sider>
        <router-view></router-view>
    </div>
  </div>
</template>
<script>
import cheader from './Header';
export default {
  components: {
    cheader
  }
};
</script>
<style lang="sass">

</style>