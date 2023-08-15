

function mergeArr() {
    let arr = [3, 45, 33, 78, 58, 71]
    let arr2 = [67, 94, 85, 63, 2]
    let arr3 = []

    console.log(arr.length + arr2.length);

    for (let k = 0; k < arr.length + arr2.length; k++) {
        if (k < arr.length) {
            arr3[k] = arr[k]
        }
        else {
            arr3[k] = arr2[k - arr.length]
        }
    }
    console.log(arr3, "llll");
}

function restMerge() {
    let arr = [3, 45, 33, 78, 58, 71]
    let arr2 = [67, 94, 85, 63, 2]
    let arr3 = []

    arr3 = [...arr, ...arr2]
    console.log(arr3, "ppp");
}

let aa = Date.now()

mergeArr()
// restMerge()

let bb = Date.now()
console.log(bb - aa, "timee");