function pegarInputs(){

   let name = document.getElementById('txtNome').value;
   let email = document.getElementById('txtEmail').value;
   let pass = document.getElementById('txtPass').value;
   let passCon = document.getElementById('txtPassCon').value;

   function validarSenhas(){
        if(pass.lenght < 8){
            alert('Senha muito curta, menor que 8 caracteres');
            return;
        }
       else if(passCon != pass){
            alert('Senhas não estão iguais, verifique');
            return;
        }

        return true;
   }

   function validarEmail(email){
        if(  email=="" 
            || email.indexOf('@')==-1 
            || email.indexOf('.')==-1 )
        {
           alert( "Por favor, informe um E-MAIL válido!" );
           return false;
        }
        return true;
    }


   function gerarJson(){

       let cadastro = {

           "name": name,
           "email": email,
           "pass": pass,
           "passCon": passCon
        }

       JSON.parse('cadastro')
    }

    validarEmail(email);
    validarSenhas();
    //gerarJson();

    
}

