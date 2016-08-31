window.onload=function(){
    /*头部行为*/
    var oheader_l_t=document.getElementById('header_l_t');
    var oheader_l_t_s=document.getElementById('header_l_t_s');
    var oheader_l_b=document.getElementById('header_l_b');
    oheader_l_t.onmouseover=function(){
        oheader_l_t_s.className='active';
        oheader_l_b.style.display='block';
        this.style.background='#fff';
    }
    oheader_l_t.onmouseout=function() {
        oheader_l_t_s.className='none';
        oheader_l_b.style.display='none';
        this.style.background='#f1f1f1';
    }
    var omyjd=document.getElementById('myjd');
    omyjd.onmouseover=function(){
        show('myjd_div','myjd_p','myjd_a');
    }
    omyjd.onmouseout=function(){
        hide('myjd_div','myjd_p','myjd_a');
    }
    var ophonejd=document.getElementById('phonejd');
    ophonejd.onmouseover=function(){
        show('phonejd_div','phonejd_p','phonejd_a');
        document.getElementById('phonejd_s').style.background='url("img/phonejd_bg1.png") no-repeat 10px center';
    }
    ophonejd.onmouseout=function(){
        hide('phonejd_div','phonejd_p','phonejd_a');
        document.getElementById('phonejd_s').style.background='url("img/phonejd_bg2.png") no-repeat 10px center';
    }
    var oattejd=document.getElementById('attejd');
    oattejd.onmouseover=function(){
        show('attejd_div','attejd_p','attejd_a');
    }
    oattejd.onmouseout=function(){
        hide('attejd_div','attejd_p','attejd_a');
    }
    var oclientjd=document.getElementById('clientjd');
    oclientjd.onmouseover=function(){
        show('clientjd_div','clientjd_p','clientjd_a');
    }
    oclientjd.onmouseout=function(){
        hide('clientjd_div','clientjd_p','clientjd_a');
    }
    var owebsitejd=document.getElementById('websitejd');
    owebsitejd.onmouseover=function(){
        show('websitejd_div','websitejd_p','websitejd_a');
    }
    owebsitejd.onmouseout=function(){
        hide('websitejd_div','websitejd_p','websitejd_a');
    }
    function showOrHide(id,dp){
        document.getElementById(id).style.display=dp;
    }
    function showBg(id,bg){
        document.getElementById(id).style.background=bg;
    }
    function show(id1,id2,id3){
        showOrHide(id1,'block');
        showBg(id2,'#fff');
        showBg(id3,'url(img/jt_up.png) no-repeat right center');
    }
    function hide(id1,id2,id3){
        showOrHide(id1,'none');
        showBg(id2,'#f1f1f1');
        showBg(id3,'url(img/jt_down.png) no-repeat right center');
    }
    /*活动页面*/
    document.getElementById('close').onclick=function(){
        document.getElementById('activity').style.display='none';
    }
    /*nav页面*/
    document.getElementById('nav_r').onmouseover=function(){
        document.getElementById('nav_r_i_div').style.display='block';
        document.getElementById('nav_r_i').className='active2';
    }
    document.getElementById('nav_r').onmouseout=function(){
        document.getElementById('nav_r_i_div').style.display='none';
        document.getElementById('nav_r_i').className='none';
    }
    document.getElementById('import').onfocus=function(){
        document.getElementById('import').value='';
    }
    document.getElementById('import').onblur=function(){
        document.getElementById('import').value='Surface';
    }
    /*全部商品分类*/
    var oallgoods_c_l=document.getElementById('allgoods_c_l');
    var ad=document.getElementsByName('ad');
    var al=document.getElementsByName('al');
    var ads=document.getElementsByName('ads');
    var ab=document.getElementsByName('ab');
    for(var i=0;i<ad.length;i++){
        al[i].index=i;
        al[i].onmouseover=function(){
            ad[this.index].style.background='#f7f7f7';
            ad[this.index].style.color='#c81623';
            ad[this.index].style.borderRightColor='#f7f7f7';
            ads[this.index].style.display='block';
            ab[this.index].style.background='none';
        }
        al[i].onmouseout=function(){
            ad[this.index].style.background='#c81623';
            ad[this.index].style.color='#fff';
            ad[this.index].style.borderRightColor='#c81623';
            ads[this.index].style.display='none';
            ab[this.index].style.background='url("img/jd_left.png") no-repeat 0 center';
        }
    }
    
    
    var oallgoods_c_c = document.getElementById('allgoods_c_c');
    var oimg=document.getElementById('img1');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var arrimg=['img/allgoods_1.jpg','img/allgoods_2.jpg','img/allgoods_3.jpg','img/allgoods_4.jpg','img/allgoods_5.jpg','img/allgoods_6.jpg'];
    var index = 1;
    var timer;
    function showButton() {
        for (var i = 0; i < buttons.length ; i++) {
            if( buttons[i].className == 'on'){
                buttons[i].className = '';
                break;
            }
        }
        buttons[index - 1].className = 'on';
        oimg.src=arrimg[index-1];
    }
    function play() {
        timer = setTimeout(function () {
            next.onclick();
            play();
        }, 2000);
    }
    function stop() {
        clearTimeout(timer);
    }
    next.onclick = function () {
        if (index == 6) {
            index = 1;
        }
        else {
            index += 1;
        }
        showButton();
    }
    prev.onclick = function () {
        if (index == 1) {
            index = 6;
        }
        else {
            index -= 1;
        }
        showButton();
    }
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onmouseover = function () {
            stop;
            if(this.className == 'on') {
                return;
            }
            var myIndex = parseInt(this.getAttribute('index'));
            index=myIndex;
            showButton();
        }
    }
    oallgoods_c_c.onmouseover = stop;
    oallgoods_c_c.onmouseout = play;
    play();

    
    /*Clothes*/

    function mouseActivity(id1,name){
        var arrLi = document.getElementById(id1).getElementsByTagName('li');
        var arrA = document.getElementById(id1).getElementsByTagName('a');
        var arrDiv=document.getElementsByName(name);
        for(var cur=0;cur<arrLi.length;cur++){
            (function(){
                var i=cur;
                for(var j=1;j<arrLi.length;j++){
                    arrLi[j].className = 'normal';
                }
                arrLi[0].className= 'active';
                arrLi[arrLi.length-1].className= 'active2';
                arrA[0].style.border='none';
                arrA[arrLi.length-1].style.borderRight='none';
                arrDiv[0].style.display='block';
                var k=(i-1) > 0?(i-1):0;
                arrLi[i].onmouseover=function(){
                    for(var j=0;j<arrLi.length;j++){
                        arrLi[j].className = 'normal';
                        arrDiv[j].style.display='none';
                    }
                    arrLi[0].className= 'active1';
                    arrLi[arrLi.length-1].className= 'active2';
                    arrLi[i].className= 'active';
                    arrA[i].style.border='none';
                    arrA[k].style.border='none';
                    arrDiv[i].style.display='block';
                }
                arrLi[i].onmouseout=function() {
                    for (var j = 0; j < arrLi.length; j++) {
                        arrA[j].style.borderRight = '1px solid #ccc';
                    }
                    arrA[arrLi.length - 1].style.border = 'none';
                }
            })(cur);
        }
    }
    mouseActivity('clothes_t_r','clothes_c_rr');
    mouseActivity('beauty_t_r','beauty_c_rr');
    mouseActivity('mobilephone_t_r','mobilephone_c_rr');
    mouseActivity('electrical_t_r','electrical_c_rr');
    mouseActivity('computer_t_r','computer_c_rr');
    mouseActivity('sports_t_r','sports_c_rr');
    mouseActivity('living_t_r','living_c_rr');
    mouseActivity('kids_t_r','kids_c_rr');
    mouseActivity('foods_t_r','foods_c_rr');
    mouseActivity('books_t_r','books_c_rr');
    mouseActivity('cars_t_r','cars_c_rr');
    carousel('allgoods_b_div','allgoods_list',document.getElementById('allgoods_buttons').children,'allgoods_prev2','allgoods_next2',4,-1004);
    carousel('clothes_c_r_div','clothes_list',document.getElementById('clothes_buttons').children,'clothes_prev','clothes_next',4,-439);
    carousel('beauty_c_r_div','beauty_list',document.getElementById('beauty_buttons').children,'beauty_prev','beauty_next',4,-339);
    carousel('mobilephone_c_r_div','mobilephone_list',document.getElementById('mobilephone_buttons').children,'mobilephone_prev','mobilephone_next',4,-439);
    carousel('electrical_c_r_div','electrical_list',document.getElementById('electrical_buttons').children,'electrical_prev','electrical_next',4,-439);
    carousel('computer_c_r_div','computer_list',document.getElementById('computer_buttons').children,'computer_prev','computer_next',4,-439);
    carousel('sports_c_r_div','sports_list',document.getElementById('sports_buttons').children,'sports_prev','sports_next',4,-339);
    carousel('living_c_r_div','living_list',document.getElementById('living_buttons').children,'living_prev','living_next',4,-339);
    carousel('kids_c_r_div','kids_list',document.getElementById('kids_buttons').children,'kids_prev','kids_next',4,-339);
    carousel('foods_c_r_div','foods_list',document.getElementById('foods_buttons').children,'foods_prev','foods_next',4,-339);
    carousel('books_c_r_div','books_list',document.getElementById('books_buttons').children,'books_prev','books_next',4,-439);
    carousel('cars_c_r_div','cars_list',document.getElementById('cars_buttons').children,'cars_prev','cars_next',4,-439);
    carousel('service_c_l_r_div','service_list1',document.getElementById('service_buttons1').children,'service_prev1','service_next1',4,-395);
    carousel('service_c_r_r_div','service_list2',document.getElementById('service_buttons2').children,'service_prev2','service_next2',4,-395);
    function carousel(id1,id2,arr,id4,id5,len,a){
        var container = document.getElementById(id1);
        var list = document.getElementById(id2);
        var arr;
        var prev = document.getElementById(id4);
        var next = document.getElementById(id5);
        var index = 1;
        var animated = false;
        var timer;
        function animate (offset) {
            if (offset == 0) {
                return;
            }
            animated = true;
            var time = 300;
            var inteval = 10;
            var speed = offset/30;
            var left = parseInt(list.style.left) + offset;
            var go = function (){
                if ( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
                    list.style.left = parseInt(list.style.left) + speed + 'px';
                    setTimeout(go, inteval);
                }
                else {
                    list.style.left = left + 'px';
                    if(left> 0){
                        list.style.left =(a) * len + 'px';
                    }
                    if(left<(a * len)) {
                        list.style.left = a+'px';
                    }
                    animated = false;
                }
            }
            go();
        }
        function showButton() {
            for (var i = 0; i < arr.length ; i++) {
                if( arr[i].className == 'on'){
                    arr[i].className = '';
                    break;
                }
            }
            arr[index - 1].className = 'on';
        }
        function play() {
            timer = setTimeout(function () {
                next.onclick();
                play();
            }, 2000);
        }
        function stop() {
            clearTimeout(timer);
        }
        next.onclick = function () {
            if (animated) {
                return;
            }
            if (index == len) {
                index = 1;
            }
            else {
                index += 1;
            }
            animate(a);
            showButton();
        }
        prev.onclick = function () {
            if (animated) {
                return;
            }
            if (index == 1) {
                index = len;
            }
            else {
                index -= 1;
            }
            animate(-a);
            showButton();
        }
        for (var i = 0; i < arr.length; i++) {
            arr[i].onmouseover = function () {
                if (animated) {
                    return;
                }
                if(this.className == 'on') {
                    return;
                }
                var myIndex = parseInt(this.getAttribute('index'));
                var offset = a * (myIndex - index);
                animate(offset);
                index = myIndex;
                showButton();
            }
        }
        container.onmouseover = stop;
        container.onmouseout = play;
        play();
    }
}
