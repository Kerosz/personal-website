import { isUndefined } from '@lib/utils/assertion';
import {
  FC,
  Dispatch,
  SetStateAction,
  useState,
  useContext,
  createContext,
} from 'react';

export interface AccordionContextProps {
  currentAccordionState: boolean;
  setCurrentAccordionState: Dispatch<SetStateAction<boolean>>;
}

const initialAccordionContext = ({
  currentAccordionState: false,
  setCurrentAccordionState: null,
} as unknown) as AccordionContextProps;

export const AccordionContext = createContext(initialAccordionContext);

const AccordionContextProvider: FC = (props) => {
  const [currentAccordionState, setCurrentAccordionState] = useState<boolean>(
    false
  );

  return (
    <AccordionContext.Provider
      value={{ currentAccordionState, setCurrentAccordionState }}
      {...props}
    />
  );
};

export const useAccordion = () => {
  const context = useContext(AccordionContext);

  if (isUndefined(context)) {
    throw new Error(`Context must be used within a 'AccordionContextProvider'`);
  }

  return context;
};

export default AccordionContextProvider;
