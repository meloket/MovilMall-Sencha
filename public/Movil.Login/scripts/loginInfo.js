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

function onForgotPasswordContinue() {
  
   var email = document.getElementById('forgotLEmail').value;
   var comboValue = window.location.search.replace("?val=", "");
   
   if (email == null || email == "") {
      if (comboValue == 'fr')
      {
         alert("Correo electrónico debe ser llenado.");
      } else
      {
         alert("Email must be filled out.");
      }
      return false;
   }
  
   var url = '/User/ForgotPassword';
   var jsonToPost =
      {
         email: document.getElementById('forgotLEmail').value
      };

   _ajax.postAjax(url,loginRes, jsonToPost);
}

function loginRes(aRes)
{
   var comboValue = window.location.search.replace("?val=", "");
   var obj = JSON.parse(aRes);
   if (obj.msg == 'Success')
   {
      if (comboValue == 'fr')
      {
         alert('Por favor revise su correo para confirmar su cambio de contraseña.');
      } else
      {
         alert('Please check your email to confirm your password change.');
      }
      window.location.assign("../index.html");
      return;
   } else
   {
      if (comboValue == 'fr')
      {
         alert('Por favor, compruebe email.It no es válida.');
      } else
      {
         alert('Please check email.It is invalid.');
      }
      
   }
 
}

function firstElementOfCombo(option, select) {
   option.value = "";
   option.innerHTML = "Choose your Security question.";
   option.disabled = true;
   option.selected = true;
   option.className = "SecQuestionFirstOption";
   select.appendChild(option);
   document.getElementById("forgotPass").appendChild(select);
}

function loginReponse(aResponse)
{
   var select = document.createElement("select");
   select.className = "combo";
   select.id = "securityQue";
   console.log(select.value);
   var option = document.createElement("option");
   var obj = JSON.parse(aResponse);
   this.firstElementOfCombo(option, select);
   for (var i = 0; i < obj.length; i++)
   {
      var option = document.createElement("option");
      option.id = obj[i].id;
      option.innerHTML = obj[i].quesText;
      select.appendChild(option);
      document.getElementById("forgotPass").appendChild(select);
   }

   //stop page loader
   
   var loadingOverlay = document.getElementById('loading_overlay').style;
   loadingOverlay.display = "none";
   var mainWrapper = document.getElementById('wrapper').style;
   mainWrapper.display = "block";

}

function onForgetPwdLoad()
{
   var comboValue = window.location.search.replace("?val=", "");
   var mainHeading = document.getElementById('mainHeading');
   var heading = document.getElementById('heading');
   var forgotLEmail = document.getElementById('forgotLEmail');
   var contnueBtn = document.getElementById('forgotCntnue');
   if (comboValue == 'fr')
   {
      mainHeading.innerHTML = "Olvidó su clave?";
      heading.innerHTML = "Rellene el siguiente formulario para restablecer su contraseña";
      forgotLEmail.placeholder = "Introduce tu correo electrónico";
      contnueBtn.value = "Continuar";
   }
}
/*
function getSeqQue()
{
   var url = 'api/ForgotPass/GetSecQue';
   _ajax.ajax(url, loginReponse);
   console.log(url);
}*/
