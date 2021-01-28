<template>
    <div>
        <span>{{ msg }}</span>
        <button @click="foo">点击1</button>
        <button @click="myfoo">点击2</button>
    </div>
</template>
<script>
/**
 * 自定义按钮组件
 */
export default {
    name: 'CustomJS',
    data () {
        return {
            msg: "js",
            params: 1,
            myParams: 1
        }
    },
    methods: {
        foo() {
            this.params++
            this.bar()
            console.log("params:" + this.params)
        },
        bar() {
            this.params++
        },
        *myfoo() {
            this.myParams++
            yield
            console.log("myParams:" + this.myParams)
        },
        mybar() {
            this.myParams++
        }
    }
}
</script>