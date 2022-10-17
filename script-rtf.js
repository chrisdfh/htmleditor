// https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand
const html = document.querySelector('#rtf-editor')
const salida = document.querySelector('#salida')
const botones = document.querySelectorAll('.boton')
document.execCommand("styleWithCSS")
botones.forEach(boton=>{
    boton.addEventListener('click',()=>{
        const command = boton.dataset["comando"]
        let argument = null
        if (command == "createLink" || command == "insertImage"){
            const msgUrl = command=="createLink" ? "de página WEB":"de imagen a insertar"
            argument = prompt("Ingrese URL " + msgUrl,"https://")
            //implementar file open para imagenes
        }
        if (command == "foreColor" || command == "backColor" || command == "hiliteColor"){
            argument = pedirColor();
            if (argument == null){return}
        }
        document.execCommand(command,false,argument)
        update()
    })
})

update()

function pedirColor(){
    // crear input del tipo color y devolverlo
}

function update(){
    const newHtml = html.innerHTML.replaceAll(/<\/[a-z]+\>/g, a=>{
        return a+"\n"//COLOCA EN LINEA NUEVA TODOS LOS CIERRES DE ELEMENTOS
    })
    salida.innerText = newHtml
}

html.addEventListener('keyup',()=>{
    update();
})