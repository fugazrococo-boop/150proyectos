
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // IMPORTANT: Replace '<repository-name>' with the name of your GitHub repository.
  // For example, if your repository URL is https://github.com/fugazrococo-boop/my-project,
  // set base to '/my-project/'.
  base: '/150proyectos/', 
  plugins: [react()],
})
