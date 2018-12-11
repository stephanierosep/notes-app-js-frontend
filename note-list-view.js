(function (exports) {
 function HtmlList() {
   this.comList = [];
 };

 HtmlList.prototype.convertList = function() {
   var newList = new List();
   return this.comList.push(newList);
 }
 exports.HtmlList = HtmlList;
})(this);

// var list = List();
// list.listOfNotes();
var list = new List();
list.addnote("Favourite drink: seltzer");
var result = new HtmlList();
result.convertList();
console.log(result.comList);
