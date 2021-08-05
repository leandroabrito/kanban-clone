app.component('v-card-header', {

    props: ['title'],

    template: `
        <!-- Column-Header  -->
        <div class="card-header">
            <!-- Column-Dots  -->
            <div class="card-actions float-right">
                <div class="dropdown show">
                    <a href="#" data-toggle="dropdown" data-display="static">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-horizontal align-middle">
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="19" cy="12" r="1"></circle>
                            <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                    </a>

                    <div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
            </div>
            <!-- Column-Title  -->
            <h5 class="card-title">{{title}}</h5>
            <!-- Column-Subtitle  -->

            <slot></slot>
            <!--<h6 class="card-subtitle text-muted">Nam pretium turpis et arcu. Duis arcu tortor.</h6>-->
        </div>
    `,

    // data () {
    //     return {
    //         style: 'border: 2px solid red'
    //     }
    // },

    // mounted () {
    //     this.logMyText()
    // },

    // methods: {
    //     logMyText () {
    //         console.log('Componente iniciado!')
    //     }
    // }

})