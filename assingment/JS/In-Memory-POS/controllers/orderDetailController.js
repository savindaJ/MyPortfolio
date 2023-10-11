function loadAllOrderDetails(){

    $('#order-detail-body').empty();

    for (const object of orderDB) {
        for (let i = 0; i < object.orderDetails.length; i++) {
            $('#order-detail-body').append(`<tr>
                <td>${object.oid}</td>
                <td>${object.customerID}</td>
                <td>${object.orderDetails[i].code}</td>
                <td>${object.orderDetails[i].qty}</td>
                <td>${object.date}</td>
            </tr>`);
        }
    }
}

loadAllOrderDetails();