const form = document.getElementById('novoItem')
const lista = document.getElementById('lista')
const itens = JSON.parse(localStorage.getItem('itens')) || []

itens.forEach( (element) => {
    criaElemento(element)
})

form.addEventListener("submit", (event) => {
    event.preventDefault() // prevent the page to reload when 'submit' is clicked

    const nome = event.target.elements['nome']
    const quantidade = event.target.elements['quantidade']

    const existe = itens.find(element => element.nome.toLowerCase() === nome.value.toLowerCase());

    console.log(existe)


    const itemAtual = {
        'nome': nome.value,
        'quantidade': quantidade.value
    }

    if (itemAtual.nome.trim() !== '') {
        if (existe) {
            itemAtual.id = existe.id
            atualizaElemento(itemAtual)
            itens[itens.findIndex(element => element.id === existe.id)] = itemAtual
    
        } else {
            itemAtual.id = itens[itens.length -1] ? (itens[itens.length -1]).id + 1: 0 // operador ternario
            criaElemento(itemAtual)
            itens.push(itemAtual)
        }
    } else {
        alert('O nome não pode ser vazio');
    }

    // storage new itens in web 
    localStorage.setItem('itens', JSON.stringify(itens))

    // clean form:
    form.reset()
})

// This function creates a new list item element with a name and quantity
function criaElemento(item) {
  
    // Create a new list item element
    const novoItem = document.createElement('li');
    // Add the 'item' class to the new list item element
    novoItem.classList.add('item');
  
    // Create a new 'strong' element to hold the quantity
    const numeroItem = document.createElement('strong');
    // Set the inner HTML of the 'strong' element to the quantity value
    numeroItem.innerHTML = item.quantidade;
    
    // if item already exists in list, this id will help sum the new quantity
    numeroItem.dataset.id = item.id

    // Append the 'strong' element to the new list item element
    novoItem.appendChild(numeroItem);
  
// Add the 'nome' to the new list item element
    const nomeItem = document.createTextNode(item.nome.toLowerCase());
    nomeItem.textContent = nomeItem.textContent.charAt(0).toUpperCase() + nomeItem.textContent.slice(1);
    novoItem.appendChild(nomeItem);
    
    novoItem.appendChild(buttonDelete(item.id))

    // Append the new list item element to the list
    lista.appendChild(novoItem);

  }

  function atualizaElemento(item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}

function buttonDelete(id) {
    const elementButton = document.createElement('button')
    elementButton.innerText = 'x'

    elementButton.addEventListener('click', function() {
        deleteElement(this.parentNode, id)
    })

    return elementButton
}

function deleteElement(tag, id) {
    tag.remove()

    itens.splice(itens.findIndex(element => element.id === id), 1)

    localStorage.setItem('itens', JSON.stringify(itens))
}