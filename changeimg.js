// zmiana obrazków z promocja

promoimg=['images/promo1.jpg','images/promo2.jpg', 'images/promo3.jpg'];
bestimg=['images/best1.jpg','images/best2.jpg', 'images/best3.jpg', 'images/best5.jpg', 'images/best5.jpg'];
newimg=['images/new1.jpg','images/new2.jpg', 'images/new3.jpg'];

i=0; // promo
j=0; // bestimg
k=0; //new
function zmianaobrazka()
{
	if(i>=promoimg.length)
	{ 
		i=0; 
	}
	if(j>=bestimg.length)
	{ 
		j=0; 
	}
	if(k>=newimg.length)
	{ 
		k=0; 
	}
	document.images['promo'].src=promoimg[i++];
	document.images['best'].src=bestimg[j++];
	document.images['new'].src=newimg[k++];
	setTimeout(zmianaobrazka, 2000);
}

onload=zmianaobrazka;

