import { Route, Routes } from 'react-router-dom';
import { AppRoute } from 'common/enums/enums';
import { PublicRoute } from 'components/common/common';
import { NotFound } from 'components/not-found/not-found';
import { Recipes } from 'components/recipes/recipes';

const App = () => {
  return (
    <div className="fill">
      <main className="fill">
        <Routes>
          <Route path={AppRoute.ROOT} element={<PublicRoute component={Recipes} />} />
          <Route path={AppRoute.ANY} element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export { App };
