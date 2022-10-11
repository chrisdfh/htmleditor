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



    </body>
</html>`

html.value = plantillaHTML


html.addEventListener('keyup',()=>{
    if (html.value!=""){
        salida.srcdoc = html.value
    } else {
        salida.srcdoc = '<-- Escribe HTML'
        
    }
})