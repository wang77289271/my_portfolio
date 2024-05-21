export interface ImportMetaEnv {
  readonly VITE_EMAILJS_SERVICE_ID: string
  readonly VITE_EMAILJS_TEMPLATE_ID: string
  readonly VITE_EMAILJS_PUBLIC_KEY: string
  // Add other environment variables here...
}

export interface ImportMeta {
  readonly env: ImportMetaEnv
}
