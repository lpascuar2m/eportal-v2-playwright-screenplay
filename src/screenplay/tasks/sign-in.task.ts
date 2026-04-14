import { Actor, Task } from '@testla/screenplay-playwright'
import { Navigate, Fill, Click, Wait } from '@testla/screenplay-playwright/web'
import { LoginScreen } from '../screens/login.screen'
import { UatConfig } from "../../data/configs/environments";

export class SignIn extends Task {
    private readonly email: string;
    private readonly password: string;

    private constructor(email: string, password: string) {
        super();
        this.email = email;
        this.password = password;
    }

    static toTheAppWithCredentials(email: string, password: string): SignIn {
        if (!email || !password) {
            throw new Error(`SignIn task requires valid credentials. Received - Email: "${email ? '[provided]' : '[missing]'}", Password: "${password ? '[provided]' : '[missing]'}"`)
        }

        return new SignIn(email, password);
    }

    async performAs(actor: Actor): Promise<void> {
        await actor.attemptsTo(
            Navigate.to(UatConfig.baseUrl),
            Wait.forLoadState('domcontentloaded'),
            Fill.in(LoginScreen.fields.email, this.email),
            Fill.in(LoginScreen.fields.password, this.password),
            Click.on(LoginScreen.buttons.signIn)
        )
    }
}
