<template>
	<div class="page mb-5">
		<table class="table table-striped">
			<thead>
				<tr>
					<th scope="col">Рейс</th>
					<th scope="col">Время отправления и прибытия</th>
					<th scope="col">Время в пути</th>
					<th scope="col">Стоимость</th>
					<th scope="col">Мест</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="price in prices" :key="price.slug">
					<th>
						<NuxtLink :to="'/prices/' + price.slug">
							{{ price.departure_city }} -
							{{ price.arrival_city }}
						</NuxtLink>
					</th>
					<td>
						{{ price.departure_time }} - {{ price.arrival_time }}
					</td>
					<td>
						{{ price.travel_time }}
					</td>
					<td>
						{{ price.cost }}
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
