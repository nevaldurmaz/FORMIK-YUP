import * as yup from "yup";

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{5,}$/;

const schema = yup.object().shape({
  email: yup
    .string()
    .email("email formatı geçersiz")
    .required("email alanı zorunludur"),

  age: yup
    .number()
    .min(18, "yaş en az 18 olmalı")
    .max(100, "yaş fazla 100 olabilir")
    .integer("yaş sadece tam sayı olabilir")
    .required("yaş alanı zorunludur"),

  password: yup
    .string()
    .min(5, "şifre en az 5 karakter olmalı")
    .matches(regex, "şifre yeterince güçlü değil")
    .required("şifre alanı zorunludur"),

  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "şifre onay alanı eşleşmiyor")
    .required("lütfen şifenizi doğrulayın"),
});

export default schema;
