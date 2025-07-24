import { useFormik } from "formik";
import schema from "../schema";
import InputField from "../InputField";
import { inputs } from "../constants";

const First = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      passwordConfirm: "",
    },

    validationSchema: schema,

    onSubmit: async (values) => {
      await new Promise((resolve, reject) => {
        setTimeout(resolve, 3000);
      });

      alert(JSON.stringify(values));
    },
  });

  return (
    <div className="vh-100 vw-100">
      <div className="container p-5">
        <h2 className="text-center">FORMIK & YUP</h2>

        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column gap-4 mt-5"
        >
          {inputs.map((props, key) => (
            <InputField key={key} formik={formik} {...props} />
          ))}

          <button type="submit" className="my-5" disabled={formik.isSubmitting}>
            {formik.isSubmitting ? "Yükleniyor" : "Gönder"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default First;
