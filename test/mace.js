/* globals chai, Mace */
/**
 * Mace Test
 * for browser
 */

var expect = chai.expect;

describe("Mace", function () {
  var mace;
  before(function () {
    var editor = document.createElement("div"),
        preview = document.createElement("div");

    editor.appendChild(document.createTextNode("test"));

    mace = new Mace(editor, preview);
    expect(mace).to.have.property("value").and.to.equal("test");
  });
  beforeEach(function () {
    mace.clear(true);
    expect(mace.value).to.equal("");
    mace.font_size = 12;
  });

  it("check properties", function () {
    expect(mace).to.have.property("ace").and.to.be.an("object");
    expect(mace).to.have.property("editor").and.to.be.an("object");
    expect(mace).to.have.property("preview").and.to.be.an("object");
  });

  it("value", function () {
    mace.ace.insert("hello");
    expect(mace).to.have.property("value").and.to.equal("hello");
  });

  it("font_size", function () {
    expect(mace).to.have.property("font_size").and.to.equal(12);
    expect(++mace.font_size).to.equal(13);
  });

  it("#clear", function () {
    mace.ace.insert("clear");
    mace.clear(true);
    expect(mace.value).to.equal("");
  });

  it("#clear (remove current line)", function () {
    mace.ace.insert("clear\nline");
    mace.clear();
    expect(mace.value).to.equal("clear");
  });

  it("#indent", function () {
    mace.indent();
    expect(mace.value).to.equal("    ");
  });

  it("#outdent", function () {
    mace.indent(2);
    mace.outdent();
    expect(mace.value).to.equal("    ");
  });

  it("heading");
});
