function Clicked(){
    document.getElementById('main_container').className='hidden'
    document.getElementById('enrollment_container').className='enrollment-container-visible'
}

function checkName(name){
    for(let i=0;i<name.length;i++){
        if(!((name[i]>='a' && name[i]<='z') || (name[i]==' ')))
            return false
    }
    return true
}

function checkNumber(number){
    for(let i=0;i<number.length;i++){
        if(!(number[i]>='0' && number[i]<='9'))
            return false
    }
    return true
}


function checkDetails(){
    let name=document.getElementById('name').value
    let number=document.getElementById('number').value
    
    name=name.toLowerCase()

    let isNameTrue=checkName(name)
    let isNumberTrue=checkNumber(number)

    if(isNumberTrue && isNameTrue){
        alert('Enrollment Successfull\n'+
              'Name: '+document.getElementById('name').value+
              '\nMobile Number: '+number+
              '\nEmail: '+document.getElementById('email').value+
              '\nRegistered Course: '+document.getElementById('courses').value)
        return true
    }
    else{
        if(!isNameTrue)
            document.getElementById('span_name').className='span-visible'
        return false
    }

}