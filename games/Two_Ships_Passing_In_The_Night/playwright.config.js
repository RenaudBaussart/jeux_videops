import {defineConfig} from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  // active les screenshots et traces uniquement en cas d'échec
  use: {
    baseURL: 'http://localhost:5173',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  //lance automatiquement le serveur Vite avant les tests
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },
});