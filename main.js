const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        removeFromCart() {
            if(this.cart.length === 0) {
                alert('o carrinho está vazio')
            }
            this.cart.pop()
        }
    }
})
