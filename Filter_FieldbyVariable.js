//javascript:new Filter().CatalogeFilter();
// field reference

var Filter = Class.create();
Filter.prototype = {
    initialize: function() {
    },
	
	CatalogeFilter: function() {
		
		var RelatedArea = current.variables.variable_catalog;
		if (RelatedArea.nil() || RelatedArea == ''){
			
			return 'u_short_description=New Catalog^u_related_area_1=';
			
		}else{
			
			return 'u_active=true^u_short_description=New Catalog^u_related_area_1=' + RelatedArea;
		}
		
    },

    type: 'Filter'
};