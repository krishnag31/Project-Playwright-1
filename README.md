# 🚀 Playwright Automation Framework | TypeScript

A scalable and maintainable end-to-end automation testing framework built using **Playwright** with **TypeScript**, following industry-standard automation practices such as the **Page Object Model (POM)**, **Object-Oriented Programming (OOP)**, reusable components, and data-driven testing.

---

## 📌 Project Overview

This framework automates the **Demo Web Shop** application and demonstrates a real-world automation architecture suitable for enterprise web applications.

The framework focuses on:

- Clean and maintainable code
- Reusable page objects and components
- Data-driven testing
- Secure credential management
- Session persistence
- Modular project structure
- CI/CD readiness
---

## ⚙️ Framework Features

- ✅ Page Object Model (POM)
- ✅ Object-Oriented Design
- ✅ Reusable Base Page
- ✅ Reusable Components
- ✅ Data-Driven Testing using JSON
- ✅ TypeScript Interfaces & Types
- ✅ Environment Variable Support (.env)
- ✅ Session Management using storageState
- ✅ Smoke & Regression Test Execution
- ✅ HTML Reporting
- ✅ Cross Browser Execution
- ✅ Easy Maintenance & Scalability

## 🚀 Getting Started

Follow these steps to clone the repository, install the dependencies, and run the Playwright test suite locally.

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org) installed (v18 or higher recommended).

### 2. Clone the Repository
```bash
git clone <YOUR_REPOSITORY_URL>
cd <YOUR_REPOSITORY_FOLDER_NAME>
```

### 3. Install Dependencies
Install Node modules and the required Playwright browser binaries:
```bash
npm install
npx playwright install
```

### 4. Environment Configuration
Create a `.env` file in the root directory of your project and populate it with your environment variables:
```env
BASE_URL=https://tricentis.com
USER_EMAIL=your_email@example.com
USER_PASSWORD=your_password
```

### 5. Running Tests
Execute the scripts using the following terminal commands:

* **Run all tests (Headless mode):**
  ```bash
  npx playwright test
  ```

* **Run tests in Headed mode (UI visible):**
  ```bash
  npx playwright test --headed
  ```

* **Run a specific test file:**
  ```bash
  npx playwright test tests/login.spec.ts
  ```

* **Run a specific project/browser:**
  ```bash
  npx playwright test --project=chromium
  ```

### 6. Viewing Test Reports
After the test run completes, open the automatically generated HTML report:
```bash
npx playwright show-report
```


### Object-Oriented Programming

The framework uses OOP concepts:

- Inheritance
- Abstraction
- Encapsulation
- Composition



