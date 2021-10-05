

<section id="PlotSection" class="visible">
<h1>{titleUnit}</h1>
<label>Days</label>
<input type=number bind:value={$days} min=0 max=300>
<label for="myCheck">Filter (median 1 hour):</label> 
<input type="checkbox" id="myCheck" on:click={setFilter}>
<div id="chart">
<iframe width="85%" height="260" style="border: 1px solid #cccccc;" src="  https://thingspeak.com/channels/{channel}/charts/{fieldTemperature}?api_key={API_key}&width=auto&heigth=auto&bgcolor=%23ffffff&color=%23d62020&days={$days}&dynamic={dynamic}&yaxismax=50&yaxismin=10&{$filter}&title={titleTemperature}&type=spline&update=1&yaxis=%C2%B0C"></iframe>
<iframe width="85%" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/{channel}/charts/{fieldpH}?api_key={API_key}&width=auto&heigth=auto&bgcolor=%23ffffff&color=%23d62020&days={$days}&dynamic={dynamic}&yaxismax=11&yaxismin=8&{$filter}&title={titlepH}&type=spline&update=1&yaxis=pH"></iframe>

</div>
</section>

<script>
	let channel=1319779;
	let API_key='Z536VL02THM6EAOX';
	let titleUnit = "Greenhouse.1 - RW3";
	let fieldpH = 2;
	let fieldTemperature = 1;
	let dynamic = false;
	let titlepH = titleUnit+" - "+"pH";
	let titleTemperature = titleUnit+" - "+"Temperature";
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