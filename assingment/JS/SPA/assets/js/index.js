let nav_home = document.getElementById("nav-home");
let nav_customer =  document.getElementById("nav-customer");
let nav_order = document.getElementById("nav-order");
let nav_item = document.getElementById("nav-item");
let nav_orderD = document.getElementById("nav-order-detail");
let main_root = document.getElementById("main-root");

nav_customer.addEventListener("click",function (){
    main_root.style.position = `relative`;
    main_root.style.left = `-100vw`;
    main_root.style.transitionDuration = `1s`;
});

nav_home.addEventListener("click",function (){
    main_root.style.position = `relative`;
    main_root.style.left = `0`;
    main_root.style.transitionDuration = `1s`;
});

nav_order.addEventListener("click",function (){
    main_root.style.position = `relative`;
    main_root.style.left = `-200vw`;
    main_root.style.transitionDuration = `1s`;
});

nav_orderD.addEventListener("click",function (){
    main_root.style.position = `relative`;
    main_root.style.left = `-400vw`;
    main_root.style.transitionDuration = `1s`;
});

nav_item.addEventListener("click",function (){
    main_root.style.position = `relative`;
    main_root.style.left = `-300vw`;
    main_root.style.transitionDuration = `1s`;
});