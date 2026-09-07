(function () {
  const root = document.querySelector(".blog-article-body");
  if (!root) return;

  const arrowPattern = /(↔|→|←)/g;

  root.querySelectorAll("p > code:only-child").forEach(function (code) {
    const source = code.textContent.trim();
    if (!source || !/[↔→←]/.test(source)) return;

    const parent = code.parentElement;
    if (!parent || parent.textContent.trim() !== source) return;

    const tokens = source.split(arrowPattern).map(function (token) {
      return token.trim();
    }).filter(Boolean);

    if (tokens.length < 3) return;

    const flow = document.createElement("div");
    flow.className = "concept-flow";
    flow.setAttribute("role", "img");
    flow.setAttribute("aria-label", source);

    tokens.forEach(function (token) {
      const span = document.createElement("span");
      if (/^(↔|→|←)$/.test(token)) {
        span.className = "concept-flow-arrow";
        span.setAttribute("aria-hidden", "true");
      } else {
        span.className = "concept-flow-node";
      }
      span.textContent = token;
      flow.appendChild(span);
    });

    parent.replaceWith(flow);
  });
})();
