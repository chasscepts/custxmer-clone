import { MemoryRouter } from "react-router";
import PropTypes from 'prop-types';
import { paths } from "../utils";

const RouterWrapper = ({ children }) => (
  <MemoryRouter initialEntries={Object.values(paths)} initialIndex={0}>
    {children}
  </MemoryRouter>
);

RouterWrapper.propTypes = {
  children: PropTypes.node,
};

RouterWrapper.defaultProps = {
  children: null,
};

export default RouterWrapper;
