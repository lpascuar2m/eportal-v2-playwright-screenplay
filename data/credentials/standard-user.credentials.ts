export class SignInData {
    static readonly validUser = {
        email: process.env.UAT_EPORTAL_EMPLOYEE_EMAIL!,
        password: process.env.UAT_EPORTAL_EMPLOYEE_PASSWORD!,
    };
}