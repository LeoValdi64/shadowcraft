'use client'

import { useState } from 'react'
import { ShadowLayer } from '@/lib/types'
import { generateId, createDefaultLayer } from '@/lib/shadow-utils'
import { ShadowLayerManager } from '@/components/shadow-layer-manager'
import { LivePreview } from '@/components/live-preview'
import { CSSOutput } from '@/components/css-output'
import { PresetGallery } from '@/components/preset-gallery'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Box, Palette } from 'lucide-react'

function createInitialLayer(): ShadowLayer {
  return {
    id: generateId(),
    ...createDefaultLayer()
  }
}

export default function Home() {
  const [layers, setLayers] = useState<ShadowLayer[]>(() => [createInitialLayer()])
  const [activeLayerId, setActiveLayerId] = useState<string | null>(() => layers[0]?.id ?? null)

  const handlePresetsSelect = (newLayers: ShadowLayer[]) => {
    setLayers(newLayers)
    setActiveLayerId(newLayers[0]?.id ?? null)
  }

  return (
    <div className="min-h-screen bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center sm:mb-12"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-zinc-700 to-zinc-800 shadow-lg sm:h-12 sm:w-12">
              <Box className="h-5 w-5 text-white sm:h-6 sm:w-6" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              ShadowCraft
            </h1>
          </div>
          <p className="mx-auto max-w-md text-sm text-zinc-400 sm:text-base">
            Create beautiful CSS box shadows with an intuitive visual editor. Add multiple layers, adjust properties, and copy the generated CSS.
          </p>
        </motion.header>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <Card className="border-zinc-800/50 bg-zinc-900/50 p-5 sm:p-6">
              <Tabs defaultValue="editor" className="w-full">
                <TabsList className="mb-6 grid w-full grid-cols-2 bg-zinc-800/50">
                  <TabsTrigger
                    value="editor"
                    className="gap-2 data-[state=active]:bg-zinc-700"
                  >
                    <Palette className="h-4 w-4" />
                    Editor
                  </TabsTrigger>
                  <TabsTrigger
                    value="presets"
                    className="gap-2 data-[state=active]:bg-zinc-700"
                  >
                    <Box className="h-4 w-4" />
                    Presets
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="editor" className="mt-0">
                  <ShadowLayerManager
                    layers={layers}
                    onLayersChange={setLayers}
                    activeLayerId={activeLayerId}
                    onActiveLayerChange={setActiveLayerId}
                  />
                </TabsContent>

                <TabsContent value="presets" className="mt-0">
                  <PresetGallery onSelectPreset={handlePresetsSelect} />
                </TabsContent>
              </Tabs>
            </Card>

            <Card className="border-zinc-800/50 bg-zinc-900/50 p-5 sm:p-6">
              <CSSOutput layers={layers} />
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="sticky top-6 border-zinc-800/50 bg-zinc-900/50 p-5 sm:p-6">
              <LivePreview layers={layers} />
            </Card>
          </motion.div>
        </div>

        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-zinc-600">
            Built with Next.js, Tailwind CSS, and Framer Motion
          </p>
        </motion.footer>
      </div>
    </div>
  )
}
