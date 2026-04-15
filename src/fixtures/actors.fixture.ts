import { test as base } from '@playwright/test';
import { Actor } from '@testla/screenplay-playwright';
import { BrowseTheWeb } from '@testla/screenplay-playwright/web';

type ActorFixtures = {
  Admin: Actor;
  Employee: Actor;
};

export const test = base.extend<ActorFixtures>({
  Admin: async ({ browser }, use) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const actor = Actor.named('Admin').can(BrowseTheWeb.using(page));
    await use(actor);
    await context.close();
  },
  
  Employee: async ({ browser }, use) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const actor = Actor.named('StandardUser').can(BrowseTheWeb.using(page));
    await use(actor);
    await context.close();
  },
});

export { expect } from '@playwright/test';