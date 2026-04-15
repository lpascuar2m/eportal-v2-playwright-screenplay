import { Actor, Question } from '@testla/screenplay-playwright';
import { BrowseTheWeb } from '@testla/screenplay-playwright/web';
import { DashboardScreen } from '../screens/dashboard.screen';

const AUTHENTICATION_CHECK_TIMEOUT_MS = 5_000;

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

        try {
            await locator.waitFor({
                state: 'visible',
                timeout: AUTHENTICATION_CHECK_TIMEOUT_MS,
            });

            return true;
        } catch {
            return false;
        }
    }
}
