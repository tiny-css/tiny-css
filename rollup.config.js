import typescript from "@rollup/plugin-typescript"

/**@type {import("rollup").RollupOptions}*/
const config = {
    input: "index.ts",
    output: {
        name: "bundle",
        dir: "dist",
        format: "iife",
    },
    plugins: [
        typescript()
    ],
}
export default config;