var bool = true
var number = 1
var text = 'abc'
var object = {}
var array = []


// false: null, 0, '', false, undefined, NaN

// v-if="bool == true"
if (bool == true) {
    console.log('Ok')
}

// v-if="bool && number"
if (bool && number) {
    console.log('Ok')
}

// v-if="bool && text"
if (bool && text) {
    console.log('Ok')
}

// v-if="text"
if (text) {
    console.log('Ok')
}

// v-if="object + 1"
if (object + 1) {
    console.log('Ok: object')
}

console.log(true + true)
