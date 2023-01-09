let Body = {
    setBackgroundColor:function(color){
        document.querySelector('body').style.backgroundColor=color;
    },
    setColor:function(color){
        document.querySelector('body').style.color=color;
    }
}
let Border={
    setColor:function(tag,color){
        document.querySelector(tag).style.borderColor=color;
    }
}

function NightModeHandler(self){
    if(self.value==='Night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        Border.setColor('#left','white');
        Border.setColor('h1','white');
        self.value='Day';
    }else{
        Body.setBackgroundColor('white');
        Body.setColor('black');
        Border.setColor('#left','black');
        Border.setColor('h1','black');
        self.value='Night';
    }
    let links=document.querySelectorAll('a');
    /*
    for(let i=0; i<links.length; i++){
        links[i].style.color=(self.value==='Day'?'powderblue':'blue');
    }
    */
    for(let i in links){
        links[i].style.color=(self.value==='Day'?'powderblue':'blue');
    }
}