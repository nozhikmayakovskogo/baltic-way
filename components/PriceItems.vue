<template>
	<section :prices="prices">
		<h4 class="text-center">Наличие мест</h4>
		<table class="table table-striped">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Дата</th>
					<th scope="col">Населенный пункт</th>
					<th scope="col">Кол-во мест</th>
				</tr>
			</thead>
			<tbody>
				<tr
					v-for="price in prices"
					:key="price.id"
					@click="goTo('/prices/' + price.id)"
				>
					<th scope="row">{{ price.id }}</th>
					<td>{{ price.date }}</td>
					<td>{{ price.city }}</td>
					<td>{{ price.seats }}</td>
				</tr>
			</tbody>
		</table>
		<div class="text-center">
			<a class="btn btn-danger mb-5" href="/prices" role="button"
				>Показать все</a
			>
		</div>
	</section>
</template>
<script setup>
const props = defineProps({
	prices: Array,
})
</script>
