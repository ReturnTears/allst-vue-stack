<template>
    <div class="user">
        <slot :user="user"></slot>
    </div>
</template>
<script>
/**
 * 自定义组件: 使用作用域插槽
 * 
 * 可以将数据传回slot组件，使父组件中的元素可以访问子组件中的数据
 * 任何传递给<slot>的属性都可以用slot-scope属性中定义的变量来获取
 */
export default {
    name: 'CustomUserData',
    data () {
        return {
           user: undefined
        }
    },
    mounted() {
        
    }
}
</script>