<template>
	<div class="page mb-5">
		<Html lang="ru">
			<Head>
				<Title>
					«Baltic Way» - Автобусные поездки в любые города Финляндии
				</Title>
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
					Санкт-Петербург - Хельсинки
				</li>
			</ol>
		</nav>
		<h1>Санкт-Петербург - Хельсинки</h1>
		<PriceItems :prices="prices" />
	</div>
</template>
<script setup>
import prices from '@/data/prices.json'
</script>
