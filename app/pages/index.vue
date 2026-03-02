<template>
  <div class="flex flex-col items-center justify-center gap-6 h-screen p-8">
    <h1 class="font-bold text-2xl">
      componentDetection + custom Tailwind entry
    </h1>

    <p class="text-sm max-w-lg text-center">
      These buttons should have colored backgrounds, hover states, and focus outlines.
      With <code>@import "@nuxt/ui"</code> removed from main.css, the utility classes
      from component theme files (e.g. <code>focus-visible:outline-2</code>,
      <code>hover:bg-primary/75</code>) are missing from the generated CSS.
    </p>

    <div class="flex items-center gap-2">
      <UButton label="Primary Solid" />
      <UButton label="Outline" variant="outline" />
      <UButton label="Neutral" color="neutral" variant="outline" />
    </div>

    <p class="text-xs max-w-lg text-center text-gray-400">
      Inspect a button: the HTML has classes like <code>bg-primary</code> and
      <code>focus-visible:outline-2</code>, but no matching CSS rules exist.
      The <code>@source "./ui/button.ts"</code> directive in .nuxt/ui.css is not
      visible to the main Tailwind root (main.css).
    </p>
  </div>
</template>
