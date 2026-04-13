import {defineConfig} from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  // active les screenshots et traces uniquement en cas d'échec
  use: {
    baseURL: 'http://127.0.0.1:5173',
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
  },
  //lance automatiquement le serveur Vite avant les tests
  webServer: {
    command: 'npm run dev -- --host 127.0.0.1',
    url: 'http://127.0.0.1:5173',
    reuseExistingServer: !process.env.CI,
  },
});