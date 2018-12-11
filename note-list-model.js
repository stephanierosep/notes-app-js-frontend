
(function (exports) {

  function List() {
    this.notes = [];
    // this.string = ;
  };


  List.prototype.write = function(text) {
    var notes = new Note(text);
    this.notes.push(notes);
  }


  List.prototype.list = function() {
    return this.notes;
  }

  exports.List = List;

})(this);

var list = new List();
var notes = new Note();
list.write("cat");
console.log(list.notes);
