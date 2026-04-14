export class StandardUserCredentials {
    static readonly valid = {
        email: process.env.UAT_EPORTAL_EMPLOYEE_EMAIL!,
        password: process.env.UAT_EPORTAL_EMPLOYEE_PASSWORD!,
    };
}