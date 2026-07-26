document.addEventListener("DOMContentLoaded", function () {
  const automaton = document.getElementById("cellular-automaton");

  if (automaton) {
    const ctx = automaton.getContext("2d");
    const cellSize = 3;
    const cols = Math.floor(automaton.width / cellSize);
    const rows = Math.floor(automaton.height / cellSize);
    let generation = new Array(cols).fill(0);
    let history = [];
    let tick = 0;

    function seedAutomaton() {
      generation = new Array(cols).fill(0);
      generation[Math.floor(cols / 2)] = 1;
      history = [generation.slice()];
      tick = 0;
    }

    function nextGeneration(current) {
      const next = new Array(cols).fill(0);
      for (let index = 0; index < cols; index += 1) {
        const left = current[(index - 1 + cols) % cols];
        const center = current[index];
        const right = current[(index + 1) % cols];
        next[index] = left ^ (center || right);
      }
      return next;
    }

    function drawAutomaton() {
      ctx.fillStyle = "#ede5c9";
      ctx.fillRect(0, 0, automaton.width, automaton.height);
      ctx.fillStyle = "#201c14";

      history.forEach(function (row, y) {
        row.forEach(function (alive, x) {
          if (alive) {
            ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
          }
        });
      });
    }

    function stepAutomaton() {
      generation = nextGeneration(generation);
      history.push(generation.slice());
      if (history.length > rows) {
        history.shift();
      }
      drawAutomaton();
    }

    function animateAutomaton() {
      tick += 1;
      if (tick % 8 === 0) {
        stepAutomaton();
      }
      window.requestAnimationFrame(animateAutomaton);
    }

    seedAutomaton();
    drawAutomaton();
    automaton.addEventListener("click", seedAutomaton);
    automaton.addEventListener("touchstart", seedAutomaton, { passive: true });

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.requestAnimationFrame(animateAutomaton);
    }
  }

  const container = document.getElementById("coauthor-graph");

  if (container && typeof vis !== "undefined") {
    function buildColors() {
      return {
        coauthor: {
          color: {
            background: "#efe3c5",
            border: "#7c6b4d",
            highlight: { background: "#f7f1df", border: "#8b1a1a" },
            hover: { background: "#f7f1df", border: "#8b1a1a" }
          },
          font: { color: "#17130c", size: 12, face: "Times New Roman, serif" }
        },
        ruogu: {
          color: {
            background: "#8b1a1a",
            border: "#17130c",
            highlight: { background: "#a62424", border: "#17130c" },
            hover: { background: "#a62424", border: "#17130c" }
          },
          font: { color: "#fffaf0", size: 14, face: "Times New Roman, serif", bold: true }
        },
        edge: {
          color: "#7c6b4d",
          hover: "#8b1a1a",
          highlight: "#8b1a1a"
        }
      };
    }

    function edgeColor(edgeColors) {
      return {
        color: edgeColors.color,
        hover: edgeColors.hover,
        highlight: edgeColors.highlight,
        inherit: false
      };
    }

    const networkOptions = {
      nodes: {
        shape: "dot",
        borderWidth: 2,
        borderWidthSelected: 3
      },
      edges: {
        smooth: { type: "continuous" }
      },
      physics: {
        enabled: true,
        barnesHut: {
          gravitationalConstant: -4000,
          centralGravity: 0.6,
          springLength: 80,
          springConstant: 0.06,
          damping: 0.12,
          avoidOverlap: 0.3
        },
        stabilization: { iterations: 250, fit: true }
      },
      interaction: {
        hover: true,
        tooltipDelay: 150,
        hideEdgesOnDrag: false,
        zoomView: true,
        dragView: true
      },
      layout: {
        improvedLayout: true
      }
    };

    fetch("scripts/coauthors.json")
      .then(function (response) { return response.json(); })
      .then(function (data) {
        const colors = buildColors();
        const coauthorNames = Object.keys(data.coauthors);
        const nameToId = {};
        const nodeList = [
          { id: 0, label: "Ruogu Lin", size: 28, shape: "dot", color: colors.ruogu.color, font: colors.ruogu.font }
        ];

        coauthorNames.forEach(function (name, index) {
          const id = index + 1;
          const count = data.coauthors[name];
          nameToId[name] = id;
          nodeList.push({
            id: id,
            label: name,
            size: Math.max(12, Math.min(24, 10 + count * 2)),
            shape: "dot",
            color: colors.coauthor.color,
            font: colors.coauthor.font
          });
        });

        const edgeList = [];
        coauthorNames.forEach(function (name) {
          const count = data.coauthors[name];
          edgeList.push({
            from: 0,
            to: nameToId[name],
            width: Math.min(4, count),
            smooth: { type: "continuous" },
            color: edgeColor(colors.edge)
          });
        });

        data.coauthor_pairs.forEach(function (pair) {
          const id1 = nameToId[pair[0]];
          const id2 = nameToId[pair[1]];
          if (id1 !== undefined && id2 !== undefined) {
            edgeList.push({
              from: id1,
              to: id2,
              dashes: true,
              width: 0.8,
              smooth: { type: "continuous" },
              color: edgeColor(colors.edge)
            });
          }
        });

        const nodes = new vis.DataSet(nodeList);
        const edges = new vis.DataSet(edgeList);
        new vis.Network(container, { nodes, edges }, networkOptions);

        new MutationObserver(function () {
          const nextColors = buildColors();
          const updates = [{ id: 0, color: nextColors.ruogu.color, font: nextColors.ruogu.font }];
          coauthorNames.forEach(function (name) {
            updates.push({ id: nameToId[name], color: nextColors.coauthor.color, font: nextColors.coauthor.font });
          });
          nodes.update(updates);
          const nextEdgeColor = edgeColor(nextColors.edge);
          edges.update(edges.getIds().map(function (id) {
            return { id: id, color: nextEdgeColor };
          }));
        }).observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
      })
      .catch(function () {
        container.innerHTML = '<p class="network-fallback">Co-author network unavailable because the graph data could not be loaded.</p>';
      });
  } else if (container) {
    container.innerHTML = '<p class="network-fallback">Co-author network unavailable because the visualization library did not load.</p>';
  }
});
