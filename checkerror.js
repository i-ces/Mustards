document.getElementById('submit').addEventListener('click',()=>{
    var obj={ 
    userNam:document.getElementById('info').value,
    phoneNum:document.getElementById('phonenumber').value,
    perAd:document.getElementById('address1').value,
    temAd:document.getElementById('address2').value,
    emai:document.getElementById('email').value};
    var access=function()
    {
        if(obj.userNam.length<3)
    {
        alert('Invalid name!!!');
        return false;

    }
    else if(obj.phoneNum.length<10)
    {
        alert('Number should be 10 character long');
        return false;

    }
    else if(obj.perAd.length<3)
    {
        alert('Wrong permanent address');
        return false;
  
    }
    else if(obj.temAd.length<=3)
    {
        alert('Wrong temporary address');
        return false;

    }
    else{
        alert('Right!!!');
        return true;
    }
}
    if(access()===true){

   var stg=JSON.stringify(obj);
    localStorage.setItem('datas',stg);
    var conv=JSON.parse(stg);
    console.log(conv);
    var upper=999;
    var lower=100;
    var numBer=obj.perAd+'-'+ (Math.floor(Math.random()*(upper-lower+1))+lower);
console.log(numBer);
    }
    });