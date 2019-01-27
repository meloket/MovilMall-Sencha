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

function confirmPassword()
{
   var newPwd = document.getElementById('forcePasswordNewPwd').value;
   var confirmPwd = document.getElementById('forcePasswordConfirmPwd').value;
   var nomatchLbl = document.getElementById('noMatchLbl');
   var matchLbl = document.getElementById('matchLbl');
   if (newPwd == confirmPwd)
   {
      matchLbl.style.display = "block";
      nomatchLbl.style.display = "none";
   } else
   {
      nomatchLbl.style.display = "block";
      matchLbl.style.display = "none";
   }
}

function loginInfoResponseFunction(response)
{
   var retValue = JSON.parse(response);
   var username = retValue.loginName;
   var forcePasswordUserName = document.getElementById('forcePasswordUserName');
   forcePasswordUserName.value = username;
}

function secQuesReponseFunction(response)
{
   var select = document.createElement("select");
   select.className = "combo";
   select.id = "securityQuestion";
   var obj = JSON.parse(response);
   var option = document.createElement("option");
   //below function creates a entry in securityquestion combo box such that it is only dispalyed to 
   //inform user about what this combo stands for
   //and this value is not selectable or visible inside the combo.
   //the combobox is populated by the entries created inside the for loop.
   this.firstElementOfCombo(option,select);
   
   for (var i = 0; i < obj.length; i++)
   {
      var option = document.createElement("option");
      option.id = obj[i].id;
      option.innerHTML = obj[i].quesText;
      select.appendChild(option);
      document.getElementById("forgotpass").appendChild(select);
   }
   //stop page loader
   var loadingOverlay = document.getElementById('loading_overlay').style;
   loadingOverlay.display = "none";
   var mainWrapper = document.getElementById('wrapper').style;
   mainWrapper.display = "block";
}

//on page render below code gets executed
(function()
{
   var loginInfoUrl = 'api/login/GetLoginInfo';
   _ajax.ajax(loginInfoUrl, loginInfoResponseFunction);

   var secComboUrl = 'api/ForgotPass/GetSecQue';
   _ajax.ajax(secComboUrl, secQuesReponseFunction);
})();

function onForcePasswordCancel()
{
   window.location.assign("../Login.html");
}

function doChangePassword()
{
   //disabling login button once it is clicked
   document.getElementById('loginbutton').disabled = true;
   var secQueCombo = document.getElementById('securityQuestion');
   var newpasswrd = document.getElementById('forcePasswordNewPwd').value;
   var confirmpasswrd = document.getElementById('forcePasswordConfirmPwd').value;
   var securityQuestion = secQueCombo.options[secQueCombo.selectedIndex].id;
   var securityAnswer = document.getElementById('forcePwdSecurityAnswer').value;
   var loginName = document.getElementById('forcePasswordUserName').value;
   var oldpasswrd = document.getElementById('forcePasswordOldPwd').value;
   
   //perform validations on form before submitting
   var validation = this.checkFormValidation(newpasswrd, confirmpasswrd, securityQuestion, securityAnswer, loginName, oldpasswrd);
   if (validation==false)
   {
      document.getElementById('loginbutton').disabled = false;
      return false;
   }
   if (newpasswrd != confirmpasswrd)
   {
      alert('Your new password does not match with the password in confirm password field. Please check and try again.');
      return false;
   }
   var url = 'api/ForcePassChange/FirstPassChange';
   var jsonToPost =
      {
         LoginName: loginName,
         OldPwdHash: oldpasswrd,
         NewPwdHash: newpasswrd,
         SecurityQuestion: securityQuestion,
         securityAnswer: securityAnswer
      };

   _ajax.postAjax(url, changePassResponse, jsonToPost);
   //start displaying loading animation
   var loadingAnimation = document.getElementById('loading_image').style;
   var loadingText = document.getElementById('loggingInText').style;
   loadingAnimation.display = "block";
   loadingText.display = "block";
}

function changePassResponse(response)
{
   var retval = JSON.parse(response);
   var loadingAnimation = document.getElementById('loading_image').style;
   var loadingText = document.getElementById('loggingInText').style;
   if (retval == 'true')
   {
      alert('Your password has been changed succesfully. Please login with your new password.');
      document.getElementById('loginbutton').disabled = false;
      loadingAnimation.display = "none";
      loadingText.display = "none";
      window.location.assign("../Login.html");
      return;
   }
   
   loadingAnimation.display = "none";
   loadingText.display = "none";
   document.getElementById('loginbutton').disabled = false;
   alert('Error -- ' + retval.message);
}

function firstElementOfCombo(option,select)
{
   option.value = "";
   option.innerHTML = "Choose your Security question.";
   option.disabled = true;
   option.selected = true;
   option.className = "SecQuestionFirstOption";
   select.appendChild(option);
   document.getElementById("forgotpass").appendChild(select);
}

function checkFormValidation(newpasswrd, confirmpasswrd, securityQuestion, securityAnswer, loginName, oldpasswrd)
{
   
   if (loginName == null || loginName == "") {
      alert("Username must be filled out");
      return false;
   }
   if (newpasswrd == null || newpasswrd == "") {
      alert("Please enter a new Password.");
      return false;
   }
   if (oldpasswrd == null || oldpasswrd == "") {
      alert("Please enter your old Password.");
      return false;
   }
   if (securityQuestion == null || securityQuestion == "") {
      alert("You must Select a security question");
      return false;
   }
   if (securityAnswer == null || securityAnswer == "") {
      alert("You must give a answer to your question");
      return false;
   }
}
