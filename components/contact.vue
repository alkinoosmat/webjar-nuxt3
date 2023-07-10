<template>
	<div class="w-full xl:min-h-fit xl:max-h-[1080px] bg-[#00c8ff] flex flex-col justify-center items-center py-20">
		<div
			class="px-6 flex justify-center items-center xl:text-[40px] xl:leading-[70px] text-[22px] leading-[24px] font-bold">
			<div>
				I am interested in getting the benefits of
				<span class="text-[#ff9018]">Up Hellas</span>
			</div>
		</div>
		<div class="form" id="contact">
			<div class="form-field">
				<input type="text" placeholder="Name &amp; Surname" class="w-full" v-model="name" />
			</div>
			<div class="form-field">
				<input type="email" placeholder="Email" class="w-full" v-model="email" />
			</div>
			<div class="form-field">
				<input type="tel" class="w-full" placeholder="Phone" v-model="phone" @input="validatePhone" />
			</div>
			<div class="form-field">
				<select v-model="product" class="dropdown w-full">
					<option disabled value="">
						Select a product
					</option>
					<option value="1">Product 1</option>
					<option value="2">Product 2</option>
					<option value="3">Product 3</option>
					<option value="4">Product 4</option>
					<option value="5">Product 5</option>
					<option value="6">Product 6</option>
				</select>
			</div>
		</div>
		<div class="py-6">
			<label for="terms" class="checkbox-label flex gap-2">
				<input id="terms" type="checkbox" v-model="acceptedTerms" class="custom-checkbox" />
				<span class="custom-checkbox-icon"></span>
				<p class="w-[300px] sm:w-[600px]">
					Επιθυμώ να χρησιμοποιηθούν τα παραπάνω στοιχεία μου από την Up Hellas,
					προκειμένου να ενημερωθώ για τα προϊόντα της, βάσει και του Γενικού
					Κανονισμού για την Προστασία Προσωπικών Δεδομένων που ισχύει από
					25/5/2018.
				</p>
			</label>
		</div>
		<div class="flex gap-5 flex-col sm:flex-row items-center justify-center">
			<button class="submit-button" @click="submitForm">
				SEND US YOUR MESSAGE
			</button>
			<p class="font-bold sm:pr-1 pr-0">OR</p>

			<button class="schedule-button flex items-center gap-2"
				@click="openPopup('This feature is not yet available.')">
				<img src="~/assets/img/meeting-logo.svg" class="w-5" />
				SCHEDULE A MEETING
			</button>
		</div>
		<div v-if="showPopup" class="popup">
			<div class="popup-content">
				<p>{{ popupMessage }}</p>
				<button class="popup-close-button" @click="closePopup">
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
