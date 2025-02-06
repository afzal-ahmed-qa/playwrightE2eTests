import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Navigate to the demo website
  await page.goto('https://demoqa.com/');
  await expect(page).toHaveURL('https://demoqa.com/');
  
  // Click on the first SVG element. This will navigate to the Elements section
  await page.locator('svg').first().click();
  
  // Click on the 'Check' text to navigate to the Check Box section
  await page.getByText('Check Box').click();
  
  // Click on the 'Toggle' button to expand the checkbox options
  await page.getByRole('button', { name: 'Toggle' }).click();
  
  // Click on the 'Desktop' checkbox
  await page.locator('label').filter({ hasText: 'Desktop' }).getByRole('img').first().click();
  
  // Verify that the text 'You have selected :' is visible
  await expect(page.getByText('You have selected :')).toBeVisible();
});