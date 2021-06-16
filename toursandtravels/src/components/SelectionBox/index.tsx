import React, { useState } from 'react'
import './index.scss';
import { IMiniBoxList } from './Interfaces';

interface ISelectionBoxProps {
    miniBoxList: IMiniBoxList[];
    title?: string;
    defaultIndex?: number;
    onClickBox?: (minibox:IMiniBoxList,i:number) => void;

}

function SelectionBox(props: ISelectionBoxProps ) {


    const [userSelectedIndex, setUserSelectedIndex] = useState<number>(props.defaultIndex || -1 )

    const getMiniBoxClassName =  (index:number) => {
        if (index == userSelectedIndex){
            return "selectionboxcontainer__minibox selectionboxcontainer__minibox--active";
        }
        return "selectionboxcontainer__minibox";
    }

    return (
        <div>
            <div className='selectionboxheader'>{props.title}</div>
            <div className="selectionboxcontainer">
                {
                    props.miniBoxList.map((minibox,i) => {
                        return(
                            <div className= {getMiniBoxClassName(i)} onClick = {() => {
                                setUserSelectedIndex(i);
                                props.onClickBox && props.onClickBox(minibox,i);

                            }}>
                                <div className="selectionboxcontainer__minibox__header">{minibox.header}</div>
                                <div className="selectionboxcontainer__minibox__text">{minibox.description}</div>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default SelectionBox
