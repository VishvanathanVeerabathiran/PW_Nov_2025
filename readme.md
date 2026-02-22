# Playwright Testing Framework - November 2025

A comprehensive automation testing project built with **Playwright** and **TypeScript** for testing web applications including Salesforce, ServiceNow, and other enterprise platforms.

## 📁 Project Structure

```
PW_Nov_2025/
├── Pages/                          # Page Object Model implementations
│   ├── 01_loginPage.ts
│   ├── 02_welcomePage.ts
│   ├── 03_homePage.ts
│   ├── 04_leadPage.ts
│   ├── 05_createLeadPage.ts
│   └── ...                         # Additional page objects
│
├── tests/                          # Test specifications organized by day
│   ├── Day10/                      # Data handling & file reading tests
│   ├── Day11/                      # ServiceNow tests
│   ├── Day12/                      # Salesforce tests
│   ├── Day13/                      # TypeScript classes & OOP
│   ├── Day14/                      # Access modifiers & inheritance
│   ├── Day15/                      # Custom fixtures & advanced patterns
│   └── ...                         # Additional day-wise tests
│
├── Day1-Day3/                      # JavaScript fundamentals
│   ├── 01_dataTypes.js             # Basic data types
│   ├── 02_functions.js             # Function declarations
│   ├── 03_looping.js               # Loop examples
│   └── ...                         # Learning materials
│
├── Data/                           # Test data files
│   ├── account.csv
│   ├── createLead.json
│   ├── login_salesforce.csv
│   ├── login_salesforce.json
│   ├── login.json
│   ├── prod.env
│   └── qa.env
│
├── Utility/                        # Shared utilities & fixtures
│   ├── CustomFixture.ts            # Custom Playwright fixtures
│   └── githubcommands.yaml
│
├── playwright.config.ts            # Playwright configuration
├── package.json                    # Dependencies & scripts
└── readme.md                       # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# Clone or navigate to the project directory
cd PW_Nov_2025

# Install dependencies
npm install
```

### Configuration

Update the environment-specific configuration files in the `Data/` folder:
- `prod.env` - Production environment variables
- `qa.env` - QA environment variables

## 🧪 Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests for a specific day
```bash
npx playwright test tests/Day12/
```

### Run a specific test file
```bash
npx playwright test tests/Day12/01_salesforce.spec.ts
```

### Run tests with UI mode (interactive)
```bash
npx playwright test --ui
```

### Run tests in debug mode
```bash
npx playwright test --debug
```

### View test report
```bash
npx playwright show-report
```

## 📊 Test Organization

### By Days
- **Day 1-3**: JavaScript fundamentals (data types, functions, looping, operators)
- **Day 4-9**: Core testing concepts and Playwright basics
- **Day 10**: Data handling (JSON, CSV, ENV files)
- **Day 11**: ServiceNow automation tests
- **Day 12**: Salesforce automation tests
- **Day 13**: TypeScript classes and OOP concepts
- **Day 14**: Access modifiers and inheritance patterns
- **Day 15**: Custom fixtures and advanced Playwright features

### By Application
- **Salesforce**: Lead creation, account management, dashboards
- **ServiceNow**: Change request CRUD operations

## 🎯 Key Features

- **Page Object Model**: Clean separation of test logic and page interactions
- **Data-Driven Testing**: External data files (JSON, CSV, ENV)
- **Custom Fixtures**: Reusable test setup with `CustomFixture.ts`
- **TypeScript Support**: Type-safe test automation
- **Storage Session**: Session persistence for login optimization
- **Multi-Environment**: Support for QA and Production environments

## 📝 Test Examples

### Salesforce Lead Creation
```
tests/Day12/04_Marathon_salesforceLead.spec.ts
```

### ServiceNow Change Request Management
```
tests/Day11/03_crud_changeRequest.spec.ts
```

### Data-Driven Testing with CSV
```
tests/Day10/03_learnReadDataCSVSalesForce.spec.ts
```

## 🔧 Configuration Files

- **playwright.config.ts**: Main Playwright configuration
- **package.json**: Project dependencies and scripts
- **tsconfig.json**: TypeScript compilation settings

## 📦 Dependencies

See `package.json` for complete list. Key dependencies include:
- `@playwright/test` - Playwright testing framework
- `typescript` - TypeScript support
- `dotenv` - Environment variable management

## 📈 Reports & Results

- **playwright-report/**: HTML test reports generated after test runs
- **test-results/**: Detailed test results and artifacts

## 🛠️ Utilities

The `Utility/` folder contains shared helper functions and custom fixtures:
- **CustomFixture.ts**: Custom Playwright fixtures for common test setup/teardown
- Custom functions for common automation tasks

## 📚 Learning Path

This project follows a structured learning path:
1. JavaScript fundamentals (Day 1-3)
2. Playwright basics (Day 4-9)
3. Advanced testing patterns (Day 10-15)
4. Real-world application testing (Salesforce, ServiceNow)

## 🤝 Contributing

Organize tests by day/feature in the `tests/` directory and follow the Page Object Model pattern for page interactions.

## 📝 Notes

- Tests are configured to run against both QA and Production environments
- Session storage is used to optimize login flows
- Test data is externalized for easy maintenance and reusability

---

**Last Updated**: February 2025
