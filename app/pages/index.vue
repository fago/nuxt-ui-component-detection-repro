<template>
  <div class="flex flex-col items-center justify-center gap-6 h-screen p-8">
    <h1 class="font-bold text-2xl">
      componentDetection + custom Tailwind entry
    </h1>

    <!-- Proof that basic Tailwind works -->
    <div class="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg">
      This styled box proves Tailwind CSS is working via @tailwindcss/vite.
    </div>

    <p class="text-sm max-w-lg text-center">
      The box above uses standard Tailwind utilities (<code>bg-blue-500</code>,
      <code>rounded-lg</code>, <code>shadow-lg</code>) and renders correctly.
      However, the buttons below are missing their component-specific styles
      (colored backgrounds, hover states, focus outlines) because the
      <code>@source</code> directives from componentDetection in
      <code>.nuxt/ui.css</code> don't reach the custom Tailwind root.
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
