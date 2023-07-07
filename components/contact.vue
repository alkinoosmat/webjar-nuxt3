<template>
	<div
		class="min-h-fit min-w-[1920px] max-h-[1080px] max-w-[1920px] bg-[#00c8ff] flex flex-col justify-center items-center"
	>
		<div class="text-[36px] leading-[70px] font-bold">
			I am interested in getting the benefits of
			<span class="text-[#ff9018]">Up Hellas</span>
		</div>
		<div
			class="form"
			id="contact"
		>
			<div class="form-field">
				<input
					type="text"
					placeholder="Name &amp; Surname"
					class="input"
					v-model="name"
				/>
			</div>
			<div class="form-field">
				<input
					type="email"
					placeholder="Email"
					class="w-full"
					v-model="email"
				/>
			</div>
			<div class="form-field">
				<input
					type="tel"
					placeholder="Phone"
					v-model="phone"
					@input="validatePhone"
				/>
			</div>
			<div class="form-field">
				<input
					type="text"
					placeholder="Product"
					v-model="product"
				/>
			</div>
			<div class="">
				<label
					for="terms"
					class="checkbox-label"
				>
					<input
						id="terms"
						type="checkbox"
						v-model="acceptedTerms"
					/>
					I accept the terms of service
				</label>
			</div>
		</div>
		<button
			class="button"
			@click="submitForm"
		>
			Submit
		</button>
		<div
			v-if="showPopup"
			class="popup"
		>
			<div class="popup-content">
				<p>{{ popupMessage }}</p>
				<button
					class="popup-close-button"
					@click="closePopup"
				>
					Close
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: '',
			email: '',
			phone: '',
			product: '',
			acceptedTerms: false,
			showPopup: false,
			popupMessage: '',
		};
	},
	methods: {
		validateEmail(email) {
			const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			return emailRegex.test(email);
		},
		validatePhone() {
			this.phone = this.phone.replace(/[^0-9]/g, '');
		},
		openPopup(message) {
			this.showPopup = true;
			this.popupMessage = message;
		},
		closePopup() {
			this.showPopup = false;
			this.popupMessage = '';
		},
		submitForm() {
			if (
				this.name.trim() === '' ||
				this.email.trim() === '' ||
				this.phone.trim() === '' ||
				this.product.trim() === ''
			) {
				this.openPopup('Please fill in all fields.');
				return;
			}

			if (!this.validateEmail(this.email)) {
				this.openPopup('Please enter a valid email address.');
				return;
			}

			if (!this.acceptedTerms) {
				this.openPopup('Please accept the terms of service.');
				return;
			}

			// All fields are valid, proceed with form submission
			// Here, you can add your logic to handle the form submission

			// Reset the form fields
			this.name = '';
			this.email = '';
			this.phone = '';
			this.product = '';
			this.acceptedTerms = false;

			this.openPopup('Form submitted successfully!');
		},
	},
};
</script>
