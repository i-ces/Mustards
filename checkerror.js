document.getElementById('submit').addEventListener('click',()=>{
    var obj={ 
       //Getting inputs
    userNam:document.getElementById('info').value,
    phoneNum:document.getElementById('phonenumber').value,
    perAd:document.getElementById('address1').value,
    temAd:document.getElementById('address2').value,
    emai:document.getElementById('email').value};
    //Checking error
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
    var dataStorage=[];
//Saving and displaying only if all the box are filled
    if(access()===true){
   var stg=JSON.stringify(obj);    //converting to string
    localStorage.setItem('datas',stg);
    var conv=JSON.parse(stg);     //converting to object
    dataStorage.push(localStorage.getItem(conv));
    console.log(conv);
    var upper=999;
    var lower=100;
    var numBer=obj.perAd+'-'+ (Math.floor(Math.random()*(upper-lower+1))+lower);
    console.log(numBer);
    console.log(dataStorage);

    //Setting everything to new one
    /*document.getElementById('info').value='';
    document.getElementById('phonenumber').value='';
    document.getElementById('address1').value='';
    document.getElementById('address2').value='';
    document.getElementById('email').value='';*/
    }
    });
    