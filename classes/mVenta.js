export default class mVenta{
    constructor({producto, cantidadProducto, cedula}){
        this.PRECIOS_PRODUCTOS=[10,5,20]
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
        if(this._nombreProducto==="A")precio=this.PRECIOS_PRODUCTOS[0]
        if(this._nombreProducto==="B")precio=this.PRECIOS_PRODUCTOS[1]
        if(this._nombreProducto==="C")precio=this.PRECIOS_PRODUCTOS[2]


        return precio * cantidad
    }
}