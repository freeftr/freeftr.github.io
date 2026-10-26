export const deployURL = process.env.DEPLOY_URL ?? 'freeftr.github.io';
export const development = process.env.NODE_ENV === 'development';
export const protocol = development ? 'http' : 'https';
