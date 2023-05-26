import "dotenv/config"
export const env = {
  APP_PORT: Number(process.env.APP_PORT) || 3000
}