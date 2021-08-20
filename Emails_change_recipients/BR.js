(function executeRule(current, previous /*null when async*/ ) {

    var string = current.instance.getDisplayValue();
    var resultado = string.split(" ");
    var number = resultado[5];
    var usermails = current.recipients.split(",");

    var rec = new GlideRecord('table');
    rec.addEncodedQuery('number=' + number);
    //rec.addEncodedQuery('number='+current.number.getDisplayValue());
    rec.query();
    while (rec.next()) {
        //
        var gr = new GlideRecord('sys_user_grmember');
        gr.addQuery('user', rec.requisitante.manager.sys_id);
        gr.addQuery('group', 'sys_id');
        gr.query();
        if (gr.next()) {
            if (rec.requisitante.manager.email != rec.aprovador_da_contratacao.email) {
                //"RECIPIENTE ANTERIOR! -> current.recipients
                for (var i = 0; i < usermails.length; i++) {
                    if (usermails[i] == rec.requisitante.manager.email) {
                        usermails.splice(i, 1);
                    }
                }
                current.recipients = usermails.join();
                gs.log(rec.requisitante.manager.sys_id);
            }else{
				gs.log('NÃO FEZ NADA');
			}
        } else {
            gs.log("Manager não é vice presidente, enviar e-mail! -> " + current.recipients);
            gs.log(rec.requisitante.manager.sys_id);
        }
        //

    }

})(current, previous);