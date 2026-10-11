import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
  // lint-baseline:start
  {
    // Scoped to the file types that had errors: plugins may be registered only for them.
    files: ["**/*.{tsx,ts}"],
    // Existing code broke these rules when ESLint was added (2026-10-11, 10 errors —
    // see HANDOVER "Known issues"). Warnings until fixed; then delete this block.
    rules: {
      "react/no-unescaped-entities": "warn", // 5
      "react-hooks/set-state-in-effect": "warn", // 3
      "react-hooks/purity": "warn", // 1
      "@typescript-eslint/no-require-imports": "warn", // 1
    },
  },
  // lint-baseline:end
]);
