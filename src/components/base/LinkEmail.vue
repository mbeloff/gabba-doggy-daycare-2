<template>
  <a :href="`mailto:` + this.email"><slot></slot></a>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    email: function() {
      return this.$store.state[this.$store.state.region].contact.email
    }
  }
}
</script>

<style>
</style>