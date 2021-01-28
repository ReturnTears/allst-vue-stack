<template>
    <div>
        <section class="blog-post">
            <header>
                <slot name="header"></slot>
                <p>作者 {{ auther.name }}</p>
            </header>
            <main>
                <slot></slot>
            </main>
        </section>
    </div>
</template>
<script>
/**
 * 自定义组件: 使用具名插槽
 */
export default {
    name: 'CustomSection',
    props: {
        auther: {
            type: Object,
            required: true
        }
    },
    data () {
        return {
           
        }
    },
    methods: {
        
    }
}
</script>