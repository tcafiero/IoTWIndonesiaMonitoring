<script>
import {state} from './stores';
import {previousState} from './stores';
import {bottomMenu} from './stores';
let data="";
let spinner="invisible";

function command(str) {
    return new Promise(resolve => {
    Puck.write(str, d => resolve(d));
  });
}

function download() {
  var pom = document.createElement('a');
  pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(sessionStorage.logdata));
  pom.setAttribute('download', 'log_' + sessionStorage.serialno + '.csv');
  pom.style.display = 'none';
  document.body.appendChild(pom);
  pom.click();
  document.body.removeChild(pom);
  }

async function readData()
{
	data="Please wait, Get Data phase.";
	spinner="visible";
	sessionStorage.logdata = await command('getData();\n');
	data=sessionStorage.logdata;
	spinner="invisible"
	$bottomMenu = [
		{description: "Back", icon: "icon ion-ios-arrow-round-back", function: function () {
			$state="IoTwAppStateB";
			$previousState="IoTwAppStateD";
		}},
		{description: "Save", icon: "icon ion-ios-cloud-upload", function: download}
];	
}

$bottomMenu = [
	{description: "Back", icon: "icon ion-ios-arrow-round-back", function: function () {
		$state="IoTwAppStateB";
		$previousState="IoTwAppStateD";
	}},
	{description: "Read", icon: "icon ion-md-download", function: readData}
	];

</script>

<section id="GetDataSection" class="visible">
<div style="text-align:center"  >
 <textarea rows="8" cols="40" name="text" id="text" placeholder="(empty)" >{data}</textarea>
 <div id="Spinner" class={spinner}>
	<div class="d-flex justify-content-center">
		<div class="spinner-border text-primary" role="status" >
		<span class="sr-only">Loading...</span>
		</div>
	</div> 
 </div>
</div>
</section>
