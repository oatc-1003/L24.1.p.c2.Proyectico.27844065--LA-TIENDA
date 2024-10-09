export default class mVenta{
    constructor({producto, cantidadProducto, cedula, precios:{productoA,productoB,productoC}}){
        this.precioProductoA=productoA
        this.precioProductoB=productoB
        this.precioProductoC=productoC
        this.nombreProducto=producto
        this.cantidadProducto=cantidadProducto;
        this.cedula=cedula;
        this.montoTotal=this.calcMontoTotal(cantidadProducto)
    }

    set nombreProducto(np){
        return this._nombreProducto=np.toUpperCase()
    }

    get nombreProducto(){
        return this._nombreProducto
    }
    set cantidadProducto(cp){
        return this._cantidadProducto=+cp
    }

    get cantidadProducto(){
        return this._cantidadProducto
    }
    set cedula(c){
        return this._cedula=c
    }

    get cedula(){
        return this._cedula
    }
    set montoTotal(mt){
        return this._montoTotal=mt
    }

    get montoTotal(){
        return this._montoTotal
    }

    
    calcMontoTotal(cantidad){
        let precio;
        if(this._nombreProducto==="A")precio=this.precioProductoA
        if(this._nombreProducto==="B")precio=this.precioProductoB
        if(this._nombreProducto==="C")precio=this.precioProductoC


        return precio * cantidad
    }
}