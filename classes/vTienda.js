export default class vTienda{
    constructor(controlador){
        this.$precioProductoA=prompt("Cual es el precio del producto A?")
        this.$precioProductoB=prompt("Cual es el precio del producto B?")
        this.$precioProductoC=prompt("Cual es el precio del producto C?")
        this.$vista=document.getElementById("SALIDAS")
        this.$tiendaTabla=document.getElementById("TIENDA_TABLA")
        this.$tiendaListaEstadisticas=document.getElementById("TIENDA_LISTA_ESTADISTICAS")
        this.$tiendaTablaValorPorDefecto=document.getElementById("VALOR_DEFECTO")
        this.$mostrarVentaVistaBtn=document.getElementById("VENTA_VISTA_BTN")
        this.$mostrarVentaVistaBtn.addEventListener("click",()=>controlador.mostrarVVenta())
    }

    insertarVenta({nombreProducto, cantidadProducto, cedula, montoTotal}){
        if(this.$tiendaTablaValorPorDefecto)this.$tiendaTablaValorPorDefecto.remove()

        this.$tiendaTabla.innerHTML+=`
              <tr>
                <td>
                    ${cedula}
                </td>
                <td>
                    ${nombreProducto}
                </td>
                <td>
                    ${cantidadProducto}
                </td>
                <td>
                    ${montoTotal}
                </td>
            </tr>
        
        `

    }
    actualizarTiendaEstadisticas({nombreProductoMasVendido, totalVentas}){

        this.$tiendaListaEstadisticas.innerHTML=`
             <li>
                <span>El artículo que se vendió más fue: </span><span>${nombreProductoMasVendido}</span>
            </li>
            <li>
                <span>Se vendió un total de: </span><span>${totalVentas}</span>
            </li>
        
        `
    }

    mostrarTiendaTabla(){
        this.$vista.hidden=false
    }
    ocultarTiendaTabla(){
        this.$vista.hidden=true
    }
  
}