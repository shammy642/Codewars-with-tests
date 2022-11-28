const likes = require('./who_likes_it');


test('', () => {expect(likes([])).toBe('no one likes this');});

test('', () => {expect(likes(['Peter'])).toBe( 'Peter likes this');});

test('', () => {expect(likes(['Jacob', 'Alex'])).toBe('Jacob and Alex like this');});

test('', () => {expect(likes(['Max', 'John', 'Mark'])).toBe('Max, John and Mark like this');});

test('', () => {expect(likes(['Alex', 'Jacob', 'Mark', 'Max'])).toBe('Alex, Jacob and 2 others like this');});