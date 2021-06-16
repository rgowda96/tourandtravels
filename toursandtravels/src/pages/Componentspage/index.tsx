import './index.scss'
import SelectionBox from '../../components/SelectionBox';
import Table from '../../components/Table';
import audi from '../../assets/charm.jpg';
import ambani from '../../assets/charm.jpg';
import React from 'react';
import Radio, { RadioProps } from '@material-ui/core/Radio';

//import CustomButton from '../../components/CustomButton';
import DropDownBox from '../../components/DropDownBox';
import DropDownMenu from '../../components/DropDownMenu';
const tempMiniBoxList = [
    {
        header: 'Binary',
        description: 'The Binary Classifier does pudding candy canes sesame snaps cupcake sesame snaps cupcake'
    },
    {
        header: 'Region of Interest',
        description: 'The Binary Classifier does pudding candy canes sesame snaps cupcake sesame snaps cupcake'
    },
    {
        header: 'Multi ',
        description: 'The Binary Classifier does pudding candy canes sesame snaps cupcake sesame snaps cupcake'
    },
    {
        header: ' Label',
        description: 'The Binary Classifier does pudding candy canes sesame snaps cupcake sesame snaps cupcake'
    },
    {
        header: 'Multi Label',
        description: 'The Binary Classifier does pudding candy canes sesame snaps cupcake sesame snaps cupcake'
    },
    {
        header: 'Multi Label',
        description: 'The Binary Classifier does pudding candy canes sesame snaps cupcake sesame snaps cupcake'
    },

]

const tempTableList = [
    {
        itemImg: audi,
        itemName: 'Audi',
        founderImg: ambani,
        founderName: 'Ambani',
        price: 30,
        date: '21-12-1996'
    },
    {
        itemImg: audi,
        itemName: 'Mercedes Benz',
        founderImg: ambani,
        founderName: 'Ambani mumbaikar',
        price: 10,
        date: '21-12-1997'
    },
    {
        itemImg: audi,
        itemName: 'Robo classic',
        founderImg: ambani,
        founderName: 'George kutty',
        price: 90,
        date: '21-12-1996'

    },
    {
        itemImg: audi,
        itemName: 'Audisada langia',
        founderImg: ambani,
        founderName: 'Andrew Matthew',
        price: 90,
        date: '21-12-1996'

    },


]




const tempTableList1 = [
    {
        itemImg: <div className='testimg'><img src={audi} className='testimg1' />Audi</div>,
        founderImg: <div className='testimgg'><img src={audi} className='testimgg1' />Ambani</div>,
        price: 30,
        date: '21-12-1996'
    },
    {
        itemImg: <div className='testimg'><img src={audi} className='testimg1' />Mercedes Benz</div>,
        founderImg: <div className='testimgg'><img src={audi} className='testimgg1' />Ambani mumbaikar</div>,
        price: 10,
        date: '21-12-1997'
    },
    {
        itemImg: <div className='testimg'><img src={audi} className='testimg1' />Robo classic</div>,
        founderImg: <div className='testimgg'><img src={audi} className='testimgg1' />George kutty</div>,
        price: 90,
        date: '21-12-1996'

    },
    {
        itemImg: <div className='testimg'><img src={audi} className='testimg1' />Audisada langia</div>,
        founderImg: <div className='testimgg'><img src={audi} className='testimgg1' />Andrew Matthew</div>,
        price: 90,
        date: '21-12-1996'

    },


]


const tempDropDownMenuList = [
    {
        heading: 'Model 1',
        description: 'Description of the Model'
    },
    {
        heading: 'Model 2',
        description: 'Description of the Model'
    },
    {
        heading: 'Model 3',
        description: 'Description of the Model'
    },
    {
        heading: 'Model 4',
        description: 'Description of the Model'
    }
]
function Componentspage() {
    return (
        <div className='componentsPageWrapper'>
            <div className='selectionBoxWrapper'>
                <SelectionBox title='Select Algorithm' miniBoxList={tempMiniBoxList} defaultIndex={2} onClickBox={(minibox, i) => {
                    console.log(minibox, i);
                }} />
            </div>
            <div className='tableWrapper'>
                < Table tableList={tempTableList1} />
            </div>
            <div className='dropDownWrapper'>
                <DropDownBox header='Select Feature Extraction Type:' dropDownMenuList={tempDropDownMenuList} onClickMenuItem={(menuItem,i)=>{
                    console.log(menuItem,i)
                }} />
            </div>
            <div>
                {/* <Radio
                    checked={selectedValue === 'e'}
                    onChange={handleChange}
                    value="e"
                    color="default"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'E' }}
                    size="small"
      /> */}
      </div>
        </div>
    )
}

export default Componentspage
