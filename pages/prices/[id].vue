<template>
	<div class="page mb-5">
		<nav aria-label="breadcrumb" v-if="price">
			<ol class="breadcrumb">
				<li class="breadcrumb-item">
					<NuxtLink to="/">Главная</NuxtLink>
				</li>
				<li class="breadcrumb-item">
					<NuxtLink to="/prices">Маршруты</NuxtLink>
				</li>
				<li class="breadcrumb-item active" aria-current="page">
					{{ title }}
				</li>
			</ol>
		</nav>
		<div v-if="price">
			<div class="col">
				<h1>{{ title }}</h1>
			</div>
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
					<tr>
						<th>
							{{ price.departure_city }} -
							{{ price.arrival_city }}
						</th>
						<td>
							{{ price.departure_time }} -
							{{ price.arrival_time }}
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
			<p>В расписании указано местное время</p>
			<p>
				Cтоимость проезда от 2800 рублей, актуальную стоимость уточняйте
				по телефону +7 996-777-16-20
			</p>
			<p>
				Услуга доставки до адреса предоставляется за дополнительную
				плату. Пожалуйста, уточняйте стоимость услуги и маршрут
				следования у наших операторов.
			</p>

			<p>
				Без учёта прохождения границы. За задержки на границе компания
				ответственности не несёт.
			</p>
		</div>

		<NuxtLayout name="error" v-else>
			<template #header>
				<h1>404 Error</h1>
			</template>
			<template #message>
				<p>Price not found</p>
			</template>
			<p><img src="@/assets/img/sad-face-2692.svg" /></p>
			<template #button>
				<button class="btn btn-danger" @click="$router.push('/prices')">
					Назад
				</button>
			</template>
		</NuxtLayout>
	</div>
</template>
<script>
import axios from 'axios'
export default {
	name: 'Price',
	data: () => ({
		title: '',
		price: {},
	}),
	async mounted() {
		try {
			const result = await axios('/data/prices.json', {
				method: 'GET',
				headers: {
					Accept: 'application/json',
				},
			})
			//const route = useRoute()
			const slug = this.$route.params.id

			const prices = result.data
			this.price = prices.find((item) => item.slug == slug)

			this.title =
				!this.price ||
				this.price.departure_city + ' - ' + this.price.arrival_city
		} catch (err) {
			console.log(err.message)
		}
	},
	head() {
		return {
			title: this.title || 'Маршруты | Baltic Way',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Автобусные поездки в любые города Финляндии',
				},
			],
		}
	},
}
/* import prices from '@/data/prices.json'
const route = useRoute()
const slug = route.params.id
const price = prices.find((item) => item.slug == slug)

const title = !price || price.departure_city + ' - ' + price.arrival_city

 */
</script>
<!-- <script setup>
import prices from '@/data/prices.json'
const route = useRoute()
const slug = route.params.id
const price = prices.find((item) => item.slug == slug)

const title = !price || price.departure_city + ' - ' + price.arrival_city

useHead({
	title: price
		? price.departure_city + ' - ' + price.arrival_city
		: '404 - Price not found',
	meta: [
		{
			name: 'viewport',
			content: 'width=device-width',
		},
	],
})
</script> -->
