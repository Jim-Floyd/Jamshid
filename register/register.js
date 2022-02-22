let firstNameList = ['name1', 'name2', 'name3'],
firstName = document.querySelector('.first-name'),
lastNameList = ['name4', 'name5', 'name6'],
lastName = document.querySelector('.last-name'),
password = document.querySelector('.password'),
repassword = document.querySelector('.repassword')
//fullname checking
function firstNameCheck(){
if(firstNameList.includes(firstName.value)) {
    firstName.style.cssText = 'border: red solid 2px'
} else {
    firstName.style.cssText = 'border: none'
}
}
function lastNameCheck(){
    if(lastNameList.includes(lastName.value)) {
        lastName.style.cssText = 'border: red solid 2px'
    } else {
        lastName.style.cssText = 'border: none'
    }
    }
lastName.addEventListener('input', lastNameCheck)
//password checking
function passwordCheck(){
    if(password.value.length<8){
        document.querySelector('.pass-error').style.cssText = 'display: block; color:red; font-style: italic'
    } else {
        document.querySelector('.pass-error').style.cssText = 'display: none'
    }
    console.log(password.value.length)
}
password.addEventListener('input', passwordCheck)
function repasswordCheck(){
    if(repassword.value!==password.value){
        document.querySelector('.repass-error').style.cssText = 'display: block; color:red; font-style: italic'
    } else {
        document.querySelector('.repass-error').style.cssText = 'display: none'
    }
}
repassword.addEventListener('input', repasswordCheck)
//show password by checkbox
function showPassword(){
    if(password.type === "password"){
        password.type = "text"
    } else {
        password.type = "password"
    }
}
document.getElementById('password1').addEventListener('click', showPassword)
function showrePassword(){
    if(repassword.type === "password"){
        repassword.type = "text"
    } else {
        repassword.type = "password"
    }
}
document.getElementById('password2').addEventListener('click', showrePassword)