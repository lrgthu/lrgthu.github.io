(function () {
  "use strict";

  const PALETTE = {
    paper: "#f7f3e9",
    paperTint: "#efe9da",
    ink: "#1d1b17",
    inkSoft: "#302d26",
    muted: "#6a6254",
    rule: "#b8b09f",
    ruleLight: "#dcd5c6",
    green: "#24483b",
    greenFill: "rgba(36, 72, 59, 0.11)",
    oxblood: "#7a3428",
    oxbloodFill: "rgba(122, 52, 40, 0.12)",
    serif: 'Baskerville, "Iowan Old Style", Georgia, serif',
    mono: '"Courier New", Courier, monospace'
  };

  const reducedMotion = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function setupHiDPICanvas(canvas, cssWidth, cssHeight) {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.max(260, Math.floor(cssWidth));
    const h = Math.max(200, Math.floor(cssHeight));
    if (canvas.width !== Math.floor(w * dpr) || canvas.height !== Math.floor(h * dpr)) {
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.height = h + "px";
    }
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { ctx: ctx, w: w, h: h };
  }

  function drawArrowhead(ctx, x, y, angle, size, color) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-size, -size * 0.52);
    ctx.lineTo(-size * 0.78, 0);
    ctx.lineTo(-size, size * 0.52);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  /* =========================================================================
   * LIVING PLATE I — Boundary Caliper (01: Where the Loop Closes)
   * ========================================================================= */
  function initBoundaryCaliper(root) {
    root.innerHTML = "";

    const header = el("div", "living-plate-header");
    header.appendChild(el("span", "living-plate-kicker", "Interactive Plate I · Counterfactual Boundary Caliper"));
    header.appendChild(el("span", "living-plate-hint", "Click rings or buttons to move the cut"));
    root.appendChild(header);

    const stage = el("div", "living-plate-stage");
    const canvas = el("canvas", "living-plate-canvas");
    canvas.setAttribute("aria-label", "Interactive nested-loop boundary diagram across four timescales");
    stage.appendChild(canvas);
    root.appendChild(stage);

    const controls = el("div", "living-plate-controls");
    const phenGroup = el("div", "living-plate-group");
    phenGroup.appendChild(el("span", "living-plate-label", "Phenomenon:"));

    const phenomena = [
      { label: "Word (200 ms)", req: 1, leak: [0.03, 0.02, 0.01, 0.01], desc: "Controlled lexical recognition stays nearly stationary outside one cortical network." },
      { label: "Dialogue (sec)", req: 2, leak: [0.58, 0.04, 0.02, 0.01], desc: "Pragmatic repair updates shared dyadic state; a single-brain boundary misses partner feedback." },
      { label: "Acquisition (yr)", req: 3, leak: [0.76, 0.49, 0.04, 0.02], desc: "Child language learning couples neural plasticity to years of structured communicative input." },
      { label: "Syntax / Agent", req: 4, leak: [0.84, 0.67, 0.44, 0.04], desc: "Emergent grammar and deployed compound AI close only across cultural corpora, tools, and user return loops." }
    ];

    const rings = [
      { idx: 1, short: "R1 Cortical", clock: "200 ms", speed: 1.9 },
      { idx: 2, short: "R2 Dyadic", clock: "sec–min", speed: 1.05 },
      { idx: 3, short: "R3 Ontogenetic", clock: "years", speed: 0.52 },
      { idx: 4, short: "R4 Cultural / System", clock: "generations", speed: 0.24 }
    ];

    let phenIdx = 2; // First-language acquisition
    let cut = 1;     // Initially too narrow so the leak is immediately visible
    let phase = 0.35;

    const phenBtns = phenomena.map(function (p, i) {
      const b = el("button", "living-plate-btn", p.label);
      b.type = "button";
      b.addEventListener("click", function () {
        phenIdx = i;
        syncButtons();
        render();
      });
      phenGroup.appendChild(b);
      return b;
    });
    controls.appendChild(phenGroup);

    const cutGroup = el("div", "living-plate-group");
    cutGroup.appendChild(el("span", "living-plate-label", "Boundary Cut:"));
    const cutBtns = rings.map(function (r) {
      const b = el("button", "living-plate-btn", "R" + r.idx);
      b.type = "button";
      b.title = r.short + " (" + r.clock + ")";
      b.addEventListener("click", function () {
        cut = r.idx;
        syncButtons();
        render();
      });
      cutGroup.appendChild(b);
      return b;
    });
    controls.appendChild(cutGroup);
    root.appendChild(controls);

    const readout = el("p", "living-plate-readout");
    root.appendChild(readout);

    function syncButtons() {
      phenBtns.forEach(function (b, i) { b.setAttribute("aria-pressed", i === phenIdx ? "true" : "false"); });
      cutBtns.forEach(function (b, i) { b.setAttribute("aria-pressed", (i + 1) === cut ? "true" : "false"); });

      const p = phenomena[phenIdx];
      const residual = p.leak[cut - 1];
      if (cut < p.req) {
        readout.innerHTML =
          '<strong class="status-warn">[Truncated Boundary · Residual Leverage ' + residual.toFixed(2) + ']</strong> ' +
          p.desc + " Variables outside R" + cut + " still drive state transitions across the cut.";
      } else if (cut === p.req) {
        readout.innerHTML =
          '<strong class="status-ok">[Minimal Adequate Boundary · Residual ' + residual.toFixed(2) + ']</strong> ' +
          p.desc + " R" + cut + " closes the loop without excess outer degrees of freedom.";
      } else {
        readout.innerHTML =
          '<strong class="status-muted">[Over-Wide Boundary · Residual ' + residual.toFixed(2) + ']</strong> ' +
          "Loop is closed, but R" + cut + " includes slower outer scales unnecessary for interventions at R" + p.req + ".";
      }
    }

    canvas.addEventListener("click", function (ev) {
      const rect = canvas.getBoundingClientRect();
      const x = ev.clientX - rect.left;
      const y = ev.clientY - rect.top;
      const stacked = rect.width < 520;
      const cx = stacked ? rect.width * 0.5 : rect.width * 0.31;
      const cy = stacked ? 128 : rect.height * 0.52;
      const maxR = stacked ? Math.min(rect.width * 0.38, 102) : Math.min(rect.width * 0.25, rect.height * 0.41);
      const dist = Math.hypot(x - cx, y - cy);
      if (dist <= maxR * 1.15) {
        const ratio = dist / maxR;
        const picked = Math.max(1, Math.min(4, Math.ceil(ratio * 4)));
        cut = picked;
        syncButtons();
        render();
      }
    });

    function render() {
      const width = stage.clientWidth || 640;
      const stacked = width < 520;
      const height = stacked ? 400 : 268;
      const surface = setupHiDPICanvas(canvas, width, height);
      const ctx = surface.ctx;
      const w = surface.w;
      const h = surface.h;

      ctx.fillStyle = PALETTE.paper;
      ctx.fillRect(0, 0, w, h);

      const p = phenomena[phenIdx];
      const cx = stacked ? w * 0.5 : w * 0.31;
      const cy = stacked ? 128 : h * 0.53;
      const maxR = stacked ? Math.min(w * 0.38, 98) : Math.min(w * 0.24, h * 0.40);
      const radii = [0.26, 0.50, 0.75, 1.0].map(function (f) { return f * maxR; });

      // Shaded interior of chosen boundary cut
      const cutRadius = radii[cut - 1] + maxR * 0.11;
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, cutRadius, 0, Math.PI * 2);
      ctx.fillStyle = cut < p.req ? PALETTE.oxbloodFill : PALETTE.greenFill;
      ctx.fill();
      ctx.restore();

      // Draw 4 nested rings
      rings.forEach(function (r, idx) {
        const rad = radii[idx];
        const activeInPhenomenon = r.idx <= p.req;
        const insideCut = r.idx <= cut;

        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy, rad, 0, Math.PI * 2);
        ctx.strokeStyle = activeInPhenomenon ? PALETTE.ink : PALETTE.rule;
        ctx.lineWidth = insideCut ? 1.35 : 0.95;
        if (!activeInPhenomenon) ctx.setLineDash([2, 3]);
        ctx.stroke();
        ctx.restore();

        // Orbiting state node(s)
        const count = idx + 2;
        for (let k = 0; k < count; k += 1) {
          const ang = phase * r.speed * (idx % 2 === 0 ? 1 : -1) + (k * Math.PI * 2) / count;
          const nx = cx + Math.cos(ang) * rad;
          const ny = cy + Math.sin(ang) * rad;
          ctx.beginPath();
          ctx.arc(nx, ny, activeInPhenomenon ? 3.0 : 2.1, 0, Math.PI * 2);
          ctx.fillStyle = !activeInPhenomenon
            ? PALETTE.rule
            : insideCut
              ? PALETTE.ink
              : PALETTE.oxblood;
          ctx.fill();
        }
      });

      // Draw causal return-path arrows leaking across the truncated boundary!
      if (cut < p.req) {
        const leakAngles = [-0.55, 0.62, 2.55, -2.45];
        leakAngles.forEach(function (a, i) {
          const rIn = radii[cut - 1] - 4;
          const rOut = radii[Math.min(3, p.req - 1)] + 2;
          const x1 = cx + Math.cos(a) * rOut;
          const y1 = cy + Math.sin(a) * rOut;
          const x2 = cx + Math.cos(a) * rIn;
          const y2 = cy + Math.sin(a) * rIn;
          ctx.save();
          ctx.strokeStyle = PALETTE.oxblood;
          ctx.lineWidth = 1.45;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
          const dir = i % 2 === 0 ? Math.atan2(y2 - y1, x2 - x1) : Math.atan2(y1 - y2, x1 - x2);
          drawArrowhead(ctx, i % 2 === 0 ? x2 : x1, i % 2 === 0 ? y2 : y1, dir, 6.5, PALETTE.oxblood);
          ctx.restore();
        });
      }

      // Draw the Boundary Caliper dashed/solid circle
      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, cutRadius, 0, Math.PI * 2);
      ctx.strokeStyle = cut < p.req ? PALETTE.oxblood : cut === p.req ? PALETTE.green : PALETTE.muted;
      ctx.lineWidth = 2.0;
      ctx.setLineDash(cut === p.req ? [] : [6, 4]);
      ctx.stroke();
      ctx.restore();

      // Title above concentric diagram
      ctx.fillStyle = PALETTE.muted;
      ctx.font = "700 10px " + PALETTE.mono;
      ctx.textAlign = "center";
      ctx.fillText("NESTED CAUSAL CLOCKS (R1–R4)", cx, stacked ? 18 : 20);

      // Right/Bottom panel: Counterfactual Leverage Across Scales
      const rx = stacked ? 24 : Math.floor(w * 0.58);
      const rw = stacked ? w - 48 : Math.floor(w * 0.38);
      const ry = stacked ? 256 : 38;

      ctx.textAlign = "left";
      ctx.fillStyle = PALETTE.muted;
      ctx.font = "700 10px " + PALETTE.mono;
      ctx.fillText("UNMODELED RETURN-PATH LEVERAGE", rx, ry - 10);

      const barGap = stacked ? 30 : 46;
      rings.forEach(function (r, i) {
        const y = ry + 12 + i * barGap;
        const barMaxW = rw - 52;
        // Contribution of scale r.idx when boundary is placed at `cut`
        let leakVal = 0.02;
        if (r.idx > cut && r.idx <= p.req) {
          leakVal = p.leak[cut - 1] * (r.idx === p.req ? 0.95 : 0.68);
        } else if (r.idx <= cut && r.idx <= p.req) {
          leakVal = 0.04;
        }

        ctx.fillStyle = r.idx <= cut ? PALETTE.ink : PALETTE.muted;
        ctx.font = "11px " + PALETTE.mono;
        ctx.fillText(r.short + " (" + r.clock + ")", rx, y);

        const trackY = y + 6;
        ctx.fillStyle = PALETTE.paperTint;
        ctx.fillRect(rx, trackY, barMaxW, 8);
        ctx.strokeStyle = PALETTE.rule;
        ctx.lineWidth = 0.75;
        ctx.strokeRect(rx, trackY, barMaxW, 8);

        const fillW = Math.max(2, barMaxW * Math.min(1, leakVal));
        ctx.fillStyle = leakVal > 0.12 ? PALETTE.oxblood : PALETTE.green;
        ctx.fillRect(rx, trackY, fillW, 8);

        ctx.fillStyle = leakVal > 0.12 ? PALETTE.oxblood : PALETTE.muted;
        ctx.font = "700 10px " + PALETTE.mono;
        ctx.fillText(leakVal > 0.12 ? "LEAK" : (r.idx <= cut ? "IN" : "IDLE"), rx + barMaxW + 8, trackY + 7.5);
      });
    }

    syncButtons();
    render();

    if (!reducedMotion) {
      let rafId = null;
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            if (!rafId) {
              const tick = function () {
                phase += 0.012;
                render();
                rafId = window.requestAnimationFrame(tick);
              };
              rafId = window.requestAnimationFrame(tick);
            }
          } else if (rafId) {
            window.cancelAnimationFrame(rafId);
            rafId = null;
          }
        });
      }, { threshold: 0.08 });
      observer.observe(root);
    }

    window.addEventListener("resize", render);
  }

  /* =========================================================================
   * LIVING PLATE II — Perturbation Falsifier (02: When the World Pushes Back)
   * ========================================================================= */
  function initPerturbationFalsifier(root) {
    root.innerHTML = "";

    const header = el("div", "living-plate-header");
    header.appendChild(el("span", "living-plate-kicker", "Interactive Plate II · Closed-Loop Perturbation Falsifier"));
    header.appendChild(el("span", "living-plate-hint", "Offline Brain-Score = 0.94 for both models"));
    root.appendChild(header);

    const stage = el("div", "living-plate-stage");
    const canvas = el("canvas", "living-plate-canvas");
    canvas.setAttribute("aria-label", "Closed-loop reaching trajectories comparing forward state estimation against reflex shortcut under delay");
    stage.appendChild(canvas);
    root.appendChild(stage);

    let delayMs = 90;       // Default shows intention tremor immediately!
    let lesion = 0.0;       // 0 or 0.55 subspace silencing

    const controls = el("div", "living-plate-controls");
    const presetGroup = el("div", "living-plate-group");
    presetGroup.appendChild(el("span", "living-plate-label", "Regime:"));

    const btnUnperturbed = el("button", "living-plate-btn", "Unperturbed (0 ms)");
    btnUnperturbed.type = "button";
    const btnDelayed = el("button", "living-plate-btn", "Loop Delay (90 ms)");
    btnDelayed.type = "button";
    const btnLesion = el("button", "living-plate-btn", "Silence Aligned Subspace");
    btnLesion.type = "button";

    presetGroup.appendChild(btnUnperturbed);
    presetGroup.appendChild(btnDelayed);
    presetGroup.appendChild(btnLesion);
    controls.appendChild(presetGroup);

    const sliderWrap = el("label", "living-plate-slider-wrap");
    sliderWrap.appendChild(el("span", "living-plate-label", "Delay τ:"));
    const slider = el("input", "living-plate-slider");
    slider.type = "range";
    slider.min = "0";
    slider.max = "130";
    slider.step = "5";
    slider.value = String(delayMs);
    const valSpan = el("span", "living-plate-value", delayMs + " ms");
    sliderWrap.appendChild(slider);
    sliderWrap.appendChild(valSpan);
    controls.appendChild(sliderWrap);
    root.appendChild(controls);

    const readout = el("p", "living-plate-readout");
    root.appendChild(readout);

    function simulate(tauMs, subspaceSilence) {
      const dt = 0.002; // 2 ms
      const steps = 450; // 900 ms total
      const delaySteps = Math.round((tauMs / 1000) / dt);
      const yA = new Float32Array(steps);
      const yB = new Float32Array(steps);

      // Model A: internal forward predictor compensates delay; relies causally on aligned subspace
      let posA = 0, velA = 0, hatPosA = 0, hatVelA = 0;
      const causalGain = 1.0 - 0.72 * subspaceSilence;

      // Model B: aligned subspace is passive readout; control uses uncompensated delayed sensory error
      let posB = 0, velB = 0;

      for (let i = 0; i < steps; i += 1) {
        const tMs = i * 2;
        const target = tMs >= 100 ? 1.0 : 0.0;
        const delayedIdx = Math.max(0, i - delaySteps);
        const delayedTarget = delayedIdx * 2 >= 100 ? 1.0 : 0.0;

        // Model A blends internal forward state estimate with delayed sensory innovation
        const sensErrA = (yA[delayedIdx] - hatPosA) * 0.18;
        const uA = causalGain * (68.0 * (target - hatPosA) - 13.8 * hatVelA) - 10.0 * sensErrA;
        const accA = uA - 5.2 * velA;
        velA += accA * dt;
        posA += velA * dt;
        // Internal forward model advances slightly impaired only if subspace is silenced
        hatVelA += (uA * causalGain - 5.2 * hatVelA) * dt;
        hatPosA += hatVelA * dt + 0.08 * (yA[delayedIdx] - hatPosA) * dt * 30;
        yA[i] = posA;

        // Model B reflex shortcut driven purely by delayed error (subspace silencing does nothing to its motor loop!)
        const obsErrB = delayedTarget - yB[delayedIdx];
        const prevIdx = Math.max(0, delayedIdx - 1);
        const obsVelB = (yB[delayedIdx] - yB[prevIdx]) / dt;
        const uB = 70.0 * obsErrB - 8.6 * obsVelB;
        const accB = uB - 4.4 * velB;
        velB += accB * dt;
        posB += velB * dt;
        yB[i] = Math.max(-0.6, Math.min(2.05, posB));
      }
      return { yA: yA, yB: yB, steps: steps };
    }

    function syncUI() {
      valSpan.textContent = delayMs + " ms";
      slider.value = String(delayMs);
      btnUnperturbed.setAttribute("aria-pressed", (delayMs === 0 && lesion === 0) ? "true" : "false");
      btnDelayed.setAttribute("aria-pressed", (delayMs === 90 && lesion === 0) ? "true" : "false");
      btnLesion.setAttribute("aria-pressed", lesion > 0 ? "true" : "false");

      if (lesion > 0) {
        readout.innerHTML =
          '<strong class="status-warn">[Causal Subspace Intervention]</strong> Silencing the parietal-aligned subspace degrades Model A’s reach directly, whereas Model B moves unchanged—exposing Model B’s brain-like geometry as an epiphenomenal passenger.';
      } else if (delayMs < 20) {
        readout.innerHTML =
          '<strong class="status-muted">[Open-Loop / Unperturbed Indistinguishability]</strong> At τ = ' + delayMs +
          ' ms, Model A and Model B trace virtually identical kinematics and tie on static neural alignment (RSA = 0.94).';
      } else {
        readout.innerHTML =
          '<strong class="status-ok">[Closed-Loop Falsification at τ = ' + delayMs + ' ms]</strong> ' +
          'Model A stabilizes via internal forward state estimation; Model B’s reflex shortcut overshoots into Wiener’s intention tremor.';
      }
    }

    btnUnperturbed.addEventListener("click", function () {
      delayMs = 0;
      lesion = 0;
      syncUI();
      render();
    });
    btnDelayed.addEventListener("click", function () {
      delayMs = 90;
      lesion = 0;
      syncUI();
      render();
    });
    btnLesion.addEventListener("click", function () {
      delayMs = 0;
      lesion = lesion > 0 ? 0 : 1.0;
      syncUI();
      render();
    });
    slider.addEventListener("input", function () {
      delayMs = Number(slider.value);
      lesion = 0;
      syncUI();
      render();
    });

    function render() {
      const width = stage.clientWidth || 640;
      const height = width < 520 ? 275 : 252;
      const surface = setupHiDPICanvas(canvas, width, height);
      const ctx = surface.ctx;
      const w = surface.w;
      const h = surface.h;

      ctx.fillStyle = PALETTE.paper;
      ctx.fillRect(0, 0, w, h);

      const padL = 48, padR = 22, padT = 38, padB = 34;
      const pw = w - padL - padR;
      const ph = h - padT - padB;

      const sim = simulate(delayMs, lesion);
      const yMin = -0.25, yMax = 1.75;
      const xOf = function (i) { return padL + (i / (sim.steps - 1)) * pw; };
      const yOf = function (v) { return padT + (1 - (v - yMin) / (yMax - yMin)) * ph; };

      // Gridlines & target step
      ctx.strokeStyle = PALETTE.ruleLight;
      ctx.lineWidth = 1;
      [0, 0.5, 1.0, 1.5].forEach(function (g) {
        const gy = yOf(g);
        ctx.beginPath();
        ctx.moveTo(padL, gy);
        ctx.lineTo(padL + pw, gy);
        ctx.stroke();

        ctx.fillStyle = PALETTE.muted;
        ctx.font = "10px " + PALETTE.mono;
        ctx.textAlign = "right";
        ctx.fillText(g.toFixed(1), padL - 7, gy + 3);
      });

      // Target step line (jumps 0 -> 1 at 100 ms)
      ctx.save();
      ctx.strokeStyle = PALETTE.muted;
      ctx.lineWidth = 1.1;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      const jumpX = xOf(50);
      ctx.moveTo(padL, yOf(0));
      ctx.lineTo(jumpX, yOf(0));
      ctx.lineTo(jumpX, yOf(1.0));
      ctx.lineTo(padL + pw, yOf(1.0));
      ctx.stroke();
      ctx.restore();

      ctx.fillStyle = PALETTE.muted;
      ctx.font = "10px " + PALETTE.mono;
      ctx.textAlign = "left";
      ctx.fillText("Target step (t = 100 ms)", jumpX + 6, yOf(1.0) - 6);

      // Axes
      ctx.strokeStyle = PALETTE.ink;
      ctx.lineWidth = 1.1;
      ctx.beginPath();
      ctx.moveTo(padL, padT);
      ctx.lineTo(padL, padT + ph);
      ctx.lineTo(padL + pw, padT + ph);
      ctx.stroke();

      [0, 200, 400, 600, 800].forEach(function (ms) {
        const tx = xOf(ms / 2);
        ctx.fillStyle = PALETTE.muted;
        ctx.font = "10px " + PALETTE.mono;
        ctx.textAlign = "center";
        ctx.fillText(ms + " ms", tx, padT + ph + 18);
      });

      // Plot Model B (Oxblood dashed — reflex shortcut)
      ctx.save();
      ctx.strokeStyle = PALETTE.oxblood;
      ctx.lineWidth = 2.0;
      ctx.setLineDash([6, 4]);
      ctx.beginPath();
      for (let i = 0; i < sim.steps; i += 1) {
        const x = xOf(i), y = yOf(sim.yB[i]);
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();

      // Plot Model A (Forest green solid — causal forward estimator)
      ctx.save();
      ctx.strokeStyle = PALETTE.green;
      ctx.lineWidth = 2.15;
      ctx.beginPath();
      for (let i = 0; i < sim.steps; i += 1) {
        const x = xOf(i), y = yOf(sim.yA[i]);
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();

      // Top Legend + Offline RSA vs Closed-loop divergence badge
      ctx.textAlign = "left";
      ctx.font = "700 10.5px " + PALETTE.mono;
      ctx.fillStyle = PALETTE.green;
      ctx.fillText("— Model A: Forward State Estimator (RSA 0.94)", padL, 19);
      ctx.fillStyle = PALETTE.oxblood;
      const leg2X = width < 560 ? padL : padL + 305;
      const leg2Y = width < 560 ? 32 : 19;
      ctx.fillText("-- Model B: Auxiliary Readout + Shortcut (RSA 0.94)", leg2X, leg2Y);
    }

    syncUI();
    render();
    window.addEventListener("resize", render);
  }

  /* =========================================================================
   * LIVING PLATE III — Performative Phase Space & Hysteresis (03: User != Vector)
   * ========================================================================= */
  function initPerformativeTrajectory(root) {
    root.innerHTML = "";

    const header = el("div", "living-plate-header");
    header.appendChild(el("span", "living-plate-kicker", "Interactive Plate III · Performative Policy & Withdrawal Test"));
    header.appendChild(el("span", "living-plate-hint", "z_(t+1) = f(z_t, a_t, c_t, ε_t)"));
    root.appendChild(header);

    const stage = el("div", "living-plate-stage");
    const canvas = el("canvas", "living-plate-canvas");
    canvas.setAttribute("aria-label", "Coupled user-recommender phase portrait and policy holdout hysteresis test");
    stage.appendChild(canvas);
    root.appendChild(stage);

    let policyIdx = 2;    // Start on Cultivated Arc vs toggleable Salience Push / Habit RL
    let holdout = true;   // Withdraw policy at t = 65

    const policies = [
      {
        name: "Salience Slot-Push",
        field: function (k, h, active) {
          const dk = (active ? 0.004 : -0.002) - 0.005 * Math.max(0, 0.35 - k);
          const dh = active ? 0.075 * (0.84 - h) : -0.085 * (h - 0.10);
          return [dk, dh];
        },
        summary: '<strong class="status-warn">[Convenience Without Endorsement]</strong> Prominent slotting inflates clicks while active, but engagement collapses immediately during holdout (t > 65) because domain competence never crossed threshold.'
      },
      {
        name: "Myopic Habit RL",
        field: function (k, h, active) {
          const dk = active ? 0.002 * (0.22 - k) : -0.003 * (k - 0.14);
          const dh = active ? 0.095 * (0.92 - h) : -0.032 * (h - 0.42);
          return [dk, dh];
        },
        summary: '<strong class="status-warn">[High-Retention Habit Basin]</strong> Optimizing immediate dwell steers the trajectory into high reactive cue-response while starving slower competence growth.'
      },
      {
        name: "Cultivated Arc (Jazz / Bach)",
        field: function (k, h, active) {
          const scaffold = active ? 0.042 * (1.0 - k) : (k > 0.44 ? 0.012 * (0.86 - k) : -0.015 * k);
          const dh = active ? 0.035 * (0.42 - h) : -0.05 * (h - 0.22);
          return [scaffold, dh];
        },
        summary: '<strong class="status-ok">[Endorsed Hysteresis After Withdrawal]</strong> Exposure scaffolds perceptual competence across threshold (k > k*); when recommendation pressure stops at t = 65, self-initiated engagement persists.'
      }
    ];

    const controls = el("div", "living-plate-controls");
    const polGroup = el("div", "living-plate-group");
    polGroup.appendChild(el("span", "living-plate-label", "Policy a_t:"));

    const polBtns = policies.map(function (pol, idx) {
      const b = el("button", "living-plate-btn", pol.name);
      b.type = "button";
      b.addEventListener("click", function () {
        policyIdx = idx;
        syncUI();
        render();
      });
      polGroup.appendChild(b);
      return b;
    });
    controls.appendChild(polGroup);

    const holdGroup = el("div", "living-plate-group");
    const holdBtn = el("button", "living-plate-btn", "Holdout at t = 65: ON");
    holdBtn.type = "button";
    holdBtn.addEventListener("click", function () {
      holdout = !holdout;
      syncUI();
      render();
    });
    holdGroup.appendChild(holdBtn);
    controls.appendChild(holdGroup);
    root.appendChild(controls);

    const readout = el("p", "living-plate-readout");
    root.appendChild(readout);

    function syncUI() {
      polBtns.forEach(function (b, i) { b.setAttribute("aria-pressed", i === policyIdx ? "true" : "false"); });
      holdBtn.setAttribute("aria-pressed", holdout ? "true" : "false");
      holdBtn.textContent = holdout ? "Holdout at t = 65: ON" : "Holdout at t = 65: OFF";
      readout.innerHTML = policies[policyIdx].summary;
    }

    function rollout(pol) {
      const T = 100;
      const ks = new Float32Array(T + 1);
      const hs = new Float32Array(T + 1);
      const clicks = new Float32Array(T + 1);
      let k = 0.12, h = 0.14;
      for (let t = 0; t <= T; t += 1) {
        ks[t] = k;
        hs[t] = h;
        const active = !(holdout && t >= 65);
        clicks[t] = Math.min(0.98, 0.58 * h + 0.68 * k + (active ? 0.08 : 0.0));
        const d = pol.field(k, h, active);
        k = Math.max(0.02, Math.min(0.96, k + d[0]));
        h = Math.max(0.02, Math.min(0.96, h + d[1]));
      }
      return { ks: ks, hs: hs, clicks: clicks, T: T };
    }

    function render() {
      const width = stage.clientWidth || 640;
      const stacked = width < 540;
      const height = stacked ? 430 : 258;
      const surface = setupHiDPICanvas(canvas, width, height);
      const ctx = surface.ctx;
      const w = surface.w;
      const h = surface.h;

      ctx.fillStyle = PALETTE.paper;
      ctx.fillRect(0, 0, w, h);

      const pol = policies[policyIdx];
      const tr = rollout(pol);

      // Left box: 2D Phase Space (Competence k vs Reactive Habit h)
      const pLeft = 42;
      const pTop = 34;
      const pSize = stacked ? Math.min(w - 68, 175) : Math.min(Math.floor(w * 0.34), h - 64);
      const pX = stacked ? Math.floor((w - pSize) * 0.5) : pLeft;

      ctx.fillStyle = PALETTE.muted;
      ctx.font = "700 10px " + PALETTE.mono;
      ctx.textAlign = "left";
      ctx.fillText("PHASE FIELD z_t = (competence, habit)", pX, pTop - 11);

      ctx.strokeStyle = PALETTE.ink;
      ctx.lineWidth = 1.05;
      ctx.strokeRect(pX, pTop, pSize, pSize);

      // Competence threshold line k* = 0.44
      const threshX = pX + 0.44 * pSize;
      ctx.save();
      ctx.strokeStyle = PALETTE.rule;
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.moveTo(threshX, pTop);
      ctx.lineTo(threshX, pTop + pSize);
      ctx.stroke();
      ctx.restore();
      ctx.fillStyle = PALETTE.muted;
      ctx.font = "9.5px " + PALETTE.mono;
      ctx.fillText("k*", threshX + 3, pTop + pSize - 5);

      // Policy-warped vector field arrows
      const gridN = 6;
      for (let gx = 0; gx < gridN; gx += 1) {
        for (let gy = 0; gy < gridN; gy += 1) {
          const kv = (gx + 0.5) / gridN;
          const hv = (gy + 0.5) / gridN;
          const d = pol.field(kv, hv, true);
          const cx = pX + kv * pSize;
          const cy = pTop + (1 - hv) * pSize;
          const vx = d[0] * 170;
          const vy = -d[1] * 170;
          const mag = Math.hypot(vx, vy) || 1;
          const scale = Math.min(11, mag) / mag;
          const ex = cx + vx * scale;
          const ey = cy + vy * scale;
          ctx.strokeStyle = PALETTE.rule;
          ctx.lineWidth = 0.9;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(ex, ey);
          ctx.stroke();
          drawArrowhead(ctx, ex, ey, Math.atan2(ey - cy, ex - cx), 4.0, PALETTE.rule);
        }
      }

      // Trajectory in phase space (0..65 solid oxblood, 65..100 green dashed if holdout)
      ctx.save();
      ctx.lineWidth = 2.1;
      for (let t = 0; t < tr.T; t += 1) {
        const x1 = pX + tr.ks[t] * pSize;
        const y1 = pTop + (1 - tr.hs[t]) * pSize;
        const x2 = pX + tr.ks[t + 1] * pSize;
        const y2 = pTop + (1 - tr.hs[t + 1]) * pSize;
        ctx.strokeStyle = (holdout && t >= 65) ? PALETTE.green : PALETTE.oxblood;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
      ctx.restore();

      // Start & End markers
      ctx.fillStyle = PALETTE.ink;
      ctx.beginPath();
      ctx.arc(pX + tr.ks[0] * pSize, pTop + (1 - tr.hs[0]) * pSize, 3.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = holdout ? PALETTE.green : PALETTE.oxblood;
      ctx.beginPath();
      ctx.arc(pX + tr.ks[tr.T] * pSize, pTop + (1 - tr.hs[tr.T]) * pSize, 4.0, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = PALETTE.muted;
      ctx.font = "9.5px " + PALETTE.mono;
      ctx.textAlign = "center";
      ctx.fillText("Perceptual competence k →", pX + pSize * 0.5, pTop + pSize + 15);
      ctx.save();
      ctx.translate(pX - 13, pTop + pSize * 0.5);
      ctx.rotate(-Math.PI / 2);
      ctx.fillText("Habit / salience h →", 0, 0);
      ctx.restore();

      // Right box: Time series + Holdout window
      const tLeft = stacked ? 42 : pX + pSize + 48;
      const tTop = stacked ? pTop + pSize + 46 : pTop;
      const tW = w - tLeft - 20;
      const tH = stacked ? h - tTop - 30 : pSize;

      ctx.textAlign = "left";
      ctx.fillStyle = PALETTE.muted;
      ctx.font = "700 10px " + PALETTE.mono;
      ctx.fillText("TRAJECTORY & HOLDOUT SIGNATURE (t = 0..100)", tLeft, tTop - 11);

      if (holdout) {
        const hx = tLeft + 0.65 * tW;
        ctx.fillStyle = PALETTE.paperTint;
        ctx.fillRect(hx, tTop, tW * 0.35, tH);
        ctx.strokeStyle = PALETTE.muted;
        ctx.save();
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(hx, tTop);
        ctx.lineTo(hx, tTop + tH);
        ctx.stroke();
        ctx.restore();
        ctx.fillStyle = PALETTE.oxblood;
        ctx.font = "9.5px " + PALETTE.mono;
        ctx.fillText("a_t withdrawn", hx + 5, tTop + 13);
      }

      ctx.strokeStyle = PALETTE.ink;
      ctx.lineWidth = 1.05;
      ctx.strokeRect(tLeft, tTop, tW, tH);

      function drawSeries(arr, color, dash, widthPx) {
        ctx.save();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthPx;
        if (dash) ctx.setLineDash(dash);
        ctx.beginPath();
        for (let t = 0; t <= tr.T; t += 1) {
          const sx = tLeft + (t / tr.T) * tW;
          const sy = tTop + (1 - arr[t]) * tH;
          if (t === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
        }
        ctx.stroke();
        ctx.restore();
      }

      drawSeries(tr.clicks, PALETTE.ink, null, 2.0);
      drawSeries(tr.ks, PALETTE.green, [5, 3], 1.75);

      ctx.font = "10px " + PALETTE.mono;
      ctx.fillStyle = PALETTE.ink;
      ctx.fillText("— Observed engagement", tLeft + 6, tTop + tH - 20);
      ctx.fillStyle = PALETTE.green;
      ctx.fillText("-- Competence k_t", tLeft + 6, tTop + tH - 7);

      ctx.fillStyle = PALETTE.muted;
      ctx.textAlign = "center";
      ctx.fillText("Sessions t (0 → 100)", tLeft + tW * 0.5, tTop + tH + 15);
    }

    syncUI();
    render();
    window.addEventListener("resize", render);
  }

  /* =========================================================================
   * LIVING PLATE IV — Marr's Chair & Orthogonal Readouts (04: Visual Work)
   * ========================================================================= */
  function initMarrChair(root) {
    root.innerHTML = "";

    const header = el("div", "living-plate-header");
    header.appendChild(el("span", "living-plate-kicker", "Interactive Plate IV · One Retinal Input, Parallel Subspaces"));
    header.appendChild(el("span", "living-plate-hint", "Drag chair or sliders to rotate viewpoint & light"));
    root.appendChild(header);

    const stage = el("div", "living-plate-stage");
    const canvas = el("canvas", "living-plate-canvas");
    canvas.style.cursor = "grab";
    canvas.setAttribute("aria-label", "Interactive 3D chair projection paired with invariant category, equivariant surface-slant, and shadow-separated subspaces");
    stage.appendChild(canvas);
    root.appendChild(stage);

    let yawDeg = 32;
    let lightDeg = -34;
    let dragging = false;
    let lastX = 0;

    const controls = el("div", "living-plate-controls");

    const yawWrap = el("label", "living-plate-slider-wrap");
    yawWrap.appendChild(el("span", "living-plate-label", "Viewpoint θ:"));
    const yawSlider = el("input", "living-plate-slider");
    yawSlider.type = "range";
    yawSlider.min = "-75";
    yawSlider.max = "75";
    yawSlider.step = "1";
    yawSlider.value = String(yawDeg);
    const yawVal = el("span", "living-plate-value", yawDeg + "°");
    yawWrap.appendChild(yawSlider);
    yawWrap.appendChild(yawVal);
    controls.appendChild(yawWrap);

    const lightWrap = el("label", "living-plate-slider-wrap");
    lightWrap.appendChild(el("span", "living-plate-label", "Light φ:"));
    const lightSlider = el("input", "living-plate-slider");
    lightSlider.type = "range";
    lightSlider.min = "-60";
    lightSlider.max = "60";
    lightSlider.step = "1";
    lightSlider.value = String(lightDeg);
    const lightVal = el("span", "living-plate-value", lightDeg + "°");
    lightWrap.appendChild(lightSlider);
    lightWrap.appendChild(lightVal);
    controls.appendChild(lightWrap);

    root.appendChild(controls);

    const readout = el("p", "living-plate-readout");
    readout.innerHTML =
      '<strong class="status-ok">[Concurrent Formatting]</strong> Rotating viewpoint θ leaves category readout invariant while rotating 2.5D surface normals 1-to-1; shifting light φ moves cast shadow while leaving physical occluding contours anchored.';
    root.appendChild(readout);

    // 3D Chair segments in model coordinates (y = 0 is floor, y > 0 is up)
    const segments = [
      // 4 legs
      [[-0.5, 0, -0.5], [-0.5, 0.95, -0.5]],
      [[ 0.5, 0, -0.5], [ 0.5, 0.95, -0.5]],
      [[-0.5, 0,  0.5], [-0.5, 0.95,  0.5]],
      [[ 0.5, 0,  0.5], [ 0.5, 0.95,  0.5]],
      // Seat perimeter (y = 0.95)
      [[-0.54, 0.95, -0.54], [ 0.54, 0.95, -0.54]],
      [[ 0.54, 0.95, -0.54], [ 0.54, 0.95,  0.54]],
      [[ 0.54, 0.95,  0.54], [-0.54, 0.95,  0.54]],
      [[-0.54, 0.95,  0.54], [-0.54, 0.95, -0.54]],
      // Backrest posts (z = -0.5, rising to y = 2.05)
      [[-0.5, 0.95, -0.5], [-0.5, 2.05, -0.54]],
      [[ 0.5, 0.95, -0.5], [ 0.5, 2.05, -0.54]],
      // Backrest horizontal slats
      [[-0.5, 1.98, -0.54], [ 0.5, 1.98, -0.54]],
      [[-0.5, 1.58, -0.52], [ 0.5, 1.58, -0.52]],
      [[-0.5, 1.28, -0.51], [ 0.5, 1.28, -0.51]]
    ];

    function rotY(pt, rad) {
      const c = Math.cos(rad), s = Math.sin(rad);
      return [pt[0] * c + pt[2] * s, pt[1], -pt[0] * s + pt[2] * c];
    }

    function project(pt, cx, cy, scale) {
      const pitch = 0.36;
      const cp = Math.cos(pitch), sp = Math.sin(pitch);
      const x = pt[0];
      const y = pt[1] * cp - pt[2] * sp;
      const z = pt[1] * sp + pt[2] * cp;
      const persp = 4.6 / (4.6 + z * 0.45);
      return [cx + x * scale * persp, cy - (y - 0.88) * scale * persp];
    }

    function syncSliders() {
      yawVal.textContent = (yawDeg >= 0 ? "+" : "") + Math.round(yawDeg) + "°";
      lightVal.textContent = (lightDeg >= 0 ? "+" : "") + Math.round(lightDeg) + "°";
      yawSlider.value = String(Math.round(yawDeg));
      lightSlider.value = String(Math.round(lightDeg));
    }

    yawSlider.addEventListener("input", function () {
      yawDeg = Number(yawSlider.value);
      syncSliders();
      render();
    });
    lightSlider.addEventListener("input", function () {
      lightDeg = Number(lightSlider.value);
      syncSliders();
      render();
    });

    canvas.addEventListener("pointerdown", function (ev) {
      dragging = true;
      lastX = ev.clientX;
      canvas.style.cursor = "grabbing";
      if (canvas.setPointerCapture) canvas.setPointerCapture(ev.pointerId);
    });
    canvas.addEventListener("pointermove", function (ev) {
      if (!dragging) return;
      const dx = ev.clientX - lastX;
      lastX = ev.clientX;
      yawDeg = Math.max(-75, Math.min(75, yawDeg + dx * 0.55));
      syncSliders();
      render();
    });
    const endDrag = function () {
      dragging = false;
      canvas.style.cursor = "grab";
    };
    canvas.addEventListener("pointerup", endDrag);
    canvas.addEventListener("pointercancel", endDrag);

    function render() {
      const width = stage.clientWidth || 640;
      const stacked = width < 540;
      const height = stacked ? 415 : 262;
      const surface = setupHiDPICanvas(canvas, width, height);
      const ctx = surface.ctx;
      const w = surface.w;
      const h = surface.h;

      ctx.fillStyle = PALETTE.paper;
      ctx.fillRect(0, 0, w, h);

      const yaw = (yawDeg * Math.PI) / 180;
      const lRad = (lightDeg * Math.PI) / 180;
      const lx = Math.sin(lRad) * 0.85;
      const lz = Math.cos(lRad) * 0.65;

      const chairCx = stacked ? w * 0.5 : w * 0.25;
      const chairCy = stacked ? 118 : h * 0.56;
      const chairScale = stacked ? 54 : Math.min(62, w * 0.095);

      ctx.fillStyle = PALETTE.muted;
      ctx.font = "700 10px " + PALETTE.mono;
      ctx.textAlign = "center";
      ctx.fillText("RETINAL SCENE (DRAG TO ROTATE)", chairCx, 19);

      // Ground reference cross
      ctx.strokeStyle = PALETTE.ruleLight;
      ctx.lineWidth = 0.9;
      [[-1.2, 0, 0], [1.2, 0, 0], [0, 0, -1.2], [0, 0, 1.2]].forEach(function (_, idx, arr) {
        if (idx % 2 === 1) return;
        const p1 = project(arr[idx], chairCx, chairCy, chairScale);
        const p2 = project(arr[idx + 1], chairCx, chairCy, chairScale);
        ctx.beginPath();
        ctx.moveTo(p1[0], p1[1]);
        ctx.lineTo(p2[0], p2[1]);
        ctx.stroke();
      });

      // Cast shadow on floor (y = 0)
      ctx.save();
      ctx.strokeStyle = PALETTE.rule;
      ctx.lineWidth = 1.4;
      ctx.setLineDash([3, 3]);
      segments.forEach(function (seg) {
        const a = rotY(seg[0], yaw);
        const b = rotY(seg[1], yaw);
        const sa = [a[0] + a[1] * lx, 0, a[2] + a[1] * lz];
        const sb = [b[0] + b[1] * lx, 0, b[2] + b[1] * lz];
        const p1 = project(sa, chairCx, chairCy, chairScale);
        const p2 = project(sb, chairCx, chairCy, chairScale);
        ctx.beginPath();
        ctx.moveTo(p1[0], p1[1]);
        ctx.lineTo(p2[0], p2[1]);
        ctx.stroke();
      });
      ctx.restore();

      // Solid 3D chair wireframe
      ctx.strokeStyle = PALETTE.ink;
      ctx.lineWidth = 1.85;
      segments.forEach(function (seg) {
        const p1 = project(rotY(seg[0], yaw), chairCx, chairCy, chairScale);
        const p2 = project(rotY(seg[1], yaw), chairCx, chairCy, chairScale);
        ctx.beginPath();
        ctx.moveTo(p1[0], p1[1]);
        ctx.lineTo(p2[0], p2[1]);
        ctx.stroke();
      });

      // 2.5D Surface-normal needles in oxblood on seat & backrest!
      const normals = [
        { base: [0, 0.95, 0], tip: [0, 1.38, 0] },
        { base: [-0.24, 1.62, -0.53], tip: [-0.24, 1.62, -0.10] },
        { base: [ 0.24, 1.62, -0.53], tip: [ 0.24, 1.62, -0.10] }
      ];
      normals.forEach(function (n) {
        const p1 = project(rotY(n.base, yaw), chairCx, chairCy, chairScale);
        const p2 = project(rotY(n.tip, yaw), chairCx, chairCy, chairScale);
        ctx.strokeStyle = PALETTE.oxblood;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(p1[0], p1[1]);
        ctx.lineTo(p2[0], p2[1]);
        ctx.stroke();
        drawArrowhead(ctx, p2[0], p2[1], Math.atan2(p2[1] - p1[1], p2[0] - p1[0]), 5.2, PALETTE.oxblood);
      });

      // Right/Bottom panel: 3 Parallel Downstream Readout Subspaces
      const rx = stacked ? 22 : Math.floor(w * 0.48);
      const rw = w - rx - 22;
      const ry = stacked ? 222 : 34;
      const rowH = stacked ? 54 : 66;

      ctx.textAlign = "left";
      ctx.fillStyle = PALETTE.muted;
      ctx.font = "700 10px " + PALETTE.mono;
      ctx.fillText("PARALLEL READOUT SUBSPACES (NOT A SINGLE LADDER)", rx, ry - 11);

      // Subspace 1: Ventral Category (View-Invariant)
      const y1 = ry;
      ctx.strokeStyle = PALETTE.rule;
      ctx.lineWidth = 0.9;
      ctx.strokeRect(rx, y1, rw, rowH - 8);
      ctx.fillStyle = PALETTE.ink;
      ctx.font = "700 10.5px " + PALETTE.mono;
      ctx.fillText("1. Ventral Category Subspace", rx + 9, y1 + 16);
      ctx.fillStyle = PALETTE.green;
      ctx.fillText("INVARIANT", rx + rw - 72, y1 + 16);

      const barX = rx + 9, barW = rw - 18, barY = y1 + 26;
      ctx.fillStyle = PALETTE.paperTint;
      ctx.fillRect(barX, barY, barW, 9);
      const catScore = 0.94 - 0.02 * Math.abs(Math.sin(yaw * 2));
      ctx.fillStyle = PALETTE.green;
      ctx.fillRect(barX, barY, barW * catScore, 9);
      ctx.fillStyle = PALETTE.muted;
      ctx.font = "10px " + PALETTE.mono;
      ctx.fillText('P("chair" | θ, φ) = ' + catScore.toFixed(2) + " (discards pose)", barX, barY + 21);

      // Subspace 2: Dorsal / Pose & Surface Normal (Equivariant to θ, invariant to φ)
      const y2 = ry + rowH + 2;
      ctx.strokeStyle = PALETTE.rule;
      ctx.strokeRect(rx, y2, rw, rowH - 8);
      ctx.fillStyle = PALETTE.ink;
      ctx.font = "700 10.5px " + PALETTE.mono;
      ctx.fillText("2. 2.5D Surface Slant & Grasp Pose", rx + 9, y2 + 16);
      ctx.fillStyle = PALETTE.oxblood;
      ctx.fillText("EQUIVARIANT (θ)", rx + rw - 108, y2 + 16);

      const dialCx = rx + 26, dialCy = y2 + 37, dialR = 13;
      ctx.beginPath();
      ctx.arc(dialCx, dialCy, dialR, 0, Math.PI * 2);
      ctx.strokeStyle = PALETTE.rule;
      ctx.stroke();
      const needleAng = -Math.PI / 2 + yaw;
      const nx = dialCx + Math.cos(needleAng) * dialR;
      const ny = dialCy + Math.sin(needleAng) * dialR;
      ctx.strokeStyle = PALETTE.oxblood;
      ctx.lineWidth = 1.8;
      ctx.beginPath();
      ctx.moveTo(dialCx, dialCy);
      ctx.lineTo(nx, ny);
      ctx.stroke();
      ctx.fillStyle = PALETTE.muted;
      ctx.font = "10px " + PALETTE.mono;
      ctx.fillText("Backrest normal n(θ) = (" + Math.sin(yaw).toFixed(2) + ", " + (-Math.cos(yaw)).toFixed(2) + ")", dialCx + 22, dialCy + 4);

      // Subspace 3: Contour vs Cast Shadow Separation
      const y3 = ry + (rowH + 2) * 2;
      ctx.strokeStyle = PALETTE.rule;
      ctx.strokeRect(rx, y3, rw, rowH - 8);
      ctx.fillStyle = PALETTE.ink;
      ctx.font = "700 10.5px " + PALETTE.mono;
      ctx.fillText("3. Intrinsic Contour vs. Cast Shadow", rx + 9, y3 + 16);

      const trackX = rx + 9, trackW = rw - 18, trackMid = trackX + trackW * 0.5;
      ctx.strokeStyle = PALETTE.ruleLight;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(trackX, y3 + 35);
      ctx.lineTo(trackX + trackW, y3 + 35);
      ctx.stroke();

      const contourPos = trackMid + (yawDeg / 75) * (trackW * 0.34);
      const shadowPos = contourPos + (lightDeg / 60) * (trackW * 0.22);

      // Shadow marker (hollow dashed circle)
      ctx.beginPath();
      ctx.arc(shadowPos, y3 + 35, 5, 0, Math.PI * 2);
      ctx.strokeStyle = PALETTE.muted;
      ctx.lineWidth = 1.4;
      ctx.stroke();

      // Physical contour marker (solid charcoal)
      ctx.beginPath();
      ctx.arc(contourPos, y3 + 35, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = PALETTE.ink;
      ctx.fill();

      ctx.fillStyle = PALETTE.muted;
      ctx.font = "9.5px " + PALETTE.mono;
      ctx.fillText("● Object edge (θ only)   ○ Shadow edge (shifts with φ)", trackX, y3 + 50);
    }

    syncSliders();
    render();
    window.addEventListener("resize", render);
  }

  function bootLivingPlates() {
    const map = {
      "boundary-caliper": initBoundaryCaliper,
      "perturbation-falsifier": initPerturbationFalsifier,
      "performative-trajectory": initPerformativeTrajectory,
      "marr-chair": initMarrChair
    };

    document.querySelectorAll("[data-living-plate]").forEach(function (node) {
      const kind = node.getAttribute("data-living-plate");
      if (map[kind]) map[kind](node);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootLivingPlates);
  } else {
    bootLivingPlates();
  }
})();
