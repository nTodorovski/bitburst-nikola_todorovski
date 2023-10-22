<template>
  <header>
    <nav class="bg-color-white sticky top-0">
      <ul class="flex gap-8 px-4 md:px-0 border-b border-color-chrome">
        <RouterLink to="/" class="pb-3">
          <li class="text-roboto28">To Do List</li>
        </RouterLink>
        <RouterLink to="/backlog" class="pb-3">
          <li class="text-roboto28">Backlog</li>
        </RouterLink>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
nav a {
  @apply text-color-gray;
}

nav a.router-link-exact-active {
  @apply font-bold;
  @apply text-color-black;
  @apply border-b-4;
  @apply border-b-color-blue;
}
</style>
