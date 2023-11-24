let formAccess = document.getElementById("addForm");
console.log(formAccess);

let allListAccess = document.getElementById("items");
console.log(allListAccess);

let searchAccess = document.getElementById("filter");
console.log(searchAccess);



//////***************************************************************************************************************** */




formAccess.addEventListener('submit', additionOfUsers);
function additionOfUsers(a){
    a.preventDefault();
    // console.log(786)

    let newUsers = document.getElementById("famous").value;
    let newLi = document.createElement('li');
    newLi.className = "list-group-item";
    let newLiText = document.createTextNode(newUsers);
    newLi.appendChild(newLiText);


    let deleteBtn = document.createElement('button');
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    let deleteBtnText = document.createTextNode('X');
    deleteBtn.appendChild(deleteBtnText);
    newLi.appendChild(deleteBtn);

    allListAccess.appendChild(newLi);
}


//////***************************************************************************************************************** */




allListAccess.addEventListener('click', removeUsersFromLiTag);
function removeUsersFromLiTag(b){
    b.preventDefault();
    
    if(b.target.classList.contains('delete'))
    {
        if(confirm('Are you Sure'))
        {
            let arr = b.target.parentElement;
            allListAccess.removeChild(arr);
        }
    }
}


//////***************************************************************************************************************** */



searchAccess.addEventListener('keyup', searchingOrFilteringByLetters);
function searchingOrFilteringByLetters(c){
    let smallLetters = c.target.value.toLowerCase();
    let liTagsForLetters = allListAccess.getElementsByTagName('li');
    Array.from(liTagsForLetters).forEach(function(str){
        let revStr = str.firstChild.textContent;
        if(revStr.toLowerCase().indexOf(smallLetters) !== -1)
        {
            str.style.display = 'block';
        }
        else{
            str.style.display = 'none';
        }
    })
}



//////***************************************************************************************************************** */



// function savingDataOnLocalStorage(event){
//     event.preventDefault();
//     let nameInput = event.target.username.value;
//     localStorage.setItem('name', nameInput);
// }


// function savingDataOnLocalStorage(event){
//     event.preventDefault();
//     const object = {
//         name : event.target.username.value
//     }
//     let obj_serialized = JSON.stringify(object);
//     console.log(obj_serialized);
//     localStorage.setItem('name', obj_serialized);

//     let obj_deserialized = JSON.parse(localStorage.getItem('name'));
//     console.log(obj_deserialized);
// }



function savingDataOnLocalStorage(event){
    event.preventDefault();
    const object = {
        name : event.target.username.value
    }
    // let obj_serialized = JSON.stringify(object);
    // console.log(obj_serialized);
    // localStorage.setItem('name', obj_serialized);

    // let obj_deserialized = JSON.parse(localStorage.getItem('name'));
    // console.log(obj_deserialized);
    localStorage.setItem(object.name, JSON.stringify(object));
    appearOnDisplayStorage(object);
}




//////***************************************************************************************************************** */




// function appearOnDisplayStorage(object){
//     let parentElement = document.createElement('ul');
//     parentElement.id = 'personal';

//     let childElement = document.createElement('li');
//     childElement.className = 'list-group-item';
    
//     childElement.appendChild(document.createTextNode(`${object.name}`));


//     let deleteButton = document.createElement('input');
//     deleteButton.type = 'button';
//     deleteButton.value = 'delete';
//     deleteButton.onclick = () => {
//         localStorage.removeItem(object.name);
//         parentElement.removeChild(childElement);
//     }

//     childElement.appendChild(deleteButton);

//     parentElement.appendChild(childElement);
// }
// // The above display code is performing but inside it the deletion of data from the page and 
// // local storage is not working because we have created the ul element in the DOM that why it is not working ;
// // So, to perform well create the ul tag inside the HTML file;




function appearOnDisplayStorage(object){
    // let arr = document.getElementsByClassName("temporary");
    let arr = document.getElementById("temporary");
    let brr = document.createElement('li');
    // brr.setAttribute('className', 'list-group-items');
    brr.className = 'list-group-items';
    
    brr.appendChild(document.createTextNode(`${object.name}`));

    let deleteButton = document.createElement('input');
    deleteButton.type = 'button';
    deleteButton.value = 'delete';
    deleteButton.onclick = () =>{
        localStorage.removeItem(object.name);
        arr.removeChild(brr);
    }

    brr.appendChild(deleteButton);



    let editButton = document.createElement('input');
    editButton.type = 'button';
    editButton.value = 'Edit';
    editButton.onclick = () =>{
        localStorage.removeItem(object.name);
        arr.removeChild(brr);
        document.getElementById("famous").value = object.name;
    }

    brr.appendChild(editButton);

    

    arr.appendChild(brr);
}