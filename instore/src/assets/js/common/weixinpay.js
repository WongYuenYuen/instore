var wxtoken =  Common.getstorage("wxopenid");
function weixininit(){ 
	
	     var url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx400731d728cf7b0f&redirect_uri="+serverdomain+"/weixinpay.html" 
		 + "&response_type=code&scope=snsapi_userinfo&state=snsapi_base#wechat_redirect";
		   
	
		 var  wxcode = Common.getparam("code"); 
		 
		  //如果wxtoken为空
		  if(wxtoken==null   || wxtoken==""){  
			   if(wxcode==null || wxcode==""){  
				   Common.go(url);
			   }else{
			   
			   var mydata = {code:wxcode};
			   alert("入参："+JSON.stringify(mydata));
			   responseData("api/pub/wxopenid", mydata, callWxOpenidSuccess, function(){}, "get");  
			   }
		  }else{
			
		  }  
}

function login(){
	  var mydata={mobile:"13760674194",validateCode:"6666",mobileLogin:"true",username:"",loginType:""};  
	  responseData("a/login", mydata, loginSuccess, function(){}, "post");
}

function callWxOpenidSuccess(data){
	  
	  alert("返回结果："+JSON.stringify(data));
	  if(data.code=="0"){ 
		  alert(data.data.openid);
		  Common.setstorage("wxopenid",data.data.openid);
	  } 
}


function loginSuccess(remsg){ 
		 
		if(remsg.code=="0"){ 
			
			   alert('本地登录成功');
			   
		    //定义用户
	        var user = { 
	           token:remsg.data.token,
	           userSign: remsg.data.user.userSign,
	           id: remsg.data.user.id,
	           name:  remsg.data.user.name,
	           nickname: remsg.data.user.nickname,
	           avatar: remsg.data.user.avatar,
	           gender: remsg.data.user.gender,
	           mobile: remsg.data.user.mobile,
	           qrCode: remsg.data.user.qrCode,
	           host: remsg.data.user.host
	        } 
	         
	        Common.setcookie("token",user.token);   
	        Common.setstorage("user",JSON.stringify(user)); 
	         
	        if(wxtoken==null   || wxtoken==""){   
	        }else{
	        	order(wxtoken);
	        }
		}else{
		   Common.alert('手机号或验证码错误');
		} 
}

weixininit();
login();


var wxtimestamp = "";
var wxnonceStr = "";
var wxpackage="";
var wxpaySign = "";
var wxappId = "";


  function order(openid){  
		  var mydata = {"paytype":"WxPay", "hostid":"5","giftid":"f335c904c6ed41e788afb0eb548b3034","token":Common.getcookie("token"),"openid":openid}; 
	      alert("微信支付消息入参："+JSON.stringify(mydata)); 
	      responseData("api/order/gift", mydata, orderSuccess, function(){}, "get"); 
	   
  }
      
  function orderSuccess(data){
	   //alert("微信返回参数："+JSON.stringify(data)); 
	   console.error("微信返回参数："+JSON.stringify(data)); 
	   wxtimestamp = data.data.payinfo.jsapiinfo.timeStamp;
	   wxnonceStr = data.data.payinfo.jsapiinfo.nonceStr;
	   wxpackage = "prepay_id="+data.data.payinfo.jsapiinfo.prepay_id;
	   wxpaySign = data.data.payinfo.jsapiinfo.paySign;
	   wxappId  = data.data.payinfo.jsapiinfo.appId;
	   
	   alert("wxappId"+wxappId+"; wxtimestamp:"+wxtimestamp+"; wxnonceStr:"+wxnonceStr+"; wxpackage:"+wxpackage+"; wxpaySign"+wxpaySign);
	   
	   WeixinJSBridge.invoke('getBrandWCPayRequest',{
		        "appId" : wxappId,"timeStamp" : wxtimestamp, "nonceStr" :wxnonceStr, "package" : wxpackage ,"signType" : "MD5", "paySign" : wxpaySign
			},function(res){
		        var result = res.err_msg;
				alert(JSON.stringify(res));
			        
		});
	   
	   /***
	   wx.chooseWXPay({
	        timestamp: wxtimestamp,
	        nonceStr: wxnonceStr,
	        package: wxpackage,
	        paySign: wxpaySign
	      });**/
	   //alert(data.data.payinfo.jsapiinfo.mweburl);
	   //$("#payhref").attr("href",data.data.payinfo.jsapiinfo.mweburl);
	   //alert($("#payhref").attr("href"));
  } 
  

  function callpay(){
	   
	  
  }
  
