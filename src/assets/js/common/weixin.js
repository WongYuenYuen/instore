 var wxsharetitle = "映店看车"; // 分享标题
 var wxappdesc = "邀请您一起来看直播～"; // 分享描述
 var wxlink =  window.location.href+"&shareshopid="+Common.getstorage("shareshopid");  // 分享链接 
 var wxshareImgUrl = "http://m.instore.com.cn/img/logo.png"; // 分享图标 
 
 /***
   $.ajax({
		type:"post",
		dataType:"json",
		url:"http://www.gzlnkjgs.com/queryWxShareSign.do",
		data:{shareurl:window.location.href},
		success:function(response){  
			wx.config(  { 
			    debug: false , // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
			    appId: response.data.appid, // 必填，公众号的唯一标识
			    timestamp:response.data.timeStamp, // 必填，生成签名的时间戳
			    nonceStr:response.data.noncestr, // 必填，生成签名的随机串
			    signature:response.data.signature,// 必填，签名，见附录1
			    jsApiList: [  'onMenuShareTimeline',
			                'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
			}); 
		}
	});    
      **/
  
	   $.ajax({
			type:"get",
			dataType:"json",
			url:"http://live.instore.com.cn/live/api/pub/wxsharesign",
			data:{"shareurl":window.location.href},
			success:function(response){ 
				
			    console.error("微信签名："+JSON.stringify(response)); 
				 //alert( "appId: "+response.data.appid+ "; timestamp: "+ response.data.timestamp+  "; nonceStr:"+ response.data.noncestr+  "; signature:"+response.data.signature);
				wx.config(  { 
				    debug: false , // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
				    appId: response.data.appid, // 必填，公众号的唯一标识
				    timestamp:response.data.timestamp, // 必填，生成签名的时间戳
				    nonceStr:response.data.noncestr, // 必填，生成签名的随机串
				    signature:response.data.signature,// 必填，签名，见附录1
				    jsApiList: [  'onMenuShareTimeline',
				                'onMenuShareAppMessage',
				                'chooseWXPay'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
				}); 
			}
		}); 
    
   
	 wx.ready(function () {
		
		wx.onMenuShareTimeline({
		    title: wxsharetitle, // 分享标题
		    link: wxlink, // 分享链接
		    imgUrl: wxshareImgUrl, // 分享图标
		    success: function () { 
		        // 用户确认分享后执行的回调函数 
		      	successShare();
		    },
		    cancel: function () { 
		        // 用户取消分享后执行的回调函数
		    }
		});
		  
		  
	    wx.onMenuShareAppMessage({
		    title: wxsharetitle, // 分享标题
		    desc: wxappdesc, // 分享描述
		    link: wxlink, // 分享链接
		    imgUrl: wxshareImgUrl, // 分享图标
		    type: '', // 分享类型,music、video或link，不填默认为link
		    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		    success: function () { 
		        // 用户确认分享后执行的回调函数 
		    	successShare();
		    },
		    cancel: function () { 
		        // 用户取消分享后执行的回调函数
		    }
		});   
	 });
	
	

