current.state == 'requested'&& (gs.hasRole('approval_admin') || isApprovalMine(current))


if (current.source_table == 'change_request') {
    //criar outro UI Action apenas com "list context menu" habilitado pois pode ser que outra aplicação usa esse "Form Menu" e ai afunilando a condition
    //pode fazer essa outra aplicação perder esse botão
    (function() {
        current.state = 'rejected';
        var comments = false;

        //getJournalEntry pega o ultimo comentário da lista
        if (current.comments.getJournalEntry(1) != undefined) {
            var lastComment = current.comments.getJournalEntry(1);
            //Pega o comentário e retorna o indice que encontro ele no array (baseado no nome do usuário logado)
            var index = (current.comments.getJournalEntry(1) + '').indexOf(gs.getUserDisplayName());
            if (index > -1 && index <= 22)
                comments = true;
        }
        if (!JSUtil.nil(current.comments) || comments) {
            current.update();
            new ApprovalUserFeedback().rejected(current);
        } else {
			if (gs.getSession().getLanguage() == 'en'){
				gs.addErrorMessage(gs.getMessage("Please, enter a comment to reject the change request."));
			}
			else if (gs.getSession().getLanguage() == 'es'){
				gs.addErrorMessage(gs.getMessage("Introduzca un comentario para rechazar el cambio."));
			}
			else if (gs.getSession().getLanguage() == 'de'){
				gs.addErrorMessage(gs.getMessage("Bitte geben Sie einen Kommentar ein, um die Änderung abzulehnen."));
			} 
			else {
				gs.addErrorMessage(gs.getMessage("Por favor, insira um comentário para rejeitar a change."));
			}
			
            current.state = 'requested';
            current.setAbortAction(true);
        }
    })();
}else {
current.state = 'rejected';
current.update();
new ApprovalUserFeedback().rejected(current);	
}