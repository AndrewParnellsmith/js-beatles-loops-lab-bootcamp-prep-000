function theBeatlesPlay(musicians, instrument) {
 var theBeatles = [];
 for ( var i = 0; i < musicians.length; i++  ) {
   theBeatles.push(musicians[i]  + ' plays ' + instrument[i]);
 }
 return theBeatles;
}
function johnLennonFacts () {
 var facts =
  ["He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice" ];
  var i = 0;
  var newFacts = []
  while( i < facts.length, i++) { 
    newFacts.push(facts[i] + '!!!')
  }
  return newFacts
}