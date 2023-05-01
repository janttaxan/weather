export interface CommonPageContext {
  user: null;
}

export interface CommonContextType {
  context: Optional<CommonPageContext>;
  setContext: (context: CommonPageContext) => void;
}
