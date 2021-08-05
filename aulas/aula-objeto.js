var objeto = {
    
    variavel: 'valor',

    mostrarVariavel () {
        console.log(this.variavel) // valor
    },

    setVariavel (valor) {
        this.variavel = valor
    }

}

// objeto.mostrarVariavel() // valor
// 
// objeto.variavel = 'diferente'
// objeto.mostrarVariavel() // diferente
// 
// objeto.setVariavel('novo valor')
// objeto.mostrarVariavel() // novo valor

// Object Factory
function CreateApp(props) {
    var objProps = props.data()
    var objeto = {
        ...objProps,
        ...props.methods
    }

    return objeto
}

var novoObjeto = CreateApp({

    data () {
        return {
            text: 'Texto padrão'
        }
    },

    methods: {
        ola () {
            console.log(this.text)
        }
    }

})

// console.log(novoObjeto)
// novoObjeto.ola()

function objetoFn () {
    console.log(this.valor)
}

// console.log(typeof objetoFn)
// objetoFn.prototype.valor = 123
// console.log(new objetoFn())

var texto = 'abc'

// não funcionou
// String.prototype.removeA = function () {
//     this.replace('a', '')
//     return this
// }
// 
// console.log(typeof texto)
// console.log(texto.toUpperCase())
// console.log(texto.removeA())
