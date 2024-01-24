import React, {memo} from 'react';
import CreateIcon from '../icon/createIcon';
import { edit, trash } from '../../assets/icon-json';
import IconButton from '../iconButton';
import "./style.css";

const ListItem = ({ onStatus, item, onDelete, onOpenModal }) => {

    const callbacks = {
        onStatus: (value) => onStatus({ id: item._id, status: value }),
        onDelete: () => onDelete(item._id),
        onOpenModal: () => onOpenModal(item._id)
    }

    return (
        <li className='List-item'>
            <h3>{item.title}</h3>
            <p className='List-item__task'>{item.task}</p>
            <div className='List-item__block'>
            <p className='List-item__status'>{item.status}</p>
                <IconButton onClick={callbacks.onOpenModal}><CreateIcon icon={edit} /></IconButton>
                <IconButton onClick={callbacks.onDelete}><CreateIcon icon={trash} /></IconButton>
            </div>
        </li>
    );
};

export default memo(ListItem);