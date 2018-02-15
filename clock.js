

   
    function timer()
    {		var time=new Date();
    		var minute=time.getMinutes();
    		var second=time.getSeconds();
    		 	
    		 var hour=time.getHours();
             var day=time.getDay();
		  	
            //var d=min.style.transform="rotate("+parseFloat($scope.minute)*6+90+"deg)";

            //alert(d);
    		//tt=d.substr(7,2);
    		//gg=d.replace(/[^0-9]/g,'');
    		//alert(parseFloat(gg)+1);
    		//$scope.setter($scope.second)
    		 // setSnterval(function(){

    		 	z=parseFloat(minute)*5.89;
    		 	x=parseFloat(hour)*parseFloat(30);
    		 	s=parseFloat(second)*5.89;
    		 	b=s+90;
    		 	v=x+90;
    		 	var y=z+90;
                m=minute/30;

    		 	var res={"y":y,"v":v,"b":b,"d":day,"m":m};
                postMessage(res);


              

              setTimeout("timer()",1000);
             // },1000);
    }

    timer();

