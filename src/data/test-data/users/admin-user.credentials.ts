export class AdminUserCredentials {
    static readonly valid = {
        email: process.env.UAT_EPORTAL_ADMIN_EMAIL!,
        password: process.env.UAT_EPORTAL_ADMIN_PASSWORD!,
    };
}