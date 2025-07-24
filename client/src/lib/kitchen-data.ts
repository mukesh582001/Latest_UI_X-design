export interface CabinetStyle {
  id: string;
  name: string;
  description: string;
  color: string;
}

export interface BacksplashOption {
  id: string;
  name: string;
  pattern: string;
  color: string;
}

export interface FlooringOption {
  id: string;
  name: string;
  description: string;
  color: string;
}

// Import assets using Vite's asset handling
import kitchenImagePath from "@assets/kitchen_1753210414123.jpg";
import timberCraftLogoPath from "@assets/timbercraft_1753210776113.png";
import biorevLogoPath from "@assets/biorev-tech-logo_1753210761688.png";

// Main kitchen image for the Xdesign project
export const MAIN_KITCHEN_IMAGE = kitchenImagePath;

// Timber Craft branding
export const TIMBER_CRAFT_LOGO = timberCraftLogoPath;
export const BIOREV_LOGO = biorevLogoPath;

export const cabinetStyles: CabinetStyle[] = [
  {
    id: 'natural-wood',
    name: 'Natural Wood',
    description: 'Warm natural timber finish',
    color: '#D4B896'
  },
  {
    id: 'dark-stain',
    name: 'Dark Stain',
    description: 'Rich dark wood finish',
    color: '#8B4513'
  },
  {
    id: 'white-painted',
    name: 'White Painted',
    description: 'Clean white finish',
    color: '#FFFFFF'
  },
  {
    id: 'charcoal',
    name: 'Charcoal',
    description: 'Modern charcoal finish',
    color: '#36454F'
  }
];

export const backsplashOptions: BacksplashOption[] = [
  {
    id: 'white-subway',
    name: 'White Subway Tile',
    pattern: 'subway',
    color: '#FFFFFF'
  },
  {
    id: 'natural-stone',
    name: 'Natural Stone',
    pattern: 'natural',
    color: '#F5F5DC'
  },
  {
    id: 'dark-tile',
    name: 'Dark Tile',
    pattern: 'square',
    color: '#2F4F4F'
  },
  {
    id: 'glass-mosaic',
    name: 'Glass Mosaic',
    pattern: 'mosaic',
    color: '#E6E6FA'
  }
];

export const flooringOptions: FlooringOption[] = [
  {
    id: 'light-oak',
    name: 'Light Oak',
    description: 'Natural light wood finish',
    color: '#DEB887'
  },
  {
    id: 'dark-walnut',
    name: 'Dark Walnut',
    description: 'Rich dark wood finish',
    color: '#654321'
  },
  {
    id: 'light-tile',
    name: 'Light Stone Tile',
    description: 'Modern light stone',
    color: '#F5F5F5'
  },
  {
    id: 'dark-tile',
    name: 'Dark Stone Tile',
    description: 'Elegant dark stone',
    color: '#696969'
  }
];

export const presetColors = [
  '#ffffff', // Pure White
  '#f8f9fa', // Off White
  '#f5f5dc', // Beige
  '#e6f3ff', // Light Blue
  '#f0f8e8', // Light Green
  '#fff5f0', // Warm White
  '#f5f0ff', // Light Purple
  '#ffeaa7'  // Light Yellow
];
