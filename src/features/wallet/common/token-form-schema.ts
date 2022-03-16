import * as yup from 'yup'

export const tokenFormSchema = yup.object().shape({
  name: yup
    .string()
    .required('token is required')
    .typeError('name must be a string'),
  balance: yup
    .number()
    .required('balance is required')
    .typeError('balance must be a number'),
})
