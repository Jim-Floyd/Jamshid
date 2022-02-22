let firstNameList = ['name1', 'name2', 'name3'],
firstName = document.querySelector('.first-name'),
lastNameList = ['name4', 'name5', 'name6'],
lastName = document.querySelector('.last-name'),
password = document.querySelector('.password'),
repassword = document.querySelector('.repassword')

//Fullname checking

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

//Password checking

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

//Show password by checkbox

// function showPassword(){
//     if(password.type === "password"){
//         password.type = "text"
//     } else {
//         password.type = "password"
//     }
// }
// document.getElementById('password1').addEventListener('click', showPassword)
function showrePassword(){
    if(repassword.type === "password" && password.type === "password"){
        repassword.type = "text"
        password.type = 'text'
    } else {
        repassword.type = "password"
        password.type = 'password'
    }
}
document.getElementById('password2').addEventListener('click', showrePassword)
 
// Checking selects

const select2 = document.getElementById('select2'),
    select1 = document.getElementById('select1'),
    select3 = document.getElementById('select3');
// select2.addEventListener('click', ()=>{
//     console.log(select2.options[select2.selectedIndex].text)
//     console.log(select2.options[select2.selectedIndex].value)
//     console.log(select2.selectedIndex)
//     console.log(select2.options[1])
// })
// function checkSelectOneTwo() {
//     for (let i=0; i<select2.options.length; i++){
//         if (select2.options[i].text===select1.options[select1.selectedIndex].text){
//             select2.remove(select2.options[i])
//         }
//     }
// }
// select1.addEventListener('click',checkSelectOneTwo)
// function checkSelectTwoThree() {
//     for (let i=0; i<select3.options.length; i++){
//         if (select2.options[select2.selectedIndex].text===select3.options[i].text){
//             select3.remove(select3.options[i])
//             console.log(select3.options[i].text)
//         }
//     }  
// }
// select2.addEventListener('click',checkSelectTwoThree)

//Begzod tashlagani

// let list_subject = [],
//         change_1 = '',
//         change_2 = '',
//         change_3 = '',
//         change_4 = '';

//     function collectSubject(subject_1) {
//         if (change_1 === "") {
//             change_1 = subject_1
//             console.log(change_1, change_2)
//         } else {
//             change_2 = change_1
//             change_1 = subject_1
//             console.log(change_1, change_2)
//         }
//         if (change_1 !== "" && change_2 !== "") {
//             for (let value of fan2) {
//                 if (value.value !== change_2) {
//                     fan2.innerHTML += <option value="${change_2}">${change_2}</option>
//                     break
//                 }
//             }
//             for (let value of fan3) {
//                 if (value.value !== change_2) {
//                     fan3.innerHTML += <option value="${change_2}">${change_2}</option>
//                     break
//                 }
//             }
//             for (let value of fan2) {
//                 console.log(`Ikkinchi fan ${value.value}`)
//             }
//             for (let value of fan3) {
//                 console.log(`Uchinchi fan ${value.value}`)
//             }
//         }
//     }

//     function collectSubject2(subject_1) {
//         if (change_3 === "") {
//             change_3 = subject_1
//             console.log(change_3, change_4)
//         } else {
//             change_4 = change_3
//             change_3 = subject_1
//             console.log(change_3, change_3)
//         }
//         if (change_3 !== "" && change_4 !== "") {
//             for (let value of fan3) {
//                 if (value.value !== change_4) {
//                     fan3.innerHTML += <option value="${change_4}">${change_4}</option>
//                     break
//                 }
//             }
//             for (let value of fan3) {
//                 console.log(value.value)
//             }
//         }
//     }

//     function removeSub(sub) {
//         if (fan2) {
//             for (let i = 0; i < fan2.options.length; i++) {
//                 if (fan2.options[i].value === sub) {
//                     let val;

//                     function compareSubjects() {
//                         for (let value of list_subject) {
//                             val = value
//                         }
//                         if (val !== sub) {
//                             list_subject.push(fan2.options[i].value);
//                         }
//                     }

//                     compareSubjects()
//                     collectSubject(sub)
//                     fan2.remove(i)

//                 }
//             }
//         }
//         if (fan3) {
//             for (let i = 0; i < fan3.options.length; i++) {
//                 if (fan3.options[i].value === sub) {
//                     fan3.remove(i)
//                 }
//             }
//         }
//     }

//     function removeSub2(sub) {
//         if (fan3) {
//             for (let i = 0; i < fan3.options.length; i++) {
//                 if (fan3.options[i].value === sub) {
//                     let val;

//                     function compareSubjects() {
//                         for (let value of list_subject) {
//                             val = value
//                         }
//                         if (val !== sub) {
//                             list_subject.push(fan2.options[i].value);
//                         }
//                     }

//                     compareSubjects()
//                     collectSubject2(sub)
//                     fan3.remove(i)
//                 }
//             }
//         }
//     }

//O'zim urinib ko'rganim

list=['Matrematika', 'Ingliz tili', 'Rus tili', 'Kimyo', 'Fizika', 'Ona tili va adabiyot']
