<template>
  <div class="flex justify-between items-center py-4 md:px-14 px-7 header__box">
    <div>
      <router-link to="/" class="text-2xl font-semibold md:text-left text-center">
        <h1>Alexandre Marques</h1>
      </router-link>
    </div>

    <nav class="flex items-center" id="menuDesktop">
      <ul class="flex items-center gap-4 font-light">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/sobre">Sobre</router-link></li>
      </ul>

      <div class="flex items-center ml-8 gap-4">
        <a href="https://www.linkedin.com/in/alexmrqr/" target="_blank">
          <svg viewBox="0 0 128 128" class="w-5 h-8">
            <path
              d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"
            ></path>
            <path
              fill="#fff"
              d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
            ></path>
          </svg>
        </a>
        <a href="https://github.com/Alexandre-Tortoza" target="_blank">
          <svg viewBox="0 0 128 128" class="w-5 h-8">
            <g>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
              ></path>
            </g>
          </svg>
        </a>
      </div>
    </nav>

    <nav class="menuMobile">
      <svg
        @click="menuToggle"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-menu"
        style="z-index: 999; cursor: pointer"
      >
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>

      <transition name="slide-fade">
        <div
          v-if="menuMobile"
          class="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center"
        >
          <svg
            @click="menuToggle"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-x absolute top-4 right-4"
            style="cursor: pointer"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>

          <ul class="flex flex-col items-center gap-8 font-normal text-xl">
            <li @click="menuToggle"><router-link to="/">Home</router-link></li>
            <li @click="menuToggle"><router-link to="/sobre">Sobre</router-link></li>
          </ul>

          <div class="flex items-center mt-8 gap-6">
            <a href="https://www.linkedin.com/in/alexmrqr/" target="_blank">
              <svg viewBox="0 0 128 128" class="w-6 h-8">
                <path
                  d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"
                ></path>
                <path
                  fill="#fff"
                  d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"
                ></path>
              </svg>
            </a>
            <a href="https://github.com/Alexandre-Tortoza" target="_blank">
              <svg viewBox="0 0 128 128" class="w-6 h-8">
                <g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </transition>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menuMobile = ref(false)
const menuToggle = () => {
  menuMobile.value = !menuMobile.value
}
</script>

<style scoped>
.header__box {
  border-bottom: 1px solid rgba(13, 13, 13, 0.25);
  box-shadow: 0px 3px 8px rgba(13, 13, 13, 0.12);
}

#menuDesktop {
  display: flex ;
}

.menuMobile {
  display: none;
}

@media (max-width: 768px) {
  #menuDesktop {
    display: none;
  }
  .menuMobile {
    display: block;
  }
}

/* Estilos de transição */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* Estilos do Menu Mobile */
.menuMobile > div {
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
}

.menuMobile ul li a {
  color: #000;
  text-decoration: none;
}

.menuMobile ul li a:hover {
  color: #555;
}

.menuMobile a {
  color: #000;
  transition: color 0.2s;
}

.menuMobile a:hover {
  color: #555;
}
</style>
