import React from 'react'
import styled from 'styled-components'

export function Tile() {
    const TileDiv = styled.div<{ isDragging: Boolean }>`
      border: 2px solid #3eb0ef;
      border-radius: 10px/50%;
      color: rgba(255, 255, 255, 0.75);
      font-weight: bold;
      margin: 5px;
      padding: 10px;
      box-sizing: border-box;
      background: ${props => (props.isDragging ? '#3eb0ef' : 'transparent')};
    `;

    return (
        <TileDiv isDragging={false}>

        </TileDiv>
    )
}