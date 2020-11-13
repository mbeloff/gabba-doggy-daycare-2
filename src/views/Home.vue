<template>
  <div class="text-lg">
    <Hero></Hero>
    <Cards></Cards>
    <div class="section">
      <div class="container mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-20 lg:px-20">
        <div class="col y-5 md:my-20">
          <p class="font-bold text-blue-700 mb-10">Brisbane Dogs Love it Here</p>
          <h2 class="font-bold tracking-tight leading-tight text-5xl mb-10">More than just a day care</h2>
          <p class="mb-10 leading-8">Gabba Doggy Day Care offers a range of additional services to make each day a little better. For you AND your furry pal.</p>
          <ul class="list-none list-inside font-bold text-left">
            
            <ListItem>Easy Online Bookings <br>
            <span class="text-sm text-gray-700">Conveniently manage your own bookings or purchase our daycare packages</span>
            </ListItem>
            <ListItem>After Hours Kennels <br>
            <span class="text-sm text-gray-700">After hours pickups can be made available if you're running late.</span>
            </ListItem>
            <ListItem>Pet Taxi Service <br>
            <span class="text-sm text-gray-700">local pickup and dropoff within 3km</span>
            </ListItem>
            <ListItem>Daily Walks <br>
            <span class="text-sm text-gray-700">Fresh air and exercise with a dog park close by</span>
            </ListItem>
            <ListItem>Trips to the bay, or along the river <br>
            <span class="text-sm text-gray-700">Give your dog a little bit of an adventure. Small group outings to take in the scenery.</span>
            </ListItem>
            <ListItem>Grooming <br>
             <span class="text-sm text-gray-700">Warm hydrobath and grooming services available</span>
             </ListItem>
          </ul>
          <div class="text-center mt-10">
            <router-link :to="{ name: 'Daycare' }" class="inline-block px-5 py-2 rounded text-xl bg-blue-600 text-white rounded-full font-semi-bold hover:border-transparent hover:bg-yellow-500  focus:outline-blue">Find Out More</router-link>
          </div>
        </div>
        <div class="col champ-pup bg-cover rounded-sm">
        </div>
      </div>
    </div>

    <!-- <div class="section bg-blue-700">
      <div class="container mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-20 lg:px-20">
        <div class="col sad-pup bg-cover rounded-sm">
        </div>
        <div class="col md:my-20 bg-blue-500 bg-opacity-25 p-6 rounded shadow-xl text-white">
          <h2 class="font-bold leading-tight tracking-tight text-5xl mb-10">Bored at home?</h2>
          <p class="mb-10">Does your dog get into mischief while you're at work? Give them a day out to play and meet new friends instead of getting restless at home.</p>
          <div class="grid place-items-center w-full"><i class="fas fa-bone"></i></div>         
        </div>
      </div>
    </div> -->

    
  </div>
</template>

<script>
  import Hero from "@/components/Hero.vue"
  import Cards from "@/components/Cards.vue"
  export default {
    components: {
      Hero,
      Cards
    },
    metaInfo: {
    title: 'Home',
    meta: [
      {
        name: 'description',
        content:
          "Your best friends' new favourite place. Don't leave your dogs home alone, bring them to Gabba Doggy Day Care for a great day out.",
        vmid: 'description'
      }
    ]
  },
  mounted() {
    if (this.$route.name === "Register") {
      this.$modal.show("contact-modal");
    }
  }
  }
</script>

<style>
  .champ-pup {
    background-image: url(../assets/img/champ.jpg);
    min-height: 300px;
    background-position: 45% 80%;
  }

  .sad-pup {
    background-image: url(../assets/img/sadpup.jpg);
    min-height: 300px;
    background-position: 50% 80%;
  }

  .flower-pup {
    background-image: url(../assets/img/flower-pup.jpg);
    min-height: 300px;
    background-position: 50% 30%
  }
</style>