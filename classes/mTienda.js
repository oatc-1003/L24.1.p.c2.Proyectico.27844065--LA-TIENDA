export default class mTienda{
    constructor(){
        this.cantidadProductoMasVendido=0
        this.nombreProductoMasVendido=null
        this.acuVentas=0
    }

    procesarVenta(venta){
        this.acuVentas+=venta.montoTotal

        if(venta.cantidadProducto>=this.cantidadProductoMasVendido){
            this.cantidadProductoMasVendido=venta.cantidadProducto
            this.nombreProductoMasVendido=venta.nombreProducto
        }

    }

    productoMasVendido(){
        return this.nombreProductoMasVendido
    }
    totalVentas(){
        return this.acuVentas
    }


}