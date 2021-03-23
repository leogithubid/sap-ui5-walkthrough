/*just keeping this as a reference for sap.ui.define for the time being 
Sap.ui.define([
    'require',
    'dependency'
], function(require, factory) {
    'use strict';
    
}); */
sap.ui.define([
    "sap/m/Text"
], function(oText) {
    'use strict';
    //alert('Bootstrap Paradox');
    new oText({
        text:"Hello ! I am Text control"
    }
).placeAt("pageContent")
});