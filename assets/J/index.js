(function(){
'use strict';

var cb=document.createElement('div');
cb.className='block';
cb.style.cursor='pointer';
cb.title='说点什么吧？！';
cb.innerHTML='<img class="logo" src="assets/I/180/04.jpg"><header>guest</header><article><p>说点什么吧，鬼话酒话神马的都可以！</p></article>';
cb.addEventListener('click',click);
function click(){
	cb.parentNode.removeChild(cb);
	document.querySelector('body').innerHTML+='<div class="ds-thread"></div>';
	var duoshuoQuery =window.duoshuoQuery= {short_name:"shencai"};
	(function() {
		var ds = document.createElement('script');
		ds.type = 'text/javascript';ds.async = true;
		ds.src = 'http://static.duoshuo.com/embed.js';
		ds.charset = 'UTF-8';
		(document.getElementsByTagName('head')[0] 
		|| document.getElementsByTagName('body')[0]).appendChild(ds);
	})();
}



document.querySelector('#divContent').appendChild(cb);

})();