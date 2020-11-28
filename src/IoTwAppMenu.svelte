<script>

//import jQuery from "jquery"
export let menu = [];
//import {func} from './stores';
//alert("Hello world");

//function handleChoice(fun) {
	//alert(fun);
	//$func=fun;
	//jQuery("#menu").fadeToggle("6000");
	//jQuery(".item").fadeToggle("6000");
//	}

</script>
<ul id="Menu" class="listview image-listview mb-2">
	{#each menu as item}
	 <li id="MenuItem" class="visible">
		<!-- <a id="id2" on:click={handleChoice(item.function)} class="item"> -->
		<a id="id2" on:click={item.function} class="item">
			<div class="icon-box bg-primary">
				<i class="icon ion-ios-apps"></i>
			</div>
			<div class="in">
				{item.description}
			</div>
		</a>
	</li>
	{/each}
</ul>
