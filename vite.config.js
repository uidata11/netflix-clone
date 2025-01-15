import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { va                 nillaExtractPlugin } from '@vailla-extract/vite-plugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin],
})
