//Dummy data below
var data = {
    success: 0,
    warning: 1,
    totalSize: '100 mb',
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

console.log('Display data' +" "+ data);
//dummy data works
document.querySelector('#test').innerHTML = JSON.stringify(data);
