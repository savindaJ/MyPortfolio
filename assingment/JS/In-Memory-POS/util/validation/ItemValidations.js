const item_id_regx = /^(I00-)[0-9]{3}$/;
const description_regx = /^[A-Za-z ]{5,}$/;
const price_regex = /^[0-9 ]{5,}$/;
const qty_regex = /^[0-9 ]{5,}$/;

let i_validity = new Array();
i_validity.push({field: $("#txtItemId"), regEx: item_id_regx});
i_validity.push({field: $("#txtItemdec"), regEx: description_regx});
i_validity.push({field: $("#txtItemUnitPrice"), regEx: price_regex});
i_validity.push({field: $("#txtItemQty"), regEx: qty_regex});

let update_validity = new Array();

update_validity.push({field: $("#upItemId"), regEx: item_id_regx});
update_validity.push({field: $("#upItemdesc"), regEx: description_regx});
update_validity.push({field: $("#upUnitPrice"), regEx: price_regex});
update_validity.push({field: $("#upQty"), regEx: qty_regex});

