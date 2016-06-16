// JavaScript Document

function timeDate() 
{			
	if (!document.layers&&!document.getElementById&&!document.all)
		return			
	var hour, minutes, seconds, day, countDay, month, today, year, monthText, dayText;
	today = new Date();
	hour=today.getHours();
	minutes=today.getMinutes();
	seconds=today.getSeconds();
	year=today.getYear();
	day=today.getDate();
	countDay=today.getDay();
	if (countDay==0) 
	{
		dayText="Niedziela"
	}
	if (countDay==1) 
	{
		dayText="Poniedziałek"
	}
	if (countDay==2) 
	{
		dayText="Wtorek"
	}
	if (countDay==3) 
	{
		dayText="Środa"
	}
	if (countDay==4) 
	{
		dayText="Czwartek"
	}
	if (countDay==5) 
	{
		dayText="Piątek"
	}
	if (countDay==6) 
	{
		dayText="Sobota"
	}
	month=today.getMonth()+1;
	if (month==1) 
	{
		monthText="stycznia"
	}
	if (month==2) 
	{
		monthText="lutego"
	}
	if (month==3) 
	{
		monthText="marca"
	}
	if (month==4) 
	{
		monthText="kwietnia"
	}
	if (month==5) 
	{
		monthText="maja"
	}
	if (month==6) 
	{
		monthText="czerwca"
	}
	if (month==7) 
	{
		monthText="lipca"
	}
	if (month==8) 
	{
		monthText="sierpnia"
	}
	if (month==9) 
	{
		monthText="września"
	}
	if (month==10) 
	{
		monthText="października"
	}
	if (month==11) 
	{
		monthText="listopada"
	}
	if (month==12) 
	{
		monthText="grudnia"
	}
	if ((year>=00) && (year<=1900)) 
	{
		year=1900+year;
	}
	if (month < 10) 
	{
		month="0"+month;
	}
	if (day < 10) 
	{
		day="0"+day;
	}
	if (hour < 10) 
	{
		hour="0"+hour;
	}
	if (minutes < 10) 
	{
		minutes="0"+minutes;
	}
	if (seconds < 10) 
	{
		seconds="0"+seconds;
	}
	fullTime=dayText + ", " + day + " " + monthText + " "+year+"<br>" + hour+":"+minutes+":"+seconds;
	if (document.getElementById)
	{
			document.getElementById("time").innerHTML=fullTime
	}
	else if (document.layers)
	{
		document.layers.Data.document.write(fullTime)
	}
	else if (document.all)
		Data.innerHTML=fullTime
	setTimeout("timeDate()",500)
}

	