const item_id_regx = /^(I00-)[0-9]{3}$/;
const description_regx = /^[A-Za-z ]{5,}$/;
const price_regex = /^[0-9 ]{2,}$/;
const qty_regex = /^[0-9 ]{2,}$/;

let i_validity = [];
i_validity.push({field: $("#txtItemId"), regEx: item_id_regx});
i_validity.push({field: $("#txtItemdec"), regEx: description_regx});
i_validity.push({field: $("#txtItemUnitPrice"), regEx: price_regex});
i_validity.push({field: $("#txtItemQty"), regEx: qty_regex});

let update_validity = [];

update_validity.push({field: $("#upItemId"), regEx: item_id_regx});
update_validity.push({field: $("#upItemdesc"), regEx: description_regx});
update_validity.push({field: $("#upUnitPrice"), regEx: price_regex});
update_validity.push({field: $("#upQty"), regEx: qty_regex});

function clearItemTxt(){
    $('#txtItemId,#txtItemdec,#txtItemUnitPrice,#txtItemQty').val('');
    $('#txtItemId,#txtItemdec,#txtItemUnitPrice,#txtItemQty').css("border", "1px solid #ced4da");
    $('#txtItemId').focus();
}

function clearUpdateTxt(){
    $('#upItemId,#upItemdesc,#upUnitPrice,#upQty').val('');
    $('#upItemId,#upItemdesc,#upUnitPrice,#upQty').css("border", "1px solid #ced4da");
    $('#upItemId').focus();
}

$('#txtItemId,#txtItemdec,#txtItemUnitPrice,#txtItemQty').on("keydown keyup", function (e) {
    //get the index number of data input fields indexNo
    let indexNo = i_validity.indexOf(i_validity.find((c) => c.field.attr("id") == e.target.id));

    //Disable tab key
    if (e.key == "Tab") {
        e.preventDefault();
    }

    //check validations
    checkValidations(i_validity[indexNo]);

    setItemBtn();

    //If the enter key pressed cheque and focus
    if (e.key == "Enter") {

        if (e.target.id != i_validity[i_validity.length - 1].field.attr("id")) {
            //check validation is ok
            if (checkItemValidations(i_validity[indexNo])) {
                i_validity[indexNo + 1].field.focus();
            }
        } else {
            if (checkItemValidations(i_validity[indexNo])) {
                // saveCustomer();
            }
        }
    }
});

$('#upItemId,#upItemdesc,#upUnitPrice,#upQty').on("keydown keyup", function (e) {
    //get the index number of data input fields indexNo
    let indexNo = update_validity.indexOf(update_validity.find((c) => c.field.attr("id") == e.target.id));

    //Disable tab key
    if (e.key == "Tab") {
        e.preventDefault();
    }

    //check validations
    checkValidations(update_validity[indexNo]);

    setItemBtn();

    //If the enter key pressed cheque and focus
    if (e.key == "Enter") {

        if (e.target.id != update_validity[update_validity.length - 1].field.attr("id")) {
            //check validation is ok
            if (checkItemValidations(update_validity[indexNo])) {
                update_validity[indexNo + 1].field.focus();
            }
        } else {
            if (checkItemValidations(update_validity[indexNo])) {
                // saveCustomer();
            }
        }
    }
});


function checkItemValidations(object) {
    if (object.regEx.test(object.field.val())) {
        setBorder(true, object)
        return true;
    }
    setBorder(false, object)
    return false;
}

function setItemBtn() {

    if (checkAllItem()) {
        $("#btnSaveItem").prop("disabled", false);
    } else {
        $("#btnSaveItem").prop("disabled", true);
    }

    let id = $("#upItemId").val();

    if (searchItemValid(id) == undefined) {
        $("#btnUpdateItem").prop("disabled", true);
    } else {
        $("#btnUpdateItem").prop("disabled", false);
    }

}

function searchItemValid(id) {
    return itemDB.find(function (item) {
        return item.code == id;
    });
}

function checkAllItem() {
    for (let i = 0; i < i_validity.length; i++) {
        if (!checkValidations(i_validity[i])) return false;
    }
    return true;
}

$("#btnSaveItem").prop("disabled", true);
$("#btnUpdateItem").prop("disabled", true);