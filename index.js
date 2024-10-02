// 3. LA TIENDA
// Una tienda vende 3 productos: Producto A, Producto B y Producto C. Al principio de la
// jornada se conoce el precio de cada producto. Conociendo la cédula de cada cliente, el código
// del producto que lleva y la cantidad, se requiere:
// a) Calcular el monto a pagar por cada cliente.
// b) También debe reportarse: cuál artículo se vendió más y el monto total vendido.
// DATOS DE PRUEBA
//  Precio Producto A: $10.00
//  Precio Producto B: $5.00
//  Precio Producto C: $20.00
// Cédula Producto Cantidad Monto pagar
// 555 C 3 $60.00
// 222 B 5 $25.00
// 333 A 10 $100.00
// 111 B 10 $50.00
//  El artículo que se vendió más fue el Producto B
//  Se vendió un total de $235.00

import Controlador from "./classes/controlador.js";

document.addEventListener("DOMContentLoaded",()=>{

    new Controlador()
})

