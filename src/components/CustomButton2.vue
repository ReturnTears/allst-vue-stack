<template>
    <div>
        <button class="custom-button" @click="handleClick">
            <slot><span class="default-text">默认按钮文本</span></slot>
        </button>
    </div>
</template>
<script>
/**
 * 自定义按钮组件:使用插槽（slot）将内容传递给组件
 */
export default {
    name: 'CustomButton',
    data () {
        return {
            clicks: 0
        }
    },
    methods: {
        handleClick() {
            this.clicks++
            this.$emit('count', this.clicks)
            console.log('单击了:' + this.clicks + '次!')
        }
    }
}
</script>