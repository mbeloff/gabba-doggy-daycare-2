<template>
  <div class="px-2 mx-auto max-w-screen-sm">
    <alert-block>
      <template #left>New</template>
      <template #right>You can now request grooming directly from your GDDC account. <open-login class="link-pink">login here</open-login></template>
    </alert-block>
    <p class="text-blue-900" v-if="!hasSubmitted">If you don't have an account with us, please complete this form to request a grooming Service. We'll get back to you to confirm.</p>
    <br />
    <form name="grooming" id="grooming" data-netlify="true" @submit.prevent="validateForm" class="relative mb-4 " :class="{ 'opacity-50' : isLoading, 'shadow-none bg-opacity-0' : hasSubmitted}" style="min-height: 150px">
      <transition name="fade">
        <div v-if="hasSubmitted" class="absolute top-0 left-0 grid w-full h-full">
          <p class="px-4 py-2 mx-2 text-2xl text-center text-blue-500 place-self-center">Thanks, we'll be in contact to confirm your booking </p>
        </div>
      </transition>
      <div v-if="isLoading" class="absolute top-0 left-0 grid w-full h-full">
        <i class="text-blue-500 fad fa-spinner place-self-center fa-4x animate-spin-slow"></i>
      </div>
      <div v-show="!hasSubmitted" :class="{ 'opacity-0' : hasSubmitted}">
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
        <div>
          <label class="my-label" for="petname">
            pet's name
          </label>
          <input v-model="form.petname" class="my-input" id="petname" type="text" placeholder="">
        </div>
        <div>
          <label class="my-label" for="name">
            breed
          </label>
          <input v-model="form.petbreed" class="my-input" id="petbreed" type="text" placeholder="">
        </div>
        <div class="mb-4 grid grid-cols-5 gap-x-2">
          <label class="my-label col-start-1 col-span-3" for="name">
            preferred time
          </label>
          <date-pick class="col-start-1 col-span-3 text-gray-700 bg-white bg-opacity-50 border rounded shadow appearance-none focus:outline-none focus:ring focus:bg-opacity-75" v-model="form.date" :format="format" :parseDate="parseDate" :formatDate="formatDate" :isDateDisabled="isDisabledDate">
          </date-pick>
          <div class="col-start-4 col-span-2">
            <select class="my-input my-select" type="select" v-model="form.time" placeholder="time">
              <option disabled value="Time">Time</option>
              <option value="7:30">7:30am</option>
              <option value="8:00">8:00am</option>
              <option value="8:30">8:30am</option>
              <option value="9:00">9:00am</option>
              <option value="9:30">9:30am</option>
              <option value="10:00">10:00am</option>
              <option value="10:30">10:30am</option>
              <option value="11:00">11:00am</option>
              <option value="11:30">11:30am</option>
              <option value="12:00">12:00pm</option>
            </select>
          </div>
        </div>
        <div class="mb-4">
          <label class="my-label">Service</label>
          <div class="space-y-2 md:space-y-0">
            <div v-for="(service, i) in this.services" :key="i" class="flex items-center border-b">
              <input type="checkbox" class="form-checkbox" v-model="form.service" :id="service[0]" :value="service[0]">
              <p class="ml-2 flex flex-grow justify-between">
                <span class="">{{service[0]}}</span>
                <span class="">{{service[1]}}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="mb-4">
          <label class="my-label" for="notes">
            notes
          </label>
          <textarea v-model="form.notes" rows="4" class="my-input" id="notes" type="text" placeholder="Any additional comments or questions..."></textarea>
        </div>
        <!-- <div class="mb-4">
          <label class="my-label" for="daycare">
            Already have a daycare booking on this day?
          </label>
          <div class="flex items-center">
            <input type="checkbox" name="daycare" v-model="form.daycare" ><span class="ml-2">Yes, I've made a daycare booking already</span>
          </div>         
        </div> -->
        <transition name="grow">
          <div v-if="this.missingContact">
            <p class="p-3 mb-4 bg-blue-300 rounded-lg"><strong>Whoops!</strong> Please provide a phone number or email address so that we can get back to you.</p>
          </div>
        </transition>
        <div class="flex items-center justify-between">
          <button class="btn-blue" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  import DatePick from 'vue-date-pick';
  import fecha from 'fecha';
  import 'vue-date-pick/dist/vueDatePick.css';
  export default {
    metaInfo: {
      title: 'Request A Grooming Service',
      meta: [{
        name: 'description',
        content: "Grooming services available - Special discounts for doggy daycare guests!",
        vmid: 'description'
      }]
    },
    components: {
      DatePick
    },
    data() {
      return {
        form: {
          name: "",
          phone: "",
          email: "",
          petname: "",
          petbreed: "",
          service: [],
          notes: "",
          // date: fecha.format(new Date(), 'ddd MMM Do')
          date: "Date",
          time: "Time",
          // daycare: false
        },
        format: 'ddd MMM Do',
        hasSubmitted: false,
        isLoading: false,
        missingContact: false,
        services: [
          ["Nail Clip", "$10"],
          ["Ear Clean", "$10"],
          ["Bath", "$20"],
          ["Bath, Nails & Ears", "$30"],
          ["Hygiene Tidy Groom", "$60-$90"]
        ]
      }
    },
    watch: {
      'form.phone': function () {
        this.missingContact = false
      },
      'form.email': function () {
        this.missingContact = false
      }
    },
    methods: {
      isDisabledDate(date) {
        const currentDate = new Date();
        const startDate = new Date('February 16, 2021 23:15:30');
        return (date < currentDate) || !(date.getDay() % 6) || (date < startDate);
      },
      parseDate(dateString, format) {
        return fecha.parse(dateString, format);
      },
      formatDate(dateObj, format) {
        return fecha.format(dateObj, format);
      },
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
              "form-name": "grooming",
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
        this.$modal.hide('grooming-modal')
      },
      closeModal() {
        this.$modal.hide('grooming-modal')
      }
    },
    // mounted() {
    //   setTimeout(() => {
    //     this.$refs.name.focus();
    //   }, 500);
    // }
  }
</script>

<style lang="postcss">
  /* $vdpColor: #1595df; */
  /* @import 'vue-date-pick/src/vueDatePick.scss'; */
  .vdpComponent {
    width: 100%;
  }

  .vdpComponent input {
    @apply w-full px-3 py-1 text-lg text-gray-700 bg-white bg-opacity-50 appearance-none rounded
  }

  .vdpComponent input:focus {
    @apply outline-none ring bg-opacity-75
  }
</style>