function loadCustomerId(){
    for (const customer of customerDB) {
        $('#selCusId').append(`<option>${customer.id}</option>`);
    }
}

$('#selCusId').on('change',function (){
    let id = $('#selCusId').val();
    for (const customer of customerDB) {
        if (customer.id == id){
            $('#orderCusName').val(customer.name);
            $('#orderCusAddres').val(customer.address);
            $('#orderCusTp').val(customer.tp);
        }
    }
});


function loadAllItemId(){
    for (const item of itemDB) {
        $('#selItemId').append(`<option>${item.code}</option>`)
    }
}

$('#selItemId').on('change',function (){
    let id = $('#selItemId').val();
    for (const item of itemDB) {
        if (item.code == id){
            $('#orderItemDesc').val(item.description);
            $('#orderItemPrice').val(item.unitPrice);
            $('#orderQty').val(item.qtyOnHand);
        }
    }
});

loadAllItemId();

loadCustomerId();