<template>
	<div class="page mb-5">
		<nav aria-label="breadcrumb">
			<ol class="breadcrumb">
				<li class="breadcrumb-item">
					<NuxtLink to="/">Главная</NuxtLink>
				</li>
				<li class="breadcrumb-item active" aria-current="page">
					{{ title }}
				</li>
			</ol>
		</nav>
		<h1>{{ title }}</h1>
		<!-- <form>
			<div class="row">
				<div class="form-outline col-2">
					<label for="departureCity">Город прибытия</label>
					<select
						class="form-select"
						id="departureCity"
						@change="filterPrices"
						v-model="departureCity"
					>
						<option selected value="all">Все</option>
						<option value="sankt-peterburg">Санкт-Петербург</option>
						<option value="helsinki">Хельсинки</option>
					</select>
				</div>
			</div>
		</form> -->
		<PriceItems :prices="prices" v-if="prices" />
	</div>
</template>
<script>
import axios from 'axios'
export default {
	name: 'Prices',
	data: () => ({
		title: 'Маршруты',
		prices: [],
		departureCity: null,
	}),
	async created() {
		try {
			const result = await axios('/data/prices.json', {
				method: 'GET',
				headers: {
					Accept: 'application/json',
				},
			})
			this.prices = result.data
		} catch (err) {
			console.log(err.message)
		}
	},
	methods: {
		async filterPrices() {
			const prices = this.prices
			if (this.departureCity && this.departureCity !== 'all') {
				this.prices = await prices.find(
					(item) => item.departure_city == this.departureCity
				)
				console.log(this.prices)
			} else {
				this.prices = prices
			}
			//alert(this.departureCity)
		},
	},
	head: () => ({
		title: 'Маршруты | Baltic Way',
		meta: [
			{
				hid: 'description',
				name: 'description',
				content: 'Автобусные поездки в любые города Финляндии',
			},
		],
	}),
}
</script>
