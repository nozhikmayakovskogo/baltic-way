<template>
	<nav aria-label="breadcrumb">
		<ol class="breadcrumb">
			<li class="breadcrumb-item">
				<NuxtLink to="/">Главная</NuxtLink>
			</li>
			<li class="breadcrumb-item active" aria-current="page">
				Контактная информация
			</li>
		</ol>
	</nav>
</template>
<script setup>
const props = defineProps({
	links: Array,
})
</script>
