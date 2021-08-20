// JavaScript source code

// ScriptInclude utilizado no ClientScript do tipo onCellEdit
var cellEditGlide = Class.create();
cellEditGlide.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    validateCommentsReject: function() {

        var newState = this.getParameter('sysparm_newValue');
        var gr = new GlideRecord("sysapproval_approver");
        gr.addQuery("sys_id", this.getParameter("sysparm_sysid"));
        gr.query();

        if (gr.next()) {
            
            //Se o novo state for reject, vai verificar os coment�rios
            if (newState == 'rejected') {
                
                //se o �ltimo coment�rio existir...
                if (gr.comments.getJournalEntry(1) != undefined) {
                    var lastComment = gr.comments.getJournalEntry(1);
                    //Pega o coment�rio e retorna o indice que encontro ele no array (baseado no nome do usu�rio logado)
                    var index = (gr.comments.getJournalEntry(1) + '').indexOf(gs.getUserDisplayName());
                    if (index > -1 && index <= 22)
                        comments = true;
                }

                //Se n�o for vazio os coment�rios, retorna submite que seria aceitar a mudan�a de state
                if (!JSUtil.nil(gr.comments) || comments) {
                    return "submit"; 
                } else if (JSUtil.nil(gr.comments) || comments == false) {
                    return "not submit";
                }

            //Se o novo state for qualquer um outro simplismente aceita
            } else {

                return "submit";

            }

        }
    },

    type: 'cellEditGlide'
});
