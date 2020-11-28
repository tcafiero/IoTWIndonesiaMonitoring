<script>
import {bottomMenu} from './stores';

</script>
<div id="BottomMenu" class="appBottomMenu">
	{#each $bottomMenu as item}
	<a  id="BMEitem" >
		<div class="col" on:click={item.function} >
			<i class={item.icon}></i >
			<strong>{item.description}</strong>
		</div>
	</a>
	{/each}	
</div>
