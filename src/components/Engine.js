import React, { Component } from "react";
import styled from 'styled-components';

const Wrapper = styled.section`
padding: 1em;
background: silver;
border: solid;
border-radius: 8px; 
border-color: black;
text-align: center;
`;

export default class Engine extends Component {
    state = {
        number: [],
    };

saveInput = (e) => {
        this.setState({ input: e.target.value });
        console.log(e.target.value)
        
        isNarcissistic(e.target.value);
        
        function isNarcissistic(number) {
            let x = parseInt(number, 10)

            const exp = Math.floor(Math.log10(x) + 1);
            let sum = 0;
  
            for (let i = 0; i < exp; i++) {
                let digit = Math.floor(x / Math.pow(10, i)) % 10;
                sum += Math.pow(digit, exp);
            }
            console.log("The narc sum is: " + sum)
            if (sum === x) {
                console.log('This is a Narc Number')
                    return 0
            
            } else {
                    console.log('This is not a Narc Number')
                    return 1
            }

        };
    };

    addNewItem = () => {
        let { number, input } = this.state;
        number.push(input);
        this.setState({ number: number });
       
      };

    render() {
        return (
            <Wrapper>
                <input
                    type="text"
                    onChange={ this.saveInput }
                />
                <button onClick={
                    this.addNewItem
                }> Check Number
                </button>
                <ol>
                    { this.state.number.map((subItems, sIndex) => {
                        console.log({ subItems })
                        return <li key={ sIndex }> { subItems }</li>
                    })}
                </ol>
                <ol>
                </ol>
                </Wrapper>
        );
    }    
}


