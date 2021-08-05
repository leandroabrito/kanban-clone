app.component('v-avatar', {

    props: ['src', 'size'],

    template: `
        <img 
            :src="src" 
            :width="size || 32" 
            :height="size || 32" 
            :style="style"
            class="rounded-circle" 
            alt="Avatar"
        >
    `,

    data () {
        return {
            style: 'border: 2px solid red'
        }
    },

    mounted () {
        this.logMyText()
    },

    methods: {

        logMyText () {
            console.log('Componente iniciado!')
        }

    }

})