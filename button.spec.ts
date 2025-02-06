import { test, expect } from '@playwright/test';

// Define a test case
test('test', async ({ page }) => {
  // Navigate to the demo website
  await page.goto('https://demoqa.com/');
  await expect(page).toHaveURL('https://demoqa.com/');
  
  // Click on the first element found by the 'path' locator
  await page.locator('path').first().click();
  
  // Right-click on the 'Buttons' text
  await page.getByText('Buttons').click({
    button: 'right'
  });
  
  // Click on the list item that contains the text 'Buttons'
  await page.getByRole('listitem').filter({ hasText: 'Buttons' }).click();
  
  // Click on the button with the name 'Double Click Me'
  await page.getByRole('button', { name: 'Double Click Me' }).click();
  await expect(page.getByRole('button', { name: 'Double Click Me' })).toBeVisible();
  
  // Right-click on the button with the name 'Right Click Me'
  await page.getByRole('button', { name: 'Right Click Me' }).click({
    button: 'right'
  });
  await expect(page.getByRole('button', { name: 'Right Click Me' })).toBeVisible();
  
  // Click again on the button with the name 'Double Click Me'
  await page.getByRole('button', { name: 'Double Click Me' }).click();
  await expect(page.getByRole('button', { name: 'Double Click Me' })).toBeVisible();
  
  // Click on the button with the exact name 'Click Me'
  await page.getByRole('button', { name: 'Click Me', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Click Me', exact: true })).toBeVisible();
  
  // Verify that the text 'You have done a dynamic click' is visible
  await expect(page.getByText('You have done a dynamic click')).toBeVisible();
  
  // Pause the page for debugging
  await page.pause();
});