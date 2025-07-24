import { useState } from 'react';
import { motion } from 'framer-motion';
import { Palette, Check } from 'lucide-react';
import { presetColors } from '@/lib/kitchen-data';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface ColorPickerProps {
  color: string;
  onColorChange: (color: string) => void;
  className?: string;
  searchTerm?: string;
}

export default function ColorPicker({ color, onColorChange, className, searchTerm = '' }: ColorPickerProps) {
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);

  const filteredColors = presetColors.filter(presetColor =>
    presetColor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Palette className="text-blue-600 mr-2 h-5 w-5" />
          Wall Color
        </h3>
        <Badge variant="secondary" className="text-xs">
          {filteredColors.length} options
        </Badge>
      </div>
      
      {/* Custom Color Picker */}
      <div className="modern-card p-4">
        <h4 className="font-medium text-gray-900 mb-3">Custom Color</h4>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="color"
              value={color}
              onChange={(e) => onColorChange(e.target.value)}
              className="w-12 h-12 rounded-lg border-2 border-gray-200 cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-200"
              onFocus={() => setIsColorPickerOpen(true)}
              onBlur={() => setIsColorPickerOpen(false)}
            />
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-gray-900">Selected Color</div>
            <div className="text-xs text-gray-500 font-mono">{color.toUpperCase()}</div>
          </div>
        </div>
      </div>
      
      {/* Preset Colors */}
      <div className="modern-card p-4">
        <h4 className="font-medium text-gray-900 mb-4">Preset Colors</h4>
        <div className="grid grid-cols-4 gap-3">
          {filteredColors.map((presetColor, index) => {
            const isSelected = color === presetColor;
            return (
              <motion.button
                key={presetColor}
                onClick={() => onColorChange(presetColor)}
                className={cn(
                  "relative w-full aspect-square rounded-lg border-2 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                  isSelected 
                    ? "border-blue-500 shadow-md ring-2 ring-blue-500 ring-offset-2" 
                    : "border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md"
                )}
                style={{ backgroundColor: presetColor }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                {isSelected && (
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 15, stiffness: 300 }}
                  >
                    <div className="bg-white rounded-full p-1 shadow-sm">
                      <Check className="h-3 w-3 text-blue-600" />
                    </div>
                  </motion.div>
                )}
              </motion.button>
            );
          })}
        </div>
      </div>
      
      {/* Color Information */}
      {color !== '#ffffff' && (
        <motion.div
          className="modern-card p-4 bg-blue-50 border-blue-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center space-x-3">
            <div 
              className="w-6 h-6 rounded-full border-2 border-white shadow-sm" 
              style={{ backgroundColor: color }}
            />
            <div>
              <p className="text-sm font-medium text-blue-900">Preview Active</p>
              <p className="text-xs text-blue-700">This color is being applied to your kitchen walls</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
