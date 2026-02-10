export interface ShadowLayer {
  id: string
  horizontalOffset: number
  verticalOffset: number
  blurRadius: number
  spreadRadius: number
  color: string
  opacity: number
  inset: boolean
}

export interface ShadowPreset {
  name: string
  layers: Omit<ShadowLayer, 'id'>[]
}
