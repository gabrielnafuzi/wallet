import * as yup from 'yup'

export const addTokenSchema = yup.object().shape({
  token: yup.string().required('Token is required'),
  balance: yup.string().required('Balance is required'),
})
