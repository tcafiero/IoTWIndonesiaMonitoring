<script>
import jQuery from "jquery"
import IoTwAppHeader from './IoTwAppHeader.svelte';
import IoTwAppBottomMenu from './IoTwAppBottomMenu.svelte';
import IoTwAppName from './IoTwAppName.svelte';
import IoTwAppFooter from './IoTwAppFooter.svelte';
import IoTwAppDevStatus from './IoTwAppDevStatus.svelte';
import PlotTemperature from './plotTemperature.svelte';
import PlotHumidity from './plotHumidity.svelte';
import PlotPAR from './plotPAR.svelte';
import {state} from './stores';
import {previousState} from './stores';
import {bottomMenu} from './stores';
import {id} from './stores';
import {battery} from './stores';
import {connection} from './stores';
$state="PlotPAR";
$connection=undefined;
$id="Not connected";
$battery="unknown";

$bottomMenu = [
{description: "Light", icon: "icon ion-ios-exit", function: function () {
	$state="PlotPAR";
	}},
{description: "Temperature", icon: "icon ion-ios-exit", function: function () {
	$state="PlotTemperature";
	}},
{description: "Humidity", icon: "icon ion-ios-exit", function: function () {
	$state="PlotHumidity";
	}}
];

sessionStorage.serialno = "log";

export function goBack() {
	alert("goBack")
	$state=$previousState;
	}

function closeWindow() {}
function readData() {}
function download() {}


</script>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Ruuvi Data Logger Manager</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Ruuvi Data Logger Manager" />
    <meta name="keywords" content="bootstrap, mobile template, cordova, phonegap, mobile, html, responsive" />
    <link rel="apple-touch-icon" sizes="180x180" href="assets/img/Cloud.png" />
    <link rel="icon" type="image/png" href="assets/img/favicon.png" sizes="32x32" />
    <link rel="shortcut icon" href="assets/img/favicon.png" />

	<!-- CODELAB: Add link rel manifest -->
	<link rel="manifest" href="manifest.json" />
</head>
<body>
<IoTwAppHeader class="visible"/>
<div id="appCapsule">
	<section id="MenuSection" class="visible">
		<div>
			   {#if $state === "PlotTemperature"}
				<PlotTemperature />
			   {:else if $state === 'PlotHumidity'}
				<PlotHumidity />
			   {:else if $state === 'PlotPAR'}
				<PlotPAR />
				{:else}
				<div>Questionable choice.</div>
			{/if}
			<IoTwAppFooter />
		</div>
	</section>
</div>
<IoTwAppBottomMenu />
</body>


