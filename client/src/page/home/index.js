import React, {useEffect, useMemo} from 'react';
import PageLayout from '../../components/page-layout';
import CreateItem from '../../containers/home/create-item';
import EditeItem from '../../containers/home/edite-item';
import TodoList from '../../containers/home/todo-list';
import Head from '../../components/head';
import { useDispatch } from 'react-redux';
import { fetchTodo } from '../../store/home/actions';

const Home = () => {

const dispatch = useDispatch()

useEffect(()=>{
dispatch(fetchTodo())
},[])
    const options = useMemo(() => [
        { value: "done", title: "done" },
        { value: "in progress", title: "in progress" },
        { value: "awaits execution", title: "awaits execution" },
    ])
    return (
        <div>
            <PageLayout>
                <Head title="Todo List"/>
                <CreateItem options={options}/>
                <TodoList/>
                <EditeItem options={options}/>
            </PageLayout>
           
        </div>
    );
}

export default Home;