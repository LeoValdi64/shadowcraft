'use client'

import { ShadowLayer } from '@/lib/types'
import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Input } from '@/components/ui/input'
import { motion } from 'framer-motion'

interface ShadowEditorProps {
  layer: ShadowLayer
  onUpdate: (layer: ShadowLayer) => void
}

export function ShadowEditor({ layer, onUpdate }: ShadowEditorProps) {
  const handleChange = <K extends keyof ShadowLayer>(key: K, value: ShadowLayer[K]) => {
    onUpdate({ ...layer, [key]: value })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-5"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-sm text-zinc-400">Horizontal Offset</Label>
            <span className="text-sm font-mono text-zinc-500">{layer.horizontalOffset}px</span>
          </div>
          <Slider
            value={[layer.horizontalOffset]}
            onValueChange={([value]) => handleChange('horizontalOffset', value)}
            min={-100}
            max={100}
            step={1}
            className="w-full"
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-sm text-zinc-400">Vertical Offset</Label>
            <span className="text-sm font-mono text-zinc-500">{layer.verticalOffset}px</span>
          </div>
          <Slider
            value={[layer.verticalOffset]}
            onValueChange={([value]) => handleChange('verticalOffset', value)}
            min={-100}
            max={100}
            step={1}
            className="w-full"
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-sm text-zinc-400">Blur Radius</Label>
            <span className="text-sm font-mono text-zinc-500">{layer.blurRadius}px</span>
          </div>
          <Slider
            value={[layer.blurRadius]}
            onValueChange={([value]) => handleChange('blurRadius', value)}
            min={0}
            max={100}
            step={1}
            className="w-full"
          />
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-sm text-zinc-400">Spread Radius</Label>
            <span className="text-sm font-mono text-zinc-500">{layer.spreadRadius}px</span>
          </div>
          <Slider
            value={[layer.spreadRadius]}
            onValueChange={([value]) => handleChange('spreadRadius', value)}
            min={-50}
            max={50}
            step={1}
            className="w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-sm text-zinc-400">Shadow Color</Label>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Input
                type="color"
                value={layer.color}
                onChange={(e) => handleChange('color', e.target.value)}
                className="h-10 w-14 cursor-pointer border-zinc-800 p-1"
              />
            </div>
            <Input
              type="text"
              value={layer.color}
              onChange={(e) => handleChange('color', e.target.value)}
              className="h-10 flex-1 border-zinc-800 bg-zinc-900/50 font-mono text-sm uppercase"
              placeholder="#000000"
            />
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Label className="text-sm text-zinc-400">Opacity</Label>
            <span className="text-sm font-mono text-zinc-500">{Math.round(layer.opacity * 100)}%</span>
          </div>
          <Slider
            value={[layer.opacity * 100]}
            onValueChange={([value]) => handleChange('opacity', value / 100)}
            min={0}
            max={100}
            step={1}
            className="w-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 pt-2">
        <Switch
          id={`inset-${layer.id}`}
          checked={layer.inset}
          onCheckedChange={(checked) => handleChange('inset', checked)}
        />
        <Label htmlFor={`inset-${layer.id}`} className="text-sm text-zinc-400 cursor-pointer">
          Inset Shadow
        </Label>
      </div>
    </motion.div>
  )
}
