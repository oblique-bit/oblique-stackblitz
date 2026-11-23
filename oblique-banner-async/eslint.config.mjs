/**
 * @file Oblique, The front-end framework for your Swiss branded UI.
 * @copyright 2020 - 2026 Federal Office of Information Technology, Systems and Telecommunication FOITT {@link https://www.bit.admin.ch}
 * @version 16.0.0-rc.2 (released on 2026-09-21, supported at least until 2027-09-30)
 * @author Oblique team, FOITT, BS-BSC-EN4 <oblique@bit.admin.ch>
 * @license MIT {@link https://github.com/oblique-bit/oblique/blob/master/LICENSE}
 * @see https://oblique.bit.admin.ch
 */

// @ts-check
import { defineConfig } from "eslint/config";
import {
  eslintConfigOblique,
  eslintObliquePlugins,
} from "@oblique/toolchain/eslint-config";

export default defineConfig([
  ...eslintConfigOblique,
  {
    files: ["**/*.ts"],
    plugins: eslintObliquePlugins,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],

      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      "@angular-eslint/prefer-standalone": "off", // currently not supported by Oblique
    },
  },
]);
