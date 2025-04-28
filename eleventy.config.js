import { IdAttributePlugin, InputPathToUrlTransformPlugin, HtmlBasePlugin } from "@11ty/eleventy";
// Correct import for RSS plugin
import pluginRss from "@11ty/eleventy-plugin-rss";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginNavigation from "@11ty/eleventy-navigation";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import pluginSitemap from "@quasibit/eleventy-plugin-sitemap"; // Using quasibit sitemap
import pluginEmoji from "eleventy-plugin-emoji"; // Keep emoji plugin

// Assuming filters.js will be copied to _config/filters.js
import pluginFilters from "./_config/filters.js";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function(eleventyConfig) {
	// Drafts, see also _data/eleventyDataSchema.js (if we add it)
	// eleventyConfig.addPreprocessor("drafts", "*", (data, content) => {
	// 	if(data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
	// 		return false;
	// 	}
	// });

	// Passthrough copy
	// Copy contents of `public` from starter theme (mapped to root)
	// eleventyConfig.addPassthroughCopy({
	//	"./public/": "/" // Example from starter - we might not need this if assets are in css/ and assets/
	// });
	// Copy our existing `assets` folder (which includes css)
	eleventyConfig.addPassthroughCopy("assets");
	// Copy the starter theme's css folder (assuming it's copied to assets/css)
	// eleventyConfig.addPassthroughCopy("css", "assets/css"); // Copy css/ -> _site/assets/css
	// Copy feed stylesheet if used by feedPlugin
	// eleventyConfig.addPassthroughCopy("./content/feed/pretty-atom-feed.xsl"); // Adjust path if needed

	// Watch Targets
	eleventyConfig.addWatchTarget("assets/css/**/*.css");
	eleventyConfig.addWatchTarget("assets/**/*.{svg,webp,png,jpg,jpeg,gif}"); // Watch our assets dir
	// eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpg,jpeg,gif}"); // Starter watches 'content'

	// Per-page bundles (optional, from starter)
	// eleventyConfig.addBundle("css", { ... });
	// eleventyConfig.addBundle("js", { ... });

	// Official plugins from starter
	eleventyConfig.addPlugin(pluginSyntaxHighlight, {
		preAttributes: { tabindex: 0 }
	});
	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(HtmlBasePlugin); // Useful if using pathPrefix
	eleventyConfig.addPlugin(InputPathToUrlTransformPlugin); // Helps with URL generation

	// Feed Plugin (using @11ty/eleventy-plugin-rss)
	eleventyConfig.addPlugin(pluginRss, {
		type: "atom", // or "rss", "json"
		outputPath: "/feed.xml", // Simplified path
		// stylesheet: "/pretty-atom-feed.xsl", // Optional: path to stylesheet
		collection: {
			name: "posts", // Assumes a 'posts' collection exists
			limit: 10,
		},
		metadata: {
			language: "en",
			title: "Clem Lumber & Distributing Co Blog", // TODO: Get from metadata.js
			subtitle: "Updates and News", // TODO: Get from metadata.js
			base: "https://clemlumber.com", // Updated site URL
			author: {
				name: "Clem Lumber" // TODO: Get from metadata.js
			}
		}
	});

	// Sitemap Plugin (using quasibit)
	eleventyConfig.addPlugin(pluginSitemap, {
		sitemap: {
			hostname: "https://clemlumber.com", // Updated site URL
		},
	});

	// Emoji plugin (kept from original)
	eleventyConfig.addPlugin(pluginEmoji);

	// Image optimization (optional, from starter)
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		formats: ["avif", "webp", "auto"],
		// widths: ["auto"],
		defaultAttributes: {
			loading: "lazy",
			decoding: "async",
		},
		// urlPath: "/assets/images/", // Adjust if images aren't in root output
		// outputDir: "./_site/assets/images/", // Adjust if images aren't in root output
		sharpOptions: {
			animated: true,
		},
		failOnError: false, // Recommended for build stability
	});

	// Filters (from starter's _config/filters.js)
	eleventyConfig.addPlugin(pluginFilters);

	// Heading ID plugin (from starter)
	eleventyConfig.addPlugin(IdAttributePlugin, {
		// selector: "h1,h2,h3,h4,h5,h6", // default
	});

	// Shortcodes
	eleventyConfig.addShortcode("currentBuildDate", () => {
		return (new Date()).toISOString();
	});
	// Add other shortcodes from starter if needed

	// Collections
	// Example: Posts collection from starter (adjust glob pattern if needed)
	eleventyConfig.addCollection("posts", function(collectionApi) {
		return collectionApi.getFilteredByGlob("./posts/**/*.md"); // Or wherever posts live
	});
	// Example: Tags collection from starter
	eleventyConfig.addCollection("tagList", function(collectionApi) {
		let tagSet = new Set();
		collectionApi.getAll().forEach(item => {
			(item.data.tags || []).forEach(tag => tagSet.add(tag));
		});
		return [...tagSet].sort();
	});


	// --- Server Passthrough ---
	// eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
};

// Export base config settings separately
export const config = {
	templateFormats: [
		"md",
		"njk",
		"html",
		"liquid", // Keep liquid for compatibility if needed
		// "11ty.js", // If using JS templates
	],

	// Default template engines
	markdownTemplateEngine: "njk",
	htmlTemplateEngine: "njk",

	// Directory settings aligned with our project
	dir: {
		input: ".",
		includes: "_includes",
		data: "_data",
		output: "_site"
	},

	// Optional: Path Prefix
	// pathPrefix: "/",
}; 