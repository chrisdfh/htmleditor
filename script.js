const html = document.querySelector('#html')
const salida = document.querySelector('.salida')

const plantillaHTML = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
    <h3>Hipervinculo con Texto</h3>
        <a target="_blank" href="https://www.google.com">
            Visita Google haciendo click aqui
        </a>
    </body>
    <br><br><br><br>
    <h3>Hipervinculo con imagen</h3>
        <a target="_blank" href="https://www.google.com">
            <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"/>
        </a>
    </body>

    <hr>
    <pre>Lo que coloques dentro de elemento 'a' será convertido en hipervínculo</pre>
</html>`


html.value = plantillaHTML

const update = ()=> {
    if (html.value!=""){
        salida.srcdoc = html.value
    } else {
        salida.srcdoc = '<-- Escribe HTML'
        
    }
}

html.addEventListener('keyup',()=>{
    update()
})

update();