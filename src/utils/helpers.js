// src/utils/helpers.js
export function formatCurrency(num = 0, locale = "en-IN", currency = "INR") {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(
    num
  );
}

export function slugify(str = "") {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
}
