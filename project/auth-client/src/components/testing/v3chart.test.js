import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen} from '@testing-library/react'
import V3chart from '../V3chart'

describe("renders v3chart", () => {
    it("should render the chart", () => {
        render(<V3chart />)
        
    })
})