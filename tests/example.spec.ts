import { test, expect } from '@playwright/test';

test('Google search for Musa and navigate to Wikipedia', async ({ page }) => {
  // Step 1: Navigate to Google and wait for the page to load
  await page.goto('https://www.google.com/');
  await page.waitForLoadState('domcontentloaded');  // Ensure the DOM is fully loaded

  // Step 2: Handle potential pop-ups (cookie consent, etc.)
  const acceptCookiesButton = page.locator('button:has-text("I agree")');
  if (await acceptCookiesButton.isVisible()) {
    await acceptCookiesButton.click();
  }

  // Step 3: Wait for the search input to be visible and interact with it
  const searchInput = page.locator('input[name="q"]');
  await searchInput.waitFor({ state: 'visible', timeout: 60000 });  // Wait for input to be visible
  await searchInput.click();
  await searchInput.fill('Musa');
  await searchInput.press('Enter');

  // Step 4: Wait for search results to load and click the Wikipedia link
  const wikipediaLink = page.locator('a:has-text("Musa (name) - Wikipedia")');
  await wikipediaLink.waitFor({ state: 'visible' });
  await wikipediaLink.click();

  // Step 5: Verify navigation to the correct Wikipedia page
  await expect(page).toHaveURL('https://en.wikipedia.org/wiki/Musa_(name)');
});
