function savingDataToLocalDisk(event){
    event.preventDefault();
     const naMe = event.target.Username.value;
    const emAil = event.target.Email.value;
    localStorage.setItem('name', naMe);
    localStorage.setItem('email', emAil);
}