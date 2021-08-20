//Editado por João G. Damasceno
function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }

    g_form.getReference('field_form_reference', function(getType) {
    g_form.setValue('field', getType.u_field);


    });



}