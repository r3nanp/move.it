import { getStorageItem, setStorageItem } from '.'

describe('getStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  it('should return the item from localStorage', () => {
    window.localStorage.setItem('@MoveIt-level', JSON.stringify('2'))

    expect(getStorageItem('level')).toStrictEqual('2')
  })
})

describe('setStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  it('should add the item to localStorage', () => {
    setStorageItem('level', '1')

    expect(window.localStorage.getItem('@MoveIt-level')).toStrictEqual(
      JSON.stringify('1')
    )
  })
})
