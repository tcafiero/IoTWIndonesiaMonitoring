<script>
import jQuery from "jquery"
import IoTwAppHeader from './IoTwAppHeader.svelte';
import IoTwAppBottomMenu from './IoTwAppBottomMenu.svelte';
import IoTwAppName from './IoTwAppName.svelte';
import IoTwAppFooter from './IoTwAppFooter.svelte';
import IoTwAppDevStatus from './IoTwAppDevStatus.svelte';
import PlotUnit_2 from './plotUnit_2.svelte';
import PlotUnit_3 from './plotUnit_3.svelte';
import PlotUnit_1 from './plotUnit_1.svelte';
import {state} from './stores';
import {previousState} from './stores';
import {bottomMenu} from './stores';
import {id} from './stores';
import {battery} from './stores';
import {connection} from './stores';
import {days} from './stores';
import {filter} from './stores';
$state="PlotUnit_1";
$connection=undefined;
$id="Not connected";
$battery="unknown";

$bottomMenu = [
{description: "Greenhouse.1", icon: "icon ion-ios-exit", function: function () {
	$state="PlotUnit_1";
	}},
{description: "RW3", icon: "icon ion-ios-exit", function: function () {
	$state="PlotUnit_2";
	}},
{description: "RW4", icon: "icon ion-ios-exit", function: function () {
	$state="PlotUnit_3";
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
    <title>Bestico IoT Sensors Management System</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Bestico IoT Sensors Monitoring" />
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
			   {#if $state === "PlotUnit_2"}
				<PlotUnit_2 />
			   {:else if $state === 'PlotUnit_3'}
				<PlotUnit_3 />
			   {:else if $state === 'PlotUnit_1'}
				<PlotUnit_1 />
				{:else}
				<div>Questionable choice.</div>
			{/if}
			<IoTwAppFooter />
		</div>
	</section>
</div>
<IoTwAppBottomMenu />
</body>


