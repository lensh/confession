<template>
  <el-main v-loading="loading" element-loading-text="正在生成链接">
    <h2>表白页面自动生成</h2>
    <el-form ref="form" :model="form" :rules="rules" label-width="100px">
      <el-form-item label="你的名字" prop="you">
        <el-input v-model="form.you" placeholder="不能为空"></el-input>
      </el-form-item>
      <el-form-item label="Ta的名字" prop="ta">
        <el-input v-model="form.ta" placeholder="不能为空"></el-input>
      </el-form-item>
      <el-form-item label="有效期" prop="valid_month">
        <el-input
          v-model.number="form.valid_month"
          placeholder="单位:月"
        ></el-input>
        <p v-if="form.valid_month">价格:200/月，合计{{ price }}元</p>
      </el-form-item>
      <el-form-item label="表白话语" prop="words">
        <el-input
          v-model="form.words"
          type="textarea"
          placeholder="注意分行"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">生成链接</el-button>
      </el-form-item>
    </el-form>

    <el-dialog title="提示" :visible.sync="isShowDialog" width="350px" center>
      <span>{{ desc }} {{ link }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="copyLink">复制链接</el-button>
      </span>
    </el-dialog>
    <textarea id="input" style="opacity: 0"></textarea>
  </el-main>
</template>

<script>
const defaultWords = [
  "亲爱的，做我女朋友吧！",
  "你是一个活泼、可爱的女孩 ，善良且天真浪漫",
  "虽然我们接触的时间不长，只有短短几个月",
  "却让我感觉是那么的熟悉与开心",
  "难以忘记初次见面的感觉，我被一种神奇的东西吸引",
  "那时我的心七上八下的，我相信这就是一见钟情",
  "那以后，你的一个微笑，一个表情，都深深的留在了我的心里",
  "我一次次的更加确定，你就是我一直等待的人",
  "只要你愿意，我可以陪你去任何你想去的地方",
  "只要你愿意，我可以陪你去吃任何你喜欢吃的东西",
  "只要你愿意，我可以陪你去做你想做的事",
  "总之你愿意，我会一直陪着你",
  "亲爱的，能够遇见你，对我来说是最大的幸福",
  "在以后的日子里，也许有很多的无法确定",
  "但唯一可以确定的是，我会一直珍惜你",
  "陪伴是最长情的告白",
];
const rules = {
  you: [
    { required: true, message: "请输入你的名字", trigger: "blur" },
    {
      min: 1,
      max: 10,
      message: "长度在 1 到 10 个字符",
      trigger: "blur",
    },
  ],
  ta: [
    { required: true, message: "请输入Ta的名字", trigger: "blur" },
    {
      min: 1,
      max: 10,
      message: "长度在 1 到 10 个字符",
      trigger: "blur",
    },
  ],
  valid_month: [
    { required: true, message: "请输入有效期" },
    { type: "number", message: "有效期必须为数字" },
  ],
};
export default {
  data() {
    return {
      loading: false, // 是否展示loading
      isShowDialog: false, // 是否展示对话框
      link: "", // 链接地址
      desc: "", // 提示语
      form: {
        you: "",
        ta: "",
        valid_month: "", // 有效期
        words: "", // 表白话语
      },
      rules: Object.freeze(rules),
    };
  },
  computed: {
    price() {
      return this.form.valid_month * 200;
    },
  },
  methods: {
    submitForm() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          this.loading = true;
          const { words } = this.form;
          const wordsArr = words ? words.split("\n") : defaultWords;
          const reqData = Object.assign({}, this.form, { words: wordsArr });
          this.createLink(reqData);
        } else {
          this.$alert("请填写相关字段", "提示");
          return false;
        }
      });
    },
    createLink(reqData) {
      this.$http
        .post("/api/getLink", reqData)
        .then((res) => res.data)
        .then((res) => {
          const { code, desc, link } = res;
          this.loading = false;
          this.isShowDialog = true;
          this.desc = desc;
          if (code == 0) {
            this.link = link;
          }
        });
    },
    copyLink() {
      var input = document.getElementById("input");
      input.value = this.link; // 修改文本框的内容
      input.select(); // 选中文本
      document.execCommand("copy"); // 执行浏览器复制命令
      this.$alert("复制成功", "提示");
    },
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  color: #f3961c;
}
.el-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.el-form {
  margin-top: 100px;
  width: 600px;
}
canvas {
  display: block;
}

#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}
</style>