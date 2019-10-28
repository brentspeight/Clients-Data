//Dummy data below
var data = {
    success: 0,
    warning: 1,
    error: 0,
    startTime: '20:30:00',
    endTime: '20:35:04',
    duration: '00:05:03',
    totalSize: '100.0GB',
    dataRead: '5.7GB',
    transferred: '1.4GB',
    backupSize: '1.4GB',
    dedupe: '1.0x',
    compression: '2.1x',
};

var container = document.querySelector('.secondName');
var row = document.createElement('tr');
if(data.success){
    
    var sTotal = $('<td>' + data.totalSize + '</td>');
    var sEnd = $('<td>' + data.endTime + '</td>');
    var sDur = $('<td>' + data.duration + '</td>');
    var sRead = $('<td>' + data.dataRead + '</td>');
    var sTransfer = $('<td>' + data.transfeered + '</td>');
    var sBackup = $('<td>' + data.backupSize + '</td>');
    var sDedupe = $('<td>' + data.dedupe + '</td>');
    var sCompression = $('<td>' + data.compression + '</td>');
    var sStart = $('<td>' + data.startTime + '</td>');

    row.append(sTotal);
    row.append(sEnd);
    row.append(sDur);
    row.append(sRead);
    row.append(sTransfer);
    row.append(sBackup);
    row.append(sDedupe);
    row.append(sCompression);
    row.append(sStart);
}

if(data.warning){
    var wTotal = $('<td>' + data.totalSize + '</td>');
    var wEnd = $('<td>' + data.endTime + '</td>');
    var wDur = $('<td>' + data.duration + '</td>');
    var wRead = $('<td>' + data.dataRead + '</td>');
    var wTrans = $('<td>' + data.transfeered + '</td>');
    var wBack = $('<td>' + data.backupSize + '</td>');
    var wDedupe = $('<td>' + data.dedupe + '</td>');
    var wCompress = $('<td>' + data.compression + '</td>');
    var wStart = $('<td>' + data.startTime + '</td>');

    row.append(wTotal);
    row.append(wEnd);
    row.append(wDur);
    row.append(wRead);
    row.append(wTrans);
    row.append(wBack);
    row.append(wDedupe);
    row.append(wCompress);
    row.append(wStart);
}
if(data.error){
    var eTotal = $('<td>' + data.totalSize + '</td>');
    var eEnd = $('<td>' + data.endTime + '</td>');
    var eDur = $('<td>' + data.duration + '</td>');
    var eRead = $('<td>' + data.dataRead + '</td>');
    var eTrans = $('<td>' + data.transfeered + '</td>');
    var eBack = $('<td>' + data.backupSize + '</td>');
    var eDedupe = $('<td>' + data.dedupe + '</td>');
    var eCompress = $('<td>' + data.compression + '</td>');
    var eStart = $('<td>' + data.startTime + '</td>');

    row.append(eTotal);
    row.append(eEnd);
    row.append(eDur);
    row.append(eRead);
    row.append(eTrans);
    row.append(eBack);
    row.append(eDedupe);
    row.append(eCompress);
    row.append(eStart);
}
container.appendChild(row);

// console.log('Display data' +" "+ data);

// var keys = Object.keys(data);

// for(i = 0; i < keys.length; i++){
//     var container = document.querySelector('.someName');
//     var containerTwo = document.querySelector('.secondName');
//     var containerThree= document.querySelector('.thirdName');

//     var row = document.createElement('td');

//     row.innerText = data[keys[i]];

//     container.appendChild(row);
//     containerTwo.appendChild(row);
//     containerThree.appendChild(row);
//     console.log(containerTwo);
// }


// debugger;
//dummy data works
//document.querySelector('#test').innerHTML = JSON.stringify(data);
