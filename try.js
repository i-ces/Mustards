/*localStorage.setItem('name','Dipesh');
localStorage.setItem('age',20);
console.log(localStorage);*/

document.getElementById('submit').addEventListener('click',()=>{
    var obj={ 
    userNam:document.getElementById('info').value,
    phoneNum:document.getElementById('phonenumber').value,
    perAd:document.getElementById('address1').value,
    temAd:document.getElementById('address2').value,
    emai:document.getElementById('email').value};
    var stg=JSON.stringify(obj);
    localStorage.setItem('datas',stg);
    var conv=JSON.parse(stg);
    console.log(conv);
    });