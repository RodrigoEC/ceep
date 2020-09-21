import React, { Component } from 'react';
import "./estilo.css";
import { ReactComponent as DeleteIcon } from '../../assets/img/delete.svg'

export default class CardNota extends Component {

	_apagar() {
		const indice = this.props.indice
		this.props.apagarNota(indice);
	}


	render() {
		return (
		  <section className="card-nota">
			<header className="card-nota_cabecalho">
			  <h3 className="card-nota_titulo">{this.props.titulo}</h3>
			  <DeleteIcon onClick={this._apagar.bind(this)} />
			</header>
			<p className="card-nota_texto">{this.props.texto}</p>
		  </section>
		);
	  }
}