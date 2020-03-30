export const environment: Environment = {
  production: true,
  backendURL: 'http://backend:????',
}

export class Environment {
  readonly production: boolean
  readonly backendURL: string
}
