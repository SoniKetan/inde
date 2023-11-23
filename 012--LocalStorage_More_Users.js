// // Storing data in multiple lines :--


// function savingDataToLocalDisk(event){
//     event.preventDefault();
//     let naming = event.target.fullName.value;
//     let mailing = event.target.mailID.value;
//     let mobileNum = event.target.PhoneNumber.value;
//     localStorage.setItem('name', naming);
//     localStorage.setItem('email', mailing);
//     localStorage.setItem('pNumber', mobileNum);
// }



////////********************************************************************* */


// // Storing data in single line :--


// function savingDataToLocalDisk(event){
//     event.preventDefault();
//     const object = {
//         naming : event.target.fullName.value,
//         mailing : event.target.mailID.value,
//         mobileNum : event.target.PhoneNumber.value
//     }
//     let obj_serialized = JSON.stringify(object);
//     console.log(obj_serialized);
//     localStorage.setItem('Full-Details', obj_serialized);

//     let objB_deserialized = JSON.parse(localStorage.getItem('Full-Details'));
//     console.log(objB_deserialized);
// }




// function savingDataToLocalDisk(event){
//     event.preventDefault();
//     const object = {
//         naming : event.target.fullName.value,
//         mailing : event.target.mailID.value,
//         mobileNum : event.target.PhoneNumber.value
//     }
//     // let obj_serialized = JSON.stringify(object);
//     // console.log(obj_serialized);
//     // localStorage.setItem('Full-Details', obj_serialized);

//     // let objB_deserialized = JSON.parse(localStorage.getItem('Full-Details'));
//     // console.log(objB_deserialized);
//     localStorage.setItem(object.name, JSON.stringify(object));
//     // // Here, we can mention in a single line to by writing lots of lines 
//     // // from serialized to deserialized ;
//     // // Same output we will get ;
// }


////////********************************************************************* */


// // Storing data in single line and on page itself :--

let candidates = document.querySelector(".candidates");
console.log(candidates);

function savingDataToLocalDisk(event){
    event.preventDefault();
    const object = {
        naam : event.target.fullName.value,
        mail : event.target.mailID.value,
        mobileNum : event.target.PhoneNumber.value
    }
    localStorage.setItem(object.naam, JSON.stringify(object));
    displayOnTheSamePage(object);
}
function displayOnTheSamePage(object){
// // To implement this, first make sure that you have to create some thing to display on the screen;
// // Means that you have to create some div and ul tag to store that data to display on the screen;
    let parentElement = document.getElementById("candidates");
    // // parentElement.innerHTML = parentElement + `<li> ${object.naam} - ${object.mail} - ${object.mobileNum} </li>`
    // // Here, we are getting the output but it is not a correct format;
    // // And only single data is storing and over-riding;
    let childElement = document.createElement('li');
    // // childElement.textContent = object.naam +"-"+ object.mail +'-'+ object.mobileNum;
    // // Here, we are able to store multiple data as compared to single on the screen as well as on the 
    // // local storage;
    childElement.appendChild(document.createTextNode(`${object.naam} : ${object.mail} : ${object.mobileNum}`));
    // // Best way and multiple data storing as above do ;
    parentElement.appendChild(childElement);
}

    