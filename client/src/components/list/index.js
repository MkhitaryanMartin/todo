import React from 'react';
import ListItem from '../list-item';
import "./style.css"

const List = ({ list, onStatus, onDelete, onOpenModal,title="" }) => {
    return (
        !list.length ? <h2 className='List__title'>{title}</h2> : <ul className='List'>
            {
                list && list.map((item) => {
                    return <ListItem
                        key={item._id}
                        item={item}
                        onStatus={onStatus}
                        onDelete={onDelete}
                        onOpenModal={onOpenModal}
                    />
                })
            }
        </ul>
    );
};

export default List;