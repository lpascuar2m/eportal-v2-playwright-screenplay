import { test } from "@playwright/test";
import { Actor } from "@testla/screenplay-playwright";
import { SignIn } from "../screenplay/tasks";
import { ActorBuilder } from "../screenplay/actors";
import { SignOut } from "../screenplay/tasks";
import { EndSession } from "../screenplay/tasks";
import { SignInData } from "../data/credentials";

let Andy: Actor;

test.describe("Login Suite", () => {
  test.setTimeout(60_000)
  test.beforeEach(async ({ page }) => {
    Andy = ActorBuilder.named("Andy").canBrowse(page).build();
  });

  test.afterEach(async () => {
    await Andy.attemptsTo(SignOut.fromTheApp(), EndSession.afterTest());
  });

  test("should be able to sign in", async () => {
    await Andy.attemptsTo(
      SignIn.toTheAppWithCredentials(
        SignInData.validUser.email,
        SignInData.validUser.password
      ),
    );
  });
});
