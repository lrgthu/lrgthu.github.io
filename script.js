document.addEventListener("DOMContentLoaded", function () {
  const automaton = document.getElementById("cellular-automaton");

  if (automaton) {
    const ctx = automaton.getContext("2d");
    const cellSize = 5;
    const cols = Math.floor(automaton.width / cellSize);
    const rows = Math.floor(automaton.height / cellSize);
    let grid = [];
    let tick = 0;
    let stepsSinceSeed = 0;

    function seedAutomaton() {
      grid = Array.from({ length: rows }, function () {
        return Array.from({ length: cols }, function () {
          return Math.random() < 0.34 ? 1 : 0;
        });
      });
      tick = 0;
      stepsSinceSeed = 0;
    }

    function countNeighbors(x, y) {
      let count = 0;
      for (let yOffset = -1; yOffset <= 1; yOffset += 1) {
        for (let xOffset = -1; xOffset <= 1; xOffset += 1) {
          if (xOffset === 0 && yOffset === 0) {
            continue;
          }
          const nextX = (x + xOffset + cols) % cols;
          const nextY = (y + yOffset + rows) % rows;
          count += grid[nextY][nextX];
        }
      }
      return count;
    }

    function nextGeneration() {
      const next = Array.from({ length: rows }, function () {
        return new Array(cols).fill(0);
      });

      for (let y = 0; y < rows; y += 1) {
        for (let x = 0; x < cols; x += 1) {
          const alive = grid[y][x] === 1;
          const neighbors = countNeighbors(x, y);
          next[y][x] = neighbors === 3 || (alive && neighbors === 2) ? 1 : 0;
        }
      }

      grid = next;
      stepsSinceSeed += 1;
    }

    function drawAutomaton() {
      ctx.clearRect(0, 0, automaton.width, automaton.height);

      grid.forEach(function (row, y) {
        row.forEach(function (alive, x) {
          ctx.fillStyle = alive ? "#11100c" : "#f6f1df";
          ctx.fillRect(x * cellSize, y * cellSize, cellSize - 1, cellSize - 1);
        });
      });
    }

    function stepAutomaton() {
      nextGeneration();
      if (stepsSinceSeed > 260) {
        seedAutomaton();
      }
      drawAutomaton();
    }

    function animateAutomaton() {
      tick += 1;
      if (tick % 10 === 0) {
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
