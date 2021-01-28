<template>
    <div>
        <input type="text" :value="value" @input="handleInput"/>
    </div>
</template>
<script>
/**
 * 自定义输入组件
 * 需要它做两件事情：
 *      首先，它需要通过value属性获取初始值，
 *      然后不论何时只要value的值发生变化，它必须触发一个input事件
 */
export default {
    name: 'CustomInputUsername',
    props: {
        value: {
            type: String,
            required: true
        }
    },
    data () {
        return {
            numbers: 0
        }
    },
    methods: {
        handleInput(e) {
            const value = e.target.value.toLowerCase()
            // 如果value发生变化， input的值也要更新
            if (value !== e.target.value) {
                e.target.value = value
            }
            console.log(value)
            this.$emit('input', value)
        }
    }
}
</script>