import { useState, useEffect, useCallback } from 'react';
import { Shipment } from '../types';
import { generateMockShipments, updateShipmentRandomly } from '../utils/mockData';

export function useShipments(initialCount: number = 20) {
  const [shipments, setShipments] = useState<Shipment[]>(() => generateMockShipments(initialCount));
  const [isLoading, setIsLoading] = useState(false);

  const updateShipments = useCallback(() => {
    setShipments(currentShipments =>
      currentShipments.map(shipment => updateShipmentRandomly(shipment))
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(updateShipments, 5000);
    return () => clearInterval(interval);
  }, [updateShipments]);

  const addShipment = useCallback((shipment: Shipment) => {
    setShipments(current => [...current, shipment]);
  }, []);

  const removeShipment = useCallback((id: string) => {
    setShipments(current => current.filter(s => s.id !== id));
  }, []);

  return {
    shipments,
    isLoading,
    setIsLoading,
    addShipment,
    removeShipment,
  };
}