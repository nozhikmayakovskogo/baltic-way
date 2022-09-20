<template>
	<div
		id="mainCarousel"
		class="carousel slide carousel-fade pointer-event"
		data-mdb-ride="carousel"
	>
		<!-- Indicators -->
		<ol class="carousel-indicators">
			<li
				data-mdb-target="#mainCarousel"
				data-mdb-slide-to="0"
				class="active"
				aria-current="true"
			></li>
			<li
				data-mdb-target="#mainCarousel"
				data-mdb-slide-to="1"
				class=""
				aria-current="false"
			></li>
		</ol>
		<div class="carousel-inner">
			<div class="carousel-item active">
				<img
					src="@/assets/img/1636975061000.webp"
					class="d-block w-100"
					alt="Sunset Over the City"
				/>
				<div class="carousel-caption d-none d-md-block">
					<h5>Автобусы в Финляндию</h5>
					<p>
						Расписание рейсов можно посмотреть в форме бронирования
					</p>
				</div>
			</div>
			<div class="carousel-item">
				<img
					src="@/assets/img/1636975061000.webp"
					class="d-block w-100"
					alt="Sunset Over the City"
				/>
				<div class="carousel-caption d-none d-md-block">
					<h5>Автобусы в Финляндию</h5>
					<p>
						Расписание рейсов можно посмотреть в форме бронирования
					</p>
				</div>
			</div>
		</div>
		<a
			class="carousel-control-prev"
			href="#mainCarousel"
			role="button"
			data-mdb-slide="prev"
		>
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
		</a>
		<a
			class="carousel-control-next"
			href="#mainCarousel"
			role="button"
			data-mdb-slide="next"
		>
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
		</a>
	</div>
</template>
