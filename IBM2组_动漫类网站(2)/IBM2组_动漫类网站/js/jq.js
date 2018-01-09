
var i = 0;
        var timer;
        $(function() {
        	
        	function show() {
                $(".pic").eq(i).fadeIn(300).siblings().fadeOut(300); //fadeIn有渐变的效果
                $(".lg").eq(i).addClass("one").siblings().removeClass("one");

            };
            function showTime(){
                timer=setInterval(function() {
                
                if (i == 8) {
                    i = 0;
                }
                show();
                i++;
            }, 2000);
                };
                
            $(".pic").eq(0).show().siblings().hide();
             showTime();
            
           $(".lg").hover(function(){
               i=$(this).index();
               show();
               clearInterval(timer);//清除轮播
           },function(){
               showTime();
           });
            
            $(".prev").click(function(){
                clearInterval(timer);
                
                if(i==0){
                    i=8;
                }
                i--;
                show();
                showTime();
                
            });
            $(".next").click(function(){
                clearInterval(timer);
                i++;
                if(i==8){
                    i=0;
                }
                
                show();
                showTime();
                
            });

            
        });
//导航栏js

	var timeout  = 500;
	var closetimer = 0;
	var ddmenuitem   = 0;
	
	// open hidden layer
	function mopen(id)
	{	
		// cancel close timer
		mcancelclosetime();
	
		// close old layer
		if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
	
		// get new layer and show it
		ddmenuitem = document.getElementById(id);
		ddmenuitem.style.visibility = 'visible';
	
	}
	// close showed layer
	function mclose()
	{
		if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
	}
	
	// go close timer
	function mclosetime()
	{
		closetimer = window.setTimeout(mclose, timeout);
	}
	
	// cancel close timer
	function mcancelclosetime()
	{
		if(closetimer)
		{
			window.clearTimeout(closetimer);
			closetimer = null;
		}
	}
	
	// close layer when click-out
	document.onclick = mclose; 