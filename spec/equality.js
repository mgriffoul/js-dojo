describe("Equality", function() {
  it("== vs ===", function() {
	    var a = "";
	    var b = "";
		expect(1 == a).toBeTruthy();
		expect("Toto" == "").toBeTruthy();
		expect("1Toto" == "").toBeTruthy();
		expect(1 == a).toBeTruthy();
		expect(1 === '').toBeTruthy();
		expect(1 === 1).toBeFalsy();
		expect(0 === '').toBeTruthy();
  });
  
  it("True or False", function() {	
	expect(true) // .toBeFalsy() .toBeTruthy()
	expect(false) // .toBeFalsy() .toBeTruthy()
	expect(!false) // .toBeFalsy() .toBeTruthy()
	expect(!true) // .toBeFalsy() .toBeTruthy()

	
	expect('false')//.toBeFalsy() .toBeTruthy()
	
	expect('true')//.toBeFalsy() .toBeTruthy()
	expect('')//.toBeFalsy() .toBeTruthy()
	expect('0')//.toBeFalsy() .toBeTruthy()
	expect('1') // .toBeFalsy() .toBeTruthy()
	expect(1) // .toBeFalsy() .toBeTruthy()
	expect(0) // .toBeFalsy() .toBeTruthy()
	expect(!1) // .toBeFalsy() .toBeTruthy()
	expect(!0) // .toBeFalsy() .toBeTruthy()
	expect(!!1) // .toBeFalsy() .toBeTruthy()
	expect(!!0) // .toBeFalsy() .toBeTruthy()
	
	expect({}) // .toBeFalsy() .toBeTruthy()
	expect([]) // .toBeFalsy() .toBeTruthy()
	
	var emptyVar;
	expect(emptyVar) // .toBeFalsy() .toBeTruthy()
	
	var emptyStr='';
	expect(emptyVar) // .toBeFalsy() .toBeTruthy()
	
	var zeroVar=0;
	expect(emptyVar) // .toBeFalsy() .toBeTruthy()
	
	
	expect("toto" == true) // .toBeFalsy() .toBeTruthy()
	
	fail('TODO');
	
	//BONUS
	expect(false + 1)//.toBe();
	expect(true + 1)//.toBe();
	expect(true%1)//.toBe();
	
	var wtf = {
	  counter : 0,
	  valueOf: function() {
		  return this.counter++;
		}
	}
	
	expect(wtf == 0 && wtf ==1 && wtf == 2)//.toBeTruthy() .toBeFalsy()

  });
  
  
   it("Evaluation Order", function() {	
		var case1 = 'yes' || 'no';
		expect(case1)//.toBe();
		
		var case1 = 'yes' && 'no';
		expect(case1)//.toBe();
		
		function throwError() {
			throw 'OMG UNE ERREUR !';
		}
		
		//Supprimer un fail! 
		
		try {
		'yes' || throwError();
			fail('Fail');
		} catch(e) {
			fail('Fail');
		}

   });
   
   it("Evaluation Order - throw", function() {	
		//Supprimer un fail pour faire passer le test
		try {
			'yes' || throwError();
			fail('Fail');
		} catch(e) {
			fail('Fail');
		}
   });
 
});
