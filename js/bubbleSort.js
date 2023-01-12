// Your Code Here
const bubbleSort =(arr, swp=0)=>{
    let start= swp;
    let swaps=swp;
    for(let idx=0; idx<arr.length -1; idx++){
        if (arr[idx]>arr[idx+1]){
            holder=arr[idx+1]
            arr[idx+1]=arr[idx]
            arr[idx]=holder
            swaps++
        }
    }
    if (swaps ===start){
        console.log("Final result: " + arr)
        console.log("Swaps: " + swaps)
    }
    else{
        bubbleSort(arr, swaps)
    }
}

var sequence = [4, 3, 5, 0, 1]
bubbleSort(sequence)
