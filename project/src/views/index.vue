<template>
  <div>
    <Layout class :style="{marginLeft: '200px'}">
      <Menu mode="horizontal" :theme="theme1" active-name="1">
        <Submenu name="1">
          <template slot="title">
            <Icon type="ios-paper" />发布试题
          </template>
          <MenuItem name="grade" to="grade">作业批改</MenuItem>
          <MenuItem name="tongji" to="tongji">成绩统计</MenuItem>
          <MenuItem name="3-3">时段分析</MenuItem>
        </Submenu>

        <MenuItem name="2">
          <Icon type="ios-people" />用户管理
        </MenuItem>
        <Submenu name="3">
          <template slot="title">
            <Icon type="ios-stats" />成绩检测
          </template>
          <MenuItem name="grade" to="grade">作业批改</MenuItem>
          <MenuItem name="tongji" to="tongji">成绩统计</MenuItem>
          <MenuItem name="3-3">时段分析</MenuItem>
        </Submenu>
        <MenuItem name="4">
          <Icon type="ios-construct" />综合设置
        </MenuItem>
      </Menu>
      <Content class="m-t-30" :style="{padding: '0 16px 16px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem>强人工作室</BreadcrumbItem>
          <BreadcrumbItem>快速处理</BreadcrumbItem>
        </Breadcrumb>
        <Form class="m-t-20">
          <div id="indexShadow" class="h-90 pull-left m-12 bg-white min-w-300 w-300">
            <div class="w-300 m-auto">
              <Icon type="ios-paper" class="m-15 fs-60 pull-left text-center" />
              <div class="pull-left m-5 w-200 h-80">
                <ul class="link-grey">
                  <router-link to="/day">
                    <li class="bold m-t-15 fs-15">每日测试</li>
                  </router-link>
                  <li class="fs-13 m-t-5">每次20道检测题,好好好</li>
                </ul>
              </div>
            </div>
          </div>

          <div id="indexShadow" class="h-90 pull-left m-12 bg-white min-w-300 w-300">
            <div class="w-300 m-auto">
              <Icon type="ios-paper" class="m-15 fs-60 pull-left text-center" />
              <div class="pull-left m-5 w-200 h-80">
                <ul class="link-grey">
                  <router-link to="/wek">
                    <li class="bold m-t-15 fs-15">每周测试</li>
                  </router-link>
                  <li class="fs-13 m-t-5">每周测试每周测试,好好好</li>
                </ul>
              </div>
            </div>
          </div>
          <div id="indexShadow" class="h-90 pull-left m-12 bg-white min-w-300 w-300">
            <div class="w-300 m-auto">
              <Icon type="ios-paper" class="m-15 fs-60 pull-left text-center" />
              <div class="pull-left m-5 w-200 h-80">
                <ul class="link-grey">
                  <router-link to="/grade">
                    <li class="bold m-t-15 fs-15">批改作业</li>
                  </router-link>
                  <li class="fs-13 m-t-5">批改作业批改作业,好好好</li>
                </ul>
              </div>
            </div>
          </div>
          <div id="indexShadow" class="h-90 pull-left m-12 bg-white min-w-300 w-300">
            <div class="w-300 m-auto">
              <Icon type="ios-paper" class="m-15 fs-60 pull-left text-center" />
              <div class="pull-left m-5 w-200 h-80">
                <ul class="link-grey">
                  <router-link to="/tongji">
                    <li class="bold m-t-15 fs-15">成绩统计</li>
                  </router-link>
                  <li class="fs-13 m-t-5">成绩成绩统计统计,好好好</li>
                </ul>
              </div>
            </div>
          </div>
          <div id="indexShadow" class="h-90 pull-left m-12 bg-white min-w-300 w-300">
            <div class="w-300 m-auto">
              <Icon type="ios-paper" class="m-15 fs-60 pull-left text-center" />
              <div class="pull-left m-5 w-200 h-80">
                <ul class="link-grey">
                  <router-link to="/gradeChart">
                    <li class="bold m-t-15 fs-15">成绩图标</li>
                  </router-link>
                  <li class="fs-13 m-t-5">成绩图标成绩图标,好好好</li>
                </ul>
              </div>
             
            </div>
          </div>
            <div style="position:fixed;bottom:1px;" class="   w-full flex  j-center  a-center">
          <a class="fs-12 text-grey" href="http://www.beian.miit.gov.cn">ICP证：豫ICP备18034461号</a>
        </div>
        </Form>

      </Content>
     
    </Layout>
     
  </div>
  
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="stylus" scoped></style>