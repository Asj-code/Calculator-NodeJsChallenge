
class Operaciones {
    constructor() {
    }

    sumar(a, b) {
        return a + b;
    }

    restar(a, b) {
        return a - b;
    }

    multiplicar(a, b) {
        return a * b;
    }

    dividir(a, b) {
        if(b == 0) {
            return 0;
        }else {
            return a / b;
        }
        
    }

}

module.exports = Operaciones;




