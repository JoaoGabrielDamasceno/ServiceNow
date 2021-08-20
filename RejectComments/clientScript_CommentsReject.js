// JavaScript source code
function onCellEdit(sysIDs, table, oldValues, newValue, callback) {

	//GlideAjax que vai conversar com o lado servidor
    var ga = new GlideAjax('cellEditGlide');
	//Função executada no ScriptInclude
    ga.addParam('sysparm_name', 'validateCommentsReject');
    ga.addParam('sysparm_sysid', sysIDs);
	//newValue é baseado no field 
	ga.addParam('sysparm_newValue', newValue);
	ga.getXML(callScriptInclude);
	
	function callScriptInclude(response) {
		var answer = response.responseXML.documentElement.getAttribute("answer");
		
		if (answer == "submit"){
			callback(true);
		}else {
			alert("Please, enter a comment to reject the change!");
			callback(false);
		}
	
	}
}