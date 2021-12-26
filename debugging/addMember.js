let memberDirectory = {
  "Jane Doe": "323-8293",
  "Margaret Asbury": "989-1111",
  "Callum Beech": "533-9090",
  "Juanita Eastman": "424-1919",
};

// fixed code
function isValidName(name) {
  // changed regex to be case insensitive, accept spaces, does not accept number characters
  return /^[a-z\s]+$/i.test(name);
}

// alternative fix
// uses range of alphabetic chars in a char class and appends i flag to make case insensitive
// function isValidName(name) {
//   return (/^[a-z]+ [a-z]+$/i).test(name);
// }

// original code
// \w character class shortcut matches not only upper and lower case alphabetic chars, but also
// digits 0-9 and the underscore _ , so it doesn't work to filter these characters
// function isValidName(name) {
//   return (/^\w+ \w+$/).test(name);
// }

function isValidPhone(phone) {
  return /^\d{3}-\d{4}$/.test(phone);
}

function validMemberInfo(name, phone) {
  return isValidName(name) && isValidPhone(phone);
}

function addMember(name, phone) {
  if (validMemberInfo(name, phone)) {
    memberDirectory[name] = phone;
  } else {
    console.log("Invalid member information.");
  }
}

addMember("Laura Carlisle", "444-2223"); // added
addMember("Rachel Garcia", "232-1191"); // added
addMember("Earl 5mith", "331-9191"); // Invalid member information.
addMember("Kathy Freg0so", "555-5555"); // Invalid member information.
addMember("T`ler Gilber+", "666-6666"); // Invalid member information.
addMember("Ana Palacios", "44b-4444"); // Invalid member information.

console.log(memberDirectory);
