<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-danger">
		<div class="container">
			<NuxtLink class="navbar-brand" to="/">«Baltic Way»</NuxtLink>
			<button
				class="navbar-toggler"
				type="button"
				data-mdb-toggle="collapse"
				data-mdb-target="#topMenu"
				aria-controls="topMenu"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="topMenu">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li
						class="nav-item"
						v-for="(item, index) in links"
						:key="index"
					>
						<NuxtLink
							exact-active-class="active"
							active-class="active"
							class="nav-link text-white"
							:to="item.url"
						>
							{{ item.name }}
						</NuxtLink>
					</li>
				</ul>
			</div>
			<ul class="navbar-nav d-flex w-auto">
				<li class="nav-item me-3 me-lg-0">
					<a
						class="nav-link text-white text-nowrap"
						href="tel:+79967771620"
					>
						+7 996-777-16-20
					</a>
				</li>
			</ul>
		</div>
	</nav>
</template>
<script setup>
const props = defineProps({
	links: Array,
})
</script>
