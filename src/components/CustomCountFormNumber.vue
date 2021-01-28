<template>
    <div>
        <p>current number is {{ nums }}</p>
    </div>
</template>
<script>
/**
 * 自定义组件：数据流和.sync修饰符
 */
export default {
    name: 'CustomButton',
    props: {
        nums: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            msg: this.nums
        }
    },
    // 将触发事件的逻辑封装到计算属性中会有利于代码的组织
    // computed: {
    //     localNumber: {
    //         get() {
    //             return this.nums
    //         },
    //         set(val) {
    //             this.$emit('update:nums', val)
    //         }
    //     }
    // },
    mounted() {
        setInterval(() => {
            this.$emit('update:nums', this.nums + 1)
        }, 1000)
    }
}
</script>