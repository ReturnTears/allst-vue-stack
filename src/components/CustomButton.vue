<template>
    <div>
        <button @click="clickBtn">自定义按钮</button>
    </div>
</template>
<script>
/**
 * 自定义按钮组件
 */
export default {
    name: 'CustomButton',
    data () {
        return {
            numbers: [-5, 0, 2, -1, 1, 0.5]
        }
    },
    methods: {
        clickBtn() {
            let nums = this.numbers.filter(x => x > 0)
            let str = `有${this.numbers.length}个数字,其中正数有:${nums.length}个`
            console.log(str)
        }
    }
}
</script>