<template>
	<div class="text-center mt-5 mb-5">
		<slot name="header"></slot>
		<slot name="message"></slot>
		<p>
			<img src="@/assets/img/sad-face-2692.svg" alt="Some header here" />
		</p>
		<slot name="button"></slot>
	</div>
</template>
