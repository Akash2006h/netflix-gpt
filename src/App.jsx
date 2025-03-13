import Body from './Components/Body.jsx';
import { Provider } from "react-redux";
import appStore from "../src/utils/appStore.js";
function App() {
  return (
    <div>

     <Provider store = {appStore}>
        <Body />
    </Provider>
    </div>
  )
}
export default App
