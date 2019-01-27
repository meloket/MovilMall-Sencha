/*window.onload = function()
{
   document.getElementById('lanCombo').onchange();
};*/


function loginOnload()
{
   document.getElementById('lanCombo').onchange();
}

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

function onSetPasswordContinue()
{
   var userName = document.getElementById('UserName').value;
   var regEmail = document.getElementById('RegEmail').value;
   var secQue = document.getElementById('SecQue').value;
   var secAns = document.getElementById('SecAns').value;
   var oldPass = document.getElementById('OldPass').value;
   var newPass = document.getElementById('NewPass').value;
   var confPass = document.getElementById('ConfPass').value;

   if (userName == '' || regEmail == '' || secQue == '' || secAns == '' || oldPass == '' || newPass == '' || confPass == '')
   {
      //alert('Please,fill all requeired field');
      alert('Por favor, rellene todos los campos requeired');
      return false;
   }

}

function onSetPasswordCancel()
{
   window.location.assign("../Login.html");
}

function loginReponse(aResponse)
{
   var comboValue = document.getElementById('lanCombo').value;
   var retval = JSON.parse(aResponse);
   if (!retval.isOk)
   {
      var loadingAnimation = document.getElementById('loading_image').style;
      var loadingText = document.getElementById('loggingInText').style;
      loadingAnimation.display = "none";
      loadingText.display = "none";
      document.getElementById('loginbutton').disabled = false;
      
      if (comboValue == 'fr')
      {
         //retval.message = "The username or password are incorrect, try again.";
         retval.message = "El usuario o contraseña no son correctos, trate otra vez.";
         alert(retval.message);
      } else
      {
         console.log('yess');
         alert(retval.message);
      }
     
      
      return;
   }
   //alert(retval.redirectTo);

   //todo:now comboValue is fix i.e. "fr",change after confirmation
   window.location.href = retval.redirectTo + "?val=" + comboValue;
   //  window.location.href = retval.redirectTo ;
}

function doLogins()
{
      var url = '../verify';
   var jsonToPost =
      {
         email: document.getElementById('slname').value,
         pass: document.getElementById('sPassword').value
      };

  
   _ajax.postAjax(url, loginReponse, jsonToPost);
  // console.log(loginReponse);
   var loadingAnimation = document.getElementById('loading_image').style;
   var loadingText = document.getElementById('loggingInText').style;
   loadingAnimation.display = "block";
   loadingText.display = "block";
   
}

function doLoginCancel()
{
   window.location.assign("../index.html");
}

function onSelectLanCombo()
{
   var comboValue = document.getElementById('lanCombo').value;
   var password = document.getElementById('sPassword');
   var loginBtn = document.getElementById('loginbutton');
   var heading = document.getElementById('heading');
   var logintxt = document.getElementById('loggingInText');
   var forgotPwdText = document.getElementById('forgotPwdText');


   if (comboValue == 'fr')
   {
      password.placeholder = 'Contraseña';

      loginBtn.value = 'Acceso';

      heading.innerHTML = "Movil Mall Acceso";

      logintxt.innerHTML = "Por Favor Espere...";
      forgotPwdText.innerHTML = "Olvidó su clave?";
   }
   if (comboValue == 'en')
   {
      password.placeholder = 'Password';

      loginBtn.value = 'Login';

      heading.innerHTML = "Movil Mall Login";

      logintxt.innerHTML = "Please Wait...";
      forgotPwdText.innerHTML = "Forgot Password?";

   }
}

// auto enter dev time login details
// todo: remove in production

function ready(event)
{
   // your code here
   //document.getElementById('slname').value = 'UniAdmin';
   //document.getElementById('sPassword').value = 'aa';


   //alert('dom ready');
   //var isDebug = $("#isDebug").val();
   //var isAdmin = $("#isAdmin").val();

   //if (isDebug)
   //   if (isAdmin) {
   //      $("#slname").val('snehal');
   //      $("#sPassword").val('snehal');
   //   } else {
   //      $("#slname").val('AA001056');
   //      $("#sPassword").val('pass001');
   //   }


   // clean up event binding
   window.removeEventListener('DOMContentLoaded', ready);
}

// bind to the load event
window.addEventListener('DOMContentLoaded', ready);

function forgotPasssword()
{
   var comboValue = document.getElementById('lanCombo').value;
   window.location.assign("../Movil.Login/forgotPassword.html?val=" + comboValue);

}

function onForgotPasswordCancel()
{
   window.location.assign("Login.html");
}

function onForgotPasswordContinue()
{
   var username = document.getElementById('forgotLName').value;
   var email = document.getElementById('forgotLEmail').value;
   var securityQuestion = document.getElementById('securityQuestion').value;
   var securityAnswer = document.getElementById('securityAnswer').value;

   //performing form validations
   if (username == null || username == "")
   {
      alert("Username must be filled out");
      return false;
   }
   if (email == null || email == "")
   {
      alert("Email must be filled out");
      return false;
   }
   if (securityQuestion == null || securityQuestion == "")
   {
      alert("You must Select a security question");
      return false;
   }
   if (securityAnswer == null || securityAnswer == "")
   {
      alert("You must give a answer to your question");
      return false;
   }

   var url = '';
   var jsonToPost =
      {
         username: document.getElementById('forgotLName').value,
         email: document.getElementById('forgotLEmail').value,
         securityQuestion: document.getElementById('securityQuestion').value,
         securityAnswer: document.getElementById('securityAnswer').value
      };

   _ajax.postAjax(url, loginReponse, jsonToPost);
}

function doSignUp()
{
   var comboValue = document.getElementById('lanCombo').value;
   window.location.assign("../Movil.Login/SignUp.html?val=" + comboValue);
}