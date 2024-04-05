import { tamañoPantalla } from "./mediaQueri.js"
import { bajarPanel, subirPaneles, programacionJuego } from "./paneles.js"

const d = document


d.addEventListener("DOMContentLoaded", e=> {
    subirPaneles(".panel button",".panel",".cartas")
    bajarPanel(".cerrar_juego", ".panel",".cartas",".total_parejas")
    tamañoPantalla("(max-width: 450px)", "main")
})

programacionJuego(".caja_carta", ".total_parejas")