function setColor(color){
    // var alist = document.querySelectorAll('a');
    //     var i = 0;
    //     while (i< alist.length) {
    //         alist[i].style.color = color;
    //         i = i + 1;
    //         }
    $('a').css('color', color)
}

function Mode_Selector(self){
    var target1 = document.querySelector('body') ; 
    var target2 = document.querySelector('header') ; 
    
    if  (self.value === 'NIGHT_mode'){
        target2.style.backgroundColor = 'black';
        target2.style.color = 'white';
        target1.style.backgroundColor = 'black';
        target1.style.color = 'white';
        self.value = 'DAY_mode';

        setColor('powderblue');

        }else {
        target2.style.backgroundColor = 'white';
        target2.style.color = 'black';
        target1.style.backgroundColor = 'white';
        target1.style.color = 'black';
        self.value = 'NIGHT_mode';

        setColor('black');

    }
} // 위에 반복문 이해 잘 안돼,,,,