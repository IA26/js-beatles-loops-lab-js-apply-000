// add solution here
var musicians = ["John Lennon","Paul McCartney","George Harrison","Ringo Starr"];
var instruments = ["Guitar","Bass Guitar","Lead Guitar","Drums"];
function theBeatlesPlay(musicians, instruments) {
  var Beatles = [];
  var i;
  var str;
  for (i = 0; i <musicians.length; i++) {
    str = musicians[i] + " plays " + instruments[i];
    Beatles.push(str);
  } 
  return Beatles;
}



function johnLennonFacts(facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i] = facts[i] + " !!! " ;
    i++;
  }
  return facts;
}