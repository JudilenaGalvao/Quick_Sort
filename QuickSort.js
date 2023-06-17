let tam = [5,4,8,1,2,6,7,3];

var QuickSort = function(tam, inferior, superior) {
  let posPivo;
  
  if (inferior < superior) {
    let pivo = tam[superior];
    let i, j;
    i = inferior - 1;
    
    for(j = inferior; j < superior; j++) {
      if (tam[j] <= pivo) {
        i++;
        let aux = tam[i];
        tam[i] = tam[j];
        tam[j] = aux;
      }
    }
    
    let aux = tam[superior];
    tam[superior] = tam[i + 1];
    tam[i + 1] = aux;
    
    posPivo = i + 1;
    
    QuickSort(tam, inferior, posPivo - 1);
    QuickSort(tam, posPivo + 1, superior);
  }
  
  return tam;
}
console.log(QuickSort(tam, 0, tam.length -1));