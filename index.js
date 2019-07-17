function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log ("HELLO")
}
function logWhisper(string) {
  console.log("hello")
}
function sayHiToGrandma(string) {
  var uppercase = "HELLO!"
  uppercase.toUpperCase() === uppercase
  var lowercase = "hello!"
  lowercase.toLowerCase() === lowercase
  var mixedCase = "I love you, Grandma."
  mixedCase.toLowerCase() === mixedCase
  mixedCase.toUpperCase() === mixedCase
  
 if (lowercase) {return "I can't hear you!"}
 if (uppercase) {return "YES INDEED!"}
 return "I love you, too."
}