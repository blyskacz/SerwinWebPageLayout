// JavaScript Document


// zmiana obrazków z bestseller

bestseller=['images/best1.jpg','images/best2.jpg', 'images/best3.jpg', 'images/best5.jpg', 'images/best5.jpg'];
i=0;
function f()
{
	if(i>=bestseller.length)
		{ 
			i=0; 
		}
	document.images['best'].src=bestseller[i++];
	setTimeout(f, 2000);
}

onload=f;