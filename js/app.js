


const verUsuarios = (todos) => {
    console.log(todos)
}


const peticion  = fetch('/js/productos.json')

peticion.then(res => res.json()).then(verUsuarios)




















