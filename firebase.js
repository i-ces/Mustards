var con=firebase.database().ref('users');

document.getElementById('submit').addEventListener('click',(e)=>{
    e.preventDefault();
    var userInfo=con.push();
    userInfo.set({
        userNam:getId('info'),
        phoneNum:getId('phonenumber'),
        perAd:getId('address1'),
        temAd:getId('address2'),
        emai:getId('email')}

);
alert('sent');
document.getElementById('form').reset();
});
