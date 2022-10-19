<template>
	<div class="page mb-4">
		<Html lang="ru">
			<Head>
				<Title>{{ title }} | Baltic Way </Title>
				<Meta
					name="description"
					content="Автобусные поездки в любые города Финляндии"
				/>
				<Link
					rel="preload"
					href="@/assets/img/sad-face-2692.svg"
					as="script"
				/>
			</Head>
		</Html>
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
		<div class="content">
			<h1>{{ title }}</h1>
			<div class="row">
				<div class="col-md-6">
					<img
						src="@/assets/img/maxresdefault.jpg"
						style="max-width: 100%"
						alt=""
					/>
				</div>
				<div class="col-md-6">
					<p>
						Помимо ежедневных рейсов в Финляндию и нашего
						постоянного расписания, мы предлагаем воспользоваться
						нашими автобусами для поездок в любые другие города
						Финляндии, Эстонии, Литвы и Европы.
					</p>
				</div>
			</div>
			<section class="mt-5">
				<h4 class="text-center">Расписание и цены</h4>
				<PriceItems :prices="pricesSpliced" />
				<div class="text-center">
					<a class="btn btn-danger mb-5" href="/prices" role="button">
						Показать все
					</a>
				</div>
			</section>
		</div>
	</div>
</template>
<script setup>
import prices from '@/data/prices.json'
const title = 'Автопарк'
const pricesSpliced = [...prices].splice(0, 4)
</script>
