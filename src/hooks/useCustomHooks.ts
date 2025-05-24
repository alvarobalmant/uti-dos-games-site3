import { useState, useEffect } from 'react';

// Hook personalizado para detectar o tamanho da tela e determinar se é mobile
export const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };
    
    // Verificar inicialmente
    checkIsMobile();
    
    // Adicionar listener para redimensionamento
    window.addEventListener('resize', checkIsMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, [breakpoint]);
  
  return isMobile;
};

// Hook para gerenciar o estado de um modal
export const useModal = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const toggleModal = () => setIsOpen(!isOpen);
  
  return { isOpen, openModal, closeModal, toggleModal };
};

// Hook para gerenciar o estado de um toast/notificação
export const useToast = (duration = 3000) => {
  const [toast, setToast] = useState({ visible: false, message: '', type: 'info' });
  
  const showToast = (message, type = 'info') => {
    setToast({ visible: true, message, type });
    
    setTimeout(() => {
      setToast(prev => ({ ...prev, visible: false }));
    }, duration);
  };
  
  return { toast, showToast };
};

// Hook para gerenciar o estado de um formulário
export const useForm = (initialValues = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };
  
  const reset = () => {
    setValues(initialValues);
    setErrors({});
  };
  
  return { values, errors, setErrors, handleChange, reset, setValues };
};

// Hook para gerenciar o estado de um tema (claro/escuro)
export const useTheme = (initialTheme = 'dark') => {
  const [theme, setTheme] = useState(initialTheme);
  
  useEffect(() => {
    // Aplicar classe ao body
    document.body.className = theme;
  }, [theme]);
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };
  
  return { theme, setTheme, toggleTheme };
};

// Hook para gerenciar o estado de um localStorage
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });
  
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };
  
  return [storedValue, setValue];
};
