function scanURL() {
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
