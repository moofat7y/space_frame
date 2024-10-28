"use client";
import React from "react";
import InputField from "../ui/InputField/InputField";
import { useTranslations } from "next-intl";
import TextArea from "../ui/TextArea";
import Button from "../ui/Button";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();
  const t = useTranslations("Index");

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-6">
      <InputField
        register={register("name", { required: true })}
        placeholder={t("contact.name")}
        className={"py-3"}
      />
      <InputField
        register={register("email", { required: true })}
        placeholder={t("contact.email")}
        className={"py-3"}
      />
      <InputField
        register={register("subject", { required: true })}
        placeholder={t("contact.subject")}
        className={"py-3"}
      />
      <TextArea
        register={register("message", { required: true })}
        placeholder={t("contact.message")}
        className={"py-3"}
        rows={4}
      />

      <Button
        disabled={!isValid}
        color={"secondary-500"}
        variant={"contained"}
        className={"px-8 py-2.5 rounded-none !mt-10"}
      >
        {t("contact.sendMessage")}
      </Button>
    </form>
  );
}
