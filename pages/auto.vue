<template>
	<div class="page mb-5">
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
					Помимо ежедневных рейсов в Финляндию и нашего постоянного
					расписания, мы предлагаем воспользоваться нашими автобусами
					для поездок в любые другие города Финляндии, Эстонии, Литвы
					и Европы.
				</p>
			</div>
		</div>
	</div>
</template>
<script setup>
const title = 'Автопарк'
</script>
