<template>
  <div class="btm-nav btm-nav-sm">
    <nuxt-link to="/" :class="$route.path === '/' ? 'active' : ''">
      <icon name="ph:house-duotone" class="w-5 h-5"></icon>
    </nuxt-link>
    <nuxt-link
      to="/favorites"
      :class="$route.path === '/favorites' ? 'active' : ''"
    >
      <icon name="ic:twotone-favorite" class="w-5 h-5"></icon>
    </nuxt-link>
    <nuxt-link
      to="/history"
      :class="$route.path === '/history' ? 'active' : ''"
    >
      <icon name="iconamoon:history-duotone" class="w-5 h-5"></icon>
    </nuxt-link>
    <nuxt-link
      to="/settings"
      :class="$route.path === '/settings' ? 'active' : ''"
    >
      <icon name="ph:gear-duotone" class="w-5 h-5"></icon>
    </nuxt-link>
  </div>
</template>
