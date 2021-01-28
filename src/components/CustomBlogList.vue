<template>
    <div>
        <div v-for="post in posts" :key="post.title">
            <h1>{{ post.title }}</h1>
            <p>{{ post.summary }}</p>
            <!-- 在具名插槽元素中，就需要用一个段落元素将stars信息包裹起来，之后只要愿意，就可以覆盖掉它 -->
            <slot name="stars" :post="post">
                <p>观众喜爱指数: {{post.stars}}颗星</p>
            </slot>
        </div>
    </div>
</template>
<script>
/**
 * 自定义组件: 使用具名插槽和作用域插槽
 */
export default {
    name: 'CustomBlogList',
    props: {
        posts: {
            type: Array,
            required: true
        },
        post: Object
    },
    data () {
        return {
            numbers: 0
        }
    },
    methods: {
        
    }
}
</script>