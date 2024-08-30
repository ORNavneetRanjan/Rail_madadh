import { useContext } from "react";
import { AlertContext, UserContext } from "./Context";

function withProvider(provider) {
  function MyHOC(IncomingComponent) {
    function OutgoingComponent(props) {
      const contextData = useContext(provider);
      return <IncomingComponent {...props} {...contextData} />;
    }
    return OutgoingComponent;
  }
  return MyHOC;
}

export default withProvider;

export const withUser = withProvider(UserContext);
export const withAlert = withProvider(AlertContext);
