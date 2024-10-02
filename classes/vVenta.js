export default class vVenta{
    constructor(controlador){
        this.$view=document.getElementById("INPUTS")
        this.$newSaleForm=document.getElementById("VENTA_FORM")
        this.$newSaleFormNombreProductoInput=document.getElementById("NOMBRE_PRODUCTO")
        this.$newSaleFormCantidadInput=document.getElementById("CANTIDAD")
        this.$newSaleFormCedulaInput=document.getElementById("CEDULA")

        this.$newSaleForm.addEventListener("submit",(e)=>{
            e.preventDefault()
            let nuevaVenta={
                producto:this.$newSaleFormNombreProductoInput.value, 
                cantidadProducto:this.$newSaleFormCantidadInput.value, 
                cedula:this.$newSaleFormCedulaInput.value

            }
            controlador.addVenta(nuevaVenta)
        })

    }
   showNewSaleForm(){
        this.$view.hidden=false
    }
    hideNewSaleForm(){
        this.$view.hidden=true
    }
    clearNewSaleForm(){
        this.$newSaleForm.reset()
    }
    
}