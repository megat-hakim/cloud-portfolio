document.addEventListener("DOMContentLoaded", () => {
  const copyButton = document.querySelector("[data-copy-email]");
  const email = "megathakim05@gmail.com";

  if (!copyButton) {
    console.error("Copy email button not found.");
    return;
  }

  copyButton.addEventListener("click", async () => {
    const originalText = copyButton.textContent;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(email);
      } else {
        const textArea = document.createElement("textarea");

        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        const copied = document.execCommand("copy");
        textArea.remove();

        if (!copied) {
          throw new Error("Copy command failed.");
        }
      }

      copyButton.textContent = "Copied!";
    } catch (error) {
      console.error("Unable to copy email:", error);
      copyButton.textContent = "Copy failed";
    }

    setTimeout(() => {
      copyButton.textContent = originalText;
    }, 1500);
  });
});
