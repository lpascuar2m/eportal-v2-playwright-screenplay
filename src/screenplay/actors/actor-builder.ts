import { Page, APIRequestContext } from '@playwright/test';
import { Actor } from '@testla/screenplay-playwright';
import { BrowseTheWeb } from '@testla/screenplay-playwright/web';
import { UseAPI } from '@testla/screenplay-playwright/api';

export class ActorBuilder {
    private actor: Actor;

    private constructor(name: string) {
        this.actor = Actor.named(name);
    }

    public static named(name: string): ActorBuilder {
        return new ActorBuilder(name);
    }

    public canBrowse(page: Page): this {
        this.actor = this.actor.can(BrowseTheWeb.using(page));
        return this;
    }

    public canUseAPI(apiContext: APIRequestContext): this {
        this.actor = this.actor.can(UseAPI.using(apiContext));
        return this;
    }

    public build(): Actor {
        return this.actor;
    }
}

