document.addEventListener('DOMContentLoaded', function () {
    var div = document.querySelectorAll('div');
    console.log(div);
    div = [...div];
    console.log(div);
    div.forEach(function (i, item) {
        i.innerHTML = '我又有快乐了bbbbbbbbbbbbbbbbb'
    })
})
