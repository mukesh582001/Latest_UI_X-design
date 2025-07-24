import { useState, useCallback } from 'react';
import { MAIN_KITCHEN_IMAGE } from '@/lib/kitchen-data';

export interface KitchenCustomization {
  wallColor: string;
  cabinet: string;
  backsplash: string;
  flooring: string;
}

export function useKitchenCustomization() {
  const [customization, setCustomization] = useState<KitchenCustomization>({
    wallColor: '#ffffff',
    cabinet: 'natural-wood',
    backsplash: 'white-subway',
    flooring: 'light-oak'
  });

  const updateWallColor = useCallback((wallColor: string) => {
    setCustomization(prev => ({ ...prev, wallColor }));
  }, []);

  const updateCabinet = useCallback((cabinet: string) => {
    setCustomization(prev => ({ ...prev, cabinet }));
  }, []);

  const updateBacksplash = useCallback((backsplash: string) => {
    setCustomization(prev => ({ ...prev, backsplash }));
  }, []);

  const updateFlooring = useCallback((flooring: string) => {
    setCustomization(prev => ({ ...prev, flooring }));
  }, []);

  const getKitchenImage = useCallback(() => {
    return MAIN_KITCHEN_IMAGE;
  }, []);

  const exportDesign = useCallback(async () => {
    // Create a canvas to capture the kitchen preview
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;
    
    canvas.width = 1200;
    canvas.height = 800;
    
    // Create download link
    const link = document.createElement('a');
    link.download = `kitchen-design-${Date.now()}.png`;
    link.href = canvas.toDataURL();
    link.click();
  }, []);

  return {
    customization,
    updateWallColor,
    updateCabinet,
    updateBacksplash,
    updateFlooring,
    getKitchenImage,
    exportDesign
  };
}
