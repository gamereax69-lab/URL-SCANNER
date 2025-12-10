/* URL SCANNER */
function scanURL() {
  const url = document.getElementById("urlField").value.trim();
  const box = document.getElementById("url-status");

  if (!url) return (box.innerHTML = "Please enter a valid URL.");

  const suspiciousPatterns = /(\?|=|%00|\.exe|\.apk|redirect|base64)/i;

  if (suspiciousPatterns.test(url)) {
    box.innerHTML = "⚠️ Suspicious URL detected";
  } else {
    box.innerHTML = "✔️ URL seems safe";
  }
}

/* FILE SCANNER */
async function scanFile() {
  const file = document.getElementById("fileField").files[0];
  const box = document.getElementById("file-status");

  if (!file) return (box.innerHTML = "Please select a file.");

  const ext = file.name.split(".").pop().toLowerCase();
  const dangerous = ["exe", "apk", "bat", "js", "vbs", "dll", "scr"]; 

  if (dangerous.includes(ext)) {
    box.innerHTML = "⚠️ Potentially dangerous file type: ." + ext;
  } else {
    box.innerHTML = "✔️ File type looks safe: ." + ext;
  }
}function scanURL() {
  const url = document.getElementById("urlField").value.trim();
  const box = document.getElementById("url-status");
  if (!url) {
    box.innerHTML = "Please enter a valid URL.";
    return;
  }

  // Existing suspicious-pattern check
  const suspiciousPatterns = /(\?|=|%00|\.exe|\.apk|redirect|base64)/i;

  // New: adult-content keywords
  const forbidden = ["sex","porn","xxx","adult","escort","xxxvideo"];
  const lower = url.toLowerCase();
  const hasForbidden = forbidden.some(term => lower.includes(term));

  if (suspiciousPatterns.test(url) || hasForbidden) {
    box.innerHTML = "⚠️ Suspicious or Inappropriate website's URL detected";
  } else {
    box.innerHTML = "✔️ URL seems safe";
  }
}
