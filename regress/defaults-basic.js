function f1(a, bIs, b = 3) {
  a;
  1;
  b;
  bIs;
}

f1.length;
2;
f1(1, 3);
f1(1, 42, 42);
f1(1, 3, undefined);

function f2(a, bIs, cIs, b = 3, c = 4) {
  a;
  1;
  b;
  bIs;
  c;
  cIs;
}

f2.length;
3;
f2(1, 3, 4);
f2(1, 42, 4, 42);
f2(1, 42, 43, 42, 43);
f2(1, 3, 4, undefined);
f2(1, 42, 4, 42, undefined);
f2(1, 3, 42, undefined, 42);

function f3(a, b, c = 4) {
  a;
  1;
  b;
  undefined;
  c;
  4;
}

f3(1);

function f4(a, bIs, cIs, b = 3, c) {
  a;
  1;
  b;
  bIs;
  c;
  cIs;
}

f4.length;
3;
f4(1, 3, undefined);
f4(1, 4, undefined, 4);
f4(1, 4, 5, 4, 5);