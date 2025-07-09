// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://cpt413.github.io',
    vite: {
        ssr: {
            noExternal: [/^webcoreui/]
        }
    }
});
