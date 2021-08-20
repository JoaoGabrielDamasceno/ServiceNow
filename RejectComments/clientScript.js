rejectComments

approval table
onCellEdit
UI Type - All
field - state


function onCellEdit(sysIDs, table, oldValues, newValue, callback) {

    var ga = new GlideAjax('cellEditGlide');
    ga.addParam('sysparm_name', 'validateCommentsReject');
    ga.addParam('sysparm_sysid', sysIDs);
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