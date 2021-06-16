import './index.scss';
import { ITableList } from './Interfaces';
import { useState } from 'react'
import tick from '../../assets/tick.png'

interface ITableProps {
    tableList: ITableList[];
    defaultBox?: number;
    onClickBox?: (tableItem: ITableList, i: number) => void;
}

function Table(props: ITableProps) {

    const [userSelectedIndex, setUserSelectedIndex] = useState<number>(props.defaultBox || -1)

    const getRowClassName = (index: number) => {
        if (index == userSelectedIndex) {
            return "tableWrapper__row tableWrapper__row--active";

        }
        return "tableWrapper__row";
    }


    const getTickElement = (index: number) => {
        if (index == userSelectedIndex) {
            return <div className='tableWrapper__row--active__tick'><img src={tick} className='tick' /></div>;

        }
        return "";
    }

    return (
        <div>
            <div className="tableWrapper">
                {
                    props.tableList.map((tableItem, i) => {
                        return (
                            <div className={getRowClassName(i)} onClick={() => {
                                setUserSelectedIndex(i);
                                props.onClickBox && props.onClickBox(tableItem, i);
                            }}>
                                {
                                    Object.keys(tableItem).map((field) => {
                                        return (
                                            <div className='tablewriter__row__item tableColumn'>{tableItem[field]} </div>
                                        )
                                    })
                                }  
                                    {getTickElement(i)}
                        
                                {/* <div className='tableWrapper__row__itemwrapper tableColumn'>
                                    <img src={tableItem.itemImg} className="tableWrapper__row__itemwrapper__itemImg" />
                                    <div className="tableWrapper__row__itemwrapper__itemName">{tableItem.itemName}</div>
                                </div>
                                <div className='tableWrapper__row__founderwrapper tableColumn'>
                                    <img src={tableItem.founderImg} className='tableWrapper__row__founderwrapper__founderImg' />
                                    <div className="tableWrapper__row__founderName">{tableItem.founderName}</div>
                                </div>
                                <div className='tablewriter__row__price tableColumn'>{tableItem.price} </div>
                                <div className='tablewriter__row__date tableColumn'>{tableItem.date}</div> */}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}


export default Table
