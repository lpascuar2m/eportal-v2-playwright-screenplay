import { test } from "@playwright/test";
import { Actor } from "@testla/screenplay-playwright";
import { SignIn, SignOut, EndSession } from "../src/screenplay/tasks";
import { ActorBuilder } from "../src/screenplay/actors";
import { StandardUserCredentials } from "../src/data/test-data/users";

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
        StandardUserCredentials.validUser.email,
        StandardUserCredentials.validUser.password
      ),
    );
  });
});
