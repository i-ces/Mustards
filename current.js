//INPUT FIELDS
var name=document.getElementById('info');
var phoneNo=document.getElementById('phonenumber');
var perAddress=document.getElementById('address1');
var tempAddress=document.getElementById('address2');

//FORM
var form=document.getElementById('file');

//VALIDATE username
function validates()
{
    if(info.value.length<3)
    {
        alert('Invalid name!!!');
        return false;
    }
    else if(phoneNo.value.length<10)
    {
        alert('Number should be 10 character long');
        return false;
    }
    else if(perAddress.value.length<=3)
    {
        alert('Wrong permanent address');
        return false;
    }
    else if(tempAddress.value.length<=3)
    {
        alert('Wrong temporary address');
        return false;
    }
    else
    return true;
}
    
document.getElementById('submit').addEventListener('click',validates);
