// this is css in js 
document.body.style.backgroundColor = 'lightblue';
document.querySelector('h1').innerText = 'Cart tracker';




let cart = 0;
const quantity = document.getElementById('quantity');
const add1 = document.getElementById('add1');
const add2 = document.getElementById('add2');
const add3 = document.getElementById('add3');
const reset = document.getElementById('reset');
const submit = document.getElementById('submit');
let str;
let num;
add1.addEventListener('click', function(){
    cart += 1;
})
add2.addEventListener('click', function(){
    cart += 2;
});
add3.addEventListener('click', function(){
    cart += 3;
});
reset.addEventListener('click', function(){
    cart = 0;
});
submit.addEventListener('click', function(){
    str = document.getElementById('input').value;
    num = + str;
    if (!isNaN(num) && num !== ''){
        cart += num;
    }else{
        alert('only numbers are allowed');
    }
});
quantity.addEventListener('click', function(){
    alert('this is your cart quantity: ' + cart);
});
