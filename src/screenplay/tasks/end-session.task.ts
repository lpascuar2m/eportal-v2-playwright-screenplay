import { Actor, Task } from '@testla/screenplay-playwright'
import { BrowseTheWeb } from '@testla/screenplay-playwright/web'

export class EndSession extends Task {
    static afterTest(): EndSession {
        return new EndSession()
    }

    async performAs(actor: Actor): Promise<void> {
        const page = BrowseTheWeb.as(actor).getPage()
        await page.close()
    }
}