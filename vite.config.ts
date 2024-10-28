import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
	plugins: [
		viteStaticCopy({
			targets: [
				{
					src: "public/*",
					dest: ".",
				},
			],
		}),
	],
	build: {
		outDir: "dist",
		emptyOutDir: true,
		rollupOptions: {
			input: ["src/background.ts", "src/content-script.ts"],
			output: {
				preserveModules: false,
				entryFileNames: "[name].js",
			},
		},
	},
});
