import { Page, FrameLocator } from "@playwright/test";
import { Locator } from '@playwright/test'

type LazySelector = (page: Page | FrameLocator) => Locator

export class LoginScreen {
  static readonly fields: Record<string, LazySelector> = {
    email: (page) => {
      return page.getByRole("textbox", { name: "Email Address" });
    },
    password: (page) => {
      return page.getByRole("textbox", { name: "Password" });
    },
  };

  static readonly buttons: Record<string, LazySelector> = {
    signIn: (page) => {
      return page.getByText("Sign in", { exact: true });
    },
  };
}
