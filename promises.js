//  função sincrona
function sumNumber(){
  let result = 1 + 1

  if (result === 2) {
    sucessCallBack();
  } else {
    errorCallBack();
  }
}

function sucessCallBack(){
  console.log("Sim, é o número 2");
}

function errorCallBack(){
  console.log('Ops, houve um erro')
}

sumNumber();

// Reescrevendo no formato de promisse
let p = new Promise(
  // recebe uma funcão anonima no formato de uma callback
  (resolve, reject) => {
    let a = 1 + 1;

    if( a === 2 ){
      resolve('Success');
    } else {
      reject('Failed');
    }
  }
)

// invocando a função
p.then((message) => {
  console.log('Sim, é o número 2')
})
.catch( () => console.log('Opss, houve um erro!'))