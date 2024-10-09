import mTienda from "./mTienda.js";
import mVenta from "./mVenta.js";
import vTienda from "./vTienda.js";
import vVenta from "./vVenta.js";


export default class Controlador{
    constructor(){
        this.vTienda=new vTienda(this)
        this.mTienda=new mTienda({precios:{productoA:this.vTienda.$precioProductoA, productoB:this.vTienda.$precioProductoB,productoC:this.vTienda.$precioProductoC}})
        this.vVenta=new vVenta(this)
        this.mostrarVTienda()
    }   

    agregarVenta({producto, cantidadProducto, cedula}){
        let nuevaVenta=new mVenta({producto, cantidadProducto, cedula, precios:{productoA:this.mTienda._precioProductoA, productoB:this.mTienda._precioProductoB, productoC:this.mTienda._precioProductoC }})
        this.mTienda.procesarVenta(nuevaVenta)
        this.vTienda.insertarVenta({nombreProducto:nuevaVenta._nombreProducto, cantidadProducto:nuevaVenta._cantidadProducto, cedula:nuevaVenta._cedula, montoTotal:nuevaVenta._montoTotal})
        this.vTienda.actualizarTiendaEstadisticas({nombreProductoMasVendido:this.mTienda.productoMasVendido() , totalVentas:this.mTienda.totalVentas()})
        this.vVenta.limpiarVentaFormulario()
        this.mostrarVTienda()
      
 
    }

    mostrarVVenta(){
        this.vVenta.mostrarVentaFormulario()
        this.vTienda.ocultarTiendaTabla()
    }
    mostrarVTienda(){
        this.vVenta.ocultarVentaFormulario()
        this.vTienda.mostrarTiendaTabla()
    }

}