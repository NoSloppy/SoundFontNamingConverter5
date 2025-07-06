// Unified logging helper
function colorLog(source, target, type = 'Renamed', sourceColor = '#fff', arrowColor = '#ff0', targetColor = '#9f6') {
  return `<span style="color:#99fff5">${type}:</span> <span style="color:${sourceColor}">${source}</span> <span style="color:${arrowColor}">→</span> <span style="color:${targetColor}">${target}</span>`;
}

// Centralized high-pass log insertion
function logHighPass(logEl) {
  const entry = document.createElement('div');
  entry.className = 'high-pass-enabled';
  entry.innerHTML = '<span style="color:#99fff5">High-Pass filtering enabled.</span>';
  logEl.appendChild(entry);
  const br = document.createElement('br');
  br.className = 'high-pass-enabled';
  logEl.appendChild(br);
  logEl.scrollTop = logEl.scrollHeight;
}

// Mapping utility
function applyMapping(key, mapping) {
  return (typeof mapping === 'function') ? mapping(key) : (mapping[key] || key);
}