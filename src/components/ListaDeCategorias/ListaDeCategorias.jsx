import React, { Component } from 'react';
import './estilo.css'

class ListaDeCategorias extends Component {

    constructor() {
        super();
        this.state = { categorias: [] }

        this._novasCategorias = this._novasCategorias.bind(this)
    }
    
    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias);
    }

    componentWillUnmount() {
        this.props.categorias.desinscrever(this._novasCategorias);
    }
    
    _novasCategorias(categorias) {
        this.setState({...this.state, categorias});
    }

    _handleEventoInput(evento) {
        if (evento.key === "Enter") {
            const valorCategoria = evento.target.value;
            this.props.categorias.adicionaCategoria(valorCategoria);
        }
    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.state.categorias.map((categoria, index) => {
                        return (
                            <li key={index} className="lista-categorias_item">
                                {categoria}
                            </li>
                        )
                    })}

                </ul>
                <input
                    type='text'
                    placeholder='new Category'
                    className="lista-categorias_input"
                    onKeyUp={this._handleEventoInput.bind(this)}
                ></input>
            </section>
        );
    }
}

export default ListaDeCategorias;