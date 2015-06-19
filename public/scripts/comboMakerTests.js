QUnit.test( "combo tests", function( assert ) {


  	assert.ok( 1 == "1", "Passed!" );
  	assert.equal(grab.isCancelable(), false);
  	assert.equal(combo1.moves[2].isKnockdown, false);
});