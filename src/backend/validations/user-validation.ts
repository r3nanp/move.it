import * as yup from 'yup'

export const schema = yup.object().shape({
  level: yup
    .number()
    .positive('Level must be greater than 0')
    .required('level is required'),
  currentExperience: yup
    .number()
    .positive('currentExperience must be greater than 0')
    .required('currentExperience is required'),
  challengesCompleted: yup
    .number()
    .positive('challengesCompleted must be greater than 0')
    .required('challengesCompleted is required'),
  accessToken: yup.string().required('access token is required'),
  amount: yup.number().positive().required('amount is required')
})
