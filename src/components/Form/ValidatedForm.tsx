import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./ValidatedForm.scss";

const schema = yup.object({
  name: yup.string().required("Введите ваше имя"),
  email: yup.string().email("Некорректный email").required("Введите email"),
  phone: yup.string().required("Введите номер телефона"),
  date: yup.string().required("Выберите дату поездки"),
});

type FormData = yup.InferType<typeof schema>;

const ValidatedForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    alert(`Бронирование оформлено!\n\nИмя: ${data.name}\nEmail: ${data.email}\nТелефон: ${data.phone}\nДата: ${data.date}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="validated-form">
      <label>
        Ваше имя
        <input 
          type="text" 
          placeholder="Введите ваше полное имя"
          {...register("name")}
        />
        {errors.name && <span className="error">{errors.name.message}</span>}
      </label>

      <label>
        Email
        <input 
          type="email" 
          placeholder="example@email.com"
          {...register("email")}
        />
        {errors.email && <span className="error">{errors.email.message}</span>}
      </label>

      <label>
        Номер телефона
        <input 
          type="tel" 
          placeholder="+7 (999) 123-45-67"
          {...register("phone")}
        />
        {errors.phone && <span className="error">{errors.phone.message}</span>}
      </label>

      <label>
        Дата поездки
        <input 
          type="date" 
          {...register("date")}
        />
        {errors.date && <span className="error">{errors.date.message}</span>}
      </label>

      <button type="submit">
        Забронировать тур
      </button>
    </form>
  );
};

export default ValidatedForm; 