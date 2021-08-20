function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    // isLoading || 
    if (newValue === '') {
        return;
    }
	
    var gpParent = g_form.getReference('assignment_group', getParent);

    function getParent(gpParent) {
       
            if (gpParent.parent == '36bc97bd1b3f641015ecdb51f54bcb38') {
                g_form.setValue('u_test', true);
            } else {
                g_form.setValue('u_test', false);

            }
    }

}