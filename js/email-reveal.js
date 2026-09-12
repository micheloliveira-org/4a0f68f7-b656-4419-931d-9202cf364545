(() => {
  "use strict";

  const decodeEmail = (encoded) => encoded
    .split(".")
    .map((value, index) => {
      const shift = 11 + ((index * 7) % 19);
      return String.fromCharCode(Number(value) - shift);
    })
    .join("");

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-email-reveal]");
    if (!button) return;

    const email = decodeEmail(button.dataset.email);
    const link = document.createElement("a");

    link.href = `mailto:${email}`;
    link.textContent = email;
    link.className = button.className;
    link.setAttribute("aria-label", `Enviar e-mail para ${email}`);

    button.replaceWith(link);
    link.focus();
  });
})();
