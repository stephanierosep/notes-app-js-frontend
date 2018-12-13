(function (exports) {
 function ListView(list_model) {
   this.listModel = list_model;
 };

 ListView.prototype.convertList = function() {
   var arrayOfTexts = []
   this.listModel.notes.forEach(function(note) {
     arrayOfTexts.push(note.text);
   });

   var html = "<ul><li>" + arrayOfTexts.join("</li><li>") + "</li></ul>";
   return html;
 }
 exports.ListView = ListView;
})(this);
//
// var note = new Note();
// var list = new List();
// list.write("goodbye");
// list.write("hello")
// console.log(list.list());
