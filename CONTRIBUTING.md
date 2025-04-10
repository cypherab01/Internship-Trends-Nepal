# Contributing to Internship Trends in Nepal

Thank you for your interest in contributing to **Internship Trends in Nepal**! This guide will walk you through the process of contributing to the project.

## How to Contribute

### 1. Fork the Repository

- Start by **forking** the repository to your own GitHub account. This creates a personal copy of the repository where you can make your changes.

### 2. Clone Your Fork

- Clone the forked repository to your local machine:

  ```bash
  git clone https://github.com/cypherab01/Internship-Trends-Nepal.git
  ```

### 3. Create a New Branch

- Before making any changes, create a new branch to work on:

  ```bash
  git checkout -b branch-name
  ```

  **Branch Naming Convention**: Please use descriptive names for your branches, e.g., `update-internship-data-[company-name]`.

### 4. Update `data.json`

- Open the **`data.json`** file and add or modify the internship data as required.
- The format for each company entry should look like this:

  ```json
  {
    "name": "Company Name",
    "replies_to_all_email": true/false,
    "pays_for_internship": ["Paid", "Stipend", "Unpaid"],
    "website": "https://companywebsite.com",
    "location": "Tole, District",  // Example: "Balkhu, Kathmandu"
    "tech_stack": ["Technology 1", "Technology 2"], // ["-"] in case you don't know
    "mentorship": ["Full Mentorship", "Partial Mentorship", "No Mentorship"],
    "duration": "Months",  // Example: "3 months"
    "hiring_possibility": ["Possibly, depending on performance", "No hiring possibility", "Hired often"],
    "remote_friendly": ["Fully Remote", "Hybrid", "On-site"],
    "last_updated": "YYYY-MM-DD"
  }
  ```

### 5. Push Your Changes

- Once you've updated the `data.json` file, commit your changes:

  ```bash
  git add data.json
  git commit -m "updated [company's details] or something relative"
  ```

- Push your changes to your fork:

  ```bash
  git push origin branch-name
  ```

### 6. Create a Pull Request

- Go to your fork on GitHub and click **"Compare & Pull Request"** to create a pull request (PR) to the main repository.

### 7. Automated README Update

- Once your PR is merged, the **GitHub Actions** workflow will automatically:
  - Run the `generate_readme.js` script.
  - Update the `README.md` file with the new or modified internship information.
  - Commit and push the updated `README.md` back to the repository.

### 8. Review and Merge

- After your pull request is submitted, it will be reviewed. If everything looks good, it will be merged into the main repository.

## Code of Conduct

Please be respectful and considerate of others when contributing. Keep the conversation constructive and friendly.

## Additional Notes

- **Issues**: If you encounter any issues or bugs, please report them in the **Issues** section of the repository.
- **Enhancements**: Feel free to submit enhancements or features that could improve the project.

Thank you for your contributions!
