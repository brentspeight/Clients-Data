//Dummy data below
var data = [
    //Object 1
    {
        name: 'Computer AB',
        success: 0,
        warning: 1,
        error: 0,
        startTime: '20:30:00',
        endTime: '20:35:04',
        duration: '00:05:03',
        totalSize: '100.0GB',
        dataRead: '5.9GB',
        transferred: '1.4GB',
        backupSize: '1.4GB',
        dedupe: '1.0x',
        compression: '2.1x',
    },
    //Object 2
    {
        name: 'Computer CD',
        success: 1,
        warning: 0,
        error: 0,
        startTime: '20:40:00',
        endTime: '20:45:04',
        duration: '00:10:03',
        totalSize: '150.0GB',
        dataRead: '6.3GB',
        transferred: '2.4GB',
        backupSize: '2.4GB',
        dedupe: '2.0x',
        compression: '8.8x',
    },
    //Object 3
    {
        name: 'Computer EF',
        success: 1,
        warning: 0,
        error: 0,
        startTime: '33:30:00',
        endTime: '23:45:04',
        duration: '05:10:03',
        totalSize: '1660.0GB',
        dataRead: '5.7GB',
        transferred: '8.4GB',
        backupSize: '2.4GB',
        dedupe: '5.0x',
        compression: '4.7x',
    },
    //Object 4
    {
        name: 'Computer GH',
        success: 0,
        warning: 0,
        error: 1,
        startTime: '10:40:00',
        endTime: '22:45:04',
        duration: '00:00:03',
        totalSize: '300.0GB',
        dataRead: '6.2GB',
        transferred: '4.4GB',
        backupSize: '5.4GB',
        dedupe: '2.0x',
        compression: '3.1x',
    },
    //Object 5
    {
        name: 'Computer IJ',
        success: 0,
        warning: 1,
        error: 0,
        startTime: '34:40:00',
        endTime: '09:45:04',
        duration: '44:10:03',
        totalSize: '550.0GB',
        dataRead: '4.5GB',
        transferred: '3.4GB',
        backupSize: '5.4GB',
        dedupe: '2.0x',
        compression: '3.1x',
    },
    //Object 6
    {
        name: 'Computer KL',
        success: 1,
        warning: 0,
        error: 0,
        startTime: '03:40:00',
        endTime: '44:45:04',
        duration: '00:10:03',
        totalSize: '340.0GB',
        dataRead: '5.4GB',
        transferred: '5.4GB',
        backupSize: '4.4GB',
        dedupe: '5.0x',
        compression: '6.1x',
    },
    //Object 7
    {
        name: 'Computer MO',
        success: 1,
        warning: 0,
        error: 0,
        startTime: '23:40:00',
        endTime: '24:45:04',
        duration: '00:10:03',
        totalSize: '900.0GB',
        dataRead: '4.3GB',
        transferred: '3.4GB',
        backupSize: '5.4GB',
        dedupe: '7.0x',
        compression: '9.3x',
    },
    //Object 8
    {
        name: 'Computer PQ',
        success: 0,
        warning: 0,
        error: 1,
        startTime: '60:40:00',
        endTime: '33:45:04',
        duration: '00:10:03',
        totalSize: '440.0GB',
        dataRead: '5.7GB',
        transferred: '6.4GB',
        backupSize: '3.4GB',
        dedupe: '7.0x',
        compression: '62.4x',
    },
    //Object 9
    {
        name: 'Computer RS',
        success: 0,
        warning: 1,
        error: 0,
        startTime: '77:40:00',
        endTime: '33:45:04',
        duration: '00:44:03',
        totalSize: '550.0GB',
        dataRead: '5.7GB',
        transferred: '6.4GB',
        backupSize: '7.4GB',
        dedupe: '3.0x',
        compression: '6.1x',
    },
    //Object 10
    {
        name: 'Computer TUVWXYZ',
        success: 0,
        warning: 1,
        error: 0,
        startTime: '77:40:00',
        endTime: '77:45:04',
        duration: '77:10:03',
        totalSize: '150.0GB',
        dataRead: '88.7GB',
        transferred: '4.4GB',
        backupSize: '6.4GB',
        dedupe: '7.0x',
        compression: '3.99x',
    }
];
//Create varibles all the elements with the tBody name (one, two, three)
var tbody = $("#tBodyOne");
var tBodyTwo = $("#tBodyTwo");
var tBodyThree = $('#tBodyThree');

//Use the tBody varibale created to create a text to distinguish which Tcells are which (Success, Wanring, Error)
tbody.text('Success');
tBodyTwo.text('Warning');
tBodyThree.text('Error');

//Make a function called infoData
function infoData() {
    //Run a for loop to loop through all objects containing name success
    for (var i = 0; i < data.length; i++) {
        //create a table row using jQuery
        var row = $('<tr>');
        //Make an if statement to select all the data that is true and appened to the page
        if (data[i].success) {
            console.log(data[i].success)
            var name = $('<td>' + 'Name:' + ' ' + data[i].name + '</td>');
            console.log(data[i].name);
            var success = $('<td>' + 'Success:' + ' ' + data[i].success + '</td>');
            var warning = $('<td>' + 'Warning:' + ' ' + data[i].warning + '</td>');
            var error = $('<td>' + 'Error:' + ' ' + data[i].error + '</td>');
            var tS = $('<td>' + 'TotalSize:' + ' ' + data[i].totalSize + '</td>');
            var eT = $('<td>' + 'EndTime' + ' ' + data[i].endTime + '</td>');
            var dur = $('<td>' + 'Duration' + ' ' + data[i].duration + '</td>');
            var dR = $('<td>' + 'DataRead' + ' ' + data[i].dataRead + '</td>');
            var trans = $('<td>' + 'Transferred' + ' ' + data[i].transferred + '</td>');
            var bS = $('<td>' + 'BackUpSize:' + ' ' + data[i].backupSize + '</td>');
            var dedupe = $('<td>' + 'Dedupe:' + ' ' + data[i].dedupe + '</td>');
            var compress = $('<td>' + 'Compression:' + ' ' + data[i].compression + '</td>');
            var sT = $('<td>' + 'StartTime:' + ' ' + data[i].startTime + '</td>');

            row.append(name);
            row.append(success);
            row.append(warning);
            row.append(error);
            row.append(tS);
            row.append(eT);
            row.append(dur);
            row.append(dR);
            row.append(trans);
            row.append(bS);
            row.append(dedupe);
            row.append(compress);
            row.append(sT);

            tbody.append(row);
        }


    }
    //Run a for loop to loop through all objects containing name success
    for (var i = 0; i < data.length; i++) {
        //Make an if statement to select all the data that is true and appened to the page
        if (data[i].warning) {
            var row = $('<tr>');
            console.log(data[i].warning);
            var nameTwo = $('<td>' + 'Name:' + ' ' + data[i].name + '</td>');
            var successTwo = $('<td>' + 'Success:' + ' ' + data[i].success + '</td>');
            var warningTwo = $('<td>' + 'Warning:' + ' ' + data[i].warning + '</td>');
            var errorTwo = $('<td>' + 'Error:' + ' ' + data[i].error + '</td>');
            var tSTwo = $('<td>' + 'Total Size' + ' ' + data[i].totalSize + '</td>');
            var eTTwo = $('<td>' + 'End Time:' + ' ' + data[i].endTime + '</td>');
            var durTwo = $('<td>' + 'Duration:' + ' ' + data[i].duration + '</td>');
            var dRTwo = $('<td>' + 'Data Read:' + ' ' + data[i].dataRead + '</td>');
            var transTwo = $('<td>' + 'Transferred:' + ' ' + data[i].transferred + '</td>');
            var bSTwo = $('<td>' + 'Backup Size:' + ' ' + data[i].backupSize + '</td>');
            var dedupeTwo = $('<td>' + 'Dedupe:' + ' ' + data[i].dedupe + '</td>');
            var compressTwo = $('<td>' + 'Compression:' + ' ' + data[i].compression + '</td>');
            var sTTwo = $('<td>' + 'StartTime:' + ' ' + data[i].startTime + '</td>');
            //successC.text('Success:' + '' + data.computerNameB.success)
            row.append(nameTwo);
            row.append(successTwo);
            row.append(warningTwo);
            row.append(errorTwo);
            row.append(tSTwo);
            row.append(eTTwo);
            row.append(durTwo);
            row.append(dRTwo);
            row.append(transTwo);
            row.append(bSTwo);
            row.append(dedupeTwo);
            row.append(compressTwo);
            row.append(sTTwo);

            tBodyTwo.append(row);
        }
    }
    //Run a for loop to loop through all objects containing name success
    for (var i = 0; i < data.length; i++) {
        //Make an if statement to select all the data that is true and appened to the page
        if (data[i].error) {
            var row = $('<tr>');
            var nameThree = $('<td>' + 'Name:' + ' ' + data[i].name + '</td>');
            var successThree = $('<td>' + 'Success:' + ' ' + data[i].success + '</td>');
            var warningThree = $('<td>' + 'Warning:' + ' ' + data[i].warning + '</td>');
            var errorThree = $('<td>' + 'Error:' + ' ' + data[i].error + '</td>');
            var tSThree = $('<td>' + data[i].totalSize + '</td>');
            var eTThree = $('<td>' + data[i].endTime + '</td>');
            var durThree = $('<td>' + data[i].duration + '</td>');
            var dRThree = $('<td>' + data[i].dataRead + '</td>');
            var transThree = $('<td>' + data[i].transfeered + '</td>');
            var bSThree = $('<td>' + data[i].backupSize + '</td>');
            var dedupeThree = $('<td>' + data[i].dedupe + '</td>');
            var compressThree = $('<td>' + data[i].compression + '</td>');
            var sTThree = $('<td>' + data[i].startTime + '</td>');

            row.append(nameThree);
            row.append(successThree);
            row.append(warningThree);
            row.append(errorThree);
            row.append(tSThree);
            row.append(eTThree);
            row.append(durThree);
            row.append(dRThree);
            row.append(transThree);
            row.append(bSThree);
            row.append(dedupeThree);
            row.append(compressThree);
            row.append(sTThree);

            tBodyThree.append(row);

        }
    }



}



infoData()


