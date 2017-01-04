
'use strict';
var util = require('./util.js');

module.exports = function(data){
  
  if(this.config.search && this.config.search.plainTxt != undefined ){
    var plainTxt = util.hankigouToZenkigou(util.decord_unicode(util.replaceHTMLtoText(data.content)));
    data.hgs_plainTxt = plainTxt;
  }
  
  return data;
  
};