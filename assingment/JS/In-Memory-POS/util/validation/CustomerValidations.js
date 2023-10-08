// validation for customers
const CUS_ID_REGEX = /^(C00-)[0-9]{3}$/;
const CUS_NAME_REGEX = /^[A-Za-z ]{5,}$/;
const CUS_ADDRESS_REGEX = /^[A-Za-z0-9 ]{8,}$/;
const CUS_SALARY_REGEX = /^[A-Za-z ]{5,}$/;

//add validations and text fields to the
let c_vArray = new Array();
c_vArray.push({field: $("#customer-gmail"), regEx: CUS_ID_REGEX});
c_vArray.push({field: $("#customer-name"), regEx: CUS_NAME_REGEX});
c_vArray.push({field: $("#customer-address"), regEx: CUS_ADDRESS_REGEX});
c_vArray.push({field: $("#customer-tp"), regEx: CUS_SALARY_REGEX});

function clearCustomerInputFields() {
    $("#customer-gmail,#customer-name,#customer-address,#customer-tp").val("");
    $("#customer-gmail,#customer-name,#customer-address,#customer-tp").css("border", "1px solid #ced4da");
    $("#customer-gmail").focus();
    // setBtn();
}

setBtn();

//disable tab
$("#customer-gmail,#customer-name,#customer-address,#customer-tp").on("keydown keyup", function (e) {
    //get the index number of data input fields indexNo
    let indexNo = c_vArray.indexOf(c_vArray.find((c) => c.field.attr("id") == e.target.id));

    //Disable tab key
    if (e.key == "Tab") {
        e.preventDefault();
    }

    //check validations
    checkValidations(c_vArray[indexNo]);

    setBtn();

    //If the enter key pressed cheque and focus
    if (e.key == "Enter") {

        if (e.target.id != c_vArray[c_vArray.length - 1].field.attr("id")) {
            //check validation is ok
            if (checkValidations(c_vArray[indexNo])) {
                c_vArray[indexNo + 1].field.focus();
            }
        } else {
            if (checkValidations(c_vArray[indexNo])) {
                // saveCustomer();
            }
        }
    }
});


function checkValidations(object) {
    if (object.regEx.test(object.field.val())) {
        setBorder(true, object)
        return true;
    }
    setBorder(false, object)
    return false;
}

function setBorder(bol, ob) {
    if (!bol) {
        if (ob.field.val().length >= 1) {
            ob.field.css("border", "2px solid red");
        } else {
            ob.field.css("border", "1px solid #ced4da");
        }
    } else {
        if (ob.field.val().length >= 1) {
            ob.field.css("border", "2px solid green");
        } else {
            ob.field.css("border", "1px solid #ced4da");
        }
    }

}

function checkAll() {
    for (let i = 0; i < c_vArray.length; i++) {
        if (!checkValidations(c_vArray[i])) return false;
    }
    return true;
}

function setBtn() {
    $(".delete").prop("disabled", true);
    $("#updateCustomer").prop("disabled", true);

    if (checkAll()) {
        $("#btnCustomer").prop("disabled", false);
    } else {
        $("#btnCustomer").prop("disabled", true);
    }

    let id = $("#txtCustomerID").val();
    if (searchCustomer(id) == undefined) {
        $("#btnCusDelete").prop("disabled", true);
        $("#btnUpdate").prop("disabled", true);
    } else {
        $(".delete").prop("disabled", false);
        $("#updateCustomer").prop("disabled", false);
    }

}

