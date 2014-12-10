describe("Front End Challenge 3", function() {
  describe("Activity 1", function() {
    it("has an h1 heading with content Heading 1", function () {
      element = document.querySelectorAll('h1')[0];
      expect(element.innerHTML).to.equal("Heading 1");
    });
    it("has at least 2 divs with p in them", function() {
      elements = document.querySelectorAll('div p');
      expect(elements).to.have.length(2);
    });
  });
});
