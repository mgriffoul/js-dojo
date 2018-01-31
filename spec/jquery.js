jasmine.getFixtures().fixturesPath='base/fixtures/';
describe("jQuery", function() {
  it("String", function() {
	loadFixtures('test.html');
	expect(jQuery('#testKJquery')).toBeVisible();
  });
});
