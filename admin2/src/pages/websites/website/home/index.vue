<template>
  <div class="content">
    <div class="md-layout">
      <ul>
        <li>
          <router-link :to="{name: 'home_slideshow'}">SLIDESHOW</router-link>
        </li>
      </ul>
      <router-view />
    </div>
  </div>
</template>
