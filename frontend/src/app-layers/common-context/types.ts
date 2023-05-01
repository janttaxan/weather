export interface CommonContext {
  user: null;
}

export interface CommonContextType {
  context: CommonContext;
  setContext: (context: CommonContext) => void;
}
