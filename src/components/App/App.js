import 'regenerator-runtime/runtime';
import { API_URL, URL_COMICS } from '../../const/api';
import getDataApi from '../../utils/getDataApi';
import './App.css';

const App = async () => {
  const data = await getDataApi(API_URL + URL_COMICS);
  console.log(data);
};

export default App;
