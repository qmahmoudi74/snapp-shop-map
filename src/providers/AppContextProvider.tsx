import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState
} from "react";
import { useMap } from "react-leaflet";

type Map = ReturnType<typeof useMap>;

interface States {
  map?: Map;
  setMap?: Dispatch<SetStateAction<Map | undefined>>;
}

const context = createContext<States>({});
const { Provider } = context;

const AppContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [map, setMap] = useState<Map>();

  return <Provider value={{ map, setMap }}>{children}</Provider>;
};

export const useAppContext = () => useContext(context);
export default AppContextProvider;
