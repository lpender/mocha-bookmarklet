describe("Front End Challenge 2 - Introduction to HTML & CSS", function() {
  describe("Activities 1-7", function() {
    it("has an h1 heading with content Heading 1", function () {
      var elements = find("h1");
      expect(elements).to.have.length(1);
      expect(elements[0].innerHTML).to.contain("Heading 1");
    });
    it("has an h2 heading", function () {
      var element = find("h2");
      expect(element.length).to.least(1);
    });
    it("has an h3 heading", function () {
      var element = find("h3");
      expect(element.length).least(1);
    });
    it("has an h4 heading", function () {
      var element = find("h4");
      expect(element.length).least(1);
    });
    it("has an h5 heading", function () {
      var element = find("h5");
      expect(element.length).least(1);
    });
    it("has an h6 heading", function () {
      var element = find("h6");
      expect(element.length).least(1);
    });
    it("has 4 divs with p in them", function() {
      var elements = find("p");
      expect(elements).to.have.length(4);
    });
    it("has a ul", function() {
      var elements = find("ul");
      expect(elements.length).least(1);
    });
    it("has an ol", function() {
      var elements = find("ol");
      expect(elements.length).least(1);
    });
    it("has an element with emphasis", function() {
      var elements = find("strong");
      expect(elements.length).least(1);
    });
  });
});
