/** 自定义混入对象 */
const userMixin = {
    data() {
        return {

        }
    },
    created() {},
    methods: {
        getUserInformation() {
            // return fetch('/api/user/${userId}')
            //     .then(res => res.json())
            return {name: 'Hello Mixin'}
        }
    }
}
export default userMixin