exports.fileDownload = function(content, filename) {
        var data = new Blob([content], {type: 'text/csv'});
        var csvURL = window.URL.createObjectURL(data);
        var tempLink = document.createElement('a');
        tempLink.href = csvURL;
        tempLink.setAttribute('download', filename);
        tempLink.click();
    }
}
