import PropTypes from 'prop-types';

export default function DefaultLayout({ children }) {
  return (
    <div className="layout-default">
      <main className="max-w-screen-2xl mx-auto w-full">{children}</main>
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
};
