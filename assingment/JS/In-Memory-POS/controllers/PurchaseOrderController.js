let today = new Date().toISOString().slice(0, 10);

$('#txtDate').css({
    color:'green',
    fontWeight:'500'
});
$('#txtDate').val(today);

$('#btnAddOrder').on('click',function (){

});

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
    $('#selItemId').focus();
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
    $('#getQty').focus();
});

loadAllItemId();

loadCustomerId();