const fs = require("fs");

// Read JSON data
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

// Filter out companies with invalid website (you can customize this further)
const validCompanies = data.filter(
  (company) => company.website && company.website.startsWith("http")
);

// Sort alphabetically by company name
validCompanies.sort((a, b) => a.name.localeCompare(b.name));

// Generate Markdown Table
let markdown = `# Tech Companies in Nepal


| Name                                                | Do they reply to your email? | Do they pay for internship? |
| --------------------------------------------------- | ---------------------------- | --------------------------- |\n`;

validCompanies.forEach((company) => {
  markdown += `| [${company.name}](${company.website}) | ${company.replies_to_email} | ${company.pays_for_internship} |\n`;
});

// Write the generated README to a file
fs.writeFileSync("README.md", markdown);

console.log("✅ README.md updated successfully!");
