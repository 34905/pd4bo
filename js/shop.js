const addToCartButtons = document.getElementsByClassName("games__button");
let cartMessage = 0;
let cartMessageValue = document.getElementsByClassName("shoppingCart__message")[0];
const shoppingModal = document.getElementById("js--shoppingModal");
let modalIOpen = false;

let basket1  = 0; 
let basket2  = 0;
let basket3  = 0;
let basket4  = 0;
let basket5  = 0;
let basket6  = 0;
let basket7  = 0;
let basket8  = 0;
let basket9  = 0;
let basket10 = 0;
let basket11 = 0;


for(let i = 0; i < addToCartButtons.length; i++){
    addToCartButtons[i].onclick = function(){
        cartMessage += 1;
        cartMessageValue.innerHTML = cartMessage;
        switch(addToCartButtons[i].dataset.product){
            case "basket1":
                basket1 += 1;
                break;
            case "basket2":
                basket2 += 1;
                break;
            case "basket3":
                basket3 +=1;
                break;
            case "basket4":
                basket4 += 1;
                break;
            case "basket5":
                basket5 += 1;
                break;  
            case "basket6":
                basket6 += 1;
                break;  
            case "basket7":
                basket7 += 1;
                break; 
            case "basket8":
                basket8 += 1;
                break;
            case "basket9":
                basket9 += 1;
                break;
            case "basket10":
                basket10 += 1;
                break;
            case "basket11":
                basket11 += 1;
                break;                     
        }
   
        if(modalIOpen === false){
        shoppingModal.style.display ="flex";
        modalIOpen = true;
        setTimeout(function(){
            shoppingModal.style.display = "none";
            modalIOpen = false;
        },2000);
    }
    }
}

const checkOutButton = document.getElementById("js--checkOutButton");
const checkOutWindow = document.getElementById("js--checkOutWindow");
let checkOutIsOpen = false;

checkOutButton.onclick = function(){
    if(checkOutIsOpen === false){
        document.querySelector("main").style.display = "none";
        checkOutWindow.style.display = "block";
        checkOutIsOpen = true;
        
        document.getElementById("js--amount-basket1").innerHTML = basket1 + "x";
        document.getElementById("js--price-basket1").innerHTML = "$" + ( basket1 * 20 );

        document.getElementById("js--amount-basket2").innerHTML = basket2 + "x";
        document.getElementById("js--price-basket2").innerHTML = "$" + ( basket2 * 25 );

        document.getElementById("js--amount-basket3").innerHTML = basket3 + "x";
        document.getElementById("js--price-basket3").innerHTML = "$" + ( basket3 * 25 );

        document.getElementById("js--amount-basket4").innerHTML = basket4 + "x";
        document.getElementById("js--price-basket4").innerHTML = "$" + ( basket4 * 30 );

        document.getElementById("js--amount-basket5").innerHTML = basket5 + "x";
        document.getElementById("js--price-basket5").innerHTML = "$" + ( basket5 * 25 );

        document.getElementById("js--amount-basket6").innerHTML = basket6 + "x";
        document.getElementById("js--price-basket6").innerHTML = "$" + ( basket6 * 20 );

        document.getElementById("js--amount-basket7").innerHTML = basket7 + "x";
        document.getElementById("js--price-basket7").innerHTML = "$" + ( basket7 * 25 );

        document.getElementById("js--amount-basket8").innerHTML = basket8 + "x";
        document.getElementById("js--price-basket8").innerHTML = "$" + ( basket8 * 25 );

        document.getElementById("js--amount-basket9").innerHTML = basket9 + "x";
        document.getElementById("js--price-basket9").innerHTML = "$" + ( basket9 * 25 );

        document.getElementById("js--amount-basket10").innerHTML = basket10 + "x";
        document.getElementById("js--price-basket10").innerHTML = "$" + ( basket10 * 30 );

        document.getElementById("js--amount-basket11").innerHTML = basket11 + "x";
        document.getElementById("js--price-basket11").innerHTML = "$" + ( basket11 * 35 );

        return;
    }
        document.querySelector("main").style.display = "block";
        checkOutWindow.style.display = "none";
        checkOutIsOpen = false;


}

function redirectToAnotherPage() {
    window.location.href = 'index.html';
}
