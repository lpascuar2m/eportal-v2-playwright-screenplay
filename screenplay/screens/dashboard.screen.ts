import { Page, FrameLocator } from "@playwright/test";
import { Locator } from '@playwright/test'

type LazySelector = (page: Page | FrameLocator) => Locator

export class DashboardScreen {
    static readonly buttons: Record<string, LazySelector> = {
        signOutButton: (page) =>  { return page.locator('a').filter({ hasText: 'LOG OUT' }); }
    }
}
