var x = 1;
function *foo() {
    x++;
    yield;
    console.log("x:", x)
}
function bar() {
    x++
    console.log("x:", x)
}
bar()