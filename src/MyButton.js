import {memo} from 'react';

export default memo(function /*MyButton*/(props) {
    console.log('rendering MyButton');
    const startTime = new Date();
    while (new Date() - startTime < 100) {};

    return (
        <>
        <button {...props} style={{color: 'red'}} /> 
        </>
    );
})