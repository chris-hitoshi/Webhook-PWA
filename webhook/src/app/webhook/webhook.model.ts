export interface Webhook {
    id?: number
    userId: string | number
    userName: string
    webhookUrl: string
    jwtUrl?: string
    clientId?: number
    clientSecret?: string
    clientAudience?: string
    authenticationType?: string
}