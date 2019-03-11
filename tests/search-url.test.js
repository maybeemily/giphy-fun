const test = QUnit.test;

test('url includes encoded search term from search box', assert => {
    //arrange
    const searchTerm = {
        term: 'pizza cat'
    };
    //act
    const url = makeSearchURL(searchTerm);
    //assert
    assert.equal(url, `http://api.giphy.com/v1/gifs/search?q=pizza+cat&api_key=04JYUtl012K7M66v68lBD84XX77aXd1g`);
});