var Links = {
    setColor:function (color) {
        var as = document.getElementsByTagName('a');
        for(var i=0;i<as.length;i++) {
            as[i].style.color=color;
        }
    }
}
var Body = {
    setColor:function (color) {
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor:function (color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}
function nightDayHandler(self) {
    var target = document.querySelector('body');
    if(self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        Links.setColor('white');
        self.value = 'day';
    }
    else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        Links.setColor('black');
        self.value = 'night';
    }
}