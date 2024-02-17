/***********************************************************
*                                                          *
*     Javascript para formulario del proyecto bootstrap    *
*                                                          *
***********************************************************/

function validacion() {
    let correcto = true ;
    let name = document.getElementById('name').value ;
    let surname = document.getElementById('surname').value ;
    let email = document.getElementById('email').value ;

    if (name == "" || /^\s+$/.test(name) || /[0-9]/.test(name) || !/[a-zñ']{2,}/i.test(name)) {
        document.getElementById('nameHelp').style.visibility="visible" ;
        document.getElementById('name').style.borderColor="red" ;
        correcto = false ;
      // no debería volverse aquí: return false ; 
    }
    
    if (surname == "" || /^\s+$/.test(surname) || /[0-9]/.test(surname) || !/[a-zñ']{2,}/i.test(surname)) {
        document.getElementById('surnameHelp').style.visibility="visible" ;
        document.getElementById('surname').style.borderColor="red" ;
        correcto = false ;
      // no debería volverse aquí: return false ;
    }

    if (email == "" || !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email))) {
        document.getElementById('emailHelp').style.visibility="visible" ;
        document.getElementById('email').style.borderColor="red" ;
        correcto = false ;
      // no debería volverse aquí: return false ;
    }
    
    return correcto ;
    
}

function resetear(id) {
    document.getElementById(id + 'Help').style.visibility="hidden" ;
    document.getElementById(id).style.borderColor="lightgrey" ;
}