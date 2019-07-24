document.addEventListener('DOMContentLoaded', function(){


	let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


	setInterval(function(){

	let time = new Date();

	let hour = time.getHours();
	let min  = time.getMinutes();
	let sec  = time.getSeconds();

	let date  = time.getDate();
	let month = monthNames[time.getMonth()];


	let year  = time.getFullYear();

	// am pm set
	if(hour>=12 && hour<=24){
		am_pm = 'pm'
	}else {
		am_pm ='am';
	}


	//12 hour time format
	if(hour>12){
		hour = hour - 12;
	}else if (hour == 0) {
		hour = 12
	}

	d_clock.innerText = hour+' : '+ min+' : '+ sec;
	ampm.innerText = am_pm

	d_date.innerText  = date+ ' '+month+' '+ year;

},1000);
});






