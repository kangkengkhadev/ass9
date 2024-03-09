import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Page from '@/app/(hospitalinfo)/hospital/page'
import HospitalCatalog from '@/components/HospitalCatalog'

jest.mock('../src/components/HospitalCatalog')

describe('hospital page', () => {
  it('Page contains HospitalCatalog', () => {
    render(<Page/>)
    expect(HospitalCatalog).toHaveBeenCalledTimes(1)  
  })
})
