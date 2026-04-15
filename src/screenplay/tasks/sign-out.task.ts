import { Actor, Task } from '@testla/screenplay-playwright';
import { Click, Wait } from '@testla/screenplay-playwright/web';
import { DashboardScreen } from '../screens/dashboard.screen';

export class SignOut extends Task {
    private constructor() {
        super();
    }

    static fromTheApp(): SignOut {
        return new SignOut();
    }

    async performAs(actor: Actor): Promise<void> {
        await actor.attemptsTo(
            Wait.forSelector(DashboardScreen.signOutButton(), { state: 'visible' }),
            Click.on(DashboardScreen.signOutButton()),
            Wait.forLoadState('networkidle')
        );
    }
}