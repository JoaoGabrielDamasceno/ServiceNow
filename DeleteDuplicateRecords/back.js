var testGr = new GlideAggregate('table_1');   // table on which deletion is to be performed
testGr.orderBy('field_1');   // column which you think has duplicate values i think it would be the value column for sys_choice table
testGr.orderBy('field_2');
testGr.query();

var testGR1;

while (testGr.next()) {  
    testGR1 = new GlideRecord('table_1');  
    testGR1.addQuery('field_1', testGr.field_1);
    testGR1.addQuery('field_2', testGr.field_2);  
    testGR1.query();  
    testGR1.next(); // Skip the first result  
    while (testGR1.next()) { // delete the next one

        //if(testGr.u_processo == testGR1.u_processo && testGr.u_grupo == testGR1.u_grupo){

            testGR1.deleteRecord();  
       // }
            //testGR1.deleteRecord();  

    }  


}  

/* Roda no Background Script */