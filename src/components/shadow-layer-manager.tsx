'use client'

import { ShadowLayer } from '@/lib/types'
import { ShadowEditor } from './shadow-editor'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { motion, AnimatePresence, Reorder } from 'framer-motion'
import { Plus, Trash2, GripVertical, Layers } from 'lucide-react'
import { createDefaultLayer, generateId } from '@/lib/shadow-utils'

interface ShadowLayerManagerProps {
  layers: ShadowLayer[]
  onLayersChange: (layers: ShadowLayer[]) => void
  activeLayerId: string | null
  onActiveLayerChange: (id: string | null) => void
}

export function ShadowLayerManager({
  layers,
  onLayersChange,
  activeLayerId,
  onActiveLayerChange
}: ShadowLayerManagerProps) {
  const handleAddLayer = () => {
    const newLayer: ShadowLayer = {
      id: generateId(),
      ...createDefaultLayer()
    }
    onLayersChange([...layers, newLayer])
    onActiveLayerChange(newLayer.id)
  }

  const handleRemoveLayer = (id: string) => {
    const newLayers = layers.filter(layer => layer.id !== id)
    onLayersChange(newLayers)
    if (activeLayerId === id) {
      onActiveLayerChange(newLayers.length > 0 ? newLayers[0].id : null)
    }
  }

  const handleUpdateLayer = (updatedLayer: ShadowLayer) => {
    onLayersChange(layers.map(layer =>
      layer.id === updatedLayer.id ? updatedLayer : layer
    ))
  }

  const activeLayer = layers.find(layer => layer.id === activeLayerId)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-zinc-400" />
          <h3 className="text-sm font-medium text-zinc-300">Shadow Layers</h3>
        </div>
        <Button
          onClick={handleAddLayer}
          variant="outline"
          size="sm"
          className="h-8 gap-1.5 border-zinc-800 bg-zinc-900/50 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100"
        >
          <Plus className="h-3.5 w-3.5" />
          Add Layer
        </Button>
      </div>

      <Reorder.Group
        axis="y"
        values={layers}
        onReorder={onLayersChange}
        className="space-y-2"
      >
        <AnimatePresence mode="popLayout">
          {layers.map((layer, index) => (
            <Reorder.Item
              key={layer.id}
              value={layer}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15 }}
            >
              <Card
                className={`group cursor-pointer border transition-all duration-200 ${
                  activeLayerId === layer.id
                    ? 'border-zinc-600 bg-zinc-900'
                    : 'border-zinc-800/50 bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-900/50'
                }`}
                onClick={() => onActiveLayerChange(layer.id)}
              >
                <div className="flex items-center gap-3 p-3">
                  <div className="cursor-grab text-zinc-600 transition-colors hover:text-zinc-400 active:cursor-grabbing">
                    <GripVertical className="h-4 w-4" />
                  </div>

                  <div
                    className="h-6 w-6 shrink-0 rounded border border-zinc-700"
                    style={{
                      backgroundColor: layer.color,
                      opacity: layer.opacity
                    }}
                  />

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-zinc-300 truncate">
                      Layer {index + 1}
                    </p>
                    <p className="text-xs text-zinc-500 truncate font-mono">
                      {layer.inset ? 'inset ' : ''}{layer.horizontalOffset}px {layer.verticalOffset}px {layer.blurRadius}px {layer.spreadRadius}px
                    </p>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleRemoveLayer(layer.id)
                    }}
                    disabled={layers.length === 1}
                    className="h-8 w-8 p-0 text-zinc-500 opacity-0 transition-opacity group-hover:opacity-100 hover:text-red-400 hover:bg-red-400/10 disabled:opacity-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </Reorder.Item>
          ))}
        </AnimatePresence>
      </Reorder.Group>

      {activeLayer && (
        <motion.div
          key={activeLayerId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pt-4 border-t border-zinc-800/50"
        >
          <ShadowEditor layer={activeLayer} onUpdate={handleUpdateLayer} />
        </motion.div>
      )}
    </div>
  )
}
