import { Page, FrameLocator, Locator } from "@playwright/test";

type LazySelector = (page: Page | FrameLocator) => Locator;

export class LoginScreen {
    static emailField(): LazySelector {
        return (page) => page.getByRole("textbox", { name: "Email Address" });
    }

    static passwordField(): LazySelector {
        return (page) => page.getByRole("textbox", { name: "Password" });
    }

    static signInButton(): LazySelector {
        return (page) => page.getByText("Sign in", { exact: true });
    }
}
