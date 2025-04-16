document.addEventListener("DOMContentLoaded", () => {
    const today = new Date();
    const dateStr = today.toISOString().split("T")[0]; // YYYY-MM-DD
    const nepaliDate = convertToNepaliDate(dateStr, true, true);
    document.getElementById("nepali-date").textContent = nepaliDate;
  });
  