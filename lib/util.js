'use strict';


module.exports.hankigouToZenkigou = function(inStr){
  var retStr;
  if(!inStr){
    retStr = "";
  }else{
    retStr = inStr;
  }

  retStr = retStr.replace(/\(/g , "（");
  retStr = retStr.replace(/\)/g , "）");
  retStr = retStr.replace(/\=/g , "＝");
  retStr = retStr.replace(/\･/g , "・");
  retStr = retStr.replace(/\"/g , "”");
  retStr = retStr.replace(/\!/g , "！");
  retStr = retStr.replace(/\#/g , "＃");
  retStr = retStr.replace(/\$/g , "＄");
  retStr = retStr.replace(/\%/g , "％");
  retStr = retStr.replace(/\\/g , "＼");
  retStr = retStr.replace(/\*/g , "＊");
  retStr = retStr.replace(/\+/g , "＋");
  retStr = retStr.replace(/\//g , "／");
  retStr = retStr.replace(/\:/g , "：");
  retStr = retStr.replace(/\;/g , "；");
  retStr = retStr.replace(/\</g , "＜");
  retStr = retStr.replace(/\>/g , "＞");
  retStr = retStr.replace(/\?/g , "？");
  retStr = retStr.replace(/\@/g , "＠");
  retStr = retStr.replace(/\[/g , "［");
  retStr = retStr.replace(/\]/g , "］");
  retStr = retStr.replace(/\^/g , "＾");
  retStr = retStr.replace(/\_/g , "＿");
  retStr = retStr.replace(/\`/g , "｀");
  retStr = retStr.replace(/\{/g , "｛");
  retStr = retStr.replace(/\}/g , "｝");
  retStr = retStr.replace(/\|/g , "｜");
  retStr = retStr.replace(/\~/g , "〜");
  retStr = retStr.replace(/\｡/g , "。");
  retStr = retStr.replace(/\｢/g , "「");
  retStr = retStr.replace(/\｣/g , "」");
  retStr = retStr.replace(/\､/g , "、");
  retStr = retStr.replace(/\'/g , "’");
  retStr = retStr.replace(/\,/g , "，");
  retStr = retStr.replace(/\./g , "．");
  retStr = retStr.replace(/\&/g , "＆");
  retStr = retStr.replace(/\-/g , "ー");

  return retStr;
}

module.exports.replaceHTMLtoText = function(inStr){
    var tmpStr = inStr;
    tmpStr = tmpStr.replace(/\r|\n/g,"").replace(/\<style\>.*?\<\/style\>/g,"").replace(/\<style\s.*?\<\/style\>/g,"").replace(/\<script\>.*?\<\/script\>/g,"").replace(/\<script\s.*?\<\/script\>/g,"").replace(/\<figure\s.*?\<\/figure\>/g,"").replace(/\<code.*?\<\/code\>/g,"").replace(/\<a\>/g,"").replace(/\<a\s.*?\>/g,"").replace(/\<\/a>/g,"").replace(/\<b\>/g,"").replace(/\<\/b\>/g,"").replace(/\<strong\>/g,"").replace(/\<\/strong\>/g,"").replace(/\<em\>/g,"").replace(/\<\/em\>/g,"").replace(/\<kbd\>/g,"").replace(/\<\/kbd\>/g,"").replace(/\<del\>/g,"").replace(/\<\/del\>/g,"").replace(/\<code\>/g,"").replace(/\<\/code\>/g,"").replace(/\<span\>/g,"").replace(/\<\/span\>/g,"").replace(/\<span\s.*?\>/g,"").replace(/\<\/span\>/g,"").replace(/\<.*?>/g,"\n").replace(/(\n\s)+/g,"\n").replace(/\n+/g,"%0D%0A");
    
    // console.log("\n\n" + "--- debug ---" + tmpStr +"\n\n");
    
    return tmpStr;
}


module.exports.decord_unicode = function(inStr) {
    var result = inStr;
    var tmpStr = "";
    var decStrings = inStr;
    
    tmpStr = decStrings.replace(/(<br>|<br \/>)/gi, "\n");
    tmpStr = tmpStr.replace(/(\(|（)/gi, '(');
    tmpStr = tmpStr.replace(/(\)|）)/gi, ')');
    tmpStr = tmpStr.replace(/\s+/gi, " ");
    
    tmpStr = tmpStr.replace(/\&\#x([0-9a-zA-Z]{4});/g, "%u"+"$1" ).replace(/\&\#x([0-9a-zA-Z]{3});/g, "%u0"+"$1" ).replace(/\&\#x([0-9a-zA-Z]{2});/g, "%"+"$1" );
    result = unescape(tmpStr);
    
    // console.log("\n\n" + "--- debug ---" + result +"\n\n");
    
    return result;
}