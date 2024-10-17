> Repositorio: https://github.com/oatc-1003/L24.1.p.c2.Proyectico.27844065--LA-TIENDA.git
---
### Enunciado

3. LA TIENDA
Una tienda vende 3 productos: Producto A, Producto B y Producto C. Al principio de la
jornada se conoce el precio de cada producto. Conociendo la cédula de cada cliente, el código
del producto que lleva y la cantidad, se requiere:
a) Calcular el monto a pagar por cada cliente.
b) También debe reportarse: cuál artículo se vendió más y el monto total vendido.

DATOS DE PRUEBA
 Precio Producto A: $10.00
 Precio Producto B: $5.00
 Precio Producto C: $20.00

 El artículo que se vendió más fue el Producto B
 Se vendió un total de $235.00

### Análisis

- Clase: mTienda
	- Atributos:
		- precioProductoA
		- precioProductoB
		- precioProductoC
		- cantidadProductoMasVendido
        - nombreProductoMasVendido
        - acuVentas
	- Métodos:
		- procesarVenta
		- productoMasVendido
		- totalVentas
- Clase: mVenta
	- Atributos:
		- precioProductoA
		- precioProductoB
		- precioProductoC
        - nombreProducto
        - cantidadProducto
        - cedula
        - montoTotal
	- Métodos:
		- set nombreProducto(np){this._nombreProducto=np.toUpperCase()}
		- get nombreProducto(){this._nombreProducto}
		- .
		- .
		- .
		- calcMontoTotal

- Clase: vTienda
	- Métodos:
		- insertarVenta
		- actualizarTiendaEstadisticas
		- mostrarTiendaTabla
		- ocultarTiendaTabla
- Clase: vVenta
	- Métodos:
		- mostrarVentaFormulario
		- ocultarVentaFormulario
		- limpiarVentaFormulario

#### Tabulación

| Cedula  | Producto | Cantidad | Monto paga |
| ------- | -------- | -------- | ---------- |
| 555     | C        |  3       | 60         |
| 222     | B        |  5       | 25         |
| 333     | A        |  10      | 100        |
| 111     | B        |  10      | 50         |
#### Requerimientos

- a: precioProducto * cantidadProducto
- b: proceso universal de Mayor en general