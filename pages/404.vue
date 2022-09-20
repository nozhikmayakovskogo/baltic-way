<template>
	<div class="page mb-5">
		<NuxtLayout name="error">
			<template #header>
				<h1>{{ title }}</h1>
			</template>
			<template #message>
				<p>{{ text }}</p>
			</template>
			<p><img src="@/assets/img/sad-face-2692.svg" /></p>
			<template #button>
				<button
					type="button"
					class="btn btn-danger"
					@click="$router.push('/')"
				>
					На главную
				</button>
			</template>
		</NuxtLayout>
	</div>
</template>
<script>
export default {
	data: () => ({
		title: '404 Error',
		text: 'Page not found',
	}),
	head() {
		return {
			title: '404 Error',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Page not found',
				},
			],
		}
	},
}
</script>
