import NotFound from 'pages/NotFound';
import renderer from 'react-test-renderer';
import { withRouter } from 'tests/utils';
import { Route } from 'react-router-dom';

describe('NotFound', () => {
    it('renders correctly', () => {
        const tree = renderer.create(withRouter(<Route path='/' element={<NotFound />} />)).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
