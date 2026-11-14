import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  // Rewrites root-relative links (/about/) for the GitHub Pages sub-path (/teaming/about/).
  eleventyConfig.addPlugin(HtmlBasePlugin);

  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  // Give every Markdown heading an id, so sections can be linked to (e.g. /facilitating/cards-exercise/#optional-ai-round).
  let md;
  const slugify = eleventyConfig.getFilter("slugify");
  eleventyConfig.amendLibrary("md", (lib) => {
    md = lib;
    lib.core.ruler.push("heading_ids", (state) => {
      state.tokens.forEach((token, i) => {
        if (token.type === "heading_open" && !token.attrGet("id")) {
          token.attrSet("id", slugify(state.tokens[i + 1].content));
        }
      });
    });
  });

  const byOrder = (a, b) => (a.data.order ?? 0) - (b.data.order ?? 0);
  eleventyConfig.addCollection("workshops", (api) =>
    api.getFilteredByTag("workshop").filter((p) => !p.data.additional).sort(byOrder));
  eleventyConfig.addCollection("additionalWorkshops", (api) =>
    api.getFilteredByTag("workshop").filter((p) => p.data.additional).sort(byOrder));

  // {% sessionPlan plan %} renders the `plan` list from a page's front matter.
  // Start times are calculated when every step has a numeric `minutes`; otherwise steps are numbered.
  eleventyConfig.addShortcode("sessionPlan", (plan = []) => {
    const timed = plan.length > 0 && plan.every((s) => typeof s.minutes === "number");
    let elapsed = 0;
    const items = plan.map((step, i) => {
      const marker = timed ? `${Math.floor(elapsed / 60)}:${String(elapsed % 60).padStart(2, "0")}` : i + 1;
      if (typeof step.minutes === "number") elapsed += step.minutes;
      const duration = step.minutes != null ? `<span class="d">${step.minutes} min</span>` : "";
      const notes = step.notes ? `<p>${md.renderInline(String(step.notes))}</p>` : "";
      return `<li><span class="t">${marker}</span><div><b>${md.renderInline(step.title)}</b>${duration}${notes}</div></li>`;
    });
    const total = timed ? `<p class="total">Total ${Math.floor(elapsed / 60)} h${elapsed % 60 ? ` ${elapsed % 60} min` : ""}</p>` : "";
    return `<ol class="plan">${items.join("")}</ol>${total}`;
  });
}

export const config = {
  dir: { input: "src", includes: "_includes", data: "_data", output: "_site" },
  markdownTemplateEngine: "njk",
  htmlTemplateEngine: "njk",
  // Set by the GitHub Pages workflow, e.g. "/teaming/". Defaults to "/" for local preview.
  pathPrefix: process.env.PATH_PREFIX || "/",
};
