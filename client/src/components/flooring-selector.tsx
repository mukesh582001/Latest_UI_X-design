import { motion } from 'framer-motion';
import { Layers, Check } from 'lucide-react';
import { flooringOptions } from '@/lib/kitchen-data';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface FlooringSelectorProps {
  selectedFlooring: string;
  onFlooringSelect: (flooring: string) => void;
  className?: string;
  searchTerm?: string;
}

export default function FlooringSelector({ 
  selectedFlooring, 
  onFlooringSelect, 
  className,
  searchTerm = ''
}: FlooringSelectorProps) {
  const filteredFlooring = flooringOptions.filter(flooring =>
    flooring.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Layers className="text-blue-600 mr-2 h-5 w-5" />
          Flooring Options
        </h3>
        <Badge variant="secondary" className="text-xs">
          {filteredFlooring.length} materials
        </Badge>
      </div>
      
      <div className="space-y-3">
        {filteredFlooring.map((flooring, index) => {
          const isSelected = selectedFlooring === flooring.id;
          
          return (
            <motion.div
              key={flooring.id}
              onClick={() => onFlooringSelect(isSelected ? '' : flooring.id)}
              className={cn(
                "modern-card p-4 cursor-pointer transition-all duration-200 hover:shadow-md",
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
              <div className="flex items-center space-x-4">
                <div 
                  className="w-16 h-12 rounded-lg border-2 border-white shadow-sm relative overflow-hidden"
                  style={{ backgroundColor: flooring.color }}
                >
                  {/* Wood grain effect for wood floors */}
                  {flooring.id.includes('oak') || flooring.id.includes('walnut') ? (
                    <div className="absolute inset-0 opacity-30">
                      <div className="h-full w-full bg-gradient-to-r from-transparent via-black to-transparent opacity-10"></div>
                      <div className="absolute top-0 h-px w-full bg-black opacity-20"></div>
                      <div className="absolute top-1/3 h-px w-full bg-black opacity-15"></div>
                      <div className="absolute top-2/3 h-px w-full bg-black opacity-20"></div>
                    </div>
                  ) : null}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{flooring.name}</div>
                  <div className="text-sm text-gray-600 mt-1">{flooring.description}</div>
                </div>
                <div className="flex items-center">
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
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {selectedFlooring && (
        <motion.div
          className="modern-card p-4 bg-green-50 border-green-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center space-x-3">
            <div 
              className="w-6 h-6 rounded border-2 border-white shadow-sm" 
              style={{ backgroundColor: flooringOptions.find(f => f.id === selectedFlooring)?.color }}
            />
            <div>
              <p className="text-sm font-medium text-green-900">
                {flooringOptions.find(f => f.id === selectedFlooring)?.name} Selected
              </p>
              <p className="text-xs text-green-700">
                {flooringOptions.find(f => f.id === selectedFlooring)?.description}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
