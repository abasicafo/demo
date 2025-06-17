// frontend/src/util.tsx
// This file contains utility functions for the frontend application, such as opening a preview window for Markdown content. It uses the `marked` library to convert Markdown to HTML and creates a new browser window to display the content.


import {marked} from "marked";
export async function openPreview(content:string) {
  const htmlContent = await marked(content);
  const win = window.open("", "_blank", "width=800,height=600");

  if (win) {
    const doc = win.document;

    // Build document manually
    const html = doc.createElement("html");
    const head = doc.createElement("head");
    const body = doc.createElement("body");

    // Add optional title
    const title = doc.createElement("title");
    title.innerText = "Preview";
    head.appendChild(title);

    // Add optional styles
    const style = doc.createElement("style");
    style.textContent = `
      body { font-family: sans-serif; padding: 20px; }
    `;
    head.appendChild(style);

    // Insert your HTML content as raw HTML
    body.innerHTML = htmlContent; // Make sure this is safe or sanitized

    // Assemble the document
    html.appendChild(head);
    html.appendChild(body);
    doc.replaceChild(html, doc.documentElement);
  } else {
    alert("Popup blocked! Please allow popups for this site.");
  }
}
