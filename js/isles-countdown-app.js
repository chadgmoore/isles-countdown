$(document).ready(function() {
	var seasonStartDate="2015-10-9";
	var configDate=new Date(seasonStartDate);

	var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
	var firstDate = new Date(); // Todays date
	var secondDate = new Date(seasonStartDate);

	var diffDays = Math.ceil(Math.abs(firstDate.getTime() - secondDate.getTime())/(oneDay));

	// alert(diffDays);
	$('.dayTarget').empty();
	$('.dayTarget').append(diffDays)


});