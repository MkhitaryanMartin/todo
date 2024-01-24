import React, {useCallback, memo, useMemo} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { setData } from '../../store/home/reducer';
import ItemForm from '../../components/item-form';
import { createItem } from '../../store/home/actions';

const CreateItem = ({options}) => {
const list = useSelector(state=> state.home.data)
const dispatch = useDispatch()
const callbacks = {
    onSubmit: useCallback((data) => {
        dispatch(createItem(data))
    }, [list])
}
    return <ItemForm onSubmit={callbacks.onSubmit} options={options} title='Create a task'/>;
    
};

export default memo(CreateItem);