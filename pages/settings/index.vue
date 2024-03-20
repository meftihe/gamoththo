<template>
  <div class="container mx-auto">
    <h1 class="text-xl font-bold my-4 mx-2">Settings</h1>
    <div class="grid grid-cols-1 gap-4">
      <div class="card shadow-lg">
        <div class="card-body">
          <h2 class="card-title">Appearance</h2>
          <p>Change the appearance of the app</p>
          <div class="form-control">
            <label class="label cursor-pointer">
              <span class="label-text">Dark Theme</span>
              <input
                type="checkbox"
                class="toggle"
                :checked="colorMode.preference === 'dark'"
                @change="toggleColorMode"
              />
            </label>
          </div>
        </div>
      </div>
      <div class="card shadow-lg">
        <div class="card-body">
          <h2 class="card-title">Security</h2>
          <p>Change your security settings</p>
          <nuxt-link to="/settings/security" class="btn btn-primary">
            Security settings
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const toggleColorMode = (e: Event) => {
  const target = e.target as HTMLInputElement;
  colorMode.preference = target.checked ? 'dark' : 'light';
};
</script>
