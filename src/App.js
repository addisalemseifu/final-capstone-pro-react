import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getLocation } from './redux/location/locationSlice';
import DetailsPage from './components/DetailsPage';
import HomePage from './components/HomePage';

function App() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.location);
  useEffect(() => {
    dispatch(getLocation('London'));
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (!isLoading) {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="/backhome" element={<HomePage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
