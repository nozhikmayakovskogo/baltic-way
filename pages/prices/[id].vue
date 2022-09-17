<template>
	<div class="page mb-5">
		<nav aria-label="breadcrumb">
			<ol class="breadcrumb">
				<li class="breadcrumb-item">
					<NuxtLink to="/">Главная</NuxtLink>
				</li>
				<li class="breadcrumb-item active" aria-current="page">
					{{ price?.city }}
				</li>
			</ol>
		</nav>
		<div class="row" v-if="price">
			<div class="col">
				<h1>{{ price?.city }}</h1>
			</div>
			<div class="col">2</div>
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
<script setup>
import prices from '@/data/prices.json'
//import {} from '#app'

const route = useRoute()
const id = route.params.id
const price = prices.find((item) => item.id == id)
useMeta({
	title: price ? price.city : '404 - Price not found',
	meta: [
		{
			name: 'viewport',
			content: 'width=device-width',
		},
	],
})
</script>
