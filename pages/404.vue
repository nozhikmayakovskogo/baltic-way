<template>
	<div>
		<NuxtLayout name="error">
			<template #header>
				<h1>404 Error</h1>
			</template>
			<template #message>
				<p>Page not found</p>
			</template>
			<p><img src="@/assets/img/sad-face-2692.svg" /></p>
			<template #button>
				<button class="btn btn-danger" @click="$router.push('/')">
					Назад
				</button>
			</template>
		</NuxtLayout>
	</div>
</template>
