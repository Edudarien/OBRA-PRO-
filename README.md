# ObraPro V8.4 — logo integrado

- Logo principal incrustado directamente en `index.html` para que se vea aun si falla una ruta de imagen.
- Logo visible en la franja azul principal y también en las pantallas internas.
- Marca de agua más visible.
- Service worker desactivado en esta versión para evitar que el navegador muestre una versión antigua en caché.
- Fórmulas y cálculos conservados.

Para probar: descomprime el ZIP en una carpeta nueva y abre `index.html`.

## V8.5 - Materiales
- Campo Cantidad en la tabla de materiales.
- Total automático por material (cantidad × precio unitario).
- Total general de materiales seleccionados.
- Cantidades guardadas localmente junto con los precios.


## V8.6 - Materiales con autoguardado
- Cantidad editable con flechas y cálculo inmediato de cantidad × precio.
- Total por material y total general.
- Precio y cantidad se autoguardan al modificarse.
- Formulario para agregar materiales nuevos con nombre, unidad, precio y cantidad.
- Los materiales nuevos quedan guardados y pueden eliminarse.
- El respaldo ahora incluye las cantidades de materiales.


V8.7 Materiales ordenados: categorías plegables, buscador, filtro por cantidad y total general visible.


## V8.8
- Precio y Cantidad aceptan escritura directa.
- Controles ▲/▼ visibles para subir o bajar valores.
- Cantidades admiten decimales cuando la unidad lo requiere.
- Se mantiene cálculo automático y autoguardado.


## V8.9
- Materiales simplificados: Material, Precio, Cantidad y Total por material.
- Se retiraron Unidad/Presentación y Categoría del formulario de alta rápida.
- Los materiales nuevos se guardan automáticamente en la categoría Otros.
- Total general permanece al final de la sección.
