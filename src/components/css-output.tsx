'use client'

import { useState } from 'react'
import { ShadowLayer } from '@/lib/types'
import { generateCSSOutput } from '@/lib/shadow-utils'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check, Code } from 'lucide-react'

interface CSSOutputProps {
  layers: ShadowLayer[]
}

export function CSSOutput({ layers }: CSSOutputProps) {
  const [copied, setCopied] = useState(false)
  const cssOutput = generateCSSOutput(layers)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cssOutput)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      console.error('Failed to copy to clipboard')
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code className="h-4 w-4 text-zinc-400" />
          <h3 className="text-sm font-medium text-zinc-300">CSS Output</h3>
        </div>
        <Button
          onClick={handleCopy}
          variant="outline"
          size="sm"
          className="h-8 gap-1.5 border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100"
        >
          <AnimatePresence mode="wait" initial={false}>
            {copied ? (
              <motion.span
                key="check"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-1.5"
              >
                <Check className="h-3.5 w-3.5 text-green-400" />
                Copied
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="flex items-center gap-1.5"
              >
                <Copy className="h-3.5 w-3.5" />
                Copy
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </div>

      <div className="relative overflow-hidden rounded-lg border border-zinc-800/50 bg-zinc-950">
        <pre className="overflow-x-auto p-4 text-sm">
          <code className="font-mono text-zinc-300">
            {cssOutput}
          </code>
        </pre>
      </div>
    </div>
  )
}
