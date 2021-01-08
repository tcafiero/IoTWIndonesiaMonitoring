

<section id="PlotSection" class="visible">
<h1>{titleUnit}</h1>
<label>Days</label>
<input type=number bind:value={$days} min=0 max=100>
<label for="myCheck">Filter (median 10 minutes):</label> 
<input type="checkbox" id="myCheck" on:click={setFilter}>
<div id="chart">
<iframe width="85%" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/{channel}/charts/{chartPAR}?width=auto&heigth=auto&bgcolor=%23ffffff&color=%23d62020&days={$days}&dynamic=false&max=2000&min=0&{$filter}&title={titlePAR}&type=spline&update=1&xaxis=hh%3Amm&yaxis=%C2%B0C"></iframe>
<iframe width="85%" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/{channel}/charts/{chartTemp}?width=auto&heigth=auto&bgcolor=%23ffffff&color=%23d62020&days={$days}&dynamic=false&max=50&min=10&{$filter}&title={titleTemp}&type=spline&update=1&xaxis=hh%3Amm&yaxis=%C2%B0C"></iframe>
<iframe width="85%" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/{channel}/charts/{chartHum}?width=auto&heigth=auto&bgcolor=%23ffffff&color=%230033cc&days={$days}&dynamic=false&max=100&min=10&{$filter}&title={titleHum}&type=spline&update=1&xaxis=hh%3Amm&yaxis=%25"></iframe>
</div>
</section>

<script>
	let channel=167475;
	let titleUnit = "Unit 1";
	let chartPAR = 4;
	let chartTemp = 1;
	let chartHum = 2;
	let titlePAR = titleUnit+" - "+"PAR";
	let titleTemp = titleUnit+" - "+"Temperature";
	let titleHum = titleUnit+" - "+"Humidity";
	import {days} from './stores';
	import {filter} from './stores';

function setFilter() {

// Get the checkbox

  // If the checkbox is checked, display the output text
  if (document.getElementById("myCheck").checked == true){
    $filter = "median=10";
  } else {
    $filter = " ";
  }
}
</script>