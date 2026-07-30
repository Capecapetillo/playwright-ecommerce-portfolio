# Playwright E-commerce Portfolio

![Playwright Tests](https://github.com/Capecapetillo/playwright-ecommerce-portfolio/actions/workflows/playwright.yml/badge.svg)

End-to-end test automation project for [AutomationExercise](https://automationexercise.com), built with [Playwright](https://playwright.dev) and TypeScript.

Covers both **web UI testing** and **API testing**, using the Page Object Model (POM) pattern with a centralized Page Object Manager.

## Tech Stack
- Playwright + TypeScript
- Page Object Model (POM) with POMManager
- GitHub Actions CI/CD

## Project Structure

```
pages/       → Page Objects (BasePage, HomePage, LoginPage, POMManager)
tests/web/   → UI test specs
tests/api/   → API test specs (coming soon)
```

## Running Tests Locally
```bash
npx playwright test
```

## CI/CD
Every push to `main` automatically runs the full test suite across Chromium, Firefox, and WebKit via GitHub Actions.