(function () {
  const root = document.querySelector(".blog-article-body");
  if (!root) return;

  const inlineMath = new Map([
    ["z_t", "z_t"],
    ["a_t", "a_t"],
    ["c_t", "c_t"],
    ["x_i", "x_i"],
    ["mean_g", "\\operatorname{mean}_g"],
    ["n_g", "n_g"],
    ["π*", "\\pi^\\star"]
  ]);

  const displayMath = new Map([
    ["z_(t+1) = f(z_t, a_t, c_t, ε_t)", "z_{t+1} = f(z_t, a_t, c_t, \\varepsilon_t)"],
    ["error = desired state - current state", "\\mathrm{error} = \\mathrm{desired\\ state} - \\mathrm{current\\ state}"],
    ["action = function(error)", "\\mathrm{action} = f(\\mathrm{error})"],
    ["π* = argmin J(π)", "\\pi^\\star = \\operatorname*{arg\\,min}_{\\pi} J(\\pi)"],
    ["state_t → action_t → state_(t+1)", "\\mathrm{state}_t \\rightarrow \\mathrm{action}_t \\rightarrow \\mathrm{state}_{t+1}"],
    ["parameters_t → experience → parameters_(t+1)", "\\mathrm{parameters}_t \\rightarrow \\mathrm{experience} \\rightarrow \\mathrm{parameters}_{t+1}"],
    ["state_t ∈ viable region", "\\mathrm{state}_t \\in \\mathrm{viable\\ region}"],
    ["Delta_(i,v,k) = response(edit_k) - response(control_k)", "\\Delta_{i,v,k} = \\operatorname{response}(\\mathrm{edit}_k) - \\operatorname{response}(\\mathrm{control}_k)"],
    ["margin = logit(A) - logit(B)", "\\mathrm{margin} = \\operatorname{logit}(A) - \\operatorname{logit}(B)"],
    ["paired brain target > nonlinear readout", "\\text{paired neural target} > \\text{nonlinear readout}"],
    ["paired brain target < best matched non-neural target", "\\text{paired neural target} < \\text{best matched non-neural target}"],
    ["paired brain target ≈ pairing-broken neural target", "\\text{paired neural target} \\approx \\text{pairing-broken neural target}"],
    ["prediction gain -> neural-specific representational improvement", "\\text{prediction gain} \\not\\Rightarrow \\text{neural-specific representational improvement}"],
    ["future user state = f(current user state, recommendation policy, context)", "\\text{future user state} = f(\\text{current user state}, \\text{recommendation policy}, \\text{context})"]
  ]);

  const blockMath = new Map([
    [
      "z_i = mean_g - (x_i - mean_g) / (n_g - 1)\n\nz_i - z_j = -(x_i - x_j) / (n_g - 1)",
      "\\begin{aligned} z_i &= \\operatorname{mean}_g - \\frac{x_i - \\operatorname{mean}_g}{n_g - 1} \\\\ z_i - z_j &= -\\frac{x_i - x_j}{n_g - 1} \\end{aligned}"
    ],
    [
      "z_i = mean(features of support images in group g)\n\nfor every query image i in group g",
      "\\begin{aligned} z_i &= \\operatorname{mean}\\!\\left(\\text{support-image features in group } g\\right), \\\\ &\\hspace{2em}\\text{for every query image } i \\text{ in group } g. \\end{aligned}"
    ]
  ]);

  root.querySelectorAll("pre > code").forEach(function (code) {
    const source = code.textContent.trim().replace(/\r\n/g, "\n");
    const tex = blockMath.get(source);
    if (!tex) return;

    const display = document.createElement("div");
    display.className = "legacy-math-display";
    display.textContent = "\\[" + tex + "\\]";
    code.parentElement.replaceWith(display);
  });

  root.querySelectorAll("code").forEach(function (code) {
    if (code.closest("pre")) return;
    const source = code.textContent.trim();

    if (displayMath.has(source)) {
      const tex = displayMath.get(source);
      const display = document.createElement("span");
      display.className = "legacy-math-display";
      display.textContent = "\\[" + tex + "\\]";

      const parent = code.parentElement;
      if (parent && parent.tagName === "P" && parent.textContent.trim() === source) {
        parent.replaceWith(display);
      } else {
        code.replaceWith(display);
      }
      return;
    }

    if (inlineMath.has(source)) {
      const math = document.createElement("span");
      math.className = "legacy-math-inline";
      math.textContent = "\\(" + inlineMath.get(source) + "\\)";
      code.replaceWith(math);
    }
  });
})();
