var expect = chai.expect;

describe('MyFunction', function(){
      describe('#drinkMocha' , function(){
          it('should merge the two numbers', function(){
              var x = drinkMocha(7, 7);
              expect(x).to.equal(14);
          });

          it('should throw an error if first parameter is a string', function() {
              expect(function(){
                  drinkMocha('fun',7);

              }).to.throw(Error);
          });
      });

});



