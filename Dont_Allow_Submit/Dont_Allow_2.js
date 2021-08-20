function onSubmit(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading)
        return;


    var sw = g_form.getValue('field_1');
    var ms = g_form.getValue('field_2');
    var rl = g_form.getValue('field_3');



    if ((ms == 'yes' && rl == 'no') || (sw == 'yes' && rl == 'no')) {

        getMessage('OnSubmit_not_allowed', function(callback) {
            alert(callback);
        });

        //history.back();
    } else {
        return true;
    }
    return false;
}