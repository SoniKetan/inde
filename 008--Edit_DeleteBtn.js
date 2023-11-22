let form = document.getElementById("addForm");
let listOfitems = document.getElementById("items" );

form.addEventListener('submit', additonOfItems);
function additonOfItems(a){
    a.preventDefault();
    let newAddmission = document.getElementById("famous").value ;
    let newLi = document.createElement('li');
    newLi.className = "list-group-item";
    newLi.appendChild(document.createTextNode(newAddmission));

    let deleBtn = document.createElement('button');
    deleBtn.className = 'btn btn-danger btn-sm float-right delete';
    let deleBtnText = document.createTextNode('X');
    deleBtn.appendChild(deleBtnText);

    newLi.appendChild(deleBtn);


    let editBtn = document.createElement('button');
    editBtn.className = 'btn btn-primary btn-sm float-right edit';
    let editBtnText = document.createTextNode('EDIT');
    editBtn.appendChild(editBtnText);

    newLi.appendChild(editBtn);

    listOfitems.appendChild(newLi);
}


listOfitems.addEventListener('click', deletionOfAddmissions);
function deletionOfAddmissions(b){
    if(b.target.classList.contains('delete'))
    {
        if(confirm('Ready to Delete.'))
        {
            let arr = b.target.parentElement;
            listOfitems.removeChild(arr);
        }
    }
}