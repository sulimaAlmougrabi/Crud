/*
//array
color = ["red","black","blue","yallow"]
console.log(color[2])
console.log(typeof(color))
// array & object
// user =[{},{},{}]
color.push("white")
for(var i=0 ; i<color.length ; i++){
    console.log(color[i])
}
*/
var pNameInput = document.getElementById("pname");
var pCategoryInput = document.getElementById("pcategory");
var pPriceInput = document.getElementById("pprice");
var pDescriptionInput = document.getElementById("pdescription");
var updateBtn = document.getElementById("mainBtn");
var tableBody = document.getElementById("tbody");
// var productList = [];
// var productList = localStorage.setItem("All products")  string
// localStorage.stringify(productList)
if(localStorage.getItem("allProduct")==null){
    var productList = [];
}else{
    var productList = JSON.parse(localStorage.getItem("allProduct"));
}
displayProduct();

function addProduct() {
    if(pNameInput.value != "" && pCategoryInput.value != "" && pPriceInput.value != "" && pDescriptionInput.value != ""){
    var product = {
        productName: pNameInput.value,
        productCategory: pCategoryInput.value,
        productPrice: pPriceInput.value,
        productDescription: pDescriptionInput.value
    };
    productList.push(product);  
    localStorage.setItem("allProduct",JSON.stringify(productList));
    displayProduct();
    cleanForm();
}
else{
    alert("Please enter all form")
}
}
function displayProduct() {
    var trs = "";
    for (var i = 0; i < productList.length; i++) {
        trs += `<tr>
        <td>${i}</td>
        <td>${productList[i].productName}</td>
        <td>${productList[i].productCategory}</td>
        <td>${productList[i].productPrice}</td>
        <td>${productList[i].productDescription}</td>
        <td onclick="changeForm(${i})" class="bg-warning text-white"><i class="far fa-edit"></i></td>
        <td onclick="deleteProduct(${i})" class="bg-danger text-white"><i class="far fa-trash-alt"></i></td>
        </tr>`
    }
    tableBody.innerHTML = trs ;
}
function cleanForm(){
    pNameInput.value = "";
    pCategoryInput.value ="";
    pPriceInput.value = "";
    pDescriptionInput.value = "";
}
function deleteProduct(pIndex){
    productList.splice(pIndex,1);
    localStorage.setItem("allProduct",JSON.stringify(productList));
    displayProduct();
}
function changeForm(pIndex){
    pNameInput.value = productList[pIndex].productName;
    pCategoryInput.value = productList[pIndex].productCategory;
    pPriceInput.value = productList[pIndex].productPrice;
    pDescriptionInput.value = productList[pIndex].productDescription;
    updateBtn.innerHTML = "Update";
    localStorage.setItem("allProduct",JSON.stringify(productList))
    // var updateProduct ={
    //     pNameUpdate :  pNameInput.value,
    //     pCategoryUpdate : pCategoryInput.value,
    //     pPriceUpdate : pPriceInput.value,
    //     pDescriptionUpdate : pDescriptionInput.value
    // }
    
    productList.splice(pIndex,1);
    // // console.log( )
    displayProduct();
}
// function search(searchTerm){
//     for (var i = 0; i < productList.length; i++){
//         if(productList[i].productName.includes(searchTerm) == true){
//             console.log("true")
//         }
//     }
// }