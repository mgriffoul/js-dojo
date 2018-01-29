describe("Js Types", function() {
  it("String", function() {
	var string = "bob";
	  
    expect(typeof string).toBe('OMG !');
    expect(typeof string === '').toBeTruthy();
    expect(typeof "bob" === '').toBeTruthy();
    expect(typeof 'bob' === '').toBeTruthy();
  });
  
  it("Numbers", function() {
	var number = 111;
	var floatNumber = 1.2;
	
	  
    expect(typeof number === '').toBeTruthy();
    expect(typeof floatNumber === '').toBeTruthy();
  });  
  
  it("Arrays", function() {
	var array = [];
	var array2 =  new Array();
    expect(typeof array === '').toBeTruthy();
    expect(typeof array2 === '').toBeTruthy();
  });  
  
  it("Objects", function() {
	var object = {};
	var object2 = new Object();
	var nada;
    expect(typeof array === '').toBeTruthy();
    expect(typeof object === '').toBeTruthy();
    expect(typeof nada === '').toBeTruthy();
  });
  
  it("Variables", function() {
	var array = [];
	var object = {};
	var nada;
    expect(typeof array === '').toBeTruthy();
    expect(typeof object === '').toBeTruthy();
    expect(typeof nada === '').toBeTruthy();
  });
  
  it("Mutations", function() {
	var myvar;
	expect(typeof myvar === '').toBeTruthy();
	
	myvar = "toto";
	expect(typeof myvar === '').toBeTruthy();

	myvar = 123
	expect(typeof myvar === '').toBeTruthy();
  });
});
