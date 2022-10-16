function addAndSubtract (inputArr){
    let inputArrLength = inputArr.length;
    let modifiedArray = [];
    let inputArrSum=0;
    let modifiedArrSum = 0;
    for (let i = 0; i < inputArrLength ; i++){
        let even = inputArr[i] + i; 
        let odd = inputArr[i] - i;
        if (inputArr[i] % 2 == 0){
            modifiedArray.push(even);
        }else{
            modifiedArray.push(odd);
        }
        inputArrSum+=inputArr[i];
        modifiedArrSum+=modifiedArray[i];
    }
    console.log(modifiedArray);
    console.log(inputArrSum);
    console.log(modifiedArrSum);
}
addAndSubtract ([5, 15, 23, 56, 35]);