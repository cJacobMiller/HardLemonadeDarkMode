import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'hard-lemonade-dark-mode',
  webDir: 'dist/hard-lemonade-dark-mode',
  server: {
    androidScheme: 'https'
  }
};

export default config;
