let yup = require('yup')
let { yupISODate } = require('../../util')

module.exports = yup.object().shape({
  id: yup.string(),

  username: yup.string()
    .required()
    .max(30)
    .default('')
    .trim(),

  password: yup.string()
    .when('$validatePassword', {
      is: true,
      then: yup.string().required().min(4).max(30)
    }),

  bio: yup.string()
    .max(100)
    .default('')
    .trim(),

  avatar: yup.string()
    .url()
    .default('')
    .trim(),

  createdAt: yupISODate(),
  updatedAt: yupISODate(),
})
  .noUnknown()