document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("coauthor-graph");

  if (container && typeof vis !== "undefined") {
    function buildColors() {
      const light = document.documentElement.classList.contains("light");
      return {
        coauthor: {
          color: {
            background: light ? "#dde8f5" : "#2d333b",
            border: light ? "#9bbde0" : "#4d5566",
            highlight: { background: light ? "#c8daf0" : "#373e47", border: light ? "#0969da" : "#4f8ef7" },
            hover: { background: light ? "#c8daf0" : "#373e47", border: light ? "#0969da" : "#4f8ef7" }
          },
          font: { color: light ? "#1f2328" : "#c9d1d9", size: 12, face: "Inter, sans-serif" }
        },
        ruogu: {
          color: {
            background: light ? "#0969da" : "#2d5aa8",
            border: light ? "#0550ae" : "#4f8ef7",
            highlight: { background: light ? "#1a7fe8" : "#3d6ab8", border: light ? "#0969da" : "#6aa3ff" },
            hover: { background: light ? "#1a7fe8" : "#3d6ab8", border: light ? "#0969da" : "#6aa3ff" }
          },
          font: { color: light ? "#1f2328" : "#ffffff", size: 14, face: "Inter, sans-serif", bold: true }
        },
        edge: {
          color: light ? "#9bbde0" : "#4d5566",
          hover: light ? "#0969da" : "#4f8ef7",
          highlight: light ? "#0969da" : "#4f8ef7"
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
