function bubbleSort(arr){
    let data = [...arr];

    for(let i=0;i<data.length-1;i++){
        for(let j=0;j<data.length-i-1;j++){
            if(data[j] > data[j+1]){
                [data[j], data[j+1]] =
                [data[j+1], data[j]];
            }
        }
    }

    return data;
}

function selectionSort(arr){
    let data = [...arr];

    for(let i=0;i<data.length;i++){
        let min = i;

        for(let j=i+1;j<data.length;j++){
            if(data[j] < data[min]){
                min = j;
            }
        }

        [data[i], data[min]] =
        [data[min], data[i]];
    }

    return data;
}

function insertionSort(arr){
    let data = [...arr];

    for(let i=1;i<data.length;i++){
        let key = data[i];
        let j = i-1;

        while(j>=0 && data[j] > key){
            data[j+1] = data[j];
            j--;
        }

        data[j+1] = key;
    }

    return data;
}

function jalankanSort(){

    let arr =
    document.getElementById("dataInput")
    .value
    .split(",")
    .map(Number);

    let tipe =
    document.getElementById("sortType").value;

    let hasil;

    if(tipe==="bubble"){
        hasil = bubbleSort(arr);
    }
    else if(tipe==="selection"){
        hasil = selectionSort(arr);
    }
    else if(tipe==="insertion"){
        hasil = insertionSort(arr);
    }
    else{
        hasil = [...arr].sort((a,b)=>a-b);
    }

    document.getElementById("hasil")
    .innerText = hasil.join(", ");
}
function bubbleSort(arr){

    let data = [...arr];
    let proses = "";

    for(let i = 0; i < data.length - 1; i++){

        proses += `<h4>Putaran ${i+1}</h4>`;

        for(let j = 0; j < data.length - i - 1; j++){

            proses += `
            Bandingkan ${data[j]} dan ${data[j+1]}
            <br>
            `;

            if(data[j] > data[j+1]){

                proses += `
                Tukar ${data[j]} ↔ ${data[j+1]}
                <br>
                `;

                [data[j], data[j+1]] =
                [data[j+1], data[j]];

                proses += `
                Hasil: ${data.join(", ")}
                <br><br>
                `;
            }
        }
    }

    document.getElementById("langkahSort").innerHTML =
    proses;

    return data;
}
function selectionSort(arr){

    let data = [...arr];
    let proses = "";

    for(let i = 0; i < data.length; i++){

        let min = i;

        proses += `
        <h4>Posisi ${i}</h4>
        Cari nilai terkecil mulai dari index ${i}
        <br>
        `;

        for(let j = i+1; j < data.length; j++){

            if(data[j] < data[min]){
                min = j;
            }
        }

        proses += `
        Nilai terkecil = ${data[min]}
        <br>
        Tukar dengan ${data[i]}
        <br>
        `;

        [data[i], data[min]] =
        [data[min], data[i]];

        proses += `
        Hasil:
        ${data.join(", ")}
        <br><br>
        `;
    }

    document.getElementById("langkahSort").innerHTML =
    proses;

    return data;
}
function insertionSort(arr){

    let data = [...arr];
    let proses = "";

    for(let i = 1; i < data.length; i++){

        let key = data[i];
        let j = i - 1;

        proses += `
        <h4>Sisipkan ${key}</h4>
        `;

        while(j >= 0 && data[j] > key){

            proses += `
            ${data[j]} > ${key}
            → geser ke kanan
            <br>
            `;

            data[j+1] = data[j];
            j--;
        }

        data[j+1] = key;

        proses += `
        Hasil:
        ${data.join(", ")}
        <br><br>
        `;
    }

    document.getElementById("langkahSort").innerHTML =
    proses;

    return data;
}
function builtinSort(arr){

    let hasil = [...arr].sort((a,b)=>a-b);

    document.getElementById("langkahSort").innerHTML =
    `
    <h4>Array.sort()</h4>

    JavaScript menggunakan algoritma internal
    yang dioptimalkan (Timsort atau kombinasi lainnya).

    <br><br>

    Data Awal:
    ${arr.join(", ")}

    <br><br>

    Hasil:
    ${hasil.join(", ")}
    `;

    return hasil;
}
if(tipe === "bubble"){

    document.getElementById("penjelasan").innerHTML = `
    <b>Bubble Sort</b><br>
    Membandingkan dua angka yang bersebelahan.
    Jika salah urut, keduanya ditukar.
    Nilai terbesar akan "mengambang"
    ke akhir array.
    `;
}