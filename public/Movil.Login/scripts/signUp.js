//window.onload = function () {
 //document.getElementById('lanCombo').onSelectLanCombo();
  
                            //}
// Just to namespace our functions and avoid collisions
var _ajax = _ajax ? _ajax : new Object();

// Does a get request
// url: the url to GET
// callback: the function to call on server response. The callback function takes a
// single arg, the response text.
_ajax.ajax = function(url, callback)
{
   var ajaxRequest = _ajax.getAjaxRequest(callback);
   ajaxRequest.open("GET", url, true);
   ajaxRequest.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
   ajaxRequest.send(null);
};

// Does a post request
// callback: the function to call on server response. The callback function takes a
// single arg, the response text.
// url: the url to post to
// data: the json obj to post
_ajax.postAjax = function(url, callback, data)
{
   var ajaxRequest = _ajax.getAjaxRequest(callback);
   ajaxRequest.open("POST", url, true);
   ajaxRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
   //ajaxRequest.setRequestHeader("Connection", "close");
   ajaxRequest.send(JSON.stringify(data));
};

// Returns an AJAX request obj
_ajax.getAjaxRequest = function(callback)
{

   var ajaxRequest;

   try
   {
      ajaxRequest = new XMLHttpRequest();
   }
   catch(e)
   {
      try
      {
         ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
      }
      catch(e)
      {
         try
         {
            ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
         }
         catch(e)
         {
            return null;
         }
      }
   }

   ajaxRequest.onreadystatechange = function()
   {
      if (ajaxRequest.readyState == 4)
      {
         // Prob want to do some error or response checking, but for 
         // this example just pass the responseText to our callback function
         callback(ajaxRequest.responseText);
      }
   };


   return ajaxRequest;

};

function signUpload()
{
   var comboValue=window.location.search.replace("?val=", "");
   var heading = document.getElementById('heading');
   
   var name = document.getElementById('name');
   var namePlaceholder = document.getElementById('brandName');
   
   var contactPersonName = document.getElementById('contactP');
   var contactPersonPlaceholder = document.getElementById('contactPerson');
   
   var contactNo = document.getElementById('contactN');
   var contactNoPlaceholder = document.getElementById('contactNo');
   
   var email = document.getElementById('emailAdd');
   var emailPlaceholder = document.getElementById('email');
   
   var password = document.getElementById('pass');
   var passwordPlaceholder = document.getElementById('pwd');
   
   var website = document.getElementById('web');
   var websitePlaceholder = document.getElementById('website');
   
   var regButton = document.getElementById('regBtn');
   var cancelButton = document.getElementById('cancelBtn');
   var checkButton = document.getElementById('checkBtn');
   
   if (comboValue == 'fr')
   {
      heading.innerHTML = "Registro";
      //name.palceholder = "Marca/Tienda/Local";
      console.log(websitePlaceholder);
      
      name.innerHTML = "Marca/Tienda/Local :";
      namePlaceholder.placeholder = "Marca/Tienda/Local";
      
      contactPersonName.innerHTML = "Persona de Contacto :";
      contactPersonPlaceholder.placeholder = "Persona de Contacto";
      
      contactNo.innerHTML = "Teléfono :";
      contactNoPlaceholder.placeholder = "Teléfono";
      
      email.innerHTML = "Email :";
      emailPlaceholder.placeholder = "Email";
      
      password.innerHTML = "Contraseña :";
      passwordPlaceholder.placeholder = "Contraseña";
      
      website.innerHTML = "Página Web :";
      websitePlaceholder.placeholder = "Página Web";
      
      regButton.value = 'Enviar';
      cancelButton.value = 'Cancelar';
      checkButton.value = 'Verificar';
   }
   if (comboValue == 'en') {
      heading.innerHTML = "Registration";
      //name.palceholder = "Marca/Tienda/Local";
      console.log(websitePlaceholder);

      name.innerHTML = "Brand/Store/Place :";
      namePlaceholder.placeholder = "Brand/Store/Place";

      contactPersonName.innerHTML = "Contact Person :";
      contactPersonPlaceholder.placeholder = "Contact Person";

      contactNo.innerHTML = "Contact No. :";
      contactNoPlaceholder.placeholder = "Contact No.";

      email.innerHTML = "Email Address :";
      emailPlaceholder.placeholder = "Email Address";

      password.innerHTML = "Password :";
      passwordPlaceholder.placeholder = "Password";

      website.innerHTML = "Website :";
      websitePlaceholder.placeholder = "Website";

      regButton.value = 'Register';
      cancelButton.value = 'Cancel';
      checkButton.value = 'Check';
   }
}


function loginReponse(aResponse)
{
   var comboValue = window.location.search.replace("?val=", "");
   console.log(comboValue);
   var res = JSON.parse(aResponse);
   console.log(res.msg);
   if (res.msg == "false")
   {
      if (comboValue == 'fr')
      {
         var message = "Esta dirección de correo electrónico ya está registrado";
      }
      else if (comboValue == 'en')
      {
         var message = "This email address is already registered";
      }
   } else
   {
      if (comboValue == 'fr')
      {
         var message = "Dirección de correo electrónico está disponible";
      }
      else if (comboValue == 'en')
      {
         var message = "Email address is available";
      }
   }
   alert(message);
}

function regReponse(aResponse)
{
   var comboValue = window.location.search.replace("?val=", "");
   console.log(aResponse);
  
   var res = JSON.parse(aResponse);
   console.log(res.success);
   if (res.success == "false")
   {
      res.message = "Campos marcados con * no pueden estar vacios";
      alert(res.message);
      return;
   }
   else
   {
      document.getElementById('signUp-form').style.display = 'none';
      window.location.assign("../Movil.Login/Login.html");

      if (comboValue == 'fr')
      {
         alert("Su registro fue exitoso\n" +
            "Usted podrá acceser la parte administrativa de su marca/tienda luego de ser revisada y aprovada por el administrador de Movil Mall.\n" +
            //"You will receive a  email once your brand has been verified by Super admin\n" +
            "Para cualquier pregunta, envíenos un email a info@movil-mall.com\nMuchas Gracias.");
      }
      else if (comboValue == 'en')
      {
         alert("Registration Succesfull\n" +
            "Your new brand registration has been completed successfully.\n" +
            //"You will receive a  email once your brand has been verified by Super admin\n" +
            "NOTE-You will be able to login into the app only after your brand has been verified by the Super Admin of the app.");
      }
   }
}

function doCancelSignUp()
{
   window.location.assign("../index.html");
}

function doRegister()
{
   var url = '../Brand/CreateBrand';
   var jsonToPost =
      {
         name: document.getElementById('brandName').value,
         email: document.getElementById('email').value,
         contactPerson: document.getElementById('contactPerson').value,
         contactNo: document.getElementById('contactNo').value,
         website: document.getElementById('website').value,
         pass: document.getElementById('pwd').value
      };
   console.log(jsonToPost);
   _ajax.postAjax(url, regReponse, jsonToPost);

}

function checkEmail()
{

   var url = '../User/CheckDuplicateEmail';
   var jsonToPost =
      {
         email: document.getElementById('email').value
      };
   var d = _ajax.postAjax(url, loginReponse, jsonToPost);

}