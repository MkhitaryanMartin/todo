import React, { useCallback, useState, memo } from 'react';
import ModalLayout from '../../components/modal-layout';
import { useSelector, useDispatch } from 'react-redux';
import { setIsOpenModal } from '../../store/home/reducer';
import ItemForm from '../../components/item-form';
import { editItem } from '../../store/home/actions';

const EditeItem = ({ options }) => {
    const dispatch = useDispatch();
    const { data: list, isOpenModal, activeItemId } = useSelector(state => state.home)
    const [value, setValue] = useState("");

    const callbacks = {
        closeModal: useCallback(() => dispatch(setIsOpenModal(false)), []),
        onChange: useCallback((value) => setValue(value), []),
        onEdite: useCallback((value) => {
            dispatch(editItem({ id: activeItemId, item: value }))
            dispatch(setIsOpenModal(false))
            setValue("")
        }, [value, activeItemId]),

    }
    const activeItem = list.find(item => item._id === activeItemId);

    return (
        isOpenModal && <ModalLayout title="Edit" labelClose="X" onClose={callbacks.closeModal}>
            <ItemForm
                options={options}
                onSubmit={callbacks.onEdite}
                defaultValueTitle={activeItem?.title}
                defaultValueTask={activeItem?.task}
                buttonText="Edit"
            />
        </ModalLayout>
    );
};

export default memo(EditeItem);