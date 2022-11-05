import { ICustomWorld } from '../support/custom-world'; 
import { config } from '../support/config';
import { Given } from '@cucumber/cucumber'

Given('Go to the playwright website', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto(config.BASE_URL);
  await page.locator('nav >> a >> text="Playright"').waitFor();
  await page.pause();
});