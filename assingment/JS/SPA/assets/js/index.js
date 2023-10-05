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

    for (const customer of customerArray) {

        $(`#body`).append(`<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.tp}</td><td><button type="button" class="btn btn-primary btn-sm me-2" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal2">
                                    Edit
                                </button>
                                <button class="btn btn-danger me-3 btn-sm">Delete</button></td></tr>`);
    }

}