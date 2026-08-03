import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';


dotenv.config({
  path: ".env"
});

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: process.env.BASE_URL,
    //trace: 'on-first-retry',
    trace: 'retain-on-failure'
  },
  projects: [
    
    { name: 'setup', testMatch: /auth\.setup\.ts/ },
    
    {
      name: 'Authenticated', testDir: './tests/Authenticated', use: {
        ...devices['Desktop Chrome'], storageState: 'playwright/.auth/user.json',
      },
      dependencies: ['setup'],
    },
    {
      name:'NoAuthenticated',testDir:'./tests/NoAuthenticated',use:{
        ...devices['Desktop Chrome']
      }
    },
   
  ],
});