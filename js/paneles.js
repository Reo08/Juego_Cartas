const d = document

let templateCartas = ""
let $clonTemplate= ""
let totalCartas =""
let $btnPanel = ""
let arrayRotar = []
let j = 20


let sumadorParejas = 0
export function subirPaneles(btns, paneles, contCartas){
    const $paneles = d.querySelectorAll(paneles)
    const $contCartas = d.querySelector(contCartas)
    


    d.addEventListener("click",async  e=> {
        if(e.target.matches(btns)){

            $btnPanel = e.target
            e.target.disabled = true
            $paneles.forEach(el => {
                el.classList.add("active")
            })

            let id = e.target.dataset.id

            if(id === "panel_pokemon"){

                $contCartas.innerHTML = `<div class="loader"></div>`
                try {
                    let res = await fetch("https://pokeapi.co/api/v2/pokemon/")
                    let json = await res.json()
                    
    
                    if(!res.ok) throw {status: res.status, statusText: res.statusText}
    
                    for(let i = 0;i<json.results.length;i++){
                        try {
                            let res = await fetch(json.results[i].url) 
                            let pokemon = await res.json()

                            if(!res.ok) throw {status: res.status, statusText: res.statusText}

                        

                            templateCartas = `
                            <div class="caja_carta">
                                <div class="carta" data-id="${pokemon.id}" data-rotar="${i+1}">
                                    <div class="frente">
                                        <img src="${pokemon.sprites.front_default}" alt="">
                                    </div>
                                    <div class="atras">
                                        <div class="liston"></div>
                                    </div>
                                </div>
                                <button class="tapa_carta" data-id="${pokemon.id}" data-rotar="${i+1}"></button>
                            </div>
                                
                            `
                            arrayRotar.push(templateCartas)

                            $clonTemplate = `
                            <div class="caja_carta">
                                <div class="carta" data-id="${pokemon.id}" data-rotar="${j+1}">
                                    <div class="frente">
                                        <img src="${pokemon.sprites.front_default}" alt="">
                                    </div>
                                    <div class="atras">
                                        <div class="liston"></div>
                                    </div>
                                </div>
                                <button class="tapa_carta" data-id="${pokemon.id}" data-rotar="${j+1}"></button>
                            </div>
                                
                            `
                            arrayRotar.push($clonTemplate)
                            j++
                        }catch(err) {
                            console.log(err)
                        }
                    }
                    function arrayAleatorio(array) {// funcion de sorteo aleatorio de un arrray

                        function compararRandom(a, b) {
                            return Math.random() - 0.5;
                        }
                      
                        array.sort(compararRandom);
                    }
                    arrayAleatorio(arrayRotar);

                    arrayRotar.forEach(el => {
                        totalCartas += el
                    })
                    $contCartas.innerHTML = totalCartas


                    
                } catch (error) {
                    console.log(error)
                }
            }

            if(id === "panel_rick"){
                $contCartas.innerHTML = `<div class="loader"></div>`
                try {
                    let res = await fetch("https://rickandmortyapi.com/api/character")
                    let json = await res.json()

                    if(!res.ok) throw {status: res.status, statusText: res.statusText}

                    for(let i = 0; i< json.results.length; i++) {
                        templateCartas = `
                        <div class="caja_carta">
                            <div class="carta" data-id="${json.results[i].id}" data-rotar="${i+1}">
                                <div class="frente">
                                    <img class="img_rick" src="${json.results[i].image}" alt="">
                                </div>
                                <div class="atras">
                                    <div class="liston"></div>
                                </div>
                            </div>
                            <button class="tapa_carta" data-id="${json.results[i].id}" data-rotar="${i+1}"></button>
                        </div>
                            
                        `
                        arrayRotar.push(templateCartas)

                        $clonTemplate = `
                        <div class="caja_carta">
                            <div class="carta" data-id="${json.results[i].id}" data-rotar="${j+1}">
                                <div class="frente">
                                    <img class="img_rick" src="${json.results[i].image}" alt="">
                                </div>
                                <div class="atras">
                                    <div class="liston"></div>
                                </div>
                            </div>
                            <button class="tapa_carta" data-id="${json.results[i].id}" data-rotar="${j+1}"></button>
                        </div>
                            
                        `
                        arrayRotar.push($clonTemplate)
                        j++
                    }
                    function arrayAleatorio(array) {// funcion de sorteo aleatorio de un arrray

                        function compararRandom(a, b) {
                            return Math.random() - 0.5;
                        }
                      
                        array.sort(compararRandom);
                    }
                    arrayAleatorio(arrayRotar);

                    arrayRotar.forEach(el => {
                        totalCartas += el
                    })
                    $contCartas.innerHTML = totalCartas

                } catch (error) {
                    console.log(error)
                }
            }

            if(id === "panel_coctel"){
                $contCartas.innerHTML = `<div class="loader"></div>`
                try {
                    let res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
                    let json = await res.json()

                    if(!res.ok) throw {status:res.status, statusText:res.statusText}

                    console.log(json.drinks[0])
                    for(let i = 0; i <20; i++){
                        templateCartas = `
                        <div class="caja_carta">
                            <div class="carta" data-id="${json.drinks[i].idDrink}" data-rotar="${i+1}">
                                <div class="frente">
                                    <img class="img_rick" src="${json.drinks[i].strDrinkThumb}" alt="">
                                </div>
                                <div class="atras">
                                    <div class="liston"></div>
                                </div>
                            </div>
                            <button class="tapa_carta" data-id="${json.drinks[i].idDrink}" data-rotar="${i+1}"></button>
                        </div>
                            
                        `
                        arrayRotar.push(templateCartas)

                        $clonTemplate = `
                        <div class="caja_carta">
                            <div class="carta" data-id="${json.drinks[i].idDrink}" data-rotar="${j+1}">
                                <div class="frente">
                                    <img class="img_rick" src="${json.drinks[i].strDrinkThumb}" alt="">
                                </div>
                                <div class="atras">
                                    <div class="liston"></div>
                                </div>
                            </div>
                            <button class="tapa_carta" data-id="${json.drinks[i].idDrink}" data-rotar="${j+1}"></button>
                        </div>
                            
                        `
                        arrayRotar.push($clonTemplate)
                        j++
                    }
                    function arrayAleatorio(array) {// funcion de sorteo aleatorio de un arrray

                        function compararRandom(a, b) {
                            return Math.random() - 0.5;
                        }
                      
                        array.sort(compararRandom);
                    }
                    arrayAleatorio(arrayRotar);

                    arrayRotar.forEach(el => {
                        totalCartas += el
                    })
                    $contCartas.innerHTML = totalCartas

                } catch (error) {
                    console.log(error)
                }
            }
        }
    })

}



export function bajarPanel(btn, paneles, conCartas,contadorParejas){
    const $btn = d.querySelector(btn)
    const $paneles = d.querySelectorAll(paneles)
    const $contCartas = d.querySelector(conCartas)
    const $contadorParejas = d.querySelector(contadorParejas)

    d.addEventListener("click", e=>{
        if(e.target === $btn){
            $paneles.forEach(el => {
                el.classList.remove("active")
                
            })
            console.log("aqui poner para borrar cartas")
            $contCartas.innerHTML = ""
            templateCartas = ""
            $clonTemplate = ""
            totalCartas = ""
            j = 20
            arrayRotar.splice(0,arrayRotar.length)
            $btnPanel.disabled = false
            sumadorParejas = 0
            $contadorParejas.textContent = "0/20"
        }
    })
}


export function programacionJuego(cajaCarta,totalParejas){
    const $cajaCarta = d.querySelectorAll(cajaCarta)
    const $totalParejas = d.querySelector(totalParejas)
    
    let cartas = []
    let arrayBtnTapa = []
    let clicks = 0

    d.addEventListener("click", e=> {
        if(e.target.matches(cajaCarta) || e.target.matches(`${cajaCarta} *`)){
            const $carta = d.querySelectorAll(".carta")
            
            clicks++

            $carta.forEach(el => {
                if(el.dataset.rotar === e.target.dataset.rotar) {
                    el.classList.add("rotar")

                    if(clicks ===1){
                        e.target.disabled = true
                        arrayBtnTapa.push(e.target)
                        cartas.push(el)
                        return
                    } 
                    if(clicks === 2){
                        e.target.disabled = true
                        cartas.push(el)
                        arrayBtnTapa.push(e.target)
                        if(cartas.length > 1){

                            if(cartas[0].dataset.id === cartas[1].dataset.id){
                                setTimeout(()=> {
                                    sumadorParejas++
                                    $totalParejas.textContent = sumadorParejas + "/20"
                                    console.log("son iguales los id e i ngresa")
                                    cartas[0].classList.add("quitar_carta")
                                    cartas[1].classList.add("quitar_carta")
                                    cartas.splice(0,cartas.length)
                                    arrayBtnTapa.splice(0,arrayBtnTapa.length)
                                    clicks = 0
    
                                },500)
                            }
                            if(cartas[0].dataset.id !== cartas[1].dataset.id){
                                setTimeout(()=> {
                                    arrayBtnTapa[0].disabled = false
                                    arrayBtnTapa[1].disabled = false
                                    cartas[0].classList.remove("rotar")
                                    cartas[1].classList.remove("rotar")

                                },800)
                            }
                        }
                        return
                    }
                    if(clicks ===3){
                        e.target.disabled = true
                        cartas[0].classList.remove("rotar")
                        cartas[1].classList.remove("rotar")
                        cartas.splice(0,cartas.length)
                        arrayBtnTapa.splice(0,arrayBtnTapa.length)
                        arrayBtnTapa.push(e.target)
                        cartas.push(el)
                        clicks = 1
                        return
                    }
                }
            })
            
        }
    })

    
}