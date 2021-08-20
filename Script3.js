// JavaScript source code
function listRecords(table) {
	var arr = [];
	var obj = {};
	var gr = new GlideRecord(table);
	gr.query();

	while(gr.next()){
		obj["displayValue"] = gr.displayValue();
		obj["sys_id"] = gr.getValue("sys_id");
		arr.push(obj);
	}

	return(arr);

}