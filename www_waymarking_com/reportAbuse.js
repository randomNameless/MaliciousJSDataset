function reportAbuse(url) {
    var w = window.open('../report/reportabuse.aspx?' + url, 'reportAbuse', config = 'width=650,height=600,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,directories=no,status=no');
    w.focus();
}
