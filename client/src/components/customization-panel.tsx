import { motion } from 'framer-motion';
import { Download, FileImage, FileText, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ColorPicker from './color-picker';
import CabinetSelector from './cabinet-selector';
import BacksplashSelector from './backsplash-selector';
import FlooringSelector from './flooring-selector';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

interface CustomizationPanelProps {
  wallColor: string;
  selectedCabinet: string;
  selectedBacksplash: string;
  selectedFlooring: string;
  onWallColorChange: (color: string) => void;
  onCabinetSelect: (cabinet: string) => void;
  onBacksplashSelect: (backsplash: string) => void;
  onFlooringSelect: (flooring: string) => void;
  onExportDesign: () => void;
  className?: string;
}

export default function CustomizationPanel({
  wallColor,
  selectedCabinet,
  selectedBacksplash,
  selectedFlooring,
  onWallColorChange,
  onCabinetSelect,
  onBacksplashSelect,
  onFlooringSelect,
  onExportDesign,
  className
}: CustomizationPanelProps) {
  const { toast } = useToast();

  const handleGeneratePDF = () => {
    toast({
      title: "PDF Generation",
      description: "PDF generation feature coming soon!",
    });
  };

  const handleRequestQuote = () => {
    toast({
      title: "Quote Request",
      description: "Quote request feature coming soon!",
    });
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div className="bg-white rounded-lg shadow-sm p-4">
        <ColorPicker
          color={wallColor}
          onColorChange={onWallColorChange}
          className="bg-transparent shadow-none p-0"
        />
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-4">
        <CabinetSelector
          selectedCabinet={selectedCabinet}
          onCabinetSelect={onCabinetSelect}
          className="bg-transparent shadow-none p-0"
        />
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-4">
        <BacksplashSelector
          selectedBacksplash={selectedBacksplash}
          onBacksplashSelect={onBacksplashSelect}
          className="bg-transparent shadow-none p-0"
        />
      </div>
      
      <div className="bg-white rounded-lg shadow-sm p-4">
        <FlooringSelector
          selectedFlooring={selectedFlooring}
          onFlooringSelect={onFlooringSelect}
          className="bg-transparent shadow-none p-0"
        />
      </div>

      {/* Export Options */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h3 className="text-base font-semibold text-gray-900 mb-3 flex items-center">
          <Download className="text-primary mr-2 h-4 w-4" />
          Export Design
        </h3>
        
        <div className="space-y-2">
          <Button
            onClick={onExportDesign}
            className="w-full timber-gradient text-white hover:opacity-90 transition-opacity text-sm"
            size="sm"
          >
            <FileImage className="mr-2 h-3 w-3" />
            Download Design
          </Button>
          
          <Button
            onClick={handleGeneratePDF}
            variant="outline"
            className="w-full text-sm"
            size="sm"
          >
            <FileText className="mr-2 h-3 w-3" />
            Generate PDF
          </Button>
          
          <Button
            onClick={handleRequestQuote}
            className="w-full bg-green-600 text-white hover:bg-green-700 text-sm"
            size="sm"
          >
            <Calculator className="mr-2 h-3 w-3" />
            Request Quote
          </Button>
        </div>
      </div>
    </div>
  );
}
