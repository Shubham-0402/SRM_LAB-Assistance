/* ═══════════════════════════════════════════════════ JAVASCRIPT ═══ */

const experiments = [
  {
    id: 1,
    title: "DETERMINATION OF HARDNESS (Ca2+) OF WATER USING EDTA – COMPLEXOMETRY METHOD",
    pdf: "https://drive.google.com/file/d/1IoySsA1lODhGy7rHZ80xipKULJf1GJ66/view?usp=sharing",
    summary: "This experiment is used to determine the hardness of water, which is mainly caused by calcium (Ca²⁺) and magnesium (Mg²⁺) ions. These ions react with soap and reduce its efficiency, so measuring hardness is important.\n\nEDTA is used as a titrating agent because it forms stable complexes with these metal ions. An indicator called Eriochrome Black-T (EBT) is added, which gives a wine red color in the presence of calcium and magnesium ions.\n\nFirst, EDTA is standardized using standard hard water. Then a known volume of the water sample is taken, buffer and indicator are added, and the solution is titrated with EDTA until the color changes from wine red to steel blue. This color change indicates that all metal ions have reacted.\n\nTo find permanent hardness, the sample is boiled to remove temporary hardness and titrated again. The difference between total hardness and permanent hardness gives temporary hardness.",
    calculator: "/exp1"
  },
  {
    id: 2,
    title: "DETERMINATION OF THE AMOUNT OF SODIUM CARBONATE AND SODIUM HYDROXIDE IN A MIXTURE BY TITRATION",
    pdf: "https://drive.google.com/file/d/12YmKISMlOO2_5ufwNMvQarB2NgYjc6hV/view?usp=sharing",
    summary: "This experiment determines the amounts of sodium carbonate (Na₂CO₃) and sodium hydroxide (NaOH) present in a mixture using titration with hydrochloric acid (HCl).\n\nTwo indicators are used to detect two stages of the reaction. First, phenolphthalein is added, which turns the solution pink. During titration with HCl, NaOH and half of Na₂CO₃ react, and the pink color disappears, marking the first endpoint.\n\nThen methyl orange is added, and titration continues. The remaining Na₂CO₃ reacts, and the solution changes from yellow to orange/red, marking the second endpoint.\n\nBy noting the volumes of acid used at both stages, the amounts of NaOH and Na₂CO₃ present in the mixture can be calculated separately.",
    calculator: "/exp2"
  },
  {
    id: 3,
    title: "DETERMINATION OF STRENGTH OF AN ACID USING pH METER",
    pdf: "https://drive.google.com/file/d/1XolUTwYbFjlwMc0L9FNZcLvDH6Ks46zT/view?usp=sharing",
    summary: "This experiment determines the strength of an acid by measuring changes in pH during titration. A pH meter is used to measure the hydrogen ion concentration in the solution.\n\nA known volume of acid is taken, and sodium hydroxide (NaOH) is added gradually from a burette. As NaOH neutralizes the acid, the pH increases slowly at first.\n\nNear the endpoint, there is a sudden rise in pH, indicating that most of the acid has been neutralized. A graph of pH versus volume of NaOH is plotted to accurately determine the endpoint.\n\nUsing the volume of NaOH required and its known concentration, the strength of the acid is calculated using the relation V₁N₁ = V₂N₂.",
    calculator: "/exp3"
  },
  {
    id: 4,
    title: "DETERMINATION OF STRENGTH OF AN ACID BY CONDUCTOMETRY",
    pdf: "https://drive.google.com/file/d/1tqDwmFlwy7-JQGSxaJpr6sb6ma69OMyh/view?usp=sharing",
    summary: "This experiment determines the strength of an acid by measuring how the electrical conductivity of the solution changes during titration.\n\nAcid solutions conduct electricity due to the presence of hydrogen ions (H⁺), which move very fast. When sodium hydroxide is added, these ions are neutralized and replaced by slower-moving sodium ions (Na⁺), causing conductivity to decrease.\n\nAt the endpoint, conductivity reaches a minimum. After that, further addition of NaOH increases conductivity due to excess hydroxide ions (OH⁻).\n\nBy plotting a graph of conductivity versus volume of NaOH added, the endpoint can be identified, and the strength of the acid can be calculated.",
    calculator: "/exp4"
  },
  {
    id: 5,
    title: "DETERMINATION OF FERROUS ION USING POTENTIOMETRIC TITRATION",
    pdf: "https://drive.google.com/file/d/179-DfZveAl0wOqd9IF6jeKe0r0pVYKKl/view?usp=sharing",
    summary: "This experiment determines the concentration of ferrous ions (Fe²⁺) using a potentiometric titration method.\n\nPotassium permanganate acts as an oxidizing agent and converts Fe²⁺ into Fe³⁺ in an acidic medium. Instead of using a visual indicator, the change in electrical potential (emf) is measured using electrodes.\n\nAs the titrant is added, the potential increases gradually. Near the endpoint, a sharp rise in emf occurs, indicating that all Fe²⁺ ions have been oxidized.\n\nA graph of emf versus volume of titrant is plotted to determine the exact endpoint, and from this, the concentration of ferrous ions is calculated.",
    calculator: "/exp5"
  },
  {
    id: 6,
    title: "DETERMINATION OF THE STRENGTH OF A MIXTURE OF ACETIC ACID AND HYDROCHLORIC ACID BY CONDUCTOMETRY",
    pdf: "https://drive.google.com/file/d/1S-S4lm7XZno8-AKepHX4eO-CI25aDnO0/view?usp=sharing",
    summary: "This experiment determines the strength of two acids present in a mixture: a strong acid (HCl) and a weak acid (acetic acid).\n\nWhen sodium hydroxide is added, the strong acid reacts first, causing a decrease in conductivity as hydrogen ions are neutralized. Once HCl is completely neutralized, acetic acid begins to react, causing a slower increase in conductivity.\n\nAfter complete neutralization, further addition of NaOH leads to a sharp increase in conductivity due to excess hydroxide ions.\n\nThe graph of conductivity versus volume of NaOH shows two distinct points, which represent the neutralization of each acid. These values are used to calculate their individual strengths.",
    calculator: "/exp6"
  },
  {
    id: 7,
    title: "ESTIMATION OF AMOUNT OF CHLORIDE CONTENT OF A WATER SAMPLE",
    pdf: "https://drive.google.com/file/d/1yo7c8uPQHHeHbSeR9P5fIYdP2f9XwrLQ/view?usp=sharing",
    summary: "This experiment determines the amount of chloride ions present in a water sample using Mohr's method.\n\nSilver nitrate (AgNO₃) is used as the titrant, which reacts with chloride ions to form a white precipitate of silver chloride (AgCl). Potassium chromate is used as an indicator, giving a yellow color.\n\nDuring titration, AgNO₃ first reacts with all chloride ions. Once they are completely consumed, excess silver ions react with chromate ions to form a reddish-brown precipitate.\n\nThis color change marks the endpoint. The amount of chloride present is calculated using the volume of silver nitrate used.",
    calculator: "/exp7"
  }
];

let currentExp = null;
let openPanel = null;

/* ── Navigation ── */
function showPage(page, expId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  window.scrollTo(0, 0);
  if (page === 'experiments') buildExperimentCards();
  if (page === 'detail' && expId != null) loadExperiment(expId);
}

/* ── Build experiment cards ── */
function buildExperimentCards() {
  const grid = document.querySelector('#page-experiments .experiments-grid');
  grid.innerHTML = '';
  experiments.forEach(exp => {
    const card = document.createElement('div');
    card.className = 'exp-card';
    card.innerHTML = `
      <div class="card-num">EXP — ${String(exp.id).padStart(2,'0')}</div>
      <div class="card-title">${exp.title}</div>
      <button class="card-btn" onclick="event.stopPropagation(); showPage('detail', ${exp.id})">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
        Open Experiment
      </button>`;
    card.onclick = () => showPage('detail', exp.id);
    grid.appendChild(card);
  });
}

/* ── Load experiment detail ── */
function loadExperiment(id) {
  currentExp = experiments.find(e => e.id === id);
  if (!currentExp) return;

  closeAllPanels();
  document.querySelectorAll('.action-btn').forEach(b => b.classList.remove('active-btn'));

  document.getElementById('detail-exp-num').textContent = `EXPERIMENT ${String(id).padStart(2,'0')}`;
  document.getElementById('detail-exp-title').textContent = currentExp.title;
  document.getElementById('panel-summary-text').textContent = currentExp.summary;
  document.getElementById('detail-breadcrumb-title').textContent = `Exp ${id}`;

  // Show images only for Experiment 1
  const gallery = document.getElementById('imageGallery');
  const placeholder = document.getElementById('notebookPlaceholder');
  if (id === 1) {
    gallery.style.display = 'grid';
    placeholder.style.display = 'none';
  } else {
    gallery.style.display = 'none';
    placeholder.style.display = 'block';
  }
}

/* ── PDF handler ── */
function handlePDF() {
  if (currentExp && currentExp.pdf) {
    window.open(currentExp.pdf, '_blank');
  }
}

/* ── Calculator handler ── */
function openCalculator() {
  if (!currentExp) return;
  
  const detailContent = document.querySelector('.detail-content');
  let calcPanel = document.getElementById('panel-calculate');
  
  if (!calcPanel) {
    calcPanel = document.createElement('div');
    calcPanel.className = 'toggle-panel';
    calcPanel.id = 'panel-calculate';
    
    // Insert after video panel
    const videoPanel = document.getElementById('panel-video');
    videoPanel.parentNode.insertBefore(calcPanel, videoPanel.nextSibling);
  }
  
  calcPanel.innerHTML = `
    <div class="toggle-panel-inner">
      <div class="panel-title">Calculations - ${currentExp.title}</div>
      <div class="calc-container" style="margin-top: 15px;">
        <div id="dynamic-form-container">
          <p style="color: #64a0ff; font-family: 'Share Tech Mono', monospace;">Loading calculation UI from backend...</p>
        </div>
      </div>
    </div>
  `;
  
  togglePanel('calculate');
  
  // Fetch calculation UI or generate it dynamically
  fetch('/experiment/' + currentExp.id)
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('dynamic-form-container');
      container.innerHTML = data.html;
      
      // Explicitly execute script tags to bind the exact original logic
      const scripts = container.querySelectorAll('script');
      scripts.forEach(oldScript => {
        const newScript = document.createElement('script');
        Array.from(oldScript.attributes).forEach(attr => newScript.setAttribute(attr.name, attr.value));
        newScript.textContent = oldScript.textContent;
        oldScript.parentNode.replaceChild(newScript, oldScript);
      });
    })
    .catch(err => {
      // Fallback UI
      document.getElementById('dynamic-form-container').innerHTML = `
        <div class="form-group" style="margin-bottom: 15px;">
          <label style="display:block; margin-bottom: 5px; color: #a0c8ff;">Input Data (JSON format):</label>
          <textarea id="calc-input" style="width:100%; height:80px; background: rgba(0,0,0,0.3); border: 1px solid rgba(100,160,255,0.3); color: white; padding: 10px; border-radius: 6px;">{"v1List": [10.5], "v2List": [12.1], "v3List": [8.4], "vs": 20, "vb": 20, "v_std": 20}</textarea>
        </div>
        <button class="btn-primary" onclick="performCalculation(${currentExp.id})" style="padding: 10px 20px; font-family: 'Share Tech Mono';">Calculate Result</button>
        <button class="btn-outline" onclick="downloadPDF(${currentExp.id})" style="padding: 10px 20px; font-family: 'Share Tech Mono'; margin-left: 10px;">Download PDF</button>
        <div id="calc-result" style="margin-top: 20px; padding: 15px; background: rgba(0, 229, 160, 0.1); border-left: 4px solid #00e5a0; border-radius: 4px; display: none;"></div>
      `;
    });
}

function performCalculation(id) {
  let data = {};
  
  // Dynamically collect all inputs in the experiment form
  const container = document.getElementById('experimentForm');
  if (container) {
    container.querySelectorAll('input').forEach(input => {
      const name = input.name || input.id;
      if (name) {
        if (!data[name]) data[name] = [];
        data[name].push(input.value);
      }
    });
    container.querySelectorAll('.calc-cell').forEach((cell, i) => {
      if (!data['calc_cells']) data['calc_cells'] = [];
      data['calc_cells'].push(cell.textContent);
    });
  }
  
  fetch('/calculate/' + id, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(resData => {
    const resDiv = document.getElementById('calc-result');
    resDiv.style.display = 'block';
    
    if(resData.error) {
      resDiv.innerHTML = `<h3 style="color:#ff4d4d; margin-top:0;">Error</h3><p>${resData.error}</p>`;
      return;
    }
    
    let html = `<h3 style="color:#00e5a0; margin-top:0;">Results</h3>`;
    html += `<p style="margin-bottom:8px; font-size:1.1rem;"><strong>Formula:</strong> <span style="color:#fff;">${resData.formula || 'N/A'}</span></p>`;
    html += `<p style="margin-bottom:8px;"><strong>Breakdown:</strong><br/><span style="color:#a0c8ff; font-family:'Share Tech Mono'; white-space:pre-wrap;">${resData.breakdown || ''}</span></p>`;
    
    html += `<div style="margin-top:15px; border-top:1px solid rgba(255,255,255,0.1); padding-top:10px;">`;
    for(let k in resData) {
      if(k !== 'formula' && k !== 'breakdown') {
        html += `<div style="display:flex; justify-content:space-between; margin-bottom:5px;">
          <span style="color:#aaa;">${k}:</span>
          <strong style="color:#fff;">${resData[k]}</strong>
        </div>`;
      }
    }
    html += `</div>`;
    resDiv.innerHTML = html;
  })
  .catch(err => alert("Calculation failed: " + err));
}

function downloadPDF(id) {
  let data = {};
  
  // Dynamically collect inputs for PDF as well
  const container = document.getElementById('experimentForm');
  if (container) {
    container.querySelectorAll('input').forEach(input => {
      const name = input.name || input.id;
      if (name) {
        if (!data[name]) data[name] = [];
        data[name].push(input.value);
      }
    });
    container.querySelectorAll('.calc-cell').forEach((cell, i) => {
      if (!data['calc_cells']) data['calc_cells'] = [];
      data['calc_cells'].push(cell.textContent);
    });
  }
  
  fetch('/generate-pdf/' + id, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(res => res.blob())
  .then(blob => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'Experiment_' + id + '.pdf';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
  })
  .catch(err => alert("PDF generation failed: " + err));
}

// Fallback scripts in case the injected ones fail
window.generateTable = function(titration) {
    const readingsInput = document.getElementById(titration + '_readings');
    if (!readingsInput) return;
    const readings = parseInt(readingsInput.value) || 0;
    const tbody = document.getElementById(titration + '_tableBody');
    if (!tbody) return;
    tbody.innerHTML = '';
    
    for (let i = 0; i < readings; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${i + 1}</td>
            <td><input type="number" step="0.01" name="${titration}_initial_${i}" value="0" onchange="window.calculateVolume(this, '${titration}', ${i})" style="width: 80px; background: rgba(0,0,0,0.3); color: white; border: 1px solid rgba(100,160,255,0.3); border-radius: 4px; padding: 4px;"></td>
            <td><input type="number" step="0.01" name="${titration}_final_${i}" value="0" onchange="window.calculateVolume(this, '${titration}', ${i})" style="width: 80px; background: rgba(0,0,0,0.3); color: white; border: 1px solid rgba(100,160,255,0.3); border-radius: 4px; padding: 4px;"></td>
            <td class="calc-cell" id="${titration}_vol_${i}" style="color: #00e5a0; font-weight: bold;">0.00</td>
        `;
        tbody.appendChild(row);
    }
};

window.calculateVolume = function(changedInput, titration, rowIndex) {
    const row = changedInput.closest('tr');
    const initial = parseFloat(row.querySelector('input[name="' + titration + '_initial_' + rowIndex + '"]').value) || 0;
    const final = parseFloat(row.querySelector('input[name="' + titration + '_final_' + rowIndex + '"]').value) || 0;
    const volume = Math.abs(final - initial);
    document.getElementById(titration + '_vol_' + rowIndex).textContent = volume.toFixed(2);
};

/* ── Toggle panels ── */
function togglePanel(name) {
  const panel = document.getElementById('panel-' + name);
  const btn = document.getElementById('btn-' + name);
  if (!panel) return;
  const isOpen = panel.classList.contains('open');

  closeAllPanels();

  if (!isOpen) {
    panel.classList.add('open');
    if(btn) btn.classList.add('active-btn');
    openPanel = name;
  } else {
    openPanel = null;
  }
}

function closeAllPanels() {
  ['summary','notebook','video','calculate'].forEach(n => {
    const p = document.getElementById('panel-' + n);
    const b = document.getElementById('btn-' + n);
    if(p) p.classList.remove('open');
    if(b) b.classList.remove('active-btn');
  });
  openPanel = null;
}

function toggleNotebook() {
  const section = document.getElementById("notebookSection");
  section.style.display = "block";
}

function openFullscreen(src) {
  const overlay = document.getElementById("fullscreenOverlay");
  const img = document.getElementById("fullscreenImage");
  img.src = src;
  overlay.style.display = "flex";
}

function closeFullscreen() {
  const overlay = document.getElementById("fullscreenOverlay");
  overlay.style.display = "none";
}

function toggleDevInfo() {
  const popup = document.getElementById('devInfoPopup');
  if (popup) {
    popup.classList.toggle('show');
  }
}

/* Initial state */
buildExperimentCards();