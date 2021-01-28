<template>
    <div>
        <custom-demo-key v-for="(item, i) in  items" @click.native="items.splice(i, 1)" :key="i">
            {{ item }}
        </custom-demo-key>
    </div>
</template>
<script>
/**
 * 自定义组件：使用到了V-for
 */
import CustomDemoKey from '@/components/CustomDemoKey'
export default {
    name: 'CustomVFor',
    components: {
        CustomDemoKey
    },
    data () {
        return {
            items: ['one', 'two', 'three', 'four', 'five']
        }
    },
    methods: {
        
    }
}
</script>