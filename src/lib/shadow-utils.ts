import { ShadowLayer } from './types'

export function hexToRgba(hex: string, opacity: number): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return `rgba(0, 0, 0, ${opacity})`

  const r = parseInt(result[1], 16)
  const g = parseInt(result[2], 16)
  const b = parseInt(result[3], 16)

  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

export function generateShadowCSS(layers: ShadowLayer[]): string {
  if (layers.length === 0) return 'none'

  return layers
    .map(layer => {
      const inset = layer.inset ? 'inset ' : ''
      const color = hexToRgba(layer.color, layer.opacity)
      return `${inset}${layer.horizontalOffset}px ${layer.verticalOffset}px ${layer.blurRadius}px ${layer.spreadRadius}px ${color}`
    })
    .join(',\n    ')
}

export function generateCSSOutput(layers: ShadowLayer[]): string {
  const shadow = generateShadowCSS(layers)
  return `box-shadow: ${shadow};`
}

export function createDefaultLayer(): Omit<ShadowLayer, 'id'> {
  return {
    horizontalOffset: 0,
    verticalOffset: 4,
    blurRadius: 6,
    spreadRadius: 0,
    color: '#000000',
    opacity: 0.1,
    inset: false
  }
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 9)
}
