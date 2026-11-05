# CLAUDE.md

Plantilla de catálogo para dietéticas (Astro + islas Preact + Tailwind v4). Instalación, estructura, formato de la planilla, deploy y cómo adaptarla a un cliente: ver README.md.

## Convenciones
- Texto visible en español rioplatense; código, identificadores y comentarios en inglés.
- Todos los datos del negocio viven en src/config/site.ts, marcados con PLACEHOLDER. Nunca inventar datos reales.
- Sin precios visibles: el pedido se consulta por WhatsApp a la sucursal que elige el usuario (site.branches).
- Nada de innerHTML con datos de productos o del usuario. Único set:html permitido: íconos SVG estáticos.
- Enlaces externos con rel="noopener noreferrer". La CSP está en astro.config.mjs (security.csp); si se agrega un iframe o recurso externo, sumarlo ahí.
- Rutas internas siempre con href() de src/lib/url.ts, por el BASE_PATH de GitHub Pages.

## Cantidades del carrito
- Se guardan en la unidad base (g, ml o piezas) en localStorage "carrito:v2". Lógica en src/lib/amount.ts: pasos de 100 g, mínimo min(100, envase), máximo 10 kg o 99 unidades.
- Si cambia la forma de CartItem, subir la versión de la key para no leer datos viejos.

## Carruseles (src/pages/index.astro)
- Se mueven con requestAnimationFrame y translate3d con posición float. No usar scrollLeft: redondea a píxeles enteros y el movimiento sale a saltos.
- Ítems clonados (aria-hidden, tabindex -1) para el loop infinito. data-carousel="reverse" invierte el sentido.
- Pausan con hover, pointerdown/arrastre y foco por teclado (solo :focus-visible, porque el foco por mouse hacía saltar la tira); reanudan a los 2,5 s.
- Links e imágenes con draggable=false y la tira con select-none: el drag nativo disparaba pointercancel y rompía el arrastre con mouse. Después de arrastrar se cancela el click en fase de captura.

## Verificación
- Antes de cerrar un cambio: npm test, npx astro check, npm run build y npm run check:links.
- El panel de preview oculto no ejecuta rAF ni smooth scroll: las animaciones se verifican con Edge headless controlado por CDP (--remote-debugging-port, Input.dispatchMouseEvent).
- Favicons: si el navegador sigue mostrando el viejo es caché; cambiar el nombre del archivo en lugar de pelearse con la caché.
