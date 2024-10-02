export default class vTienda{
    constructor(controlador){
        this.$view=document.getElementById("OUTPUTS")
        this.$tiendaTable=document.getElementById("TIENDA_TABLE")
        this.$tiendaStatsList=document.getElementById("TIENDA_STATS_LIST")
        this.$tiendaTableDefaultRow=document.getElementById("DEFAULT_ROW")
        this.$showVentaViewBtn=document.getElementById("INPUTS_VIEW_BTN")
        this.$showVentaViewBtn.addEventListener("click",()=>controlador.showVVenta())
    }

    appendVenta({nombreProducto, cantidadProducto, cedula, montoTotal}){
        if(this.$tiendaTableDefaultRow)this.$tiendaTableDefaultRow.remove()

        this.$tiendaTable.innerHTML+=`
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
    updateTiendaStats({nombreProductoMasVendido, totalVentas}){

        this.$tiendaStatsList.innerHTML=`
             <li>
                <span>El artículo que se vendió más fue: </span><span>${nombreProductoMasVendido}</span>
            </li>
            <li>
                <span>Se vendió un total de: </span><span>${totalVentas}</span>
            </li>
        
        `
    }

    showTiendaTable(){
        this.$view.hidden=false
    }
    hideTiendaTable(){
        this.$view.hidden=true
    }
  
}