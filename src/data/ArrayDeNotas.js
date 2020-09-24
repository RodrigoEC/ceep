export default class ArrayDeNotas {
    constructor() {
        this.notas = [];
        this._inscritos = [];
    }

    inscrever(func) {
        this._inscritos.push(func);
    }

    notifica() {
        this._inscritos.forEach(func => func(this.notas));
    }



    adicionaNota(titulo, texto, categoria) {
        const novaNota = new Nota(titulo, texto, categoria);
        this.notas.push(novaNota);
        this.notifica();
        console.log(this.notas);
    }

    apagarNota(indice) {
        this.notas.splice(indice, 1);
        this.notifica();
    }
}

class Nota {
    constructor(titulo, texto, categoria) {
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria;
    }
}