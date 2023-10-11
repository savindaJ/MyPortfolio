const orderId_regex = /^(ORD-)[0-9]{3}$/;

function clearAll() {
    $('#txtOrderId ,#selCusId ,#orderCusName ,#orderCusAddres ,#orderCusTp ,#selItemId ,#orderItemDesc ,#orderItemPrice ,#orderQty ,#getQty ,#total ,#subTotal').val('');
    finalTotal = 0;
    final = 0;

}

function clearBill(){
    $('#txtBalnce ,#txtCash ,#txtDiscount').val('');
    $('#total ,#subTotal').text('00.0');
};
