<template>
    <div>
        <span>{{ msg }}</span>
        <p>当前数字是:{{ number }}</p>
    </div>
</template>
<script>
/**
 * Prop验证
 */
export default {
    name: 'CustomPriceDisplay',
    props: {
        price: {
            type: Number,
            required: true,
            // 验证函数
            validator(value) {
                return value >= 0
            }
        },
        unit: {
            type: String,
            default: '$'
        },
        percentageDiscount: Number,
        rate: String,
        number: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            msg: `price:${this.price}, unit:${this.unit}, percentage:${this.percentageDiscount}`
        }
    }
}
</script>