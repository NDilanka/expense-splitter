import { defineConfig } from 'vitest/config';
export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts'],
    globals: false,
    isolate: true,
    maxWorkers: 1,
    fileParallelism: false
  }
});
