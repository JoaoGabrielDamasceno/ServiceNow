function onSubmit() {

    var name = g_form.getValue('email');
    //Type appropriate comment here, and begin script below
    if (!name.includes("hotmail") && g_form.getValue('vinculo') == 'integrante') {
        if (g_lang == 'en') {
            alert('You are not a member, please select the correct option for your type of user!');
        } else if (g_lang == 'es') {
            alert('No es miembro , seleccione la opción correcta para su tipo de usuario!');
        } else {
            alert('Você não é um integrante , por favor selecione a opção correta em relação ao seu tipo de usuário!');
        }
        return false;
    }
}