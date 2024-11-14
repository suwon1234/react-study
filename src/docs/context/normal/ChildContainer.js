import React from 'react';
import FontSizeComponent from './FontSizeComponent';
import { FontSizeConsumer } from './FontContext';


const ChildContainer = () => {
  return (
    <div>
      <FontSizeComponent />

      <FontSizeConsumer>
        {(context) => (
            <>
              <p style={{fontSize : context.state.fontSize }}>중간 ChildContainer입니다!🤔</p>
              <button onClick={() => { context.action.setFontSize("5rem") }}>커져라!😆</button>
            </>
        )}
      </FontSizeConsumer>
    </div>
  );
};

export default ChildContainer;