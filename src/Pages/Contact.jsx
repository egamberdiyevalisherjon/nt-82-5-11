import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "Eshmat",
      subject: "test",
      email: "eshmat@gmail.com",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "phones",
  });

  console.log(errors);

  function handleFormSubmit(data) {
    console.log(data);
  }

  return (
    <div>
      {JSON.stringify(getValues())}
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <button type="button" onClick={() => append({ value: "" })}>
          add
        </button>
        <div>
          {fields.map((f, index) => (
            <input key={f.id} {...register(`test.${index}.value`)} />
          ))}
        </div>
        <input
          className={!!errors.name?.message ? "text-danger" : "text-info"}
          type="text"
          {...register("name", {
            required: "Bu maydon majburiy",
            minLength: {
              value: 12,
              message: "Kamida 12ta belgidan foydalanishingiz kerak",
            },
          })}
        />
        <p className="text-danger">{errors.name?.message}</p>
        <br />
        <br />
        <input type="text" {...register("subject")} />
        <p></p>
        <br />
        <br />
        <input type="email" {...register("email")} />
        <p></p>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
