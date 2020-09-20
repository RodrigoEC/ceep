import React, { Component } from 'react';

export default class ListaDeNotas extends Component {

	render() {
		return (
			<ul>
                {Array.of('Trabalho', 'Trabalho', 'Estudos').map((categoria) => {
                    return(
                    <li>
                        <div>{categoria}</div>
                        <CardNota/>
                    </li>
                    );
                })}
			</ul>
		);
	};
}

export class CardNota extends Component {
	render() {
		return (
			<section>
				<header>
					<h3>Título</h3>
				</header>
				<p>Escreva sua nota</p>
			</section>
		);
	};
}