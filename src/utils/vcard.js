// Builds a .vcf file so visitors can save the contact straight to their phone.
export function downloadVCard(p) {
  const founder = p.ventures?.[0];
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${p.lastName};${p.firstName};;;`,
    `FN:${p.name}`,
    founder && `ORG:${founder.company}`,
    founder && `TITLE:${founder.role}`,
    p.phone && `TEL;TYPE=CELL:${p.phone.replace(/\s/g, "")}`,
    ...(p.emails || []).map(
      (e) => `EMAIL;TYPE=${e.label === "Personal" ? "HOME" : "WORK"}:${e.value}`
    ),
    p.address &&
      `ADR;TYPE=WORK:;;${p.address.street};${p.address.city};Tamil Nadu;${p.address.postalCode};${p.address.country}`,
    ...(p.ventures || []).filter((v) => v.url).map((v) => `URL:${v.url}`),
    ...(p.socials || []).map((s) => `URL:${s.url}`),
    "END:VCARD",
  ].filter(Boolean);

  const blob = new Blob([lines.join("\r\n")], { type: "text/vcard;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${p.name.replace(/\s+/g, "_")}.vcf`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
}

export async function sharePage(p) {
  const url = window.location.href;
  try {
    if (navigator.share) {
      await navigator.share({ title: p.name, text: `${p.name} — ${p.headline[0]}`, url });
      return false;
    }
    await navigator.clipboard.writeText(url);
    return true; // copied
  } catch {
    return false;
  }
}
