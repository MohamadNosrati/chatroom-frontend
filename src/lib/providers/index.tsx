import HeroUiProvider from "./HeroUiProvider";
import TanstackProvider from "./ReactQueryProvider";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <TanstackProvider>
      <HeroUiProvider>{children}</HeroUiProvider>
    </TanstackProvider>
  );
};

export default Providers;
