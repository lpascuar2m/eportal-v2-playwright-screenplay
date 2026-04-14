import { Actor, Question } from '@testla/screenplay-playwright';
import { Element } from '@testla/screenplay-playwright/web';
import { DashboardScreen } from '../screens/dashboard.screen';

export class IsAuthenticated extends Question<boolean> {
    private constructor() {
        super();
    }

    static successfully(): IsAuthenticated {
        return new IsAuthenticated();
    }

    async answeredBy(actor: Actor): Promise<boolean> {
        return await actor.asks(
            Element.toBe.visible(DashboardScreen.dashboardHeader())
        );
    }
}
