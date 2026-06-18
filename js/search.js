function linearSearch(arr,target){

    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }

    return -1;
}

function binarySearch(arr,target){

    let kiri = 0;
    let kanan = arr.length-1;

    while(kiri<=kanan){

        let tengah =
        Math.floor((kiri+kanan)/2);

        if(arr[tengah]===target){
            return tengah;
        }

        if(arr[tengah] < target){
            kiri = tengah+1;
        }else{
            kanan = tengah-1;
        }
    }

    return -1;
}

function jalankanSearch(){

    let arr =
    document.getElementById("arrayData")
    .value
    .split(",")
    .map(Number);

    let target =
    Number(document.getElementById("target").value);

    let tipe =
    document.getElementById("searchType").value;

    let hasil;

    if(tipe==="linear"){
        hasil = linearSearch(arr,target);
    }else{
        hasil = binarySearch(arr,target);
    }

    document.getElementById("hasilSearch")
    .innerText =
    hasil === -1
    ? "Data tidak ditemukan"
    : `Data ditemukan pada index ${hasil}`;
}
function linearSearch(arr, target){

    let proses = "";

    for(let i = 0; i < arr.length; i++){

        proses += `
        Cek index ${i} = ${arr[i]}
        <br>
        `;

        if(arr[i] === target){

            document.getElementById("langkah").innerHTML =
            proses;

            return i;
        }
    }

    document.getElementById("langkah").innerHTML =
    proses;

    return -1;
}
function binarySearch(arr,target){

    let low = 0;
    let high = arr.length - 1;

    let proses = "";

    while(low <= high){

        let mid =
        Math.floor((low + high)/2);

        proses += `
        low=${low},
        high=${high},
        mid=${mid},
        nilai=${arr[mid]}
        <br>
        `;

        if(arr[mid] === target){

            document.getElementById("langkah")
            .innerHTML = proses;

            return mid;
        }

        if(arr[mid] < target){
            low = mid + 1;
        }
        else{
            high = mid - 1;
        }
    }

    document.getElementById("langkah")
    .innerHTML = proses;

    return -1;
}