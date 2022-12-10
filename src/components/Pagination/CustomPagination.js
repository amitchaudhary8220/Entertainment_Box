import { ThemeProvider } from '@emotion/react';

import { createTheme, Pagination } from '@mui/material'
import React from 'react'
const darkTheme = createTheme({
    
    palette: { type:'dark' },
});
function CustomPagination({setPage,numOfPages=10}) {
    const handlePageChange = (page) => {
        setPage(page);
        window.scroll(0, 0);
    
}
    return (
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
            
        }} >
            <ThemeProvider theme={darkTheme}>
                <Pagination 
                    style={{ backgroundColor:'white', }}
                    count={numOfPages} onClick={(e) => handlePageChange(e.target.textContent)}
                   
                    color='primary'
                    hidePrevButton
                    hideNextButton
                />
    </ThemeProvider> 
    
    </div>
  )
}

export default CustomPagination
