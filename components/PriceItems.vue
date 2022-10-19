<template>
	<div class="page mb-5">
		<table class="table table-striped">
			<thead>
				<tr>
					<th scope="col">Рейс</th>
					<th scope="col">Дата</th>
					<th scope="col">Время отправления</th>
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
						{{ new Date().toLocaleDateString() }}
					</td>
					<td>
						{{ price.travel_time }}
					</td>
					<td>
						{{
							new Intl.NumberFormat('ru-RU', {
								maximumSignificantDigits: 2,
								style: 'currency',
								currency: 'RUB',
							}).format(price.cost)
						}}
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
