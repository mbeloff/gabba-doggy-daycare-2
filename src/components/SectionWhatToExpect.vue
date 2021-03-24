<template>
  <div class="container mx-auto max-w-screen-lg py-20 px-2">
    <title-block>
      <template #small>New to Doggy Daycare?</template>
      <template #big>Here's what to Expect</template>
    </title-block>
    <div class="text-sm mb-3">
      <h2 class="font-bold text-xl mb-3 text-purple-600">Before Daycare</h2>
      <ul class="list-inside list-disc">
        <li>
          GDDC requires all pawrents to create a PetExec account with us. This will allow you to make bookings and more online. <router-link class="link-pink" :to="{name: 'Sign-up', params: {region: getRegion()}}">Click here to make an account.</router-link>
        </li>
        <li>
          Before your pup starts with us, we require a valid vaccination certificate. Please upload this to your PetExec account.
        </li>
        <li v-if="getRegion() == 'brisbane'">
          We have a Pet Taxi service available for local pickup and drop-off. Please confirm availability and book in advance via <link-email class="link-pink">email.</link-email>
        </li>
        <li>
          If your pup eats lunch, feel free to bring a lunch pack with their name on it.
        </li>
        <li>
          Let us know at drop off if your pup is allergic to any foods as we do give treats during enrichment time.
        </li>
        <li>
          If you have any special requests for the day please let us know and our staff will do our best to accommodate.
        </li>
        <li>
          If your dog is sick, please refrain from booking them into daycare until they're in good health and have vet clearance to attend.
        </li>
      </ul>
      
    </div>
    <div class="text-sm mb-3">
      <h2 class="font-bold text-xl mb-3">During Daycare</h2>
      <ul class="list-inside list-none">
        <li>
          <span class="font-bold">Socialisation -</span> Your dog will have a great chance to socialise, mingle and play with other dogs! We separate dogs based on their size and temperament and do our best to ensure dogs are with others that they will have the most extensive opportunity to socialise with.
        </li>
        <li>
          <span class="font-bold">Confidence -</span> Watch your pups confidence reach new heights! During the day at daycare, your pup will have the chance to play on our agility course, enjoy different sensory experiences such as licking ice, playing in our sand pit, and well as enjoying bubbles, running on grass, and watching films during nap time. We provide an array or different activities for our dog visitors on different days to keep them entertained, and to help build their confidence. Surrounding themselves with other dogs also ensures that they learn certain cues that humans are incapable of teaching dogs.
        </li>
        <li>
          <span class="font-bold">Exercise -</span> Daycare gives your dog the best opportunity to expend energy! At GDDC our guests have plenty of space to run around, play, and enjoy being a dog! If you live in an apartment, have a highly energetic pooch, or lack the ability to give your pup adequate exercise then daycare is a terrific option for you and your dog.
        </li>
        <li>
          <span class="font-bold">Photos/Videos -</span> We do our best to keep you updated through the day! Our main focus however, is on giving our pups the best possible experience. To keep updated through the day, head to our <a target="_blank" rel="noopener" href="https://www.instagram.com/gabbadoggydaycare/" aria-label="Find us on Instagram" title="Find us on Instagram" class="link-pink">Instagram</a> stories, where we post all the fun we're having through the day.
        </li>

      </ul>
      
    </div>
    <div class="text-sm mb-3">
      <h2 class="font-bold text-xl mb-3">After Daycare</h2>
      <ul class="list-inside list-none">
        <li>
          <span class="font-bold">Boo boos/scratches -</span> We do our absolute best to monitor all dogs through the day however as dogs are animals, things can happen quickly. If we notice any bite, cut or scratch on your dog we will inform you right away, however, while we do provide the utmost care and attention to our doggy guests, accidents will sometimes happen and not everything can be identified.
        </li>
        <li>
          <span class="font-bold">Thirsty, hungry, tired -</span> As your dog is likely to be much more active at daycare than at home, you may find that they need a bit more food than usual. Though we do have nap time during the day, not all dogs will rest. You may wish to let your dog take it easy and have a big snooze after their day of fun.
        </li>
        <li>
          <span class="font-bold">In sickness and in health -</span> GDDC does not accept pups not up to date with their vaccinations, and we will isolate and inform pawrents immediately if any pup shows any sign of illness. We have extremely strict hygiene standards and do our utmost to ensure all dogs remain healthy and happy. If however, your pup returns ill from daycare, please let us know ASAP.
        </li>
      </ul>
      
    </div>
    <router-link class="btn-blue inline-block my-5" :to="{ name: 'Sign-up', params: {region: getRegion()} }">Sign me up!</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>