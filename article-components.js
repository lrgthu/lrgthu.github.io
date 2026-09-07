(function () {
  const root = document.querySelector(".blog-article-body");
  if (!root) return;

  const arrowPattern = /(↔|→|←)/g;

  function makeComponent(className, label) {
    const element = document.createElement("div");
    element.className = className;
    element.setAttribute("role", "group");
    element.setAttribute("aria-label", label);
    return element;
  }

  function addPart(parent, className, text, hidden) {
    const span = document.createElement("span");
    span.className = className;
    if (hidden) span.setAttribute("aria-hidden", "true");
    span.textContent = text;
    parent.appendChild(span);
  }

  root.querySelectorAll("p > code:only-child").forEach(function (code) {
    const source = code.textContent.trim();
    if (!source) return;

    const parent = code.parentElement;
    if (!parent || parent.textContent.trim() !== source) return;

    /* Directional causal/process chains. */
    if (/[↔→←]/.test(source)) {
      const tokens = source.split(arrowPattern).map(function (token) {
        return token.trim();
      }).filter(Boolean);

      if (tokens.length >= 3) {
        const flow = makeComponent("concept-flow", source);
        tokens.forEach(function (token) {
          if (/^(↔|→|←)$/.test(token)) {
            addPart(flow, "concept-flow-arrow", token, true);
          } else {
            addPart(flow, "concept-flow-node", token, false);
          }
        });
        parent.replaceWith(flow);
        return;
      }
    }

    /* System composition: parts that jointly constitute an effective system. */
    if (source.includes(" + ") && !/[=<>≠≈]/.test(source)) {
      const parts = source.split(" + ").map(function (part) {
        return part.trim();
      }).filter(Boolean);

      if (parts.length >= 3) {
        const composition = makeComponent("concept-composition", source);
        parts.forEach(function (part, index) {
          if (index > 0) addPart(composition, "concept-composition-separator", "+", true);
          addPart(composition, "concept-composition-part", part, false);
        });
        parent.replaceWith(composition);
        return;
      }
    }

    /* Natural-language contrasts are conceptual, not mathematical equations. */
    if (source.includes(" ≠ ")) {
      const sides = source.split(" ≠ ");
      if (sides.length === 2 && sides[0].trim() && sides[1].trim()) {
        const contrast = makeComponent("concept-contrast", source);
        addPart(contrast, "concept-contrast-side", sides[0].trim(), false);
        addPart(contrast, "concept-contrast-operator", "≠", true);
        addPart(contrast, "concept-contrast-side", sides[1].trim(), false);
        parent.replaceWith(contrast);
        return;
      }
    }

    /* Short verbal propositions: relation is linguistic rather than directional. */
    const proposition = source.match(/^(.+?)\s+(replaces|becomes)\s+(.+)$/i);
    if (proposition) {
      const statement = makeComponent("concept-proposition", source);
      addPart(statement, "concept-proposition-subject", proposition[1].trim(), false);
      addPart(statement, "concept-proposition-relation", proposition[2].toLowerCase(), false);
      addPart(statement, "concept-proposition-object", proposition[3].trim(), false);
      parent.replaceWith(statement);
    }
  });
})();
