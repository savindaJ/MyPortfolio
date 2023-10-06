let nav_home = document.getElementById("nav-home");
let nav_customer = document.getElementById("nav-customer");
let nav_order = document.getElementById("nav-order");
let nav_item = document.getElementById("nav-item");
let nav_orderD = document.getElementById("nav-order-detail");
let main_root = document.getElementById("main-root");

let nav_customer_txt = document.getElementById("nav-customer-txt");
let nav_item_txt = document.getElementById("nav-item-txt");
let nav_order_txt = document.getElementById("nav-order-txt");
let nav_home_txt = document.getElementById("nav-home-txt");
let nav_order_detail_txt = document.getElementById("nav-orderD-txt");

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function () {
        startTime()
    }, 500);
}

startTime();


nav_customer.addEventListener("click", function () {

    nav_customer_txt.style.fontSize = `21px`;
    nav_customer_txt.style.color = `red`;

    nav_item_txt.style.fontSize = `20px`;
    nav_item_txt.style.color = `black`;

    nav_order_txt.style.fontSize = `20px`;
    nav_order_txt.style.color = `black`;

    nav_home_txt.style.fontSize = `20px`;
    nav_home_txt.style.color = `black`;

    nav_order_detail_txt.style.fontSize = `20px`;
    nav_order_detail_txt.style.color = `black`;


    main_root.style.position = `relative`;
    main_root.style.left = `-100vw`;
    main_root.style.transitionDuration = `1s`;
});

nav_home.addEventListener("click", function () {

    nav_customer_txt.style.fontSize = `20px`;
    nav_customer_txt.style.color = `black`;

    nav_item_txt.style.fontSize = `20px`;
    nav_item_txt.style.color = `black`;

    nav_order_txt.style.fontSize = `20px`;
    nav_order_txt.style.color = `black`;

    nav_home_txt.style.fontSize = `21px`;
    nav_home_txt.style.color = `red`;

    nav_order_detail_txt.style.fontSize = `20px`;
    nav_order_detail_txt.style.color = `black`;

    main_root.style.position = `relative`;
    main_root.style.left = `0`;
    main_root.style.transitionDuration = `1s`;
});

nav_order.addEventListener("click", function () {

    nav_customer_txt.style.fontSize = `20px`;
    nav_customer_txt.style.color = `black`;

    nav_item_txt.style.fontSize = `20px`;
    nav_item_txt.style.color = `black`;

    nav_order_txt.style.fontSize = `21px`;
    nav_order_txt.style.color = `red`;

    nav_home_txt.style.fontSize = `20px`;
    nav_home_txt.style.color = `black`;

    nav_order_detail_txt.style.fontSize = `20px`;
    nav_order_detail_txt.style.color = `black`;

    main_root.style.position = `relative`;
    main_root.style.left = `-200vw`;
    main_root.style.transitionDuration = `1s`;
});

nav_orderD.addEventListener("click", function () {

    nav_customer_txt.style.fontSize = `20px`;
    nav_customer_txt.style.color = `black`;

    nav_item_txt.style.fontSize = `20px`;
    nav_item_txt.style.color = `black`;

    nav_order_txt.style.fontSize = `20px`;
    nav_order_txt.style.color = `black`;

    nav_home_txt.style.fontSize = `20px`;
    nav_home_txt.style.color = `black`;

    nav_order_detail_txt.style.fontSize = `21px`;
    nav_order_detail_txt.style.color = `red`;

    main_root.style.position = `relative`;
    main_root.style.left = `-400vw`;
    main_root.style.transitionDuration = `1s`;
});

nav_item.addEventListener("click", function () {

    nav_customer_txt.style.fontSize = `20px`;
    nav_customer_txt.style.color = `black`;

    nav_item_txt.style.fontSize = `21px`;
    nav_item_txt.style.color = `red`;

    nav_order_txt.style.fontSize = `20px`;
    nav_order_txt.style.color = `black`;

    nav_home_txt.style.fontSize = `20px`;
    nav_home_txt.style.color = `black`;

    nav_order_detail_txt.style.fontSize = `20px`;
    nav_order_detail_txt.style.color = `black`;

    main_root.style.position = `relative`;
    main_root.style.left = `-300vw`;
    main_root.style.transitionDuration = `1s`;
});

//customer save option
/*
let customerArray = [{
    name: `kamal`,
    address: `galle`,
    tp: `0714523869`,
    id: `C001`
}];

let btnCustomer = document.getElementById("save-customer");

let id = document.getElementById("customer-gmail");
let address = document.getElementById("customer-address");
let name = document.getElementById("customer-name");
let tp = document.getElementById("customer-tp");

let tableBody = document.getElementById("body");


$(`#save-customer`).click(function () {
    // let customer = [id.value, address.value, name.value, tp.value];
    let cus = {
        name: name.value,
        id: id.value,
        address: address.value,
        tp: tp.value
    }
    customerArray.push(cus);
    for (const customer of customerArray) {
        console.log(customerArray);
    }

    getAll();

});

$(`#getAllCustomer`).click(function () {
    getAll();
});


function getAll() {

    $(`#body`).empty();

    for (const customer of customerArray) {

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

        setEvent();
    }


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
            $(this).closest("tr").remove();      // Finds the closest row <t
        });
    });
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

getAll();*/
