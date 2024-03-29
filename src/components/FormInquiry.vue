<template>
  <div class="p-2">
      <p class="text-blue-900 mb-3">Leave a message and we'll get back to you.</p>
      <form name="register-interest" id="register-interest" data-netlify="true" @submit.prevent="validateForm" class="relative p-4 px-2 bg-white rounded shadow-md" :class="{ 'opacity-50' : isLoading}">
        <transition name="fade">
          <div v-if="hasSubmitted" class="absolute top-0 left-0 grid w-full h-full">
            <p class="px-4 py-2 mx-2 text-2xl text-center text-blue-500 place-self-center">Thanks, we'll get back to you as soon as we can.</p>
          </div>
        </transition>
        <div v-if="isLoading" class="absolute top-0 left-0 grid w-full h-full">
          <i class="text-blue-500 fad fa-spinner place-self-center fa-4x animate-spin-slow"></i>
        </div>
        <div :class="{ 'opacity-0 avoid-clicks' : hasSubmitted}">
          <div>
            <label class="my-label" for="name">
              name
            </label>
            <input v-model="form.name" ref="name" class="my-input" id="name" type="text" placeholder="" required>
          </div>
          <div>
            <label class="my-label" for="email">
              email
            </label>
            <input v-model="form.email" class="my-input" id="email" type="email" placeholder="" :class="{ 'border-orange-500' : missingContact }">
          </div>
          <div>
            <label class="my-label" for="phone">
              phone
            </label>
            <input v-model="form.phone" class="my-input" id="phone" type="text" placeholder="" :class="{ 'border-orange-500' : missingContact }">
          </div>
          <div class="mb-4">
            <label class="my-label" for="message">
              message
            </label>
            <textarea v-model="form.message" rows="4" class="my-input" id="phone" type="text" placeholder="Hi, I was wondering about..."></textarea>
          </div>
          <transition name="grow">
            <div v-if="this.missingContact">
              <p class="p-3 mb-4 bg-blue-300 bg-opacity-75 rounded-lg"><strong>Whoops!</strong> Please provide a phone number or email address so that we can get back to you.</p>
            </div>
          </transition>
          <div class="flex items-center justify-end">
            <button class="btn-blue" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
      <p class="text-sm text-gray-500 pt-2">Read our privacy policy <a @click="close()" class="text-pink-300 cursor-pointer">here.</a></p>      
    </div>
</template>

<script>
export default {
    metaInfo: {
      title: 'Message Us',
      meta: [{
        name: 'description',
        content: "Got questions? Ask away, we'll get back to you as soon as we can.",
        vmid: 'description'
      }]
    },
    data() {
      return {
        form: {
          name: "",
          phone: "",
          email: "",
          message: "",
          location: this.$store.state.region
        },
        hasSubmitted: false,
        isLoading: false,
        missingContact: false
      }
    },
    watch: {
      'form.number': function () {
        this.missingContact = false
      },
      'form.email': function () {
        this.missingContact = false
      }
    },
    methods: {
      emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      },      
      validateForm() {
        if (!this.form.phone && !this.form.email) {
          this.missingContact = true
          return
        }
        if (this.form.email) {
          this.emailIsValid(this.form.email)         
        }
        this.handleSubmit()
      },
      encode(data) {
        return Object.keys(data)
          .map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
          )
          .join("&");
      },
      handleSubmit() {
        this.isLoading = true
        fetch("/", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: this.encode({
              "form-name": "Inquire",
              ...this.form
            })
          })
          .then(() => {
            this.isLoading = false; 
            this.hasSubmitted = true;
          })
      },
      close() {
        this.$router.push({
        name: 'Privacy'
        })
        this.$modal.hide('contact-modal')
      }
    },
    mounted() {
      setTimeout(() => {
        this.$refs.name.focus();
      }, 500);
    }
  }
</script>

<style > 

</style>