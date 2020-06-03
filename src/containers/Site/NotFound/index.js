import React from 'react';
import Type from 'prop-types';
import { Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import UseIntl from '../../../core/connectors/intl';

function NotFound({ tr }) {
  return (
    <Route
      render={(props) => {
        const { staticContext } = props;
        if (staticContext) staticContext.status = '404';
        return (
          <>
            <Helmet title={tr('pageNotFound.title')}/>
            <section className="section">
              Page not found
            </section>
          </>
        );
      }}
    />
  );
}

NotFound.propTypes = {
  tr: Type.func.isRequired,
};

export default UseIntl(NotFound);
