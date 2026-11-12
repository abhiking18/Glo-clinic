import React, { createContext, useContext, useState, useEffect } from 'react';
import { ClinicInfo } from '../types/clinic';
import { DEFAULT_CLINIC_INFO } from '../data/clinicData';

interface ClinicContextType {
  clinicInfo: ClinicInfo;
  updateClinicInfo: (newInfo: Partial<ClinicInfo>) => void;
}

const STORAGE_KEY = 'glo_clinic_config_v1';

const ClinicContext = createContext<ClinicContextType | undefined>(undefined);

export const ClinicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [clinicInfo, setClinicInfo] = useState<ClinicInfo>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_CLINIC_INFO, ...JSON.parse(saved) };
      }
    } catch {
      // Fallback
    }
    return DEFAULT_CLINIC_INFO;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(clinicInfo));
    } catch {
      // Ignore
    }
  }, [clinicInfo]);

  const updateClinicInfo = (newInfo: Partial<ClinicInfo>) => {
    setClinicInfo((prev) => ({
      ...prev,
      ...newInfo,
      whatsappNumber: newInfo.whatsappNumber
        ? newInfo.whatsappNumber.replace(/[^0-9]/g, '')
        : prev.whatsappNumber,
    }));
  };

  return (
    <ClinicContext.Provider
      value={{
        clinicInfo,
        updateClinicInfo,
      }}
    >
      {children}
    </ClinicContext.Provider>
  );
};

export const useClinic = () => {
  const context = useContext(ClinicContext);
  if (!context) {
    throw new Error('useClinic must be used within a ClinicProvider');
  }
  return context;
};
