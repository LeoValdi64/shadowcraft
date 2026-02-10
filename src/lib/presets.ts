import { ShadowPreset } from './types'

export const shadowPresets: ShadowPreset[] = [
  {
    name: 'Subtle',
    layers: [
      {
        horizontalOffset: 0,
        verticalOffset: 1,
        blurRadius: 3,
        spreadRadius: 0,
        color: '#000000',
        opacity: 0.1,
        inset: false
      }
    ]
  },
  {
    name: 'Medium',
    layers: [
      {
        horizontalOffset: 0,
        verticalOffset: 4,
        blurRadius: 6,
        spreadRadius: -1,
        color: '#000000',
        opacity: 0.1,
        inset: false
      },
      {
        horizontalOffset: 0,
        verticalOffset: 2,
        blurRadius: 4,
        spreadRadius: -2,
        color: '#000000',
        opacity: 0.1,
        inset: false
      }
    ]
  },
  {
    name: 'Heavy',
    layers: [
      {
        horizontalOffset: 0,
        verticalOffset: 25,
        blurRadius: 50,
        spreadRadius: -12,
        color: '#000000',
        opacity: 0.25,
        inset: false
      }
    ]
  },
  {
    name: 'Neon Glow',
    layers: [
      {
        horizontalOffset: 0,
        verticalOffset: 0,
        blurRadius: 20,
        spreadRadius: 0,
        color: '#00ff88',
        opacity: 0.6,
        inset: false
      },
      {
        horizontalOffset: 0,
        verticalOffset: 0,
        blurRadius: 40,
        spreadRadius: 0,
        color: '#00ff88',
        opacity: 0.4,
        inset: false
      }
    ]
  },
  {
    name: 'Layered',
    layers: [
      {
        horizontalOffset: 0,
        verticalOffset: 1,
        blurRadius: 2,
        spreadRadius: 0,
        color: '#000000',
        opacity: 0.05,
        inset: false
      },
      {
        horizontalOffset: 0,
        verticalOffset: 2,
        blurRadius: 4,
        spreadRadius: 0,
        color: '#000000',
        opacity: 0.05,
        inset: false
      },
      {
        horizontalOffset: 0,
        verticalOffset: 4,
        blurRadius: 8,
        spreadRadius: 0,
        color: '#000000',
        opacity: 0.05,
        inset: false
      },
      {
        horizontalOffset: 0,
        verticalOffset: 8,
        blurRadius: 16,
        spreadRadius: 0,
        color: '#000000',
        opacity: 0.05,
        inset: false
      }
    ]
  },
  {
    name: 'Inset',
    layers: [
      {
        horizontalOffset: 0,
        verticalOffset: 2,
        blurRadius: 4,
        spreadRadius: 0,
        color: '#000000',
        opacity: 0.15,
        inset: true
      }
    ]
  },
  {
    name: 'Sharp',
    layers: [
      {
        horizontalOffset: 4,
        verticalOffset: 4,
        blurRadius: 0,
        spreadRadius: 0,
        color: '#000000',
        opacity: 0.2,
        inset: false
      }
    ]
  },
  {
    name: 'Floating',
    layers: [
      {
        horizontalOffset: 0,
        verticalOffset: 20,
        blurRadius: 25,
        spreadRadius: -5,
        color: '#000000',
        opacity: 0.15,
        inset: false
      },
      {
        horizontalOffset: 0,
        verticalOffset: 10,
        blurRadius: 10,
        spreadRadius: -5,
        color: '#000000',
        opacity: 0.04,
        inset: false
      }
    ]
  },
  {
    name: 'Purple Glow',
    layers: [
      {
        horizontalOffset: 0,
        verticalOffset: 0,
        blurRadius: 30,
        spreadRadius: 0,
        color: '#8b5cf6',
        opacity: 0.5,
        inset: false
      },
      {
        horizontalOffset: 0,
        verticalOffset: 0,
        blurRadius: 60,
        spreadRadius: 0,
        color: '#8b5cf6',
        opacity: 0.3,
        inset: false
      }
    ]
  },
  {
    name: 'Blue Glow',
    layers: [
      {
        horizontalOffset: 0,
        verticalOffset: 0,
        blurRadius: 25,
        spreadRadius: 0,
        color: '#3b82f6',
        opacity: 0.5,
        inset: false
      }
    ]
  }
]
