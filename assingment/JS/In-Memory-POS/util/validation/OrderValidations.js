const orderId_regex =/^(ORD-)[0-9]{3}$/;

$('#btnAddOrder').prop("disabled", true);

$('#btnPlaceOrder').prop("disabled", true);

$('#txtOrderId').on('keyup keydown',function (e){
    if (e.key == "Tab") {
        e.preventDefault();
    }

    if (orderId_regex.test($('#txtOrderId').val())){
        $('#txtOrderId').css("border", "2px solid #ced4da");
        $('#selCusId').prop('disabled',false);
    }else {
        $('#txtOrderId').css("border", "2px solid red");
    }

    if (e.key == "Enter") {
        $('#selCusId').focus();
    }

});

function clearAll() {
    $('#txtOrderId ,#selCusId ,#orderCusName ,#orderCusAddres ,#orderCusTp ,#selItemId ,#orderItemDesc ,#orderItemPrice ,#orderQty ,#getQty ,#total ,#subTotal').val('');
    finalTotal = 0;
    final = 0;
    $('#btnAddOrder').prop("disabled", true);
}

function clearBill(){
    $('#txtBalnce ,#txtCash ,#txtDiscount').val('');
    $('#total ,#subTotal').text('00.0');
    $('#btnAddOrder').prop("disabled", true);
}


