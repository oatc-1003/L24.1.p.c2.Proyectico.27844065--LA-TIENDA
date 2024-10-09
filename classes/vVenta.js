export default class vVenta{
    constructor(controlador){
        this.$vista=document.getElementById("ENTRADAS")
        this.$ventaFormulario=document.getElementById("VENTA_FORM")
        this.$ventaFormularioNombreProductoInput=document.getElementById("NOMBRE_PRODUCTO")
        this.$ventaFormularioCantidadInput=document.getElementById("CANTIDAD")
        this.$ventaFormularioCedulaInput=document.getElementById("CEDULA")

        this.$ventaFormulario.addEventListener("submit",(e)=>{
            e.preventDefault()
            let nuevaVenta={
                producto:this.$ventaFormularioNombreProductoInput.value, 
                cantidadProducto:this.$ventaFormularioCantidadInput.value, 
                cedula:this.$ventaFormularioCedulaInput.value

            }
            controlador.agregarVenta(nuevaVenta)
        })

    }
    mostrarVentaFormulario(){
        this.$vista.hidden=false
    }
    ocultarVentaFormulario(){
        this.$vista.hidden=true
    }
    limpiarVentaFormulario(){
        this.$ventaFormulario.reset()
    }
    
}