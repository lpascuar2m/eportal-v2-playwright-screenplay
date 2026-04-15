import { test as base, type Browser, expect } from '@playwright/test';
import { Actor } from '@testla/screenplay-playwright';
import { BrowseTheWeb } from '@testla/screenplay-playwright/web';

type ActorFixtures = {
  Admin: Actor;
  Employee: Actor;
};

async function withActor(browser: Browser, actorName: string, use: (actor: Actor) => Promise<void>) {
  const context = await browser.newContext();
  const page = await context.newPage();
  const actor = Actor.named(actorName).can(BrowseTheWeb.using(page));

  try {
    await use(actor);
  } finally {
    await context.close();
  }
}

export const test = base.extend<ActorFixtures>({
  Admin: async ({ browser }, use) => {
    await withActor(browser, 'Admin', use);
  },

  Employee: async ({ browser }, use) => {
    await withActor(browser, 'StandardUser', use);
  },
});

export { expect };
