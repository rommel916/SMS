<template>
  <div id="userHeader">
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