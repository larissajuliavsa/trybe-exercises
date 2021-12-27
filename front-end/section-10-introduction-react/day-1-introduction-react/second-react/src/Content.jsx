import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends React.Component {
  render () {
    return (
      <>
        {conteudos.map((elementos) => (
          <main key={elementos.conteudo}>
            <h2>{`O conteúdo é ${elementos.conteudo}`}</h2>
            <p>{`status: ${elementos.status}`}</p>
            <p>{`bloco: ${elementos.bloco}`}</p>
          </main>
        ))}
      </>
    )
  }
}

export default Content