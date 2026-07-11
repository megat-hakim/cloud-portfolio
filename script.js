document.addEventListener("DOMContentLoaded", () => {
  const copyButton = document.getElementById("copy-email");
  const email = "megathakim05@gmail.com";

  if (!copyButton) {
    console.error("Copy email button was not found.");
    return;
  }

  copyButton.addEventListener("click", async () => {
    const originalText = copyButton.textContent;

    try {
      // Modern method for HTTPS websites
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        // Fallback for your current HTTP EC2 website
        const textArea = document.createElement("textarea");

        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.opacity = "0";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        const copied = document.execCommand("copy");
        textArea.remove();

        if (!copied) {
          throw new Error("Browser rejected the copy command.");
        }
      }

      copyButton.textContent = "COPIED!";
    } catch (error) {
      console.error("Unable to copy email:", error);
      copyButton.textContent = "COPY FAILED";
    }

    setTimeout(() => {
      copyButton.textContent = originalText;
    }, 1500);
  });
});
