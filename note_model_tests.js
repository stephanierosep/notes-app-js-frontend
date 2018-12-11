(function(exports) {
  function testNoteModel() {
    var note = new Note("hello");
    assert.isTrue(note.text === "hello");
  };

  testNoteModel();
})(this);
