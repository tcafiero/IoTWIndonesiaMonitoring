

<section id="PlotSection" class="visible">
<h1>{titleUnit}</h1>
<label>Days</label>
<input type=number bind:value={$days} min=0 max=300>
<label for="myCheck">Filter (median 1 hour):</label> 
<input type="checkbox" id="myCheck" on:click={setFilter}>
<div id="chart">
<!-- <iframe width="85%" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/{channel}/charts/{chartPAR}?api_key={API_key}&width=auto&heigth=auto&bgcolor=%23ffffff&color=%23d62020&days={$days}&dynamic={dynamic}&yaxismax=2000&yaxismin=0&{$filter}&title={titlePAR}&type=spline&update=1&yaxis=PPFD"></iframe> -->
<iframe width="85%" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/{channel}/charts/{chartPAR}?api_key={API_key}&width=auto&heigth=auto&bgcolor=%23ffffff&color=%23d62020&days={$days}&dynamic={dynamic}&yaxismax=2000&yaxismin=0&title={titlePAR}&type=spline&update=1&yaxis=PPFD"></iframe>
<iframe width="85%" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/{channel}/charts/{chartTemp}?api_key={API_key}&width=auto&heigth=auto&bgcolor=%23ffffff&color=%23d62020&days={$days}&dynamic={dynamic}&yaxismax=50&yaxismin=10&{$filter}&title={titleTemp}&type=spline&update=1&yaxis=%C2%B0C"></iframe>
<iframe width="85%" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/{channel}/charts/{chartHum}?api_key={API_key}&width=auto&heigth=auto&bgcolor=%23ffffff&color=%230033cc&days={$days}&dynamic={dynamic}&yaxismax=100&yaxismin=0&{$filter}&title={titleHum}&type=spline&update=1&yaxis=%25"></iframe>
</div>
</section>

<script>
	let channel=1109326;
	let API_key='T0ITZUOTU0397ZLT';
	let titleUnit = "Bestico Greenhouse.1";
	let chartPAR = 3;
	let chartTemp = 1;
	let chartHum = 2;
	let dynamic = false;
	let titlePAR = titleUnit+" - "+"PAR";
	let titleTemp = titleUnit+" - "+"Temperature";
	let titleHum = titleUnit+" - "+"RH";
	import {days} from './stores';
	import {filter} from './stores';

function setFilter() {

// Get the checkbox

  // If the checkbox is checked, display the output text
  if (document.getElementById("myCheck").checked == true){
    $filter = "median=60";
  } else {
    $filter = " ";
  }
}
</script>