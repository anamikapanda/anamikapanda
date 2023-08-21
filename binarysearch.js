async function binarysearch(){
  console.log("Binary search");

  const pause=document.querySelector(".pause");
  pause.style.visibility = "visible";

  const bar=document.querySelectorAll(".bar");
  const barBefore=document.querySelectorAll(".bar-before");
  function BinarySearch(array,element){
    let minIndex=0;
    let maxIndex=array.length-1;
    let testElement;
    while(minIndex<=maxIndex){
      const middleIndex=Math.floor((minIndex+maxIndex)/2);
      testElement=array[middleIndex];
    }
    if(testElement<element){
      minIndex=middleIndex+1;
    }
    else if(testElement>element){
      maxIndex=middleIndex-1;
    }
    else{
      return middleIndex;
    }
  }
  
