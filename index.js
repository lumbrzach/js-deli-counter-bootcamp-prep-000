var katzDeliLine = [];
var i = 5;

function takeANumber(katzDeliLine) {
  katzDeliLine.push(i);
  return (`Welcome, ${i++}. You are number ${katzDeliLine.length} in line.`)
};

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else
    return `Currently serving ${katzDeliLine.shift()}.`;
};



function currentLine(katzDeliLine) {
  var newLine = [];
  for (let i = 0; i < katzDeliLine.length; i++) {
       newLine.push(' ' + [i+1] + `. ` + katzDeliLine[i])
     }
  if (katzDeliLine.length > 0) {
       return(`The line is currently:` + newLine);
     } else
       return 'The line is currently empty.';
   };

var deliLine = [];
console.log(takeANumber(deliLine));
console.log(takeANumber(deliLine));

console.log(currentLine(deliLine));
console.log(nowServing(deliLine));
console.log(currentLine(deliLine));
