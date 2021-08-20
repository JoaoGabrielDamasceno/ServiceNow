cellEditGlide
Client Callable - true

var cellEditGlide = Class.create();
cellEditGlide.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    validateCommentsReject: function() {

        var newState = this.getParameter('sysparm_newValue');
        var gr = new GlideRecord("sysapproval_approver");
        gr.addQuery("sys_id", this.getParameter("sysparm_sysid"));
        gr.query();

        if (gr.next()) {
            //&& JSUtil.nil(gr.comments)
            if (newState == 'rejected') {

                if (gr.comments.getJournalEntry(1) != undefined) {
                    var lastComment = gr.comments.getJournalEntry(1);
                    //Pega o comentário e retorna o indice que encontro ele no array (baseado no nome do usuário logado)
                    var index = (gr.comments.getJournalEntry(1) + '').indexOf(gs.getUserDisplayName());
                    if (index > -1 && index <= 22)
                        comments = true;
                }

                if (!JSUtil.nil(gr.comments) || comments) {
                    return "submit"; 
                } else if (JSUtil.nil(gr.comments) || comments == false) {
                    return "not submit";
                }

            } else {

                return "submit";

            }

        }
    },

    type: 'cellEditGlide'
});
