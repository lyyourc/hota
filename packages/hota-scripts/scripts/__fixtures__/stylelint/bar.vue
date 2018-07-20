<style lang="scss">
.foo {
  color: 'foo';
}

.bar {
  width: 0.5em;
}

@mixin border-radius($radius) {
  border-radius: $radius;
}

body {
  @include border-radius(10px);
}
</style>
