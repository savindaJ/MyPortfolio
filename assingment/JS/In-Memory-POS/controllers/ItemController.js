/*
//Write down all the item form controllers here

//load all existing items
getAllItems();


function getAllItems() {
    //clear all tbody data before add
    $("#tblItem").empty();

    //get all items
    for (let i = 0; i < itemDB.length; i++) {
        let code = itemDB[i].code;
        let description = itemDB[i].description;
        let qty = itemDB[i].qtyOnHand;
        let unitPrice = itemDB[i].unitPrice;

        let row = `<tr>
                     <td>${code}</td>
                     <td>${description}</td>
                     <td>${qty}</td>
                     <td>${unitPrice}</td>
                    </tr>`;

        // //and then append the row to tableBody
        $("#tblItem").append(row);

        //invoke this method every time
        // we add a row // otherwise click
        //event will not work

    }
}



*/

$('#btnUpdateItem').on('click',function (){
    updateItem();
});

function updateItem(){
    let id = $(`#upItemId`).val();
    if (searchItem(id) == undefined) {
        alert("No such Item..please check the ID");
    } else {
        let consent = confirm("Do you really want to update this item.?");
        if (consent) {
            let item = searchItem(id);
            let description = $(`#upItemdesc`).val();
            let unitPrice = $(`#upUnitPrice`).val();
            let qty = $(`#upQty`).val();

            item.description = description;
            item.unitPrice = unitPrice;
            item.qtyOnHand = qty;

        }
    }
    getAllItem();
    clearUpdateTxt();
}

$('#btnSaveItem').on('click', function () {
    saveItem();
});

function saveItem() {
    let itemId = $('#txtItemId').val();
    if (searchItem(itemId.trim()) === undefined) {
        item = {
            code: $('#txtItemId').val(),
            description: $('#txtItemdec').val(),
            qtyOnHand: $('#txtItemQty').val(),
            unitPrice: $('#txtItemUnitPrice').val()
        }
        itemDB.push(item);
        getAllItem();
    } else {
        alert('already exits Item id');
    }
    clearItemTxt();
}

function searchItem(id) {
    return itemDB.find(function (item) {
        return item.code === id;
    });
}


$('#btnGetAllItem').on('click', function () {
    getAllItem();
});

function getAllItem() {
    $('#Item-body').empty();

    for (const item of itemDB) {
        $(`#Item-body`).append(`<tr>
                                <td>${item.code}</td>
                                <td>${item.description}</td>
                                <td>${item.unitPrice}</td>
                                <td>${item.qtyOnHand}</td>
                                <td><button type="button" class="btn btn-primary btn-sm me-2" data-bs-toggle="modal"
                                        data-bs-target="#update-model">
                                    Edit
                                </button>
                                <button class="btn btn-danger me-3 btn-sm deleteItem">Delete</button></td>
                   
                             </tr>`);
    }
    setEvent();
}


function setEvent() {

    $(`#tblItem tr`).click(function () {

        var $row = $(this).closest("tr");
        $tds = $row.find("td:nth-child(1)");
        $ts = $row.find("td:nth-child(2)");
        $tt = $row.find("td:nth-child(3)");
        $tf = $row.find("td:nth-child(4)");
        // let td_list =  $();

        $(`#upItemId`).val($tds.text());
        $(`#upItemdesc`).val($ts.text());
        $(`#upUnitPrice`).val($tt.text());
        $(`#upQty`).val($tf.text());

    });

    $('.deleteItem').click(function () {
        console.log("delete");
        $(`#tblItem tr`).click(function () {

            var $row = $(this).closest("tr");        // Finds the closest row <tr>
            $tds = $row.find("td:nth-child(1)");

            if (searchItem($tds.text()) === undefined) {
                alert("No such Item..please check the ID");
            } else {
                if (deleteItem($tds.text())) {
                    getAllItem();
                    alert("Item Deleted !");
                }
            }
        });
    });
}

function deleteItem(id) {
    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].code == id) {
            itemDB.splice(i, 1);
            return true
        }
    }
    return false;
}

$('#txtSearchItem').on('keyup',function (){



    let txtVal = $('#txtSearchItem');

    if (txtVal.val() === ''){
        getAllItem();
    }
    $(`#Item-body`).empty();

    for (let item of itemDB) {
        if ($("#itemSearch").val() === "Code") {
            if (item.code.indexOf($("#txtSearchItem").val()) !== -1) {

                $("#tblItem > tbody").append($(`#Item-body`).append(`<tr>
                                <td>${item.code}</td>
                                <td>${item.description}</td>
                                <td>${item.unitPrice}</td>
                                <td>${item.qtyOnHand}</td>
                                <td><button type="button" class="btn btn-primary btn-sm me-2" data-bs-toggle="modal"
                                        data-bs-target="#update-model">
                                    Edit
                                </button>
                                <button class="btn btn-danger me-3 btn-sm delete">Delete</button></td>
                   
                             </tr>`));
            }
        } else {
            if (item.description.indexOf($("#txtSearchItem").val()) !== -1) {

                $("#tblItem > tbody").append($(`#Item-body`).append(`<tr>
                                <td>${item.code}</td>
                                <td>${item.description}</td>
                                <td>${item.unitPrice}</td>
                                <td>${item.qtyOnHand}</td>
                                <td><button type="button" class="btn btn-primary btn-sm me-2" data-bs-toggle="modal"
                                        data-bs-target="#update-model">
                                    Edit
                                </button>
                                <button class="btn btn-danger me-3 btn-sm deleteItem">Delete</button></td>
                   
                             </tr>`));
            }
        }
    }

    setEvent();
});


getAllItem();


