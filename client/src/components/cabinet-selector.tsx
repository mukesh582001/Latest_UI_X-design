import { motion } from 'framer-motion';
import { DoorClosed, Check } from 'lucide-react';
import { cabinetStyles } from '@/lib/kitchen-data';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

interface CabinetSelectorProps {
  selectedCabinet: string;
  onCabinetSelect: (cabinet: string) => void;
  className?: string;
  searchTerm?: string;
}

export default function CabinetSelector({ 
  selectedCabinet, 
  onCabinetSelect, 
  className,
  searchTerm = ''
}: CabinetSelectorProps) {
  const filteredCabinets = cabinetStyles.filter(cabinet =>
    cabinet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className={cn("space-y-6", className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <DoorClosed className="text-blue-600 mr-2 h-5 w-5" />
          Cabinet Styles
        </h3>
        <Badge variant="secondary" className="text-xs">
          {filteredCabinets.length} styles
        </Badge>
      </div>
      
      <div className="space-y-3">
        {filteredCabinets.map((cabinet, index) => {
          const isSelected = selectedCabinet === cabinet.id;
          
          return (
            <motion.div
              key={cabinet.id}
              onClick={() => onCabinetSelect(isSelected ? '' : cabinet.id)}
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
                  className="w-16 h-12 rounded-lg border-2 border-white shadow-sm"
                  style={{ backgroundColor: cabinet.color }}
                />
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{cabinet.name}</div>
                  <div className="text-sm text-gray-600 mt-1">{cabinet.description}</div>
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
      
      {selectedCabinet && (
        <motion.div
          className="modern-card p-4 bg-green-50 border-green-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center space-x-3">
            <div 
              className="w-6 h-6 rounded border-2 border-white shadow-sm" 
              style={{ backgroundColor: cabinetStyles.find(c => c.id === selectedCabinet)?.color }}
            />
            <div>
              <p className="text-sm font-medium text-green-900">
                {cabinetStyles.find(c => c.id === selectedCabinet)?.name} Selected
              </p>
              <p className="text-xs text-green-700">
                {cabinetStyles.find(c => c.id === selectedCabinet)?.description}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
