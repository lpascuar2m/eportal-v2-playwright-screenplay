import { Page, FrameLocator, Locator } from "@playwright/test";

type LazySelector = (page: Page | FrameLocator) => Locator;

export class DashboardScreen {
    static signOutButton(): LazySelector {
        return (page) => page.locator('a').filter({ hasText: 'LOG OUT' });
    }

    static dashboardHeader(): LazySelector {
        return (page) => page.getByRole('heading', { name: 'Welcome to Employee Portal,' });
    }
}
