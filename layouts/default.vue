<template>
	<div>
		<main>
			<Header :links="menuLinks" />
			<div class="container">
				<slot />
			</div>
		</main>
		<Footer :links="menuLinks" />
	</div>
</template>
<script setup>
const menuLinks = [
	{ url: '/', name: 'Главная' },
	{ url: '/auto', name: 'Автопарк' },
	{ url: '/prices', name: 'Маршруты/Цены' },
	{ url: '/contacts', name: 'Контакты' },
]
</script>
<style>
/*@import url('/assets/css/mdb.min.css');*/
html {
	height: 100%;
}
body {
	display: flex;
	flex-direction: column;
	height: 100%;
}
.page {
	/* 1 flex-grow, 0 flex-shrink, auto flex-basis */
	flex: 1 0 auto;
}
footer {
	/* 0 flex-grow, 0 flex-shrink, auto flex-basis */
	flex: 0 0 auto;
}
body {
	background: url('../assets/img/main_bg.jpg') #efeded top center no-repeat;
	background-size: cover;
	background-attachment: fixed;
	background-blend-mode: luminosity;
}
.bg-danger {
	background-color: #ad1a1a !important;
}
.btn-danger {
	background-color: #ad1a1a;
}
.page {
	background: white;
}
.content {
	padding: 20px 30px;
}
.breadcrumb {
	background-color: white;
}
</style>
