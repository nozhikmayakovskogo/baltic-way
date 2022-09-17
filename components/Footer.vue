<template>
	<footer class="bg-danger text-white">
		<div class="container p-4">
			<div class="row">
				<div class="col-lg-8 col-md-12 mb-4 mb-md-0">
					<h5 class="text-uppercase">О компании</h5>
					<p>
						«Baltic Way» - Автобусные поездки в любые города
						Финляндии
					</p>
				</div>
				<div class="col-lg-4 col-md-6 mb-4 mb-md-0">
					<h5 class="text-uppercase">Навигация по сайту</h5>

					<ul class="list-unstyled">
						<li
							class="nav-item"
							v-for="(item, index) in links"
							:key="index"
						>
							<NuxtLink class="text-white" :to="item.url">
								{{ item.name }}
							</NuxtLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div
			class="text-center p-3"
			style="
				background-color: rgba(0, 0, 0, 0.2);
				color: rgba(255, 255, 255, 0.6);
			"
		>
			Baltic Way © 2022 Все права защищены
		</div>
	</footer>
</template>
<script setup>
const props = defineProps({
	links: Array,
})
</script>
