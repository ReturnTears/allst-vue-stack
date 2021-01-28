<template>
    <p :style="{backgroudColor: color}"><slot></slot></p>
</template>
<script>
/**
 * 自定义组件：使用到了V-for
 */
import randomColor from '@/utils/randomColor'
export default {
    name: 'CustomDemoKey',
    data () {
        return {
            color: randomColor()
        }
    },
    methods: {
        
    }
}
</script>