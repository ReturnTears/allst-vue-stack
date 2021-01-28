<template>
    <div>
        <div v-if="user">姓名: {{ user.name }}</div>
    </div>
</template>
<script>
/**
 * 自定义组件: 使用Mixin
 */
import userMixin from '@/utils/index'
export default {
    name: 'CustomUserData',
    mixins: [userMixin],
    props: {
        userId: {
            type: Number
        }
    },
    data () {
        return {
           user: undefined
        }
    },
    mounted() {
        // console.log(this.userId)
        if (this.userId) {
            // this.getUserInformation(this.userId).then(user => this.user = user)
            this.user = this.getUserInformation(this.userId)
        } else {
            this.user = {name: 'KangKang'}
        }
    }
}
</script>