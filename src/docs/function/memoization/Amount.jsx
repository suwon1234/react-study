import React from 'react';

const Amount = ({
    divStyle,
    pStyle,
    buttonStyle,
    props,
    onClickToAddAmount,
    onClickToSubtractAmount,
    onClickToAddCoupon,
    onClickToSubtractCoupon
}) => {
    console.log("자식(amount) 랜더링")
    const {amount , coupon} = props
    return (
        <div style={divStyle}>
            <button style={buttonStyle} onClick={onClickToSubtractAmount}>-</button>
            <p style={pStyle}>수량 : {amount}</p>
            <button style={buttonStyle} onClick={onClickToAddAmount}>+</button>
            <button style={buttonStyle} onClick={onClickToSubtractCoupon}>-</button>
            <p style={pStyle}>수량 : {coupon}</p>
            <button style={buttonStyle} onClick={onClickToAddCoupon}>+</button>
        </div>
    );
};

export default Amount;