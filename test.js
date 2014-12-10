describe("Front End Challenge 2 - Introduction to HTML & CSS", function() {
  describe("Activities 1-7", function() {
    it("has an h1 heading with content Heading 1", function () {
      element = document.querySelectorAll('h1')[0];
      expect(element.innerHTML).to.contain("Heading 1");
    });
    it("has an h2 heading", function () {
      element = document.querySelectorAll('h2');
      expect(element.length).to.least(1);
    });
    it("has an h3 heading", function () {
      element = document.querySelectorAll('h3');
      expect(element.length).least(1);
    });
    it("has an h4 heading", function () {
      element = document.querySelectorAll('h4');
      expect(element.length).least(1);
    });
    it("has an h5 heading", function () {
      element = document.querySelectorAll('h5');
      expect(element.length).least(1);
    });
    it("has an h6 heading", function () {
      element = document.querySelectorAll('h6');
      expect(element.length).least(1);
    });
    it("has 4 divs with p in them", function() {
      elements = document.querySelectorAll('p');
      expect(elements).to.have.length(4);
    });
    it("has a ul", function() {
      elements = document.querySelectorAll("ul")[0];
      expect(element.length).least(1)
    });
    it("has an ol", function() {
      elements = document.querySelectorAll("ol")[0];
      expect(element.length).least(1)
    });
    it("has an element with emphasis", function() {
      elements = document.querySelectorAll("strong")[0];
      expect(element.length).least(1)
    });


  });
});
