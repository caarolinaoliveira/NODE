function a() {
  console.log("executando a()");
}
function b() {
  console.log("executando b()");
}
function c() {
  console.log("executando c()");
  a()
  b()
}

// garante que a execucao do  codigo seja feita de forma sequencial
