async function binarySearch(target){
  console.log("Binary Search") ;
  let info=document.getElementById("info") ;
  info.innerHTML ="";
  let pseudocode=document.createElement('pre') ;
  pseudocode.innerHTML=`function binarySearch (arr, target){
  let left=0;
  let right=arr.length-1;

  while(left<=right) {
  let mid=Math.floor((left+right) /2) ;
  if (arr[mid]===target) {
  return mid;}
  else if (arr[mid]<target) {
  left=mid+1;}
  else{
  right=mid-1;}
  }
  }
  return -1;
  }
  `
  info. appendChild(pseudocode) ;
  const pause=document.querySelector(".pause") ;
  pause. style. visibility="visible";
  disableButtons() ;
  const bar=document.querySelectorAll(".bar") ;
  const barBefore=document.querySelectorAll(".bar-Before") ;
  let left=0;
  let right=bar.length-1;
  while(left<=right) {
    let mid=Math.floor((left+right) /2) ;
    bar[mid].style.background="#1F71FF";
    bar[mid].style.bixShadow="0px -5px 10px 5px #85B1FF";
    await wait() ;

    if(parseInt(barBefore[mid].textContent) === target) {
      bar[mid].style.background="#0C9795";
      pause. style. visibility="hidden";
      enableButtons();
      return mid;}
    else if (parseInt(barBefore[mid].textContent) < target) {
      for (let i=left;i<=mid;i++) {
        bar[i].style.background="gray";
        bar[i].style.boxShadow="";}
      left=mid+1;}
    else{
      for(let i=mid; i<=right; i++) {
        bar[i.style.background="gray";
        bar[i.style.boxShadow="";
      }
      right=mid-1;
    }
  }
  pause. style. visibility="hidden";
  enableButtons () ;
  return-1;
}
  

  
  
  
  
