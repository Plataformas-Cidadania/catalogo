const HomeContext = React.createContext({});

const HomeProvider = ({
  children
}) => {
  const {
    useState
  } = React;
  const [showMenuDiagnostico, setShowMenuDiagnostico] = useState(false);
  return /*#__PURE__*/React.createElement(HomeContext.Provider, {
    value: {
      showMenuDiagnostico,
      setShowMenuDiagnostico
    }
  }, children);
};