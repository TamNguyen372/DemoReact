import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Tin from './Hien1tin';
import reportWebVitals from './reportWebVitals';

class Tacgia extends React.Component {
        render() {
            return <div > Phat trien boi Nguyen tuong Tam < /div>
        }
    }
    //Vi du
const Hienngay = () => {
    const d = new Date();
    let ngay = d.getDate();
    let thang = d.getMonth() + 1;
    let nam = d.getFullYear();
    return "Hom nay la: " + ngay + "/" + thang + "/" + nam;
}
ReactDOM.render( < Tin / > , document.getElementById('root'));
ReactDOM.render( < Hienngay / > , document.getElementById('root'));
ReactDOM.render( <
    React.StrictMode >
    <
    App / >
    <
    Tacgia / >
    <
    /React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();