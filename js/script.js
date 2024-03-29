//ES UN PROGRAMA PARA CARGAR MATERIAS, SE PUEDEN CARGAR CUANTAS DESEE EL USUARIO. PRIMERO SE INGRESA EL NOMBRE DE LA MATERIA Y DESPUES LAS NOTAS. LAS NOTAS CONSTAN DE DOS PARCIALES
//(UN RECUPERATORIO DE CADA UNO SI ES NECESARIO) Y LA NOTA DEL FINAL. DEPENDIENDO DE LAS NOTAS, SE APRUEBA, SE REGULARIZA O SE DESAPRUIEBA LA MATERIA. (SE APRUEBA CON UNA NOTA >= 6)
//LUEGO DE INGRESAR TODAS LAS MATERIAS EL USUARIO TIENE LA OPCION DE PREGUNTAR POR EL PROMEDIO DE CUALQUIER MATERIA(PUEDE SER MAS DE UNA) QUE YA HAYA INGRESADO EL USUARIO
function cargarMateria(userMaterias, acc){
    let userPromedio

    userMaterias[acc] = {
        Materia: prompt(("MATERIA: ")),
        NotaUno: parseFloat(prompt("NOTA 1: ")),
        NotaDos: parseFloat(prompt("NOTA 2: ")),
        NotaTres: 0,
        NotaCuatro: 0,
        NotaCinco: 0
    }

    userMaterias[acc].Materia = userMaterias[acc].Materia.toUpperCase()
    userPromedio = Math.round((Math.round(userMaterias[acc].NotaUno) + Math.round(userMaterias[acc].NotaDos)) / 2)
    console.log(userMaterias[acc].Materia)
    console.log("NOTA 1: " + Math.round(userMaterias[acc].NotaUno))
    console.log("NOTA 2: " + Math.round(userMaterias[acc].NotaDos))
    if(userPromedio >= 8){
        alert("PROMOCIONASTE " + userMaterias[acc].Materia + " CON UN PROMEDIO DE " + Math.round(userPromedio) )
    }else if(userMaterias[acc].NotaUno >= 6 && userMaterias[acc].NotaDos >= 6){
        userMaterias[acc].NotaTres = parseFloat(prompt("NOTA FINAL: "))
        console.log("NOTA FINAL: " + Math.round(userMaterias[acc].NotaTres))
        if(userMaterias[acc].NotaTres >= 6){
            alert("APROBASTE " + userMaterias[acc].Materia + " CON UN " + Math.round(userMaterias[acc].NotaTres))
        }else{
            alert("DESAPROBASTE " + userMaterias[acc].Materia + " CON UN " + Math.round(userMaterias[acc].NotaTres))
            alert("TE ESPERAMOS EN LA PROXIMA FECHA DE FINAL")
        }
    }else if(userMaterias[acc].NotaUno < 6 && userMaterias[acc].NotaDos < 6){
        userMaterias[acc].NotaTres = parseFloat(prompt("RECUPERATORIO NOTA 1: "))
        userMaterias[acc].NotaCuatro = parseFloat(prompt("RECUPERATORIO NOTA 2: "))
        console.log("RECUPARATORIO NOTA 1: " + Math.round(userMaterias[acc].NotaTres))
        console.log("RECUPERATORIO NOTA 2: " + Math.round(userMaterias[acc].NotaCuatro))
        if(userMaterias[acc].NotaTres < 6 || userMaterias[acc].NotaCuatro < 6){
            alert("DEBES APROBAR AMBOS PARCIALES PARA RENDIR FINAL. DEBES RECURSAR LA MATERIA")
        }else{
            userMaterias[acc].NotaCinco = parseFloat(prompt("NOTA FINAL: "))
            console.log("NOTA FINAL: " + Math.round(userMaterias[acc].NotaCinco))
            if(Math.round(userMaterias[acc].NotaCinco >= 6)){
                alert("APROBASTE " + userMaterias[acc].Materia + " CON UN " + Math.round(userMaterias[acc].NotaCinco))
            }else{
                alert("DESAPROBASTE " + userMaterias[acc].Materia + " CON UN " + Math.round(userMaterias[acc].NotaCinco))
                alert("TE ESPERAMOS EN LA PROXIMA FECHA DE FINAL")
            }
        }
    }else if(userMaterias[acc].NotaUno < 6){
        userMaterias[acc].NotaTres = parseFloat(prompt("RECUPERATORIO NOTA 1: "))
        console.log("RECUPARATORIO NOTA 1: " + Math.round(userMaterias[acc].NotaTres))
        if(Math.round(userMaterias[acc].NotaTres) >= 6){
            userMaterias[acc].NotaCuatro = parseFloat(prompt("NOTA FINAL: "))
            console.log("NOTA FINAL: " + Math.round(userMaterias[acc].NotaCuatro))
            if(Math.round(userMaterias[acc].NotaCuatro) >= 6){
                alert("APROBASTE " + userMaterias[acc].Materia + " CON UN " + Math.round(userMaterias[acc].NotaCuatro))
            }else{
                alert("DESAPROBASTE " + userMaterias[acc].Materia + " CON UN " + Math.round(userMaterias[acc].NotaCuatro))
                alert("TE ESPERAMOS EN LA PROXIMA FECHA DE FINAL")
            }
        }else{
            alert("DEBES APROBAR AMBOS PARCIALES PARA RENDIR FINAL. DEBES RECURSAR LA MATERIA")
        }
    }else if(userMaterias[acc].NotaDos < 6){
        userMaterias[acc].NotaTres = parseFloat(prompt("RECUPERATORIO NOTA 2: "))
        console.log("RECUPARATORIO NOTA 2: " + Math.round(userMaterias[acc].NotaTres))
        if(Math.round(userMaterias[acc].NotaTres) >= 6){
            userMaterias[acc].NotaCuatro = parseFloat(prompt("NOTA FINAL: "))
            console.log("NOTA FINAL: " + Math.round(userMaterias[acc].NotaCuatro))
            if(Math.round(userMaterias[acc].NotaCuatro) >= 6){
                alert("APROBASTE " + userMaterias[acc].Materia + " CON UN " + Math.round(userMaterias[acc].NotaCuatro))
            }else{
                alert("DESAPROBASTE " + userMaterias[acc].Materia + " CON UN " + Math.round(userMaterias[acc].NotaCuatro))
                alert("TE ESPERAMOS EN LA PROXIMA FECHA DE FINAL")
            }
        }else{
            alert("DEBES APROBAR AMBOS PARCIALES PARA RENDIR FINAL. DEBES RECURSAR LA MATERIA")
        }
    }
}

function mostrarPromedio(userMaterias, userOpc, acc){
    let acm = 2
    let promedio = 0
    for(let i = 0; i < 1; i++){
        if(userMaterias[i].Materia == userOpc){
            promedio += Math.round(userMaterias[i].NotaUno)
            promedio += Math.round(userMaterias[i].NotaDos)
            if(userMaterias[i].NotaTres > 0){
                acm++
                promedio += Math.round(userMaterias[i].NotaTres)
                console.log("ACM: " + acm)
                if(userMaterias[i].NotaCuatro > 0){
                    acm++
                    promedio += Math.round(userMaterias[i].NotaCuatro)
                    if(userMaterias[i].NotaCinco > 0){
                        acm++
                        promedio += Math.round(userMaterias[i].NotaCinco)
                    }
                }
            }
        }
    }
    promedio = Math.round(promedio / acm)
    console.log(userOpc)
    console.log("PROMEDIO => " + promedio)
}

let userMaterias = []
let userOpc = "S"
let acc = 0

while(userOpc == "S"){
    cargarMateria(userMaterias, acc)
    acc++
    userOpc = prompt("DESEA INGRESAR OTRA MATERIA(S/N): ")
}

userOpc = "S"
alert("PARA LO SIGUIENTE INGRESE EL NOMBRE DE LA MATERIA O 'N'")
while(userOpc != "N"){
    userOpc = prompt("DESEA SABER EL PROMEDIO DE UNA MATERIA? ")
    userOpc = userOpc.toUpperCase()
    if(userOpc != "N"){
        mostrarPromedio(userMaterias, userOpc, acc)
    }
}