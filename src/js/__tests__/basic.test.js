import ErrorRepository from "../app";

test('code true', () => {
    let map = new ErrorRepository('404', 'Not Found');
    const result = map.translate('404')
    expect(result).toEqual('Not Found');
});

test('code false', () => {
    let map = new ErrorRepository('404', 'Not Found');
    const result = map.translate('505');
    expect(result).toEqual('Unknown error');
});
