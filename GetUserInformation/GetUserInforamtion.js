var GetUserInformation = Class.create();
GetUserInformation.prototype = Object.extendsObject(AbstractAjaxProcessor, {

	getUserInfo: function(){
		var user = this.getParameter('sysparm_user');
		var grUser = new GlideRecord('sys_user');

		if (grUser.get(user)) {
			var json = new JSON();
			var results = {
				"phone": grUser.getValue("phone"),
				"email": grUser.getValue("email"),
				"user": grUser.getValue("user_name"),
				"type": grUser.getValue("u_user_type")
			};
			return json.encode(results);
		}
	}, 

	type: 'GetUserInformation'
});

/* Busca info de um usuário, este é o script include */