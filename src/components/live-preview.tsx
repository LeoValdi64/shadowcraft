'use client'

import { ShadowLayer } from '@/lib/types'
import { generateShadowCSS } from '@/lib/shadow-utils'
import { motion } from 'framer-motion'
import { Eye } from 'lucide-react'

interface LivePreviewProps {
  layers: ShadowLayer[]
}

export function LivePreview({ layers }: LivePreviewProps) {
  const shadowCSS = generateShadowCSS(layers)

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Eye className="h-4 w-4 text-zinc-400" />
        <h3 className="text-sm font-medium text-zinc-300">Live Preview</h3>
      </div>

      <div className="relative flex min-h-[280px] items-center justify-center rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-8 sm:min-h-[320px]">
        <div
          className="absolute inset-0 rounded-xl opacity-50"
          style={{
            backgroundImage: `
              linear-gradient(45deg, #27272a 25%, transparent 25%),
              linear-gradient(-45deg, #27272a 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, #27272a 75%),
              linear-gradient(-45deg, transparent 75%, #27272a 75%)
            `,
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
          }}
        />

        <motion.div
          layout
          className="relative h-32 w-32 rounded-2xl bg-white sm:h-40 sm:w-40"
          style={{
            boxShadow: shadowCSS
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30
          }}
        />
      </div>
    </div>
  )
}
