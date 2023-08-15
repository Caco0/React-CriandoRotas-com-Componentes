import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

export const Abc = () => {
  const { slug, id } = useParams();
  const location = useLocation();
  const history = useHistory();

  console.log(location);
  console.log(history);

  useEffect(() => {
    setTimeout(function () {
      history.push('/');
    }, 5000);
  }, [history]);

  return (
    <div>
      <h1>
        ABC {slug} {id}
      </h1>
    </div>
  );
};
