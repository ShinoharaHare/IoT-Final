const vm = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data: () => ({
        loading: false,
        password: '',
        errorMsg: '',
        unlocked: false
    }),
    methods: {
        async unlock() {
            if (!this.password) {
                this.errorMsg = 'Required'
                return
            }
            this.loading = true
            try {
                this.errorMsg = ''
                await axios.post('/unlock', { password: this.password })
                this.unlocked = true
            } catch (error) {
                this.errorMsg = 'Fail to validate'
            } finally {
                this.loading = false
            }
        },
        afterEnter(e) {
            document.querySelector('.padlock').classList.add('unlock')
        }
    },
    mounted() {

    }
})