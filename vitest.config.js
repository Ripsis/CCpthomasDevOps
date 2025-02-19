import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',  // Ceci garantit que les tests s'exécutent dans un environnement Node.js
  },
});
