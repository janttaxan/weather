import { createContext, ReactElement, useState } from 'react';

import { Noop } from 'shared/lib';

interface CommonContextType {
  context: {} | null;
  setContext: (context: {}) => void;
}

export const CommonContext = createContext<CommonContextType>({
  context: null,
  setContext: Noop
});

interface CommonProviderProps {
  children: ReactElement;
}

export const CommonProvider = (props: CommonProviderProps) => {
  const [commonContext, changeCommonContext] = useState(null);

  return (
    <CommonContext.Provider value={{ context: commonContext, setContext: changeCommonContext }}>
      {props.children}
    </CommonContext.Provider>
  );
};
