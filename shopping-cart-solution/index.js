function countValue(increase, product, price) {
    const inputNumber = document.getElementById(product + '-number');
    let inputNumbersValue = inputNumber.value;
    if (increase) {
        inputNumbersValue = parseInt(inputNumbersValue) + 1;
    } else if(inputNumbersValue>0) {
        inputNumbersValue = parseInt(inputNumbersValue) - 1;
    } 
    inputNumber.value = inputNumbersValue;

    const totalPrice = document.getElementById(product + '-total');
     totalPrice.innerText = inputNumbersValue * price;
}

document.getElementById('phone-plus').addEventListener('click', function () {
    countValue(true, 'phone', 1219);
})

document.getElementById('phone-minus').addEventListener('click', function () {
    countValue(false, 'phone', 1219);
})

document.getElementById('case-plus').addEventListener('click', function () {
    countValue(true, 'case', 59);
});
document.getElementById('case-minus').addEventListener('click', function () {
    countValue(false, 'case', 59);
});




