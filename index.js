document.addEventListener('DOMContentLoaded', function () {
    var div = document.querySelectorAll('div');
    console.log(div);
    div = [...div];
    console.log(div);
    div.forEach(function (i, item) {
        i.innerHTML = '我是一只快乐的二狗'
    })
})