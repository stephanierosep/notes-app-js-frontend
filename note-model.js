
(function (exports) {

  function Note(text) {
    this.text = text;
  }

  Note.prototype.text = function() {
    return this.text;
  }

  exports.Note = Note;

})(this);

var note = new Note("hi");
note.text;
