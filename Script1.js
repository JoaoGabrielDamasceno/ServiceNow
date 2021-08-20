// JavaScript source code

var incGr = new GlideRecord('incident'); //cria um novo Glide record na tabela incidents, chama incGr pois 'inc' de incidente e 'Gr' de GlideRercord
incGr.query(); // faz a busca sem filtro na tabela incidentes e retorna todos os records

incGr.addQuery('active', true); // adicionando um filtro, agora só aparecerão incidentes ativos
incGr.orderBy('number'); //ordena pelo n�mero
incGr.setLimit(5); //s� pegar� 5 incidentes

while (incGr.next()) {
	gs.info(incGr.getValue('number')); //pode se usar incGr.number porém não é uma boa prática porque é um valor objeto enquanto
									   //getValue é uma string então é mais facil de colocar os valores para 'fora''
}


/*  A baixo da pra se fazer dessa forma
	incGr.addQuery('sys_id', 'valor') --> aqui esta adicionando um filtro, que seria procurar por record com essa condição
	incGr.query() --> rodando a Query
*/

// aqui ta vendo se existe um record com esse sys_id, se existir pega o number
if (incGr.get('numero_sys_id')){       
	gs.info(incGr.getValue('number'));
}

// aqui ele verifica pelo field e valor do field, ai pega o sys_id
if (incGr.get('number', 'INC01')){
	gs.info(incGr.getValue('sys_id'));
}