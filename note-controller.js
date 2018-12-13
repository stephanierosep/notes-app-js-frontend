(function (exports) {
  function NoteController(list_model) {
    this.listModel = list_model;
  };

  NoteController.prototype.changeText = function() {
    // var element = document.getElementById("app");
    var change = document.getElementById("app").innerHTML = "Howdy world";
  }

  exports.NoteController = NoteController;
})(this);

var message = new NoteController();
message.changeText();
