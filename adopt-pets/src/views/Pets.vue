<template>
	<div class="pets">
		<h1>{{ animal.name }} ({{ $route.params.species }})</h1>
		<p>Age : {{ animal.age }} years old</p>
		<p>Breed: {{ animal.breed }}</p>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	export default{
		data(){
			return {
				animal:{}
			}
		},
		computed:{
			//same
			// cats(){
			// 	return this.$store.state.cats
			// }

			...mapState([
				'cats',
				'dogs'
			])
		},
		mounted(){
			const animal = this[this.$route.params.species][this.$route.params.id]
			this.animal = animal
		}
	}
</script>