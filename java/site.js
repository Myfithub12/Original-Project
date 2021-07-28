var dataall = [];
var a = document.querySelectorAll('.same');
for (var i = 0; i < a.length; i++) {
    var id = a[i].id;
    if(dataall.indexOf(id)==-1)
    dataall.push(id);
}
data = dataall.filter(function(elem, pos) {
    return dataall.indexOf(elem) == pos;
});
i = 0;
Click(data, i);

function Click(data, i) {
    setTimeout(function() {
        if (i < data.length) {
             alert("id: "+data[i]);
            document.getElementById(data[i]).click();
            i++;
            Click(data, i);
        } else {
            alert('done');
        }
    }, 100);
}