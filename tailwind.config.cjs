module.exports = {
    content: [
      './public/**/*.html',
      './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
    ],
    theme: {
        extend: {
          colors: {
              red: {
                  32: '#ee1c25',
              },
              yellow: {
                  32: '#ffff00',
              }
          }
        }
    },
};