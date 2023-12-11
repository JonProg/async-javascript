//fetch('pessoas.json')
//  .then(resposta => resposta.json()) // retorna uma promise ?:fetch
//  .then(json => loadElementinPage(json));

axios('pessoas.json')
   .then(resposta => loadElementinPage(resposta.data)); // não retorna uma promise ?:xhr

function loadElementinPage(json) {
  const table = document.createElement('table');

  for(let pessoa of json) {
    const tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.innerHTML = pessoa.nome;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.innerHTML = pessoa.idade;
    tr.appendChild(td2);

    table.appendChild(tr);
  }

  const resultado = document.querySelector('.result');
  resultado.appendChild(table);
}
