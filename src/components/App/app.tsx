import Main from '../../pages/MainPage/mainPage.tsx';

import {MainProps} from '../../pages/MainPage/mainProps.tsx';
function App(props : MainProps) {
  return (
    <Main {...props}/>
  );
}

export default App;
