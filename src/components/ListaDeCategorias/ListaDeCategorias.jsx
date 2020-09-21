import React, { Component } from 'react';
import './estilo.css'

class ListaDeCategorias extends Component {
    _handleEventoInput(evento) {
        if (evento.key === "Enter") {
            const valorCategoria = evento.target.value;
            this.props.adicionarCategoria(valorCategoria);
        }
    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.props.categorias.map((categoria, index) => {
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