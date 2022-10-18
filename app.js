const escribir = () => {

    let titulo = document.getElementById('titulo')
    let parrafo = document.getElementById('parrafo')
    let lugar = document.getElementById('lugar')
    let limpiar = document.getElementById('limpiar')
    let color = document.getElementById('color')

    //ejemlo con appendChild()
    const agregarTitulo = () => {
        let texto = prompt( ' Cual es el titulo ' )
        let h1 = document.createElement("h1")
        let titulo = document.createTextNode( texto )
        h1.appendChild( titulo )
        h1.setAttribute('class' , "titulo")
        lugar.appendChild(h1)
     
        
    }

    //ejemplo con innerHTML
    const agregarParrafo = () => {
        let texto = prompt( 'cual es el parrafo')

        lugar.innerHTML += `
            <p class='parrafo'>${texto}</p>
        `
    }

    const limpiartodo = () => {
        lugar.innerHTML = ''
    }

    const cambiarColor = ( elemento ) => {
        document.body.style.backgroundColor = elemento
    }

    titulo.addEventListener( 'click' , agregarTitulo)
    parrafo.addEventListener( 'click' , agregarParrafo)
    limpiar.addEventListener( 'click' , limpiartodo )
    color.addEventListener( 'change' , (e) => cambiarColor(e.target.value))

}

escribir()


