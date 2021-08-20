(function executeRule(current, previous /*null when async*/ ) {


     var g1 = new GlideRecord("table_1");
     g1.addQuery('field', current.instance);
     g1.query();

        while (g1.next()) {
            if (current.metric.sys_id == 'sys_id') //Has your ticket been answered? 509431b4dbe397006514f2b6ae961950 
            {
				if(current.string_value == '0'){
					g1.question_1 = 'Yes';
				} else {
					g1.question_1 = 'No';
				}
				//g1.u_has_your_ticket_been_answered = current.string_value;
				g1.update();
            }
            if (current.metric.sys_id == 'sys_id') //Indicate your satisfaction with the service a49431b4dbe397006514f2b6ae96196f 
            {
                g1.question_2 = current.string_value;
				g1.update();
            }
            if (current.metric.sys_id == 'sys_id') //Comments or Suggestions a09431b4dbe397006514f2b6ae961978 
            {
                g1.question_3 = current.string_value;
				g1.update();
				//current.setDisplayValue('u_has_your_ticket_been_answered','Work in Progress');
				//current. signature_result = gr.string_value;
            }

        }
	
})(current, previous);