<template>
<a target="_blank" rel="noopener" :href="this[site].link" class="flex text-blue-500 hover:text-yellow-400 focus:outline-blue" :aria-label="this[site].alt" :title="this[site].alt">
  <div class="my-auto text-lg fa-stack social-icon">
              <i class="fas fa-circle fa-stack-2x"></i>
              <i class="text-blue-100 fa-stack-1x" :class="this[site].icon"></i>
            </div>
  <span class="font-normal place-self-center"><slot></slot></span>
</a>
  
</template>

<script>
export default {
props: {
  site: String
},
data() {
  return{
    facebook: {
      link:"https://www.facebook.com/gabbadoggydaycare",
      alt: "Find us on Facebook",
      icon:"fab fa-facebook-square",
    },
    instagram: {
      link: "https://www.instagram.com/gabbadoggydaycare/",
      alt: "Find us on Instagram",
      icon: "fab fa-instagram"
    },
    tiktok: {
      link: "https://www.tiktok.com/@gabbadoggydaycare",
      alt: "Find us on Tiktok",
      icon: "fab fa-tiktok"
    }
  }
}
}
</script>

<style>
.fa-stack-1x {
  margin: auto auto;
  /* color: #89daff */
}
</style>