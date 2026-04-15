function requiredEnvFrom(...names: string[]): string {
  for (const name of names) {
    const value = process.env[name];
    if (value) {
      return value;
    }
  }

  throw new Error(`${names.join(' or ')} environment variable is not configured`);
}

export class StandardUserCredentials {
  static get valid() {
    return {
      email: requiredEnvFrom('UAT_EPORTAL_STANDARD_EMAIL', 'UAT_EPORTAL_EMPLOYEE_EMAIL'),
      password: requiredEnvFrom('UAT_EPORTAL_STANDARD_PASSWORD', 'UAT_EPORTAL_EMPLOYEE_PASSWORD'),
    };
  }
}
