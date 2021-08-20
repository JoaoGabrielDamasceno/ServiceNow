(function executeRule(current, previous /*null when async*/) {

	var gr = new GlideRecord('change_request');
    gr.get(current.sysapproval);
    gr.comments = current.comments;
    gr.update();

})(current, previous);

/*current.comments.changes() && (!current.sysapproval.isNil()) && current.sysapproval.sys_class_name == 'change_request'*/