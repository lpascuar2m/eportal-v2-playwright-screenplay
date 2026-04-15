function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} environment variable is not configured`);
  }
  return value;
}

export class AdminUserCredentials {
  static get valid() {
    return {
      email: requiredEnv('UAT_EPORTAL_ADMIN_EMAIL'),
      password: requiredEnv('UAT_EPORTAL_ADMIN_PASSWORD'),
    };
  }
}
