import * as yup from 'yup';

export const itemSchema = yup.object().shape({
    title: yup
        .string()
        .required("Title is a required field")
        .min(3, "Title must be at least 3 characters")
        .max(12, "The name must be no more than 12 characters"),
    task: yup
        .string()
        .required("Task is a required field")
        .min(3, "Task must be at least 3 characters"),
    status: yup
        .string()  // Применено к полю status, так как оно, вероятно, также является строкой
        .required("Status is a required field")
});
