const valores = [];

function agregar() {
  const campo = document.getElementById('campo');

  if (campo && campo.value !== '') {
    valores.push(campo.value);
    campo.value = '';
  }

}



function mostrar() {
  valores.forEach(nombre => {
    const ul = document.getElementById('lista');
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(nombre));
    ul.appendChild(li);
  }
  )
  valores=[];
}
