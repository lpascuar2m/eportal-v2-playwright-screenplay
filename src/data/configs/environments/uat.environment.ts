export class UatConfig {
  static get baseUrl(): string {
    const url = process.env.UAT_EPORTAL_BASE_URL;
    if (!url) {
      throw new Error('UAT_EPORTAL_BASE_URL environment variable is not configured');
    }
    return url;
  }
}