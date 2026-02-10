'use client'

import { ShadowLayer } from '@/lib/types'
import { shadowPresets } from '@/lib/presets'
import { generateShadowCSS, generateId } from '@/lib/shadow-utils'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

interface PresetGalleryProps {
  onSelectPreset: (layers: ShadowLayer[]) => void
}

export function PresetGallery({ onSelectPreset }: PresetGalleryProps) {
  const handlePresetClick = (presetIndex: number) => {
    const preset = shadowPresets[presetIndex]
    const layers: ShadowLayer[] = preset.layers.map(layer => ({
      id: generateId(),
      ...layer
    }))
    onSelectPreset(layers)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-zinc-400" />
        <h3 className="text-sm font-medium text-zinc-300">Presets</h3>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {shadowPresets.map((preset, index) => {
          const layers: ShadowLayer[] = preset.layers.map((l, i) => ({
            id: `preview-${i}`,
            ...l
          }))
          const shadowCSS = generateShadowCSS(layers)

          return (
            <motion.button
              key={preset.name}
              onClick={() => handlePresetClick(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group flex flex-col items-center gap-3 rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-4 transition-colors hover:border-zinc-700 hover:bg-zinc-900/50"
            >
              <div className="relative flex h-16 w-16 items-center justify-center">
                <div
                  className="h-10 w-10 rounded-lg bg-white transition-transform group-hover:scale-110"
                  style={{ boxShadow: shadowCSS }}
                />
              </div>
              <span className="text-xs font-medium text-zinc-400 group-hover:text-zinc-300">
                {preset.name}
              </span>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
