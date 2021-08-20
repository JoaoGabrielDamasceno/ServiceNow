
function onSubmit() {
    try { //Works in non-portal ui
        var attachments = g_form.getControl('header_attachment_list_label');
        if (attachments.style.visibility == 'hidden' || attachments.style.display == 'none') {
			if ((g_form.getValue('vinculo') == 'terceiro')){
            if (g_lang == 'en') {
                alert('To complete the request, it is mandatory to attach the approval of your Leader');
            } else if (g_lang == 'es') {
                alert('Para completer la solicitud, es obligatorio el adjunto de su Líder');

            } else {
                alert('Para concluir a solicitação, é mandatório anexar a aprovação do seu Líder');
            }
            return false;
        }}
		
    } catch (e) {
        if ((g_form.getValue('vinculo') == 'terceiro') && this.document.getElementsByClassName('get-attachment').length == 0) {
            if (g_lang == 'en') {
                alert('To complete the request, it is mandatory to attach the approval of your Leader');
            } else if (g_lang == 'es') {
                alert('Para completer la solicitud, es obligatorio el adjunto de su Líder');

            } else {
                alert('Para concluir a solicitação, é mandatório anexar a aprovação do seu Líder');
            }
            return false;
        }
    }
}