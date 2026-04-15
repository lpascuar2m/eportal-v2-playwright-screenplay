import { Actor, Question } from '@testla/screenplay-playwright';
import { BrowseTheWeb } from '@testla/screenplay-playwright/web';
import { DashboardScreen } from '../screens/dashboard.screen';

export class IsAuthenticated extends Question<boolean> {
    private constructor() {
        super();
    }

    static successfully(): IsAuthenticated {
        return new IsAuthenticated();
    }

    async answeredBy(actor: Actor): Promise<boolean> {
        const locator = await BrowseTheWeb.as(actor).resolveSelectorToLocator(
            DashboardScreen.dashboardHeader(),
            { evaluateVisible: false }
        );

        return await locator.isVisible();
    }
}
