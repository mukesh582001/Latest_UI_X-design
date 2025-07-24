import { motion } from 'framer-motion';
import { Grid3X3, Check } from 'lucide-react';
import { backsplashOptions } from '@/lib/kitchen-data';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface BacksplashSelectorProps {
  selectedBacksplash: string;
  onBacksplashSelect: (backsplash: string) => void;
  className?: string;
  searchTerm?: string;
}

export default function BacksplashSelector({ 
  selectedBacksplash, 
  onBacksplashSelect, 
  className,
  searchTerm = ''
}: BacksplashSelectorProps) {
  const filteredBacksplash = backsplashOptions.filter(backsplash =>
    backsplash.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Grid3X3 className="text-blue-600 mr-2 h-5 w-5" />
          Backsplash Options
        </h3>
        <Badge variant="secondary" className="text-xs">
          {filteredBacksplash.length} patterns
        </Badge>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {filteredBacksplash.map((backsplash, index) => {
          const isSelected = selectedBacksplash === backsplash.id;
          
          return (
            <motion.div
              key={backsplash.id}
              onClick={() => onBacksplashSelect(isSelected ? '' : backsplash.id)}
              className={cn(
                "modern-card overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-md",
                isSelected 
                  ? "border-blue-500 bg-blue-50 shadow-md ring-2 ring-blue-500 ring-offset-2" 
                  : "hover:border-blue-300"
              )}
              whileHover={{ scale: 1.01, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div 
                className="w-full h-24 border-b border-gray-200/50 relative"
                style={{ backgroundColor: backsplash.color }}
              >
                {/* Pattern overlay effect */}
                <div className="absolute inset-0 opacity-20">
                  {backsplash.pattern === 'subway' && (
                    <div className="grid grid-cols-6 gap-px h-full">
                      {Array.from({ length: 24 }).map((_, i) => (
                        <div key={i} className="bg-gray-400 rounded-sm" />
                      ))}
                    </div>
                  )}
                  {backsplash.pattern === 'mosaic' && (
                    <div className="grid grid-cols-8 gap-px h-full">
                      {Array.from({ length: 32 }).map((_, i) => (
                        <div key={i} className="bg-gray-400 rounded-full" />
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-gray-900">
                    {backsplash.name}
                  </div>
                  {isSelected && (
                    <motion.div
                      className="bg-blue-600 rounded-full p-1"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", damping: 15, stiffness: 300 }}
                    >
                      <Check className="h-3 w-3 text-white" />
                    </motion.div>
                  )}
                  {backsplash.name}
                </div>
                <div className="text-xs text-gray-600 mt-1 capitalize">
                  {backsplash.pattern} pattern
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {selectedBacksplash && (
        <motion.div
          className="modern-card p-4 bg-green-50 border-green-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center space-x-3">
            <div 
              className="w-6 h-6 rounded border-2 border-white shadow-sm" 
              style={{ backgroundColor: backsplashOptions.find(b => b.id === selectedBacksplash)?.color }}
            />
            <div>
              <p className="text-sm font-medium text-green-900">
                {backsplashOptions.find(b => b.id === selectedBacksplash)?.name} Selected
              </p>
              <p className="text-xs text-green-700 capitalize">
                {backsplashOptions.find(b => b.id === selectedBacksplash)?.pattern} pattern style
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
