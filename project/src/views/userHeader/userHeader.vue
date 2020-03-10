<template>
  <!-- <ul class=" text-center fs-15">
    <List header footer="Footer" size="small">
      <ListItem style="color:#2d8cf0 " class="w-200">组长:李可爱 {{ wpy }}</ListItem>
      <ListItem style="color:#2d8cf0 ">
        <li class="pull-left">管理中心</li>
        <li class="pull-left m-l-15">退出</li>
      </ListItem>

      <ListItem style="color:#2d8cf0 ">
        <li class="text-center w-150 link-blue" @mouseenter="enter" id="linkMessage">
          消息列表
          <div
            style="background:#515a6e"
            class="text-white h-300 "
            v-if="display"
            id="homeMessage"
            @mouseenter="sover"
            @mouseleave="sout"
          >
            <li class=" p-b-15 h-300">
              <ul class="w-200  bg-blue  p-5" v-for="(item,index) in message" :key="index">
                <Icon type="ios-paper" class="fs-20 pull-left" />
                <li class="fs-15 pull-left text-title">{{item.title}}</li>
                <li class="fs-13 text-center">{{item.content}}</li>
                <li class="fs-13 text-center">{{item.message_time}}</li>
              </ul>
            </li>
          </div>
        </li>
      </ListItem>
    </List>
  </ul>-->
  <div>
    <Button @click="value2 = true" type="primary" class="w-200">个人中心</Button>
    <Drawer class="w-200" title="个人中心" placement="left" :closable="false" v-model="value2">
      <p class="">名字:石潇文</p>
      <div class="b-b m-b-5" v-for="(item,index) in message" :key="index">
        <dl>
          <dt class="link-titlea">{{ item.title }}</dt>
          <dd class="m-l-15">{{ item.content }}</dd>
          <dd class="link-blue">{{ item.message_time }}</dd>
        </dl>
      </div>
    </Drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value2: false,
      /*  wpy: "web",
      display: false,*/
      message: [
        {
          type: "ios-arrow-dropdown-circle",
          title: "消息",
          content:"消息列表消息列表消息列表消息列表消息列表消息列表",
          message_time: "2020 1.9 11:00"
        },
        {
          title: "消息",
          content: "消息列表消息列表",
          message_time: "2020 1.9 11:00"
        },
        {
          title: "消息",
          content: "消息列表消息列表",
          message_time: "2020 1.9 11:00"
        },
        {
          title: "消息",
          content: "消息列表消息列表",
          message_time: "2020 1.9 11:00"
        },
        {
          title: "消息",
          content: "消息列表消息列表",
          message_time: "2020 1.9 11:00"
        },
        {
          title: "消息",
          content: "消息列表消息列表",
          message_time: "2020 1.9 11:00"
        },
        {
          title: "消息",
          content: "消息列表消息列表",
          message_time: "2020 1.9 11:00"
        },
        {
          title: "消息",
          content: "消息列表消息列表",
          message_time: "2020 1.9 11:00"
        }
      ]
    };
  },
  methods: {
    /*  enter() {
      let self = this;
      self.timer = setTimeout(() => {
        self.display = true;
        let Usertime = new Date().toLocaleString();
        self.message.message_time = Usertime;
      }, 150);
    },
    sover() {
      clearTimeout(this.timer);
    },
    sout() {
      let self = this;
      self.display = false;
    } */
  }
};
</script>