import React, { useCallback, useMemo, memo } from 'react';
import List from '../../components/list';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveItemId, setData, setIsOpenModal } from '../../store/home/reducer';
import { deleteItem } from '../../store/home/actions';
import Spinner from '../../components/spinner';


const TodoList = () => {
    const dispatch = useDispatch();
    const { data: list, isLoading } = useSelector(state => state.home)
    const callbacks = {
        onStatus: useCallback((value) => dispatch(setData(list.map((item) => {
            if (item._id === value._id) {
                return { ...item, status: value.status }
            }
            return item
        }))), []),
        onDelete: useCallback((id) => {dispatch(deleteItem(id))}, [list]),
        onOpenModal: useCallback((id) => {
            dispatch(setActiveItemId(id))
            dispatch(setIsOpenModal(true))
        }, []),
    }


    return <Spinner active={isLoading}>
        <List
        list={list}
        onStatus={callbacks.onStatus}
        onDelete={callbacks.onDelete}
        onOpenModal={callbacks.onOpenModal}
        title="You don't have any tasks created yet"
    />
    </Spinner>
};

export default memo(TodoList);