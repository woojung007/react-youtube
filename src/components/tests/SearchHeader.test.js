import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Route } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { withRouter } from 'tests/utils';
import SearchHeader from '../SearchHeader';

/**
 * 테스트해야 하는 항목
 * 1. 로고와 검색창과 돋보기 아이콘 렌더링 (스냅샷 테스트)
 * 2. 검색 키워드가 제대로 보여지는지
 * 3. 검색 버튼 클릭 시 결과값대로 경로가 이동하는지
 * (4. 로고 눌러서 홈으로 이동하는지)
 *
 * 유저의 입장에서 테스트 항목을 작성.
 * 작은 테스트부터 테스트 범위를 점진적으로 넓혀가며 테스트 작성.
 * 1. ui render
 * 2. 입력값 테스트
 * 3. 입력값 + router 이동 테스트
 */

describe('SearchHeader', () => {
    it('renders correctly', () => {
        const component = renderer.create(withRouter(<Route path='/' element={<SearchHeader />} />));

        expect(component.toJSON()).toMatchSnapshot();
    });

    it('renders with keyword correctly', async () => {
        render(withRouter(<Route path='/:keyword' element={<SearchHeader />} />, '/potato'));
        expect(screen.getByDisplayValue('potato')).toBeInTheDocument();
    });

    it('navigates to results page on search button click', () => {
        const searchKeyword = 'fake-keyword';

        render(
            withRouter(
                <>
                    <Route path='/videos' element={<SearchHeader />} />
                    <Route path={`/videos/${searchKeyword}`} element={<p>{`Search result for ${searchKeyword}`}</p>} />
                </>,
                '/videos',
            ),
        );

        const searchButton = screen.getByRole('button');
        const searchInput = screen.getByRole('textbox');

        userEvent.type(searchInput, searchKeyword);
        userEvent.click(searchButton);

        expect(screen.getByText(`Search result for ${searchKeyword}`)).toBeInTheDocument();
    });

    it('navigates to home page when click logo', () => {
        function MainPage() {
            return <div>main</div>;
        }
        render(
            withRouter(
                <>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/videos' element={<SearchHeader />} />
                </>,
                '/videos',
            ),
        );

        const logo = screen.getByRole('heading');
        userEvent.click(logo);

        expect(screen.getByText('main')).toBeInTheDocument();
    });
});
