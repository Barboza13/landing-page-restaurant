import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import laravel from 'laravel-vite-plugin'

export default defineConfig({
    assetsInclude: ['resources/assets/images/*.jpg!d'],
    plugins: [
        laravel({
            input: ['resources/js/index.tsx'],
            refresh: true,
        }),
        react(),
    ],
    server: {
        port: 3000,
        refresh: true,
    }
})
