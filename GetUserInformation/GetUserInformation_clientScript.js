function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
       return;
    }
     
     var user = newValue;
     
     var ga = new GlideAjax('GetUserInformation');
     ga.addParam('sysparm_name', 'getUserInfo');
     ga.addParam('sysparm_user', user);
     ga.getXML(updateFields);
 }
 
 function updateFields(response) {
     var answer = response.responseXML.documentElement.getAttribute("answer");
     answer = JSON.parse(answer);
 
     if(answer.type == "3"){
         g_form.setValue("phone", "");
         g_form.setValue("email", "");
         g_form.setValue("login_user", "");
     }
     else{
         g_form.setValue("phone", answer.phone);
         g_form.setValue("email", answer.email);
         g_form.setValue("login_user", answer.user);
 }
 // 	if (answer) { 
         
 // 		g_form.setValue("phone", answer.phone);
 // 		g_form.setValue("email", answer.email);
 
    //Type appropriate comment here, and begin script below
    
 }