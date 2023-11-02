$(document).ready(function(){
    jQuery("#update-purchase-price").focus()
    setValue()
    jQuery("#update-purchase-price").on("blur",function(){
        var regex = /^\d+$/
        let value = jQuery("#update-purchase-price").val()
        if(regex.test(value)){
            jQuery("#btn-state").removeAttr("disabled")
        }else{
            jQuery("#btn-state").prop("disabled",true)
        }
    })  
    
    jQuery("#vehicle-category").on("change",function(){
        setValue()
    })
    jQuery("#btn-update").on("click",function(){
        selectValue = jQuery('input[name="currency"]:checked').val()
        updatePurchasePrice = jQuery('input[name="update-purchase-price"]').val()
        updateSalePrice = jQuery('input[name="update-sale-price"]').val()
        console.log("check selectValue:",selectValue)
        console.log("check purchaseValue:",updatePurchasePrice)
        console.log("check salePrice:",updateSalePrice)

        if(selectValue=="1"){
            jQuery(".purchase-gold").text(updatePurchasePrice)
            jQuery(".sale-gold").text(updateSalePrice)
        }
        if(selectValue=="0"){
            jQuery(".purchase-usd").text(updatePurchasePrice)
            jQuery(".sale-usd").text(updateSalePrice)
        }


    })
    
})
function setImage(image){
    if(image!=null&&image!=""){
        jQuery("#price-table-img > img").attr("src","../Bai2/"+image)
    }
}
function setPrice(price){
    if(price!=null&&price!=""){
        jQuery("#price-table-price").text(price)
    }
}
function setValue(){
    let value = jQuery("#vehicle-category").val()
        valueVehicle = value.split(";")
        setImage(valueVehicle[0])
        setPrice(valueVehicle[1])
}