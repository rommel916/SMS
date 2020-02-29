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
                    <MenuItem name="/web" to="/web" >web 1</MenuItem>
                    <MenuItem name="/php" to="/php" >php 2</MenuItem>
                    <MenuItem name="/python" to="/python" >python 3</MenuItem>
                </Submenu>
                <Submenu name="2">
                    <template slot="title">
                        <Icon type="ios-keypad"></Icon>
                        周测
                    </template>
                    <MenuItem name="/weekendWeb" to="/weekendWeb" >web 1</MenuItem>
                    <MenuItem name="/weekendPhp" to="/weekendPhp" >php 2</MenuItem>
                    <MenuItem name="/weekendPython" to="/weekendPython" >python 3</MenuItem>
                </Submenu>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-analytics"></Icon>
                        半月测
                    </template>
                    <MenuItem name="3-1">半月测 1</MenuItem>
                    <MenuItem name="3-2">半月测 2</MenuItem>
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