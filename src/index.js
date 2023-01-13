module.exports = function toReadable(num) {
  let first = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten'
  }

  let second = {
    1: 'eleven',
    2: 'twelve',
    3: 'thirteen',
    4: 'fourteen',
    5: 'fifteen',
    6: 'sixteen',
    7: 'seventeen',
    8: 'eighteen',
    9: 'nineteen',
    0: 'twenty',
  }

  let third = {
    1: 'ten',
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety',
  }

  if (num >= 0 && num <= 10) {
    return first[num];
  }

  if (num > 10 && num < 21) {
    return second[num.toString()[1]];
  }

  if (num > 20 && num < 100) {
    if (num.toString()[1] == "0") {
      return third[num.toString()[0]];
    } else {
      return third[num.toString()[0]] + " " + first[num.toString()[1]];
    }
  }

  if (num > 99 && num < 1000) {
    if (num.toString()[1] == "0" && num.toString()[2] == "0")
      return first[num.toString()[0]] + " hundred";
    if (num.toString()[1] == "0")
      return first[num.toString()[0]] + " hundred " + first[num.toString()[2]];
    if (num.toString()[1] == "1" && num.toString()[2] == 0)
      return first[num.toString()[0]] + " hundred ten";
    if (num.toString()[1] == "1")
      return first[num.toString()[0]] + " hundred " + second[num.toString()[2]]
    if (num.toString()[2] == "0")
      return first[num.toString()[0]] + " hundred " + third[num.toString()[1]];
    else
      return first[num.toString()[0]] + " hundred " + third[num.toString()[1]] + " " + first[num.toString()[2]];
  }
}

