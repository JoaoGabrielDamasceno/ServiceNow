//SCHEDULE JOB\\

//Alteração do state do incidient de on hold to work in progess dps de 7 dias sem alteração feita pelo assigned to
var state ='active=true^state=3^sys_updated_onRELATIVELT@dayofweek@ago@7^sys_updated_bySAMEASassigned_to.user_name';
var gr= new GlideRecord('incident');
gr.addEncodedQuery(state);
gr.query();
while(gr.next()){
gs.print(gr.number);
gr.setValue (state,'2');//make sure about in progress state value
gr.update();

}