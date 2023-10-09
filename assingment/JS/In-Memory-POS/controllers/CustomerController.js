/*
//load all existing customers
getAllCustomers();

//add customer event
$("#btnCustomer").click(function () {
    if (checkAll()){
        saveCustomer();
    }else{
        alert("Error");
    }

});

//get all customer event
$("#btnGetAll").click(function () {
    getAllCustomers();
});

//bind tr events for getting back data of the rows to text fields
function bindTrEvents() {
    $('#tblCustomer>tr').click(function () {
        //get the selected rows data
        let id = $(this).children().eq(0).text();
        let name = $(this).children().eq(1).text();
        let address = $(this).children().eq(2).text();
        let salary = $(this).children().eq(3).text();

        //set the selected rows data to the input fields
        $("#txtCustomerID").val(id);
        $("#txtCustomerName").val(name);
        $("#txtCustomerAddress").val(address);
        $("#txtCustomerSalary").val(salary);
    })
}

//delete btn event
$("#btnCusDelete").click(function () {
    let id = $("#txtCustomerID").val();

    let consent = confirm("Do you want to delete.?");
    if (consent) {
        let response = deleteCustomer(id);
        if (response) {
            alert("Customer Deleted");
            clearCustomerInputFields();
            getAllCustomers();
        } else {
            alert("Customer Not Removed..!");
        }
    }


});

//update  btn event
$("#btnUpdate").click(function () {
    let id = $("#txtCustomerID").val();
    updateCustomer(id);
    clearCustomerInputFields();
});

//clear btn event
$("#btn-clear1").click(function () {
    clearCustomerInputFields();
});



// CRUD operation Functions
function saveCustomer() {
    let customerID = $("#txtCustomerID").val();
    //check customer is exists or not?
    if (searchCustomer(customerID.trim()) == undefined) {

        //if the customer is not available then add him to the array
        let customerName = $("#txtCustomerName").val();
        let customerAddress = $("#txtCustomerAddress").val();
        let customerSalary = $("#txtCustomerSalary").val();

        //by using this one we can create a new object using
        //the customer model with same properties
        let newCustomer = Object.assign({}, customer);

        //assigning new values for the customer object
        newCustomer.id = customerID;
        newCustomer.name = customerName;
        newCustomer.address = customerAddress;
        newCustomer.salary = customerSalary;

        //add customer record to the customer array (DB)
        customerDB.push(newCustomer);
        clearCustomerInputFields();
        getAllCustomers();

    } else {
        alert("Customer already exits.!");
        clearCustomerInputFields();
    }
}

function getAllCustomers() {
    //clear all tbody data before add
    $("#tblCustomer").empty();

    //get all customers
    for (let i = 0; i < customerDB.length; i++) {
        let id = customerDB[i].id;
        let name = customerDB[i].name;
        let address = customerDB[i].address;
        let salary = customerDB[i].salary;

        let row = `<tr>
                     <td>${id}</td>
                     <td>${name}</td>
                     <td>${address}</td>
                     <td>${salary}</td>
                    </tr>`;

        // //and then append the row to tableBody
        $("#tblCustomer").append(row);

        //invoke this method every time
        // we add a row // otherwise click
        //event will not work
        bindTrEvents();
    }
}

function deleteCustomer(id) {
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].id == id) {
            customerDB.splice(i, 1);
            return true;
        }
    }
    return false;
}

function searchCustomer(id) {
    return customerDB.find(function (customer) {
        //if the search id match with customer record
        //then return that object
        return customer.id == id;
    });
}

function updateCustomer(id) {
    if (searchCustomer(id) == undefined) {
        alert("No such Customer..please check the ID");
    } else {
        let consent = confirm("Do you really want to update this customer.?");
        if (consent) {
            let customer = searchCustomer(id);
            //if the customer available can we update.?

            let customerName = $("#txtCustomerName").val();
            let customerAddress = $("#txtCustomerAddress").val();
            let customerSalary = $("#txtCustomerSalary").val();

            customer.name = customerName;
            customer.address = customerAddress;
            customer.salary = customerSalary;

            getAllCustomers();
        }
    }

}



*/

let tableBody = $("#body");


$(`#save-customer`).click(function () {
    let idVal = $("#customer-gmail").val();
    if (searchCustomer(idVal.trim()) === undefined) {
        let id = $("#customer-gmail");
        let address = $("#customer-address");
        let name = $("#customer-name");
        let tp = $("#customer-tp");

        customer = {
            name: name.val(),
            id: id.val(),
            address: address.val(),
            tp: tp.val()
        }
        customerDB.push(customer);
    }
    getAll();
    clearCustomerInputFields();
});

function searchCustomer(id) {
    return customerDB.find(function (customer) {
        return customer.id == id;
    });
}

$('#updateCustomer').on('click', function () {
    updateCustomer();
});

function updateCustomer() {
    let id = $(`#upCID`).val();
    if (searchCustomer(id) == undefined) {
        alert("No such Customer..please check the ID");
    } else {
        let consent = confirm("Do you really want to update this customer.?");
        if (consent) {
            let customer = searchCustomer(id);
            //if the customer available can we update.?
            let name = $(`#upCName`).val();
            let address = $(`#upCAddress`).val();
            let tp = $(`#upCTp`).val();

            customer.name = name;
            customer.address = address;
            customer.tp = tp;
        }
    }
    getAll();
    clearUpdateFiald();
}


$(`#getAllCustomer`).click(function () {
    getAll();
});


function getAll() {

    $(`#body`).empty();

    for (const customer of customerDB) {

        $(`#body`).append(`<tr>
                                <td>${customer.id}</td>
                                <td>${customer.name}</td>
                                <td>${customer.address}</td>
                                <td>${customer.tp}</td>
                                <td><button type="button" class="btn btn-primary btn-sm me-2" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal2">
                                    Edit
                                </button>
                                <button class="btn btn-danger me-3 btn-sm delete">Delete</button></td>
                   
                             </tr>`);


    }

    setEvent();
}

function setEvent() {

    $(`#tblCustomer tr`).click(function () {

        var $row = $(this).closest("tr"),        // Finds the closest row <tr>
            $tds = $row.find("td:nth-child(1)");
        $ts = $row.find("td:nth-child(2)");
        $tt = $row.find("td:nth-child(3)");
        $tf = $row.find("td:nth-child(4)");
        // let td_list =  $();

        $(`#upCID`).val($tds.text());
        $(`#upCName`).val($ts.text());
        $(`#upCAddress`).val($tt.text());
        $(`#upCTp`).val($tf.text());

    });

    $('.delete').click(function () {
        $(`#tblCustomer tr`).click(function () {

            var $row = $(this).closest("tr");        // Finds the closest row <tr>
            $tds = $row.find("td:nth-child(1)");

            if (searchCustomer($tds.text()) === undefined) {
                alert("No such Customer..please check the ID");
            } else {
                if (deleteFunc($tds.text())){
                    // $(this).closest("tr").remove();
                    alert("customer Deleted !");
                    getAll();
                }
            }
        });
    });


}

$('.delete').click(function () {
    $(`#tblCustomer tr`).click(function () {

        var $row = $(this).closest("tr");        // Finds the closest row <tr>
        $tds = $row.find("td:nth-child(1)");

        if (searchCustomer($tds.text()) === undefined) {
            alert("No such Customer..please check the ID");
        } else {
            if (deleteFunc($tds.text())){
                // $(this).closest("tr").remove();
                alert("customer Deleted !");
                getAll();
            }
        }
    });
});

function deleteFunc(id){
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].id == id) {
            customerDB.splice(i, 1);
            return true
        }
    }
    return false;
}

$(`#tblCustomer tr`).click(function () {

    var $row = $(this).closest("tr");        // Finds the closest row <tr>
    $tds = $row.find("td:nth-child(1)");
    $ts = $row.find("td:nth-child(2)");
    $tt = $row.find("td:nth-child(3)");
    $tf = $row.find("td:nth-child(4)");
    // let td_list =  $();

    $(`#upCID`).val($tds.text());
    $(`#upCName`).val($ts.text());
    $(`#upCAddress`).val($tt.text());
    $(`#upCTp`).val($tf.text());


});


getAll();