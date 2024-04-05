const d = document

export function tamañoPantalla(mq,main) {
    const puntoCambio = window.matchMedia(mq)
    const $main = d.querySelector(main)

    const responsivo = (e) => {
        if (e.matches) {
            $main.innerHTML = `
            <div class="informacion-mobil">
                <h2>Advertencia</h2>
                <br>
                <br>
                <p>Juego disponible solo en tablet y Pc. <br>(Pantallas con un ancho minimo de 450px)</p>
                <br>
                <br>
                <button class="btn-panel cargar-pagina">Cargar pagina</button>
            </div>
            `
            d.addEventListener("click", e=> {
                if(e.target.matches(".cargar-pagina")){
                    location.reload()
                }
            })
        } else {

        }
    }

    puntoCambio.addEventListener("change", responsivo)
    responsivo(puntoCambio)
}
