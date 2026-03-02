import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint'
  ],

  // Custom Tailwind entry point — this is the key difference from the default
  // Nuxt UI setup. Many projects have their own Tailwind CSS entry predating
  // Nuxt UI, or use Nuxt layers where the Tailwind entry is in a different
  // package than where @nuxt/ui is registered.
  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  ui: {
    experimental: {
      componentDetection: true,
    },
  },

  compatibilityDate: '2025-07-16'
})
