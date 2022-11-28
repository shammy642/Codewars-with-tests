function validParentheses(parens){
    var n = 0;
    for (ch in parens) {
      if (parens[ch] == '(') n++;
      if (parens[ch] == ')') n--;
      if (n < 0) return false;
    }
    
    return n == 0;
  }
x = validParentheses("(()())")
console.log(x)