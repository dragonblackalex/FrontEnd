let word = prompt('Word?')
function middle(word) {
    return word.substr((word.length - 1) / 2, 2 - word.length % 2);
  }

  