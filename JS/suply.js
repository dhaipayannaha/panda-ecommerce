function updateProductNumber (product, price, isIncreasing){

    function changeImage() {
        var imageElement = document.getElementById("myImage");
        var newImageSrc = "../IMAGES/shoes/shoe-3.png";
        imageElement.src = newImageSrc;
        imageElement.alt = "New Image";
    }

    const productInput = document.getElementById(product + "-number");
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    // update case total
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + '-total')
    productTotal.innerText = productNumber * price;

    // calculate total
    calculateTotal();
    
}


function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber =parseInt(productInput.value);
    return productNumber;
}

function calculateTotal(){
    
    const showTotal = getInputValue('show') * 400;
    const tax = showTotal / 10
    const totalPrice = showTotal + tax;
    document.getElementById("sub-total").innerText = showTotal;
    document.getElementById("tax-amount").innerText = tax;
    document.getElementById("total-price").innerText = totalPrice;
}


//                handle show incresae decrease event

document.getElementById("show-plus").addEventListener("click", function(){

    updateProductNumber("show", 400, true)

});

document.getElementById("shoe-minus").addEventListener("click", function(){

    updateProductNumber("show", 400, false)

});

