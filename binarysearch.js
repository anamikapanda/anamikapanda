javascript function sleep(ms){
  return new Promise(resolve => setTimeout(resolve,ms));
}
async function binarySearch(arr,target){
  let left=0;
  let right=arr.length-1;
  while(left<=right){
    let mid=Math.floor((left+right)/2);
    highlightBar(mid,'highlight');
    await sleep(1000);

    if(arr[mid]===target){
      highlight(mid,'bar');
      return mid;
    }
    if(arr[mid]<target){
      left=mid+1;
    } else
    {
      right=mid-1;
    }
    highlightBar(mid,'bar');
  }
  return -1;
}

function highlightBar(index,className){
  const bars=document.querySelectorAll('.bar');
  bars[index].classList.add(className);
}

async function startBinarySearch(){
  const target=Math.floor(Math.random()*100);
  const sortedArray=Array.from({length:20},()=>Math.floor(Math.random()*100)).sort((a,b)=>a-b);
  const resultIndex=await binarySearch(sortedArray,target);
  if (resultIndex!==-1){
    alert('Target $ {target} found at index $ {resuktIndex}');
  }
  else{
    alert('Target $ {target} not found in the array');
  }
}

     
