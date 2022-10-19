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
			<h3>Пассажирские перевозки в Финляндию из Петербурга</h3>
			<p>
				Компания Baltic Way занимается пассажирскими перевозками в
				Финляндию. Из центра Петербурга и Хельсинки отправляются наши
				микроавтобусы, оборудованные всем необходимым, чтобы сделать
				вашу поездку комфортной в любое время года. Возможны
				индивидуальные туры, отвезем группы в любой город Финляндии.
			</p>
			<p>Дополнительную информацию вы можете получить по телефонам:</p>
			<p><b>в Санкт-Петербурге:</b></p>
			<p>+7(906)273-15-15</p>
			<p>
				Либо по e-mail: fin-lux.comfort@yandex.ru (администраторы
				отвечают на письма в рабочие часы). Заявки по телефону
				принимаются с 10 до 23, забронировать билеты на сайте можно
				круглосуточно.
			</p>
		</div>
	</div>
</template>
<script setup>
const title = 'Контактная информация'
</script>
