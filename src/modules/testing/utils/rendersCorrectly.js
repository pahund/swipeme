import renderer from 'react-test-renderer';

export default component => it('renders correctly', () =>
    expect(renderer.create(component).toJSON()).toMatchSnapshot()
);
