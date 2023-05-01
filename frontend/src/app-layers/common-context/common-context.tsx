import { createContext, ReactElement, useState } from 'react';

import { CommonContextType, CommonPageContext } from 'app-layers/common-context/types';
import { Noop } from 'shared/lib';

export const CommonContext = createContext<CommonContextType>({
  context: null,
  setContext: Noop
});

interface CommonProviderProps {
  children: ReactElement;
}

export const CommonProvider = (props: CommonProviderProps) => {
  const [commonContext, changeCommonContext] = useState<Optional<CommonPageContext>>(null);

  return (
    <CommonContext.Provider value={{ context: commonContext, setContext: changeCommonContext }}>
      {props.children}
    </CommonContext.Provider>
  );
};
