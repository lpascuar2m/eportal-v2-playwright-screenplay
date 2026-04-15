function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} environment variable is not configured`);
  }
  return value;
}

export class StandardUserCredentials {
  static get valid() {
    return {
      email: requiredEnv('UAT_EPORTAL_STANDARD_EMAIL'),
      password: requiredEnv('UAT_EPORTAL_STANDARD_PASSWORD'),
    };
  }
}
