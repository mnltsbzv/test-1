function pow (x, n) {
var y=x;
  while ( n>1 ){
    x *= y;
    n--;
  }
  return x;
}

alert ( pow(4, 5) );
