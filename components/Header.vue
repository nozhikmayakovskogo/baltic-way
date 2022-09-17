<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-danger">
		<div class="container">
			<a class="navbar-brand" href="/">«Baltic Way»</a>
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
						<a class="nav-link text-white" :href="item.url">
							{{ item.name }}
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>
<script setup>
const props = defineProps({
	links: Array,
})
</script>
