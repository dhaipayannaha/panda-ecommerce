function updateProductNumber (product, price, isIncreasing){
    const productInput = document.getElementById(product + "-number");
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    
    productInput.value = productNumber;
    const productTotal = document.getElementById(product + '-total')
    productTotal.innerText = productNumber * price;
    
}

//                supply section

document.getElementById("Supply-plus").addEventListener("click", function(){

    updateProductNumber("Supply", 350, true)

});

document.getElementById("Supply-minus").addEventListener("click", function(){

    updateProductNumber("Supply", 350, false)
});





//                     nike section  

document.getElementById("nike-plus").addEventListener("click", function(){
    updateProductNumber ("nike", 400, true);
});

document.getElementById("nike-minus").addEventListener("click", function(){
    updateProductNumber ("nike", 400, false);   
});


//                     airmax section  

document.getElementById("airmax-plus").addEventListener("click", function(){
    updateProductNumber ("airmax", 500, true);
});

document.getElementById("airmax-minus").addEventListener("click", function(){
    updateProductNumber ("airmax", 500, false);   
});