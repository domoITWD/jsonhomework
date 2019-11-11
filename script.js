var outputParagraph = document.getElementById('outputParagraph')
var contentGrid = document.getElementById('contentGrid')

var myJSON = {
"zodiac": "Aries",
"dates": "Mar 21 - Apr 19",
"traits": "Eager, dynamic, quick and competitive."
}

printToPage(myJSON["favorite_color"]);

function printToPage(incomingJSON) {
  contentItem.innerHTML = incomingJSON;

var jsonDatabase = [
  {
    "zodiac": "Aries",
    "dates": "Mar 21 - Apr 19",
    "traits": "Eager, dynamic, quick and competitive."
  },

  {
    "zodiac": "Aries",
    "dates": "Mar 21 - Apr 19",
    "traits": "Eager, dynamic, quick and competitive."
  },
]

createElementProper(myJSON);

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}


function createElementProper(incomingJSON) {

  var newContentElement = document.createElement("DIV");
  newContentElement.classList.add('contentItem');

  var newContentZodiac = document.createElement("H3");
  newContentZodiac.classList.add('contentzodiac');
  newContentZodiac.innerHTML = incomingJSON['zodiac'];
  newContentElement.appendChild(newContentZodiac);

  var newContentDate = document.createElement("H4");
  newContentDate.classList.add('contentDates');
  newContentDate.innerHTML = incomingJSON['dates'];
  newContentElement.appendChild(newContentDate);

  var newContentTraits = document.createElement("H5");
  newContentTraits.classList.add('contentTraits');
  newContentTraits.innerHTML = incomingJSON['traits'];
  newContentElement.appendChild(newContentTraits);

  contentGridElement.appendChild(newContentElementProper);
  createElementProper(incomingJSON);
}
