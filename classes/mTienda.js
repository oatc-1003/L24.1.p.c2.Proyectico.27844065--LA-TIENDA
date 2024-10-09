export default class mTienda{
    constructor({precios:{productoA,productoB,productoC}}){
        this.precioProductoA=productoA
        this.precioProductoB=productoB
        this.precioProductoC=productoC
        this.cantidadProductoMasVendido=0
        this.nombreProductoMasVendido=null
        this.acuVentas=0
    }

    set precioProductoA(pa){
        return this._precioProductoA=+pa
    }

    get precioProductoA(){
        return this._precioProductoA
    }
    set precioProductoB(pb){
        return this._precioProductoB=+pb
    }

    get precioProductoB(){
        return this._precioProductoB
    }
    set precioProductoC(pc){
        return this._precioProductoC=+pc
    }

    get precioProductoC(){
        return this._precioProductoC
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