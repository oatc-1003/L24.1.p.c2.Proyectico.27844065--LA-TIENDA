import mTienda from "./mTienda.js";
import mVenta from "./mVenta.js";
import vTienda from "./vTienda.js";
import vVenta from "./vVenta.js";


export default class Controlador{
    constructor(){
        this.vTienda=new vTienda(this)
        this.mTienda=new mTienda()
        this.vVenta=new vVenta(this)
        this.showVTienda()
    }   

    addVenta({producto, cantidadProducto, cedula}){
        let nuevaVenta=new mVenta({producto, cantidadProducto, cedula})
        this.mTienda.procesarVenta(nuevaVenta)
        this.vTienda.appendVenta({nombreProducto:nuevaVenta._nombreProducto, cantidadProducto:nuevaVenta._cantidadProducto, cedula:nuevaVenta._cedula, montoTotal:nuevaVenta._montoTotal})
        this.vTienda.updateTiendaStats({nombreProductoMasVendido:this.mTienda.productoMasVendido() , totalVentas:this.mTienda.totalVentas()})
        this.vVenta.clearNewSaleForm()
        this.showVTienda()
      
 
    }

    showVVenta(){
        this.vVenta.showNewSaleForm()
        this.vTienda.hideTiendaTable()
    }
    showVTienda(){
        this.vVenta.hideNewSaleForm()
        this.vTienda.showTiendaTable()
    }

}