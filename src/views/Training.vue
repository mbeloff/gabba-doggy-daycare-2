<template>
  <div>
    <div class="tile">
      <div class="container grid grid-cols-1 gap-x-20 px-4 md:py-20 py-10 mx-auto md:grid-cols-2 lg:px-20 xl:px-40">
        <div class="col my-5 md:mt-10">
          <Title>
            <template #small>Training</template>
            <template #big>Puppy School</template>          
          </Title>
          <p class="mb-3">Give your pup a headstart in a fun and engaging environment. They will get acquainted with new people and animals and use this crucial stage of development to learn valuable skills that will benefit both pet and parent for years to come.</p>
          <p class="mb-3">In our well-rounded Puppy School program, your pet will get supervised play and learning with other dogs and puppies, group-training, as well as focused, one-on-one time with a trainer to develop essential skills.</p>
          <p class="mb-3">The cost of puppy school is $500 ($100 per week, for 5 weeks). This will give your pup one full day each week of combined daycare and puppy school training.</p>
        </div>
        <div class="bg-cover rounded-xl col bg-white shadow-xl p-3 my-5 md:mt-10 pattern">
          <div class="bg-white h-full w-full py-8 rounded-lg shadow-md px-2">
            <p class="mb-4 font-bold">Puppy school will help your pup with the following skills and behaviours:</p>
          <ul class="list-outside ml-2 list-disc flex flex-col space-y-3 text-sm pl-4">
            <li>
              Getting habituated with unfamiliar people and animals
            </li>
            <li>
              Handling issues (getting used to touch)
            </li>
            <li>
              Begin to learn basic cues such as sit or stay
            </li>
            <li>
              Getting used to grooming (nail clipping, towel drying, etc)
            </li>            
            <li>
              Puzzles and games to stimulate and improve coordination
            </li>
            <li>
              Settling for rest time
            </li>
            <li>
              Learning good manners (e.g. prevent excessive jumping/biting)
            </li>
          </ul>
          </div>          
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
  export default {
    metaInfo: {
      title: 'Training',
      meta: [{
        name: 'description',
        content: "Puppy school. Combine your daycare session with one-on-one training to help your pup develop essential skills and socialisation.",
        vmid: 'description'
      }]
    },
  }
</script>

<style>
.pattern {
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E"), linear-gradient(to bottom right, rgba(0, 153, 255, 0.63), rgb(212, 232, 255));
    background-size: 5px 5px, cover;
}
</style>