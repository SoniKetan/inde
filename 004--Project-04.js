const form = document.getElementById("unique");
// console.log(form);

const addDetails = document.getElementById("special");
// console.log(addDetails);

form.addEventListener('submit' , addingDetailsOfUser);
function addingDetailsOfUser(a){
    a.preventDefault();
    // console.log(786);

    let addUserAmount = document.getElementById("expenseAmt").value;

    let newLiAmount = document.createElement('li');
    newLiAmount.className = "listing-amount";
    
    let newLiTextAmount = document.createTextNode(addUserAmount);

    newLiAmount.appendChild(newLiTextAmount);

    addDetails.appendChild(newLiAmount);


///************************************************************************************** ***********/


    let addUserDescription = document.getElementById("details").value;

    let newLiDescription = document.createElement('li');
    newLiDescription.className = "listing-description";

    let newLiDescriptionText = document.createTextNode(addUserDescription);

    newLiDescription.appendChild(newLiDescriptionText);

    addDetails.appendChild(newLiDescription);

///************************************************************************************** ***********/


    let addUserCategory = document.getElementById("catty").value;

    let newLiCat = document.createElement('li');
    newLiCat.className = 'listing-category';

    let newLiCatText = document.createTextNode(addUserCategory);

    newLiCat.appendChild(newLiCatText);

    addDetails.appendChild(newLiCat);


}

function savingDetailsOnLocalStorage(event){
    event.preventDefault();
    let object = {
        amountInput : event.target.expenseAmount.value,
        descriptionInput : event.target.detailsOfDescript.value,
        categoryInput : event.target.categoreddy.value
    }
    localStorage.setItem(object.amountInput, JSON.stringify(object));
    savingDetailsOnDisplayScreen(object);
}

function savingDetailsOnDisplayScreen(object){
    let arr = document.getElementById("special");
    let brr = document.createElement('li');

    brr.className = 'listing-display';

    brr.appendChild(document.createTextNode(`${object.amountInput}`));

    let deleteBtn = document.createElement('input');
    deleteBtn.type = 'button';
    deleteBtn.value = 'Delete';
    deleteBtn.onclick = () => {
        localStorage.removeItem(object.amountInput);
        arr.removeChild(brr);
    }

    brr.appendChild(deleteBtn);

    let editBtn = document.createElement('input');
    editBtn.type = 'button';
    editBtn.value = 'Edit';
    editBtn.onclick = () => {
        localStorage.removeItem(object.amountInput);
        arr.removeChild(brr);
        document.getElementById("expenseAmt").value = object.amountInput;

    }
    brr.appendChild(editBtn);
    arr.appendChild(brr);

}