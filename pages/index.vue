<template>
	<div class="page mb-4">
		<Html lang="ru">
			<Head>
				<Title>Baltic Way</Title>
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
		<Carousel />
		<div class="content">
			<div class="text-center mt-2">
				<h1>САНКТ-ПЕТЕРБУРГ - ФИНЛЯНДИЯ</h1>
				<p>
					<strong>
						Комфортабельные автобусы, микроавтобусы и легковой
						автотранспорт VIP класса</strong
					>
				</p>
			</div>
			<p>
				Отправление автобуса, микроавтобуса от станции метро Черная
				Речка утром и вечером. Время отправления согласовывается с
				оператором.
			</p>
			<p>
				Легковой автомобиль VIP класса подаётся к парадной каждого
				клиента.
			</p>
			<section>
				<h4 class="text-center">Расписание и цены</h4>
				<PriceItems :prices="pricesSpliced" />
				<div class="text-center">
					<a class="btn btn-danger mb-5" href="/prices" role="button">
						Показать все
					</a>
				</div>
			</section>
			<!-- <h4 class="text-center">Расписание и цены</h4>
			<table class="table table-striped">
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Санкт-Петербург - Хельсинки</td>
						<td>утро/вечер</td>
						<td>5 тысяч</td>
					</tr>
				</tbody>
			</table> -->
		</div>
	</div>
</template>
<script setup>
import prices from '@/data/prices.json'
const pricesSpliced = [...prices].splice(0, 4)
</script>
