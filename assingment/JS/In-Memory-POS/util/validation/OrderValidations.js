const orderId_regex = /^(ORD-)[0-9]{3}$/;
function clearAll(){
    $('#txtOrderId ,#selCusId ,#orderCusName ,#orderCusAddres ,#orderCusTp ,#selItemId ,#orderItemDesc ,#orderItemPrice ,#orderQty ,#getQty ,#total ,#subTotal').val('');
}
