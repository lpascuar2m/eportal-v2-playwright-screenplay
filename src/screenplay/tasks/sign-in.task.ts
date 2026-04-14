import { Actor, Task } from '@testla/screenplay-playwright'
import { Navigate, Fill, Click, Wait, Press } from '@testla/screenplay-playwright/web'
import { LoginScreen } from '../screens/login.screen'
import { UatConfig } from "../../data/configs/environments";

export class SignIn extends Task {
    private email?: string;
    private password?: string;
    private readonly submitMethod: 'click' | 'enter';

    private constructor(submitMethod: 'click' | 'enter') {
        super();
        this.submitMethod = submitMethod;
    }

    static byClicking(): SignIn {
        return new SignIn('click');
    }

    static byPressingEnter(): SignIn {
        return new SignIn('enter');
    }

    usingCredentials(email: string, password: string): this {
        if (!email || !password) {
            throw new Error(`SignIn task requires valid credentials. Received - Email: "${email ? '[provided]' : '[missing]'}", Password: "${password ? '[provided]' : '[missing]'}"`)
        }

        this.email = email;
        this.password = password;
        return this;
    }

    async performAs(actor: Actor): Promise<void> {
        if (!this.email || !this.password) {
            throw new Error('SignIn task requires credentials to be set via .usingCredentials(email, password) before execution');
        }

        await actor.attemptsTo(
            Navigate.to(UatConfig.baseUrl),
            Wait.forLoadState('domcontentloaded'),
            Fill.in(LoginScreen.emailField(), this.email),
            Fill.in(LoginScreen.passwordField(), this.password),
            this.submitMethod === 'click' 
                ? Click.on(LoginScreen.signInButton())
                : Press.key('Enter')
        )
    }
}
