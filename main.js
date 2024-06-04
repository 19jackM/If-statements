let items = prompt('pair of socks');
let amount = Number(prompt('cost per pair'));
let operator = ('enter your operator');


if (amount == items){
    alert ('Insufficient funds');
}

else {
    alert ('amount due R'+ (items * amount));

}
