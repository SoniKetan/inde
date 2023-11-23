// function savingDataToLocalDisk(event){
//     let naming = event.target.fullName.value;
//     let mailing = event.target.mailID.value;
//     localStorage.setItem('name', naming);
//     localStorage.setItem('email', mailing);
// }


function savingDataToLocalDisk(event){
    let object = {
        naming : event.target.fullName.value,
        mailing : event.target.mailID.value
    }
    let obj_serialized = JSON.stringify(object);
    console.log(obj_serialized);
    localStorage.setItem('Details', obj_serialized);

    let obj_deserialized = JSON.parse(localStorage.getItem('Details'));
    console.log(obj_deserialized);
}