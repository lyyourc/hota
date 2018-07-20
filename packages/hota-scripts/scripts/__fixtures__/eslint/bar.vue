<template>
  <div
    id="bar"
    class="foo"
  >
    Hello, {{ name }}!
    <div />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'foo',
    }
  },
  created() {
    this.sayHi()
  },
  methods: {
    sayHi() {
      console.log('hi')
    },
  },
}
</script>
