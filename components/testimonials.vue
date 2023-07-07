<template>
	<div
		class="min-h-fit min-w-[1920px] max-h-[1080px] max-w-[1920px] bg-[#ffd069] flex flex-col pb-40 px-32"
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
	<div class="flex gap-6 justify-center bg-[#ffd069]">
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

<script>
export default {
	data() {
		return {
			posts: [],
			fetchError: null,
		};
	},
	async beforeMount() {
		try {
			this.posts = await fetch(
				'https://jsonplaceholder.typicode.com/posts?_limit=10',
			).then((response) => response.json());
		} catch (error) {
			this.fetchError = error;
		}
	},
};
</script>
