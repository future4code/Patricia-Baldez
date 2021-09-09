import React from 'react';
import './CardGrande.css'

function CardGrande(props) {
    return (
        <div className="bigcard-container">
            <img src={ props.imagem } />
            <img src={ props.imagem1 } />
            <img src={ props.imagem2 } />
            <img src={ props.imagem3 } />
            <img src={ props.imagem4 } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
                <p>{ props.fone }</p>
                <p>{ props.endereco }</p>
            </div>
        </div>
    )
}

export default CardGrande;