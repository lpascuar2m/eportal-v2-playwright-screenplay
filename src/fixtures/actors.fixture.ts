import { test as base } from '@playwright/test';
import { Actor } from '@testla/screenplay-playwright';
import { BrowseTheWeb } from '@testla/screenplay-playwright/web';

type ActorFixtures = {
  Admin: Actor;
  Employee: Actor;
};

export const test = base.extend<ActorFixtures>({
  Admin: async ({ page }, use) => {
    const actor = Actor.named('Admin').can(BrowseTheWeb.using(page));
    await use(actor);
  },
  
  Employee: async ({ page }, use) => {
    const actor = Actor.named('StandardUser').can(BrowseTheWeb.using(page));
    await use(actor);
  },
});

export { expect } from '@playwright/test';