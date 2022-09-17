<template>
	<div class="page mb-5">
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
				<tr v-for="price in prices" :key="price.id">
					<th scope="row">{{ price.id }}</th>
					<td>{{ price.date }}</td>
					<td>
						<NuxtLink :to="'/prices/' + price.id">
							{{ price.city }}
						</NuxtLink>
					</td>
					<td>{{ price.seats }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script setup>
const props = defineProps({
	prices: Array,
})
</script>
