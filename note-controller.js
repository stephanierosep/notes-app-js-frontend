
(function (exports) {
  function NoteController(list_model) {
    this.listModel = list_model;
  };

  var element = document.getElementById("app");

  NoteController.prototype.createNote = function() {
    result = this.listModel.write("Goodbye")
    result.convertList();
    element.innerHTML = result;
  }
  console.log(result);

})
