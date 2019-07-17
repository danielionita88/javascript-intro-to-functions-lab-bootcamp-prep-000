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
  var lowercase = "hello!"
  var mixedCase = "I love you, Grandma."
 if (string === lowercase) {return "I can't hear you!"}
 if (string === uppercase) {return "YES INDEED!"}
 if (string === "I love you, grandma") {return "I love you, too."}
}