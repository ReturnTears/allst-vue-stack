<template>
    <div class="color-preview" :style="style"></div>
</template>
<script>
/**
 * 组件传递数据
 */
export default {
    name: 'CustomColorPreview',
    props: ['color'],
    computed: {
        style() {
            return { backgroundColor: this.color }
        }
    }
}
</script>
<style scoped>
    .color-preview {
        width: 66px;
        height: 66px;
        position:relative;
        border: 1px solid palevioletred;
    }
</style>