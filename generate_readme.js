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
let markdown = `# Internship Trends in Nepal


| Name                                                | Do they reply to your email? | Pays for Internship | Location   | Tech Stack            | Mentorship                    | Hiring Possibility                           | Remote                           | Last Updated |
| --------------------------------------------------- | ---------------------------- | ------------------- | ---------- | --------------------- | ------------------------------ | -------------------------------------------- | --------------------------------- | ------------ |\n`;

validCompanies.forEach((company) => {
  const paysForInternship = company.pays_for_internship.join(", ");
  const mentorshipProvided = company.mentorship.join(", ");
  const hiringPossibility = company.hiring_possibility.join(", ");
  const remoteFriendly = company.remote_friendly.join(", ");

  markdown += `| [${company.name}](${company.website}) | ${
    company.replies_to_all_email ? "✅" : "❌"
  } | ${paysForInternship} | ${company.location} | ${company.tech_stack.join(
    ", "
  )} | ${mentorshipProvided} | ${hiringPossibility} | ${remoteFriendly} | ${
    company.last_updated
  } |\n`;
});

// Write the generated README to a file
fs.writeFileSync("README.md", markdown);

console.log("✅ README.md updated successfully!");
