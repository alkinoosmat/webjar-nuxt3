<template>
	<div
		class="w-full xl:min-h-fit xl:max-h-[1080px] bg-[#ffd069] flex flex-col px-2 py-20"
	>
		<div class="flex flex-col justify-center items-center">
			<p class="text-[44px] leading-[70px] font-bold">Testimonials</p>
			<p class="text-[20px] font-normal leading-[24px]">
				Need even more convincing?
			</p>
			<p class="text-[20px] font-normal leading-[24px]">
				Here’s what our customers say about us.
			</p>
		</div>
	</div>
	<div class="flex gap-20 lg:flex-row flex-col bg-[#ffd069] px-4 lg:px-32">
		<div
			v-for="t in testimonials"
			class="testimonials-card flex p-6 h-[450px] md:h-[350px] lg:h-[450px] 2xl:h-[400px] xl:px-20 lg:w-1/2"
		>
			<div class="flex flex-col justify-between gap-10 text-[20px]">
				<blockquote class="quote">
					<span class="quote-icon font-bold">&ldquo;</span>
					<p>{{ t.body }}</p>
					<span class="quote-icon font-bold">&rdquo;</span>
				</blockquote>

				<div class="flex gap-2">
					<img
						src="~/assets/img/avatar-1.png"
						class="object-contain"
					/>
					<div class="flex flex-col justify-center">
						<p class="text-[18px] font-bold">Test Name</p>
						<p>CEO of Lorem Ipsum</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div
		class="py-10 flex overflow-scroll lg:overflow-hidden gap-2 justify-start lg:justify-evenly bg-[#ffd069] w-full"
	>
		<img src="~/assets/img/logo-1.svg" />
		<img src="~/assets/img/logo-2.svg" />
		<img src="~/assets/img/logo-3.svg" />
		<img src="~/assets/img/logo-4.svg" />
		<img src="~/assets/img/logo-5.svg" />
		<img src="~/assets/img/logo-6.svg" />
		<img src="~/assets/img/logo-7.svg" />
		<img src="~/assets/img/logo-8.svg" />
	</div>
</template>

<script setup>
const { data: testimonials } = await useFetch(
	'https://jsonplaceholder.typicode.com/posts?_limit=2',
);
</script>
