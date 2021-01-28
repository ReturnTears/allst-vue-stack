<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <custom-button></custom-button>
    <custom-color-preview color="gray"></custom-color-preview>
    <custom-price-display :price="66" :unit="unit" :percentage-discount="0.66" :number="number"></custom-price-display>
    <custom-count-form-number :nums.sync="nums"></custom-count-form-number>
    <!-- 与.sync修饰符相似，可以在组件上使用v-model指令来创建自定义输入组件 -->
    <custom-input-username v-model="username"></custom-input-username>
    <!-- 普通插槽 -->
    <custom-button2 @count="handleCount">单击我!</custom-button2>
    <p>单击次数: {{clicks}}</p>
    <!-- 具名插槽 -->
    <custom-section :auther="auther">
        <h2 slot="header">博文的标题</h2>
        <p>博文的内容</p>
        <p>更多内容</p>
    </custom-section>
    <!-- 作用域插槽 -->
    <custom-user-data :slot-scope="user">
        <p v-if="user">姓名: {{user.name}}, 年龄: {{user.age}}</p>
    </custom-user-data>
    <!-- 具名插槽&作用插槽 -->
    <custom-blog-list :posts="posts">
      <!-- 覆盖组件具名插槽部分 -->
      <img class="blog-list-img" slot="stars" :slot-scope="post" :src="post.image" :alt="post.summary">
    </custom-blog-list>
    <!-- 自定义事件 -->
    <custom-button2 ref="counter"></custom-button2>
    <!-- 混入 -->
    <custom-user-admin :userId="userId"></custom-user-admin>
    <!-- 组件与v-for指令 -->
    <custom-v-for></custom-v-for>
  </div>
</template>

<script>
import CustomButton from '@/components/CustomButton'
import CustomColorPreview from '@/components/CustomColorPreview'
import CustomPriceDisplay from '@/components/CustomPriceDisplay'
import CustomCountFormNumber from '@/components/CustomCountFormNumber'
import CustomInputUsername from '@/components/CustomInputUsername'
import CustomButton2 from '@/components/CustomButton2'
import CustomSection from '@/components/CustomSection'
import CustomUserData from '@/components/CustomUserData'
import CustomBlogList from '@/components/CustomBlogList'
import CustomUserAdmin from '@/components/CustomUserAdmin'
import CustomVFor from '@/components/CustomVFor'

export default {
  name: 'HelloWorld',
  components: { 
    CustomButton,
    CustomColorPreview,
    CustomPriceDisplay,
    CustomCountFormNumber,
    CustomInputUsername,
    CustomButton2,
    CustomSection,
    CustomUserData,
    CustomBlogList,
    CustomUserAdmin,
    CustomVFor
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      unit: '￡',
      number: 0,
      nums: 1,
      username: 'KangShuai',
      auther: {
        name: "KangShuai",
        age: 22
      },
      user: {
        name: '康帅',
        age: 22
      },
      posts: [
        {title: '盗墓笔记', summary: '讲述一群人盗墓的故事!', stars: 5, image: 'https://www.baidu.com/img/flexible/logo/pc/result.png'},
        {title: '西游记', summary: '讲述一群人吃饱了没事干去西天的故事!', stars: 4.5, image: 'https://www.baidu.com/img/flexible/logo/pc/result.png'}
      ],
      post: {image: 'https://www.baidu.com/img/flexible/logo/pc/result.png', summary: '哈哈哈哈哈哈哈哈啊'},
      clicks: 0,
      userId: 18
    }
  },
  created() {
    setInterval(() => {
      this.number++
    }, 1000)
    // 子组件内部的值根本不会变化， 但是改变了父级组件的值, 这个会通过prop传递回子组件
    // setInterval(() => {
    //   console.log(this.nums)
    // }, 1000)
  },
  mounted() {
    // 相当于给count事件绑定了方法handleCount
    this.$refs.counter.$on('count', this.handleCount)
    // 另外两个处理事件: $once和$off

  },
  methods: {
    getNums(val) {
      setInterval(() => {
        console.log(val)
      }, 1000)
    },
    handleCount(clicks) {
      this.clicks = clicks
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.blog-list-img {
  width: 202px;
  height: 60px;
}
</style>
